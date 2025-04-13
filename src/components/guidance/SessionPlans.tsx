
import React, { useState } from "react";
import { Search, Calendar, Users, Download, Filter, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GuidanceSession, FrequencyType, GroupSize, ResourceType } from "./types";
import { sessionData } from "./data";

const SessionPlans = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterFrequency, setFilterFrequency] = useState<string>("all");
  const [filterPhase, setFilterPhase] = useState<string>("all");
  const [filterGroupSize, setFilterGroupSize] = useState<string>("all");
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleDownload = (resourceId: string, resourceName: string) => {
    toast({
      title: "Resource Ready",
      description: `${resourceName} has been prepared for download.`,
    });
  };

  // Filter sessions based on search and filters
  const filteredSessions = sessionData.filter(session => {
    const matchesSearch = 
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      session.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesFrequency = filterFrequency === "all" || session.frequency === filterFrequency;
    const matchesPhase = filterPhase === "all" || session.phase === filterPhase;
    const matchesGroupSize = filterGroupSize === "all" || session.groupSize === filterGroupSize;
    
    return matchesSearch && matchesFrequency && matchesPhase && matchesGroupSize;
  });

  const toggleSessionDetails = (sessionId: string) => {
    if (expandedDetails === sessionId) {
      setExpandedDetails(null);
    } else {
      setExpandedDetails(sessionId);
    }
  };

  // Helper to get phase display name
  const getPhaseDisplayName = (phase: string) => {
    switch (phase) {
      case "assessment": return "Assessment";
      case "exploration": return "Exploration";
      case "development": return "Development";
      case "implementation": return "Implementation";
      case "refinement": return "Refinement";
      default: return phase;
    }
  };

  // Helper to get frequency display name
  const getFrequencyDisplayName = (frequency: string) => {
    switch (frequency) {
      case FrequencyType.WEEKLY: return "Weekly";
      case FrequencyType.BIWEEKLY: return "Biweekly";
      case FrequencyType.MONTHLY: return "Monthly";
      default: return frequency;
    }
  };

  // Helper to get group size display name
  const getGroupSizeDisplayName = (size: string) => {
    switch (size) {
      case GroupSize.SMALL: return "Small Groups (3-6)";
      case GroupSize.MEDIUM: return "Medium Groups (7-15)";
      case GroupSize.LARGE: return "Large Groups (15+)";
      default: return size;
    }
  };

  // Helper to get color for phase
  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "assessment": return "bg-blue-100 text-blue-800";
      case "exploration": return "bg-purple-100 text-purple-800";
      case "development": return "bg-green-100 text-green-800";
      case "implementation": return "bg-amber-100 text-amber-800";
      case "refinement": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search session plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          <Select value={filterPhase} onValueChange={setFilterPhase}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by Phase" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Phases</SelectItem>
              <SelectItem value="assessment">Assessment</SelectItem>
              <SelectItem value="exploration">Exploration</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="implementation">Implementation</SelectItem>
              <SelectItem value="refinement">Refinement</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterFrequency} onValueChange={setFilterFrequency}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by Frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frequencies</SelectItem>
              <SelectItem value={FrequencyType.WEEKLY}>Weekly</SelectItem>
              <SelectItem value={FrequencyType.BIWEEKLY}>Biweekly</SelectItem>
              <SelectItem value={FrequencyType.MONTHLY}>Monthly</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterGroupSize} onValueChange={setFilterGroupSize}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by Group Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Group Sizes</SelectItem>
              <SelectItem value={GroupSize.SMALL}>Small Groups (3-6)</SelectItem>
              <SelectItem value={GroupSize.MEDIUM}>Medium Groups (7-15)</SelectItem>
              <SelectItem value={GroupSize.LARGE}>Large Groups (15+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredSessions.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-2">No matching sessions found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{session.title}</h3>
                    <p className="text-gray-600 mt-1">{session.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock size={14} />
                      {session.duration} min
                    </Badge>
                    <Badge className={getPhaseColor(session.phase)}>
                      {getPhaseDisplayName(session.phase)}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar size={14} />
                      {getFrequencyDisplayName(session.frequency)}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users size={14} />
                      {getGroupSizeDisplayName(session.groupSize)}
                    </Badge>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="objectives">
                    <AccordionTrigger className="text-sm font-medium">
                      Session Objectives
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1">
                        {session.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                            <span className="text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="structure">
                    <AccordionTrigger className="text-sm font-medium">
                      Session Structure
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {session.structure.map((item, idx) => (
                          <div key={idx} className="border-l-2 border-gray-200 pl-4">
                            <p className="font-medium text-sm flex justify-between">
                              {item.activity}
                              <span className="text-gray-500">{item.timeAllocation} min</span>
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <div className="mt-1">
                              <span className="text-xs text-gray-500">Materials:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.materials.map((material, midx) => (
                                  <Badge key={midx} variant="outline" className="text-xs">
                                    {material}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="adaptations">
                    <AccordionTrigger className="text-sm font-medium">
                      Adaptations for Different Contexts
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {session.adaptations.map((adaptation, idx) => (
                          <div key={idx}>
                            <p className="text-sm font-medium">{adaptation.scenario}</p>
                            <p className="text-sm text-gray-600">{adaptation.adjustment}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="resources">
                    <AccordionTrigger className="text-sm font-medium">
                      Session Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2">
                        {session.resources.map((resource) => (
                          <div key={resource.id} className="flex items-center justify-between py-2 border-b last:border-0">
                            <div>
                              <p className="text-sm font-medium">{resource.title}</p>
                              <p className="text-xs text-gray-600">{resource.description}</p>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDownload(resource.id, resource.title)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {session.notes && (
                <div className="bg-amber-50 p-4 border-t border-amber-100">
                  <p className="text-sm text-amber-800">
                    <span className="font-medium">Facilitator Note:</span> {session.notes}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionPlans;

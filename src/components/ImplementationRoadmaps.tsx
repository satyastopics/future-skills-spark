
import { useState } from "react";
import { ChevronRight, ChevronDown, Download, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Session {
  title: string;
  description: string;
  duration: string;
  materials: string[];
}

interface SkillRoadmap {
  id: string;
  title: string;
  description: string;
  duration: string;
  suitable: string[];
  difficulty: "basic" | "intermediate" | "advanced";
  sessions: Session[];
}

const skillRoadmaps: SkillRoadmap[] = [
  {
    id: "communication",
    title: "Effective Communication Skills",
    description: "A comprehensive program for developing verbal, written, and non-verbal communication skills applicable across various professional contexts.",
    duration: "8 weeks (1 session per week)",
    suitable: ["Grades 9-12", "School Leavers", "Adult Learners"],
    difficulty: "basic",
    sessions: [
      {
        title: "Session 1: Communication Fundamentals",
        description: "Introduction to communication models and identifying personal communication styles.",
        duration: "2 hours",
        materials: ["Communication styles worksheet", "Role-play scenario cards", "Feedback forms"]
      },
      {
        title: "Session 2: Active Listening",
        description: "Techniques for developing active listening skills and overcoming listening barriers.",
        duration: "2 hours",
        materials: ["Listening barrier cards", "Practice dialogue scripts", "Self-assessment form"]
      },
      {
        title: "Session 3: Verbal Communication",
        description: "Voice modulation, articulation, and structuring verbal messages effectively.",
        duration: "2.5 hours",
        materials: ["Voice projection exercises", "Speech structure templates", "Practice topics"]
      },
      {
        title: "Session 4: Non-verbal Communication",
        description: "Understanding body language, facial expressions, and physical presence.",
        duration: "2 hours", 
        materials: ["Body language interpretation guide", "Observation worksheets", "Practice scenarios"]
      },
      {
        title: "Session 5: Written Communication",
        description: "Basic principles of clear and effective writing for professional contexts.",
        duration: "2.5 hours",
        materials: ["Writing style guide", "Template documents", "Editing checklist"]
      },
      {
        title: "Session 6: Public Speaking",
        description: "Fundamentals of preparing and delivering speeches and presentations.",
        duration: "3 hours",
        materials: ["Speech planning worksheet", "Evaluation forms", "Topic cards"]
      },
      {
        title: "Session 7: Difficult Conversations",
        description: "Techniques for handling conflicts, giving feedback, and negotiation basics.",
        duration: "2.5 hours",
        materials: ["Conflict resolution framework", "Feedback structure templates", "Practice scenarios"]
      },
      {
        title: "Session 8: Digital Communication",
        description: "Principles for effective email, messaging and virtual meeting communication.",
        duration: "2 hours",
        materials: ["Digital communication guidelines", "Email templates", "Case studies"]
      }
    ]
  },
  {
    id: "tech-literacy",
    title: "Tech Literacy Foundations",
    description: "A step-by-step program to build fundamental tech understanding and basic digital skills even with minimal technology access.",
    duration: "6 weeks (1-2 sessions per week)",
    suitable: ["Grades 8-12", "School Leavers", "Adult Learners with no tech background"],
    difficulty: "basic",
    sessions: [
      {
        title: "Session 1: Technology Concepts",
        description: "Understanding basic computing concepts, terminology, and the internet.",
        duration: "2 hours",
        materials: ["Technology concept cards", "Visual computing guide", "Concept mapping worksheet"]
      },
      {
        title: "Session 2: Digital Information Basics",
        description: "Understanding files, folders, storage, and basic organization concepts.",
        duration: "2 hours",
        materials: ["File organization diagrams", "Paper-based practice exercises", "File type reference"]
      },
      {
        title: "Session 3: Internet & Search Skills",
        description: "Understanding how search engines work and developing effective search strategies.",
        duration: "2 hours", 
        materials: ["Search strategy worksheet", "Information evaluation guide", "Practice questions"]
      },
      {
        title: "Session 4: Digital Safety & Privacy",
        description: "Essential digital safety practices, password management, and privacy concepts.",
        duration: "2 hours",
        materials: ["Security concept cards", "Password creation guide", "Case study examples"]
      },
      {
        title: "Session 5: Basic Productivity Tools",
        description: "Understanding document creation, spreadsheets and presentation concepts.",
        duration: "3 hours", 
        materials: ["Tool function cards", "Paper-based practice templates", "Sample documents"]
      },
      {
        title: "Session 6: Digital Communication Tools",
        description: "Email, messaging platforms, and virtual meeting concepts.",
        duration: "2 hours",
        materials: ["Communication tool comparison", "Email structure guide", "Practice templates"]
      }
    ]
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Fundamentals",
    description: "A practical approach to entrepreneurship basics focused on identifying opportunities and developing minimal viable products or services.",
    duration: "10 weeks (1 session per week)",
    suitable: ["Grades 10-12", "School Leavers", "Adult Learners"],
    difficulty: "intermediate",
    sessions: [
      {
        title: "Session 1: Entrepreneurial Mindset",
        description: "Developing entrepreneurial thinking and identifying personal strengths.",
        duration: "2 hours",
        materials: ["Entrepreneurial traits assessment", "Mindset journal template", "Case studies"]
      },
      {
        title: "Session 2: Opportunity Identification",
        description: "Techniques for identifying problems and market opportunities in local contexts.",
        duration: "2.5 hours",
        materials: ["Opportunity spotting guide", "Problem-solution worksheet", "Local market map template"]
      },
      {
        title: "Session 3: Customer Understanding",
        description: "Methods for identifying customer needs and developing customer profiles.",
        duration: "2 hours",
        materials: ["Customer profile template", "Interview question guide", "Needs analysis worksheet"]
      },
      {
        title: "Session 4: Value Proposition Design",
        description: "Creating compelling value propositions for products or services.",
        duration: "2 hours", 
        materials: ["Value proposition canvas", "Benefit articulation worksheet", "Examples reference"]
      },
      {
        title: "Session 5: Business Model Basics",
        description: "Understanding core business model components and revenue streams.",
        duration: "2.5 hours",
        materials: ["Business model canvas", "Revenue model cards", "Example models"]
      },
      {
        title: "Session 6: Minimal Resource Strategies",
        description: "Approaches for starting with minimal capital investment.",
        duration: "2 hours", 
        materials: ["Resource inventory worksheet", "Bootstrapping strategies guide", "Case studies"]
      },
      {
        title: "Session 7: Marketing Fundamentals",
        description: "Basic marketing principles and low-cost promotion strategies.",
        duration: "2.5 hours",
        materials: ["Marketing plan template", "Channel strategy worksheet", "Message development guide"]
      },
      {
        title: "Session 8: Sales Approaches",
        description: "Developing sales pitches and basic selling skills.",
        duration: "2 hours", 
        materials: ["Pitch structure template", "Objection handling guide", "Practice scenarios"]
      },
      {
        title: "Session 9: Basic Financial Planning",
        description: "Essential financial planning for small businesses with minimal complexity.",
        duration: "2.5 hours", 
        materials: ["Simple financial template", "Pricing worksheet", "Break-even calculator"]
      },
      {
        title: "Session 10: Implementation Planning",
        description: "Creating actionable plans to launch minimal viable products/services.",
        duration: "3 hours", 
        materials: ["Action plan template", "Timeline worksheet", "Resource planning guide"]
      }
    ]
  },
  {
    id: "digital-content",
    title: "Digital Content Creation",
    description: "Develop skills for creating digital content even with basic devices and limited internet access.",
    duration: "8 weeks (1 session per week)",
    suitable: ["Grades 9-12", "School Leavers", "Adult Learners"],
    difficulty: "intermediate",
    sessions: [
      {
        title: "Session 1: Content Creation Fundamentals",
        description: "Understanding different content types and basic principles of engaging content.",
        duration: "2 hours",
        materials: ["Content type cards", "Audience analysis worksheet", "Content planning template"]
      },
      {
        title: "Session 2: Storytelling Techniques",
        description: "Fundamentals of narrative structure and storytelling for digital content.",
        duration: "2 hours",
        materials: ["Story structure guide", "Character development worksheet", "Narrative examples"]
      },
      {
        title: "Session 3: Writing for Digital Media",
        description: "Principles of effective digital writing across different formats.",
        duration: "2.5 hours", 
        materials: ["Digital writing guidelines", "Headline creation worksheet", "Editing checklist"]
      },
      {
        title: "Session 4: Basic Visual Design",
        description: "Fundamental visual design principles applicable even with basic tools.",
        duration: "2 hours",
        materials: ["Design principle cards", "Layout templates", "Color theory guide"]
      },
      {
        title: "Session 5: Mobile Photography",
        description: "Creating quality images using basic smartphone cameras or devices.",
        duration: "2.5 hours", 
        materials: ["Photography technique guide", "Composition worksheets", "Editing tips handout"]
      },
      {
        title: "Session 6: Simple Video Production",
        description: "Creating effective videos with minimal equipment.",
        duration: "3 hours",
        materials: ["Video planning template", "Shot list guide", "Simple editing reference"]
      },
      {
        title: "Session 7: Content Distribution",
        description: "Strategies for sharing content with limited connectivity.",
        duration: "2 hours", 
        materials: ["Platform comparison chart", "Scheduling template", "Offline strategies guide"]
      },
      {
        title: "Session 8: Building a Content Portfolio",
        description: "Assembling content examples into a compelling portfolio.",
        duration: "2.5 hours", 
        materials: ["Portfolio structure template", "Selection criteria guide", "Presentation tips"]
      }
    ]
  }
];

const ImplementationRoadmaps = () => {
  const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleToggleRoadmap = (id: string) => {
    setExpandedRoadmap(expandedRoadmap === id ? null : id);
  };

  const filteredRoadmaps = activeTab === "all" 
    ? skillRoadmaps 
    : skillRoadmaps.filter(roadmap => roadmap.difficulty === activeTab);

  return (
    <div>
      <div className="mb-6">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Levels</TabsTrigger>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="space-y-4">
        {filteredRoadmaps.map(roadmap => (
          <Card key={roadmap.id} className={cn(
            "border border-gray-200",
            expandedRoadmap === roadmap.id ? "border-fss-primary/30" : ""
          )}>
            <CardContent className="p-0">
              <button 
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => handleToggleRoadmap(roadmap.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-gray-800">{roadmap.title}</h3>
                    <Badge 
                      className={cn(
                        "ml-2",
                        roadmap.difficulty === "basic" ? "bg-green-100 text-green-800 hover:bg-green-100" : 
                        roadmap.difficulty === "intermediate" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : 
                        "bg-red-100 text-red-800 hover:bg-red-100"
                      )}
                      variant="outline"
                    >
                      {roadmap.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{roadmap.description}</p>
                </div>
                <div className="ml-4">
                  {expandedRoadmap === roadmap.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {expandedRoadmap === roadmap.id && (
                <div className="border-t border-gray-200 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Program Duration</p>
                        <p className="text-sm text-gray-600">{roadmap.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Suitable For</p>
                        <p className="text-sm text-gray-600">{roadmap.suitable.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Button variant="outline" className="mr-2 mb-2">
                      <Download className="h-4 w-4 mr-2" />
                      Full Program Guide
                    </Button>
                    <Button variant="outline" className="mb-2">
                      <Download className="h-4 w-4 mr-2" />
                      All Session Materials
                    </Button>
                  </div>
                  
                  <h4 className="font-medium text-gray-800 mb-3">Program Sessions</h4>
                  <div className="space-y-3">
                    {roadmap.sessions.map((session, index) => (
                      <div key={index} className="border border-gray-100 rounded-md p-3 bg-white">
                        <h5 className="font-medium text-gray-800">{session.title}</h5>
                        <p className="text-sm text-gray-600 mb-2">{session.description}</p>
                        
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{session.duration}</span>
                        </div>
                        
                        <div className="mb-2">
                          <p className="text-xs text-gray-500 font-medium mb-1">Required Materials:</p>
                          <div className="flex flex-wrap gap-1">
                            {session.materials.map((material, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button size="sm" variant="outline" className="text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            Session Plan
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
        
        {filteredRoadmaps.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No implementation roadmaps available for the selected difficulty level.
          </div>
        )}
      </div>
    </div>
  );
};

export default ImplementationRoadmaps;

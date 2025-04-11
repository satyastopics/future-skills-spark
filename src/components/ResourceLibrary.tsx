
import { useState } from "react";
import { Search, BookOpen, FileText, Video, Download, Book, PenTool, FileSpreadsheet, FilePlus2, UserCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Resource {
  id: number;
  title: string;
  type: "document" | "video" | "template" | "guide" | "toolkit";
  category: string;
  description: string;
  requiredResources: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Communication Skills Development Guide",
    type: "guide",
    category: "Communication",
    description: "A comprehensive guide for developing effective communication skills in students with limited resources.",
    requiredResources: "No digital devices required, can be implemented with basic classroom materials",
    tags: ["beginner", "classroom", "no-tech"]
  },
  {
    id: 2,
    title: "Digital Literacy Framework",
    type: "document",
    category: "Tech Literacy",
    description: "Framework for teaching basic to advanced digital skills to students with limited technology access.",
    requiredResources: "Can be taught without computers using visual aids and diagrams",
    tags: ["framework", "adaptable", "visual-learning"]
  },
  {
    id: 3,
    title: "Growth Mindset Activities",
    type: "template",
    category: "Mindset",
    description: "Printable activities to foster a growth mindset in students using simple classroom materials.",
    requiredResources: "Paper, pencils, basic classroom supplies",
    tags: ["printable", "classroom", "no-tech"]
  },
  {
    id: 4,
    title: "Paper-Based Portfolio Templates",
    type: "template",
    category: "Career",
    description: "Templates for students to create physical skill portfolios that can be digitized later when resources allow.",
    requiredResources: "Paper, writing materials, basic art supplies (optional)",
    tags: ["printable", "adaptable", "portfolio-building"]
  },
  {
    id: 5,
    title: "Critical Thinking Exercise Cards",
    type: "toolkit",
    category: "Mindset",
    description: "Printable card set with critical thinking challenges and exercises for individual or group work.",
    requiredResources: "Printed cards (can be created with paper and basic supplies)",
    tags: ["printable", "group-activity", "classroom"]
  },
  {
    id: 6,
    title: "Introduction to Freelancing Guidebook",
    type: "guide",
    category: "Career",
    description: "Comprehensive guide on how to start freelancing with minimal resources and technology access.",
    requiredResources: "Printable guidebook, no digital requirements",
    tags: ["income-generation", "self-employment", "practical"]
  },
  {
    id: 7,
    title: "Basic Financial Literacy Toolkit",
    type: "toolkit",
    category: "Finance",
    description: "Complete set of activities and materials to teach fundamental financial concepts without technology.",
    requiredResources: "Printable worksheets, basic calculators (optional)",
    tags: ["practical", "life-skills", "adaptable"]
  },
  {
    id: 8,
    title: "Effective Presentation Skills Guide",
    type: "document",
    category: "Communication",
    description: "Techniques for developing and delivering impactful presentations in any setting.",
    requiredResources: "No special equipment required",
    tags: ["public-speaking", "confidence-building", "practical"]
  },
  {
    id: 9,
    title: "Local Market Research Templates",
    type: "template",
    category: "Business",
    description: "Templates for conducting market research in local communities to identify opportunities.",
    requiredResources: "Printable forms and guides",
    tags: ["entrepreneurship", "community-based", "practical"]
  },
  {
    id: 10,
    title: "Problem-Solving Framework",
    type: "guide",
    category: "Mindset",
    description: "Step-by-step approach to identifying problems and developing creative solutions.",
    requiredResources: "Printable worksheets and visual guides",
    tags: ["critical-thinking", "classroom", "adaptable"]
  },
  {
    id: 11,
    title: "Self-Assessment Tools",
    type: "toolkit",
    category: "Assessment",
    description: "Comprehensive set of self-assessment activities to help students identify strengths and growth areas.",
    requiredResources: "Printable worksheets and reflection materials",
    tags: ["self-awareness", "growth", "no-tech"]
  },
  {
    id: 12,
    title: "Peer Teaching Methodology",
    type: "document",
    category: "Education",
    description: "Framework for implementing peer-to-peer teaching to maximize limited teaching resources.",
    requiredResources: "Training guide and implementation worksheets",
    tags: ["teaching-method", "collaboration", "resource-efficient"]
  },
  {
    id: 13,
    title: "Basic Web Design Concepts",
    type: "guide",
    category: "Tech Literacy",
    description: "Visual guide to web design fundamentals that can be taught without computer access.",
    requiredResources: "Printable visual guides and worksheets",
    tags: ["visual-learning", "tech-concepts", "no-computer"]
  },
  {
    id: 14,
    title: "Project-Based Learning Templates",
    type: "toolkit",
    category: "Education",
    description: "Framework for creating engaging projects that develop high-income skills with minimal resources.",
    requiredResources: "Project planning guides and evaluation rubrics",
    tags: ["hands-on", "practical", "adaptable"]
  },
  {
    id: 15,
    title: "Visual Storytelling Guide",
    type: "document",
    category: "Creative",
    description: "Techniques for effective visual communication and storytelling using simple materials.",
    requiredResources: "Paper, basic art supplies",
    tags: ["creativity", "communication", "visual-learning"]
  }
];

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "all") return matchesSearch;
    return resource.type === activeTab && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "video":
        return <Video className="h-5 w-5 text-red-500" />;
      case "template":
        return <FilePlus2 className="h-5 w-5 text-amber-500" />;
      case "guide":
        return <Book className="h-5 w-5 text-green-500" />;
      case "toolkit":
        return <FileSpreadsheet className="h-5 w-5 text-purple-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Resource Library</h2>
        <p className="text-gray-600 text-sm">
          Access teaching materials and templates designed for resource-constrained environments
        </p>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search resources or tags..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4 grid grid-cols-2 md:grid-cols-6 gap-2 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="document">Documents</TabsTrigger>
          <TabsTrigger value="guide">Guides</TabsTrigger>
          <TabsTrigger value="template">Templates</TabsTrigger>
          <TabsTrigger value="toolkit">Toolkits</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No resources found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="document" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No documents found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="guide" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No guides found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="template" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No templates found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="toolkit" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No toolkits found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="video" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {resource.category}
                      </Badge>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 mb-2">{resource.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs text-gray-500 font-medium">Required Resources:</h4>
                      <p className="text-xs text-gray-600">{resource.requiredResources}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                      
                      <Button variant="link" size="sm" className="text-gray-500">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No videos found matching your search.
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceLibrary;

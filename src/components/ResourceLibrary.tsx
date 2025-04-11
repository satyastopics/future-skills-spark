
import { useState } from "react";
import { Search, BookOpen, FileText, Video, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Resource {
  id: number;
  title: string;
  type: "document" | "video" | "template";
  category: string;
  description: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Communication Skills Development Guide",
    type: "document",
    category: "Communication",
    description: "A comprehensive guide for developing effective communication skills in students."
  },
  {
    id: 2,
    title: "Digital Literacy Framework",
    type: "document",
    category: "Tech Literacy",
    description: "Framework for teaching basic to advanced digital skills to students with limited resources."
  },
  {
    id: 3,
    title: "Growth Mindset Activities",
    type: "template",
    category: "Mindset",
    description: "Printable activities to foster a growth mindset in students."
  },
  {
    id: 4,
    title: "Portfolio Building Template",
    type: "template",
    category: "Career",
    description: "Template for students to create their high-income skill portfolios."
  },
  {
    id: 5,
    title: "Critical Thinking Exercises",
    type: "document",
    category: "Mindset",
    description: "Exercises to develop critical thinking abilities in students."
  },
  {
    id: 6,
    title: "Introduction to Freelancing",
    type: "document",
    category: "Career",
    description: "Guide on how to start freelancing with minimal resources."
  }
];

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
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
        return <BookOpen className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Resource Library</h2>
        <p className="text-gray-600 text-sm">
          Access teaching materials and templates to guide your students toward high-income skills
        </p>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search resources..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4 grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="document">Documents</TabsTrigger>
          <TabsTrigger value="template">Templates</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                    <div className="flex items-center mt-2 justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
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
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                    <div className="flex items-center mt-2 justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
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
        
        <TabsContent value="template" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                    <div className="flex items-center mt-2 justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
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
        
        <TabsContent value="video" className="mt-0">
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="flex items-start p-4 border border-gray-100 rounded-md hover:bg-gray-50">
                  <div className="mr-4 p-2 bg-gray-50 rounded-md">
                    {getIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{resource.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                    <div className="flex items-center mt-2 justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <Button variant="ghost" size="sm" className="text-fss-primary hover:text-fss-secondary">
                        <Download className="h-4 w-4 mr-1" /> Download
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


import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whiteboard from "@/components/Whiteboard";
import ResourceLibrary from "@/components/ResourceLibrary";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Calendar, CheckCircle, Clock } from "lucide-react";

const TeachingTools = () => {
  const [activeTab, setActiveTab] = useState("whiteboard");
  
  // Set page title
  useEffect(() => {
    document.title = "Teaching Tools - Future Skills School";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 mx-auto py-8 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Teaching Tools</h1>
            <p className="text-gray-600 max-w-3xl">
              Tools and resources designed for teachers with limited technical resources to deliver
              high-quality skill development sessions.
            </p>
          </header>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
              <TabsTrigger value="whiteboard" className="text-sm">
                Digital Whiteboard
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-sm">
                Resource Library
              </TabsTrigger>
              <TabsTrigger value="sessions" className="text-sm">
                Session Plans
              </TabsTrigger>
              <TabsTrigger value="templates" className="text-sm">
                Portfolio Templates
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="whiteboard" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Whiteboard</CardTitle>
                  <CardDescription>
                    An interactive whiteboard for teaching concepts during in-person or virtual sessions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Whiteboard />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Library</CardTitle>
                  <CardDescription>
                    Access teaching materials, guides, and printable templates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-0">
                  <ResourceLibrary />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sessions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Session Plans</CardTitle>
                  <CardDescription>
                    Structured session plans for group skill-building workshops.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Introduction to High-Income Skills</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        This introductory session helps students understand what high-income skills are and 
                        why they're valuable in today's economy.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 2 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Understand high-income skills, identify personal interests, set initial goals
                          </p>
                        </div>
                      </div>
                      
                      <a 
                        href="#" 
                        className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                      >
                        View full session plan →
                      </a>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Book className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Building Your First Portfolio</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        A practical workshop on creating a skill portfolio that showcases students' abilities.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 3 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Create a simple portfolio structure, document existing skills, identify development areas
                          </p>
                        </div>
                      </div>
                      
                      <a 
                        href="#" 
                        className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                      >
                        View full session plan →
                      </a>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Communication Skills Workshop</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Essential workshop on developing effective verbal and written communication skills.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 2.5 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Practice public speaking, learn clear writing principles, give and receive feedback
                          </p>
                        </div>
                      </div>
                      
                      <a 
                        href="#" 
                        className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                      >
                        View full session plan →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Templates</CardTitle>
                  <CardDescription>
                    Templates and guides for creating professional skill portfolios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                          Portfolio Template Preview
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">General Skills Portfolio</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          A comprehensive template for showcasing diverse skills across multiple domains.
                        </p>
                        <a 
                          href="#" 
                          className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                        >
                          Download Template
                        </a>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                          Portfolio Template Preview
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Tech Skills Portfolio</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Specialized template for showcasing technical and digital skills.
                        </p>
                        <a 
                          href="#" 
                          className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                        >
                          Download Template
                        </a>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                          Portfolio Template Preview
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Creative Skills Portfolio</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Visual-focused template for creative and content creation skills.
                        </p>
                        <a 
                          href="#" 
                          className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                        >
                          Download Template
                        </a>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                          Portfolio Template Preview
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Business Skills Portfolio</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Template focused on business, management, and entrepreneurship skills.
                        </p>
                        <a 
                          href="#" 
                          className="text-sm text-fss-primary hover:text-fss-secondary font-medium"
                        >
                          Download Template
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeachingTools;

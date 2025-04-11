
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillPathways from "@/components/SkillPathways";
import SkillCard from "@/components/SkillCard";
import { 
  Lightbulb, 
  BarChart3, 
  Users, 
  PencilRuler, 
  ArrowRight
} from "lucide-react";

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "Future Skills School - Empowering Teachers & Students";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-fss-light to-white py-12 md:py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fss-dark mb-4">
                  Building Future-Ready Skills for Indian Students
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Empowering teachers with limited resources to guide students toward high-income skills
                  and financial independence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/teaching-tools">
                    <Button className="bg-fss-primary hover:bg-fss-secondary">
                      Teaching Tools
                    </Button>
                  </Link>
                  <Link to="/skill-groups">
                    <Button variant="outline" className="text-fss-primary border-fss-primary hover:bg-fss-light">
                      Explore Skills
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80" 
                  alt="Students learning future skills" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How Future Skills School Helps</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform provides teachers with the tools and resources they need to mentor 
                students on their journey to high-income skills development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-fss-light p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-fss-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Skill Pathways</h3>
                <p className="text-gray-600 text-sm">
                  Structured learning paths for in-demand skills across multiple industries.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-fss-light p-3 rounded-full">
                    <PencilRuler className="h-6 w-6 text-fss-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Teaching Tools</h3>
                <p className="text-gray-600 text-sm">
                  Interactive whiteboard and resources designed for limited-resource environments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-fss-light p-3 rounded-full">
                    <Users className="h-6 w-6 text-fss-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Group Sessions</h3>
                <p className="text-gray-600 text-sm">
                  Guidelines for running effective group mentoring and skill-building sessions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-fss-light p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-fss-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Portfolio Building</h3>
                <p className="text-gray-600 text-sm">
                  Templates and guides for creating impressive skill portfolios.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Skills Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Featured Skill Pathways</h2>
                <p className="text-gray-600">
                  Explore high-demand skills that can lead to multiple income sources
                </p>
              </div>
              <Link to="/skill-groups" className="mt-4 md:mt-0 text-fss-primary hover:text-fss-secondary flex items-center">
                View all skill paths <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <SkillPathways />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-fss-primary text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
            <p className="mb-8 max-w-xl mx-auto text-white/90">
              Start using our tools today to help your students build high-income skills,
              even with limited resources.
            </p>
            <Link to="/teaching-tools">
              <Button className="bg-white text-fss-primary hover:bg-fss-light">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

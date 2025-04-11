
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, BarChart4, BookOpen } from "lucide-react";

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = "About - Future Skills School";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 mx-auto py-8 md:py-12">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Future Skills School</h1>
            <p className="text-gray-700 max-w-3xl mb-6">
              Future Skills School is dedicated to empowering teachers in resource-constrained
              environments across India to deliver high-quality career guidance and skill development 
              training to their students.
            </p>
            <p className="text-gray-700 max-w-3xl">
              Our platform provides tools, resources, and frameworks that enable teachers to 
              help students build high-income skills, create diverse portfolios, and achieve 
              financial independence - regardless of their starting resources.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-fss-light mr-4">
                    <Target className="h-6 w-6 text-fss-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Our Mission</h2>
                </div>
                <p className="text-gray-700">
                  To democratize access to high-quality skill development and career guidance for
                  Indian students by providing teachers with practical, resource-efficient tools and
                  methodologies that can be implemented in any educational setting.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-fss-light mr-4">
                    <BarChart4 className="h-6 w-6 text-fss-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Our Vision</h2>
                </div>
                <p className="text-gray-700">
                  A future where every Indian student, regardless of their background or resources,
                  has access to the guidance and training needed to develop high-income skills and
                  achieve financial independence.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Core Values */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-fss-primary mr-3" />
              <h2 className="text-2xl font-semibold">Our Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  We design all our resources to be usable in low-resource environments, ensuring no teacher
                  or student is left behind due to technological constraints.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Practicality</h3>
                <p className="text-gray-600 text-sm">
                  We focus on practical, immediately applicable skills and teaching methods that deliver
                  real-world value to students' future careers.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Forward-Thinking</h3>
                <p className="text-gray-600 text-sm">
                  We continuously update our content to reflect emerging skills and opportunities,
                  preparing students for the jobs of tomorrow, not just today.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Inclusivity</h3>
                <p className="text-gray-600 text-sm">
                  We design our platform to serve teachers and students across India, regardless of
                  region, language, or socioeconomic background.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Empowerment</h3>
                <p className="text-gray-600 text-sm">
                  We believe in giving teachers and students the tools to become self-sufficient
                  guides in their own skill development journey.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-2 text-gray-800">Community</h3>
                <p className="text-gray-600 text-sm">
                  We foster a supportive community where teachers can share best practices and
                  experiences to collectively improve skill education across India.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Approach */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-fss-primary mr-3" />
              <h2 className="text-2xl font-semibold">Our Approach</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              We believe that effective skill development doesn't require expensive technology or resources.
              Our approach focuses on:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-fss-light text-fss-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Resource-Conscious Teaching</h3>
                  <p className="text-gray-600 text-sm">
                    Methodologies and tools that work effectively even in the most resource-constrained settings,
                    requiring minimal technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fss-light text-fss-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Portfolio-Based Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Focusing on building tangible portfolios that showcase skills rather than just theoretical knowledge.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fss-light text-fss-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Multi-Income Pathway Development</h3>
                  <p className="text-gray-600 text-sm">
                    Teaching students to develop multiple complementary skills that can create diverse income streams.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fss-light text-fss-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Teacher as Mentor</h3>
                  <p className="text-gray-600 text-sm">
                    Supporting teachers to transition from traditional instruction to becoming career mentors
                    and guides for their students.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fss-light text-fss-primary rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Future-Readiness</h3>
                  <p className="text-gray-600 text-sm">
                    Preparing students not just for today's jobs but developing the adaptability and
                    mindset to thrive in tomorrow's economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Get in Touch</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about our platform or need support implementing
                  these tools in your school, please contact us.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@futureskillsschool.org</p>
                  <p><strong>Phone:</strong> +91 1234567890</p>
                  <p><strong>Address:</strong> Future Skills School, Bangalore, India</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Join Our Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other teachers using Future Skills School resources and share your experiences.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-fss-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-fss-primary"
                      placeholder="Your email"
                    />
                  </div>
                  <button 
                    type="button"
                    className="w-full bg-fss-primary text-white py-2 rounded-md hover:bg-fss-secondary transition-colors"
                  >
                    Subscribe to Updates
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

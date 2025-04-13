
import React from "react";
import { 
  ArrowRight, BookOpen, CheckCircle, Download, FileText, Users,
  MessageCircle, Clock, Calendar, Rocket
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImplementationGuide = () => {
  const { toast } = useToast();

  const handleDownload = (resourceName: string) => {
    toast({
      title: "Resource Ready",
      description: `${resourceName} has been prepared for download.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4 text-gray-700">
          Implementing the Future Skills Portfolio Program requires thoughtful preparation. 
          Follow this step-by-step guide to ensure a successful launch in your school.
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-medium">1</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Assess Your Resources</h3>
              <p className="text-gray-600 mt-1">
                Take inventory of available materials, spaces, and time allocations. The program is designed to 
                work with minimal resources, but knowing what you have will help customize implementation.
              </p>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownload("Resource Assessment Template")}
                  className="text-sm"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download Resource Assessment Template
                </Button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-medium">2</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Select Your Implementation Model</h3>
              <p className="text-gray-600 mt-1">
                Choose the implementation approach that best fits your school schedule and resources.
                Review the models in the Program Overview section and adapt as needed.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-medium">3</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Prepare Materials</h3>
              <p className="text-gray-600 mt-1">
                Print core worksheets and templates for the first few sessions. The program
                uses simple materials that can be easily reproduced even with limited resources.
              </p>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownload("Starter Materials Pack")}
                  className="text-sm"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download Starter Materials Pack
                </Button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-medium">4</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Orient Students & Parents</h3>
              <p className="text-gray-600 mt-1">
                Introduce the program to students and parents, emphasizing how it will benefit 
                their future opportunities and financial independence.
              </p>
              <div className="mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownload("Orientation Presentation")}
                  className="text-sm"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download Orientation Materials
                </Button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-700 font-medium">5</span>
            </div>
            <div>
              <h3 className="font-medium text-lg">Launch with Assessment</h3>
              <p className="text-gray-600 mt-1">
                Begin with the Initial Skill Assessment session to establish your students' baseline skills
                and interests before moving into pathway exploration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Addressing Common Challenges</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="limited-time">
            <AccordionTrigger className="text-base font-medium">
              Limited Time Allocation
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Many Indian schools face tight scheduling constraints. Here's how to adapt:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Focus on the most essential activities in each session</li>
                  <li>Combine related sessions where appropriate</li>
                  <li>Utilize homework assignments for portfolio development work</li>
                  <li>Consider implementing during activity periods or after school</li>
                  <li>Use peer mentoring to maximize impact with limited teacher time</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="large-classes">
            <AccordionTrigger className="text-base font-medium">
              Large Class Sizes
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  For classes with 40+ students, consider these adaptations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Organize students into consistent peer groups of 5-6</li>
                  <li>Train student leaders to facilitate small group activities</li>
                  <li>Use rotation stations where different activities happen simultaneously</li>
                  <li>Implement gallery walk approaches for sharing and feedback</li>
                  <li>Create clear, visual instruction sheets for each activity</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech-limitations">
            <AccordionTrigger className="text-base font-medium">
              Technology Limitations
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  The program is designed to work effectively with minimal technology:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All essential materials are provided in printable formats</li>
                  <li>Paper portfolios can be as effective as digital ones</li>
                  <li>When teaching digital skills, use visual guides and simulations</li>
                  <li>If available, use a single shared computer for demonstrations</li>
                  <li>Consider periodic trips to facilities with more technology when possible</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="teacher-expertise">
            <AccordionTrigger className="text-base font-medium">
              Limited Teacher Expertise in All Skill Areas
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Teachers don't need to be experts in all skill areas:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Detailed facilitation guides are provided for each session</li>
                  <li>Focus on being a learning coordinator rather than content expert</li>
                  <li>Invite guest speakers from local businesses when possible</li>
                  <li>Leverage student knowledge and peer teaching</li>
                  <li>Use the included self-guided student materials</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="student-engagement">
            <AccordionTrigger className="text-base font-medium">
              Maintaining Student Engagement
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Keep students motivated throughout the program:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regularly connect skills to real earning opportunities in India</li>
                  <li>Showcase success stories of people from similar backgrounds</li>
                  <li>Create milestone celebrations for portfolio development</li>
                  <li>Organize small competitions and recognition opportunities</li>
                  <li>Involve parents in reviewing portfolio progress</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Tracking Progress</h2>
        
        <p className="mb-6 text-gray-700">
          Monitoring student development is essential for program success. Use these tools to track 
          progress at individual and program levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Student Portfolio Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Track individual student progress through their portfolio development journey.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleDownload("Student Tracking Template")}>
                <Download className="mr-2 h-4 w-4" />
                Download Tracking Template
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Program Effectiveness Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Evaluate the overall impact of the program on student skill development.
              </p>
              <Button variant="outline" className="w-full" onClick={() => handleDownload("Program Assessment Tools")}>
                <Download className="mr-2 h-4 w-4" />
                Download Assessment Tools
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Year-Long Implementation Calendar</h2>
        
        <p className="mb-6 text-gray-700">
          This suggested calendar provides a framework for implementing the complete program over one academic year.
          Adjust timing based on your school's schedule and student needs.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Sessions</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Milestones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 text-sm">June-July</td>
                <td className="px-4 py-4 text-sm">Program Introduction & Assessment</td>
                <td className="px-4 py-4 text-sm">Initial Assessment, Career Exploration</td>
                <td className="px-4 py-4 text-sm">Baseline skills inventory, Initial pathway interests</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">August</td>
                <td className="px-4 py-4 text-sm">Group Formation & Exploration</td>
                <td className="px-4 py-4 text-sm">Interest Group Formation, Pathway Deep Dive</td>
                <td className="px-4 py-4 text-sm">Pathway selection, Learning roadmap creation</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">September-November</td>
                <td className="px-4 py-4 text-sm">Core Skill Development</td>
                <td className="px-4 py-4 text-sm">Universal Skills, Pathway-Specific Workshops</td>
                <td className="px-4 py-4 text-sm">Core competency development, Initial portfolio entries</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">December</td>
                <td className="px-4 py-4 text-sm">Mid-Year Review</td>
                <td className="px-4 py-4 text-sm">Progress Review, Portfolio Development</td>
                <td className="px-4 py-4 text-sm">Portfolio structure established, Mid-year presentations</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">January-February</td>
                <td className="px-4 py-4 text-sm">Advanced Skill Development</td>
                <td className="px-4 py-4 text-sm">Specialized Pathway Sessions</td>
                <td className="px-4 py-4 text-sm">Advanced skill demonstrations, Peer feedback</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">March-April</td>
                <td className="px-4 py-4 text-sm">Application & Opportunity</td>
                <td className="px-4 py-4 text-sm">Real-World Application, Opportunity Identification</td>
                <td className="px-4 py-4 text-sm">Portfolio applications, Opportunity connections</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">May</td>
                <td className="px-4 py-4 text-sm">Portfolio Finalization</td>
                <td className="px-4 py-4 text-sm">Portfolio Refinement, Showcase Preparation</td>
                <td className="px-4 py-4 text-sm">Final portfolios, Program completion</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4">
          <Button onClick={() => handleDownload("Customizable Annual Calendar")} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Customizable Calendar Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImplementationGuide;

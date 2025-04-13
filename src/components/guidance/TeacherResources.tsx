
import React from "react";
import { 
  BookOpen, FileDown, FileText, Download, MessageCircle, GraduationCap, 
  Award, Briefcase, Brain, PenLine, CheckCircle, Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourceCardProps {
  title: string;
  description: string;
  iconType: string;
  downloadUrl: string;
}

const TeacherResources = () => {
  const { toast } = useToast();
  
  const handleDownload = (resourceName: string) => {
    toast({
      title: "Resource Ready",
      description: `${resourceName} has been prepared for download.`,
    });
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "book": return <BookOpen className="h-5 w-5" />;
      case "file": return <FileText className="h-5 w-5" />;
      case "message": return <MessageCircle className="h-5 w-5" />;
      case "graduate": return <GraduationCap className="h-5 w-5" />;
      case "award": return <Award className="h-5 w-5" />;
      case "briefcase": return <Briefcase className="h-5 w-5" />;
      case "brain": return <Brain className="h-5 w-5" />;
      case "pen": return <PenLine className="h-5 w-5" />;
      case "check": return <CheckCircle className="h-5 w-5" />;
      case "users": return <Users className="h-5 w-5" />;
      default: return <FileDown className="h-5 w-5" />;
    }
  };

  const ResourceCard = ({ title, description, iconType, downloadUrl }: ResourceCardProps) => {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <div className="text-fss-primary mr-2">
              {getIcon(iconType)}
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            {description}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => handleDownload(title)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resource
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="guidance">
        <TabsList className="mb-4">
          <TabsTrigger value="guidance">Facilitation Guides</TabsTrigger>
          <TabsTrigger value="templates">Templates & Worksheets</TabsTrigger>
          <TabsTrigger value="assessment">Assessment Tools</TabsTrigger>
          <TabsTrigger value="development">Teacher Development</TabsTrigger>
        </TabsList>
        
        {/* Facilitation Guides */}
        <TabsContent value="guidance" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Comprehensive Facilitator Guides</h2>
            <p className="text-gray-600 mb-6">
              Detailed guides that walk you through facilitating each session with limited resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Session Facilitation Handbook"
                description="Step-by-step instructions for conducting portfolio development sessions, including class management tips for large groups."
                iconType="book"
                downloadUrl="/resources/facilitation-handbook.pdf"
              />
              <ResourceCard
                title="Adapting for Resource Constraints"
                description="Practical strategies for implementing the program in schools with limited physical resources and technology."
                iconType="briefcase"
                downloadUrl="/resources/resource-adaptations.pdf"
              />
              <ResourceCard
                title="Discussion Facilitation Guide"
                description="Techniques for managing effective discussions about career pathways and skills in diverse classrooms."
                iconType="message"
                downloadUrl="/resources/discussion-guide.pdf"
              />
              <ResourceCard
                title="Peer Group Management"
                description="Frameworks for organizing and facilitating effective peer learning groups for skill development."
                iconType="users"
                downloadUrl="/resources/peer-groups.pdf"
              />
              <ResourceCard
                title="Session Troubleshooting Guide"
                description="Solutions for common challenges encountered during portfolio development sessions."
                iconType="check"
                downloadUrl="/resources/troubleshooting.pdf"
              />
              <ResourceCard
                title="Multilingual Support Guide"
                description="Strategies for delivering content and facilitating discussions in classrooms with multiple language preferences."
                iconType="message"
                downloadUrl="/resources/multilingual-guide.pdf"
              />
            </div>
          </div>

          <Separator className="my-8" />
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Subject Integration Guides</h2>
            <p className="text-gray-600 mb-6">
              Resources for embedding portfolio development within existing subject curricula.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="English & Language Integration"
                description="Connect portfolio development to language skills through writing, presentation, and communication activities."
                iconType="book"
                downloadUrl="/resources/english-integration.pdf"
              />
              <ResourceCard
                title="Mathematics Integration"
                description="Link mathematical concepts to real-world skill applications in data analysis, problem-solving, and logical reasoning."
                iconType="brain"
                downloadUrl="/resources/math-integration.pdf"
              />
              <ResourceCard
                title="Science Integration"
                description="Connect scientific inquiry and methods to portfolio development through research, experimentation, and analysis."
                iconType="graduate"
                downloadUrl="/resources/science-integration.pdf"
              />
              <ResourceCard
                title="Social Studies Integration"
                description="Incorporate economic concepts, social trends, and entrepreneurship into skill portfolio development."
                iconType="briefcase"
                downloadUrl="/resources/social-studies-integration.pdf"
              />
              <ResourceCard
                title="Arts & Creativity Integration"
                description="Enhance portfolios through creative expression, design thinking, and artistic communication."
                iconType="pen"
                downloadUrl="/resources/arts-integration.pdf"
              />
              <ResourceCard
                title="Physical Education Integration"
                description="Connect teamwork, leadership, and personal development concepts between physical activities and career skills."
                iconType="award"
                downloadUrl="/resources/pe-integration.pdf"
              />
            </div>
          </div>
        </TabsContent>
        
        {/* Templates & Worksheets */}
        <TabsContent value="templates" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Student Portfolio Templates</h2>
            <p className="text-gray-600 mb-6">
              Ready-to-print templates for students to document their skills and create professional portfolios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="General Skills Portfolio Template"
                description="Comprehensive template for documenting a wide range of skills across multiple domains."
                iconType="file"
                downloadUrl="/resources/general-portfolio.pdf"
              />
              <ResourceCard
                title="Technical Skills Portfolio"
                description="Template focused on technology, coding, digital design, and technical problem-solving skills."
                iconType="file"
                downloadUrl="/resources/technical-portfolio.pdf"
              />
              <ResourceCard
                title="Creative Skills Portfolio"
                description="Format for showcasing design, content creation, and artistic skills with visual examples."
                iconType="pen"
                downloadUrl="/resources/creative-portfolio.pdf"
              />
              <ResourceCard
                title="Business Skills Portfolio"
                description="Template highlighting entrepreneurship, marketing, financial literacy, and leadership skills."
                iconType="briefcase"
                downloadUrl="/resources/business-portfolio.pdf"
              />
              <ResourceCard
                title="Communication Skills Portfolio"
                description="Framework for demonstrating written, verbal, and digital communication competencies."
                iconType="message"
                downloadUrl="/resources/communication-portfolio.pdf"
              />
              <ResourceCard
                title="Skill Evidence Documentation Guide"
                description="Templates and formats for recording tangible evidence of skills for portfolio inclusion."
                iconType="check"
                downloadUrl="/resources/evidence-documentation.pdf"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="text-xl font-semibold mb-3">Workshop Materials</h2>
            <p className="text-gray-600 mb-6">
              Ready-to-use worksheets and activities for skill development sessions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Skills Inventory Worksheets"
                description="Tools for students to identify, categorize, and evaluate their existing skills and interests."
                iconType="check"
                downloadUrl="/resources/skills-inventory.pdf"
              />
              <ResourceCard
                title="Career Pathway Exploration Activities"
                description="Structured activities for investigating and evaluating different high-income skill paths."
                iconType="briefcase"
                downloadUrl="/resources/pathway-exploration.pdf"
              />
              <ResourceCard
                title="Learning Roadmap Templates"
                description="Planning tools for mapping out skill development paths and tracking progress over time."
                iconType="file"
                downloadUrl="/resources/learning-roadmap.pdf"
              />
              <ResourceCard
                title="Critical Thinking Challenge Cards"
                description="Problem scenarios designed to develop analytical and critical thinking skills."
                iconType="brain"
                downloadUrl="/resources/critical-thinking.pdf"
              />
              <ResourceCard
                title="Communication Exercise Pack"
                description="Activities and scenarios for practicing various professional communication skills."
                iconType="message"
                downloadUrl="/resources/communication-exercises.pdf"
              />
              <ResourceCard
                title="Digital Skills Simulation Pack"
                description="Paper-based activities that simulate digital skills development without requiring technology."
                iconType="file"
                downloadUrl="/resources/digital-simulation.pdf"
              />
            </div>
          </div>
        </TabsContent>
        
        {/* Assessment Tools */}
        <TabsContent value="assessment" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Progress Tracking & Assessment</h2>
            <p className="text-gray-600 mb-6">
              Tools for evaluating student progress and portfolio quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Skill Development Rubrics"
                description="Assessment frameworks for evaluating different skill categories at various proficiency levels."
                iconType="check"
                downloadUrl="/resources/skill-rubrics.pdf"
              />
              <ResourceCard
                title="Portfolio Quality Assessment"
                description="Criteria and tools for evaluating the quality and impact of student skill portfolios."
                iconType="award"
                downloadUrl="/resources/portfolio-assessment.pdf"
              />
              <ResourceCard
                title="Student Progress Tracking System"
                description="Templates for monitoring individual student development throughout the program."
                iconType="file"
                downloadUrl="/resources/progress-tracking.pdf"
              />
              <ResourceCard
                title="Peer Feedback Protocols"
                description="Structured approaches for students to provide constructive feedback on peers' work."
                iconType="users"
                downloadUrl="/resources/peer-feedback.pdf"
              />
              <ResourceCard
                title="Self-Reflection Assessment Tools"
                description="Frameworks for students to meaningfully reflect on their own skill development."
                iconType="brain"
                downloadUrl="/resources/self-reflection.pdf"
              />
              <ResourceCard
                title="Program Impact Evaluation"
                description="Tools for measuring the overall effectiveness of the portfolio program in your school."
                iconType="check"
                downloadUrl="/resources/impact-evaluation.pdf"
              />
            </div>
          </div>
        </TabsContent>
        
        {/* Teacher Development */}
        <TabsContent value="development" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Professional Development Resources</h2>
            <p className="text-gray-600 mb-6">
              Materials to help teachers develop their own skills for program facilitation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Facilitator Skill Development"
                description="Self-paced learning materials to enhance your skills as a portfolio program facilitator."
                iconType="graduate"
                downloadUrl="/resources/facilitator-development.pdf"
              />
              <ResourceCard
                title="Industry Trends Overview"
                description="Brief guide to current high-income skill trends in the Indian and global job markets."
                iconType="briefcase"
                downloadUrl="/resources/industry-trends.pdf"
              />
              <ResourceCard
                title="Digital Literacy Essentials"
                description="Core digital concepts every teacher should understand to guide student skill development."
                iconType="book"
                downloadUrl="/resources/digital-literacy.pdf"
              />
              <ResourceCard
                title="Mentorship Best Practices"
                description="Frameworks for effectively mentoring students through their skill portfolio journey."
                iconType="users"
                downloadUrl="/resources/mentorship-guide.pdf"
              />
              <ResourceCard
                title="Portfolio Program Community Guide"
                description="Resources for connecting with other teachers implementing the program across India."
                iconType="users"
                downloadUrl="/resources/program-community.pdf"
              />
              <ResourceCard
                title="Monthly Teacher Updates"
                description="Sign up for regular updates on program enhancements and new teaching resources."
                iconType="file"
                downloadUrl="/resources/teacher-updates.pdf"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Request Customized Support</h2>
            <p className="text-gray-700 mb-6">
              Need specific guidance for your school's unique context? Our team provides customized support 
              to help you implement the program effectively.
            </p>
            <Button 
              onClick={() => handleDownload("Support Request Form")} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Support Request Form
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherResources;

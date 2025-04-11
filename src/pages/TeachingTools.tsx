
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whiteboard from "@/components/Whiteboard";
import ResourceLibrary from "@/components/ResourceLibrary";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Calendar, CheckCircle, Clock, Eye, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const TeachingTools = () => {
  const [activeTab, setActiveTab] = useState("whiteboard");
  const [openTemplate, setOpenTemplate] = useState<string | null>(null);

  // Set page title
  useEffect(() => {
    document.title = "Teaching Tools - Future Skills School";
  }, []);

  const portfolioTemplates = [
    {
      id: "general",
      name: "General Skills Portfolio",
      description: "A comprehensive template for showcasing diverse skills across multiple domains.",
      previewUrl: "/templates/general-skills-portfolio.png",
      downloadUrl: "/templates/general-skills-portfolio.pdf",
      content: `
        # General Skills Portfolio Template
        
        ## Personal Information
        - Name: [Your Name]
        - Contact: [Your Email/Phone]
        - Professional Summary: [2-3 sentences about your skills and goals]
        
        ## Skills Summary
        - Technical Skills: [List your top 5 technical skills]
        - Soft Skills: [List your top 5 soft skills]
        - Languages: [List languages you speak]
        
        ## Projects
        For each project:
        - Project Name
        - Skills Demonstrated
        - Problem Solved
        - Approach
        - Results/Impact
        
        ## Learning Journey
        - Courses Completed
        - Books Read
        - Mentors/Teachers
        
        ## Future Goals
        - Short-term goals (3-6 months)
        - Long-term goals (1-2 years)
        
        ## References
        - Teacher/Mentor contacts
      `
    },
    {
      id: "tech",
      name: "Tech Skills Portfolio",
      description: "Specialized template for showcasing technical and digital skills.",
      previewUrl: "/templates/tech-skills-portfolio.png",
      downloadUrl: "/templates/tech-skills-portfolio.pdf",
      content: `
        # Tech Skills Portfolio Template
        
        ## Developer Profile
        - Name: [Your Name]
        - Tech Focus Areas: [e.g., Web Development, Mobile Apps, etc.]
        - GitHub/Code Repository: [Your links]
        
        ## Technical Skills
        - Programming Languages: [List with proficiency levels]
        - Tools & Frameworks: [List with experience levels]
        - Development Methodologies: [e.g., Agile, Kanban]
        
        ## Technical Projects
        For each project:
        - Project Title
        - Technologies Used
        - Problem Statement
        - Solution Architecture
        - Your Contribution
        - Results/Impact
        - Link to Code/Demo (if available)
        
        ## Technical Challenges Overcome
        - Challenge Description
        - Approach & Solution
        - Learning Outcomes
        
        ## Continuous Learning
        - Recent Courses/Certifications
        - Technical Books/Resources Studied
        - Technology Areas Currently Exploring
      `
    },
    {
      id: "creative",
      name: "Creative Skills Portfolio",
      description: "Visual-focused template for creative and content creation skills.",
      previewUrl: "/templates/creative-skills-portfolio.png",
      downloadUrl: "/templates/creative-skills-portfolio.pdf",
      content: `
        # Creative Skills Portfolio Template
        
        ## Creative Profile
        - Name: [Your Name]
        - Creative Disciplines: [e.g., Graphic Design, Content Writing, etc.]
        - Personal Style/Approach: [Brief description]
        
        ## Creative Skills
        - Design Skills: [List with proficiency]
        - Tools Mastered: [e.g., Canva, Photoshop, etc.]
        - Content Creation Formats: [e.g., Blogs, Videos, Podcasts]
        
        ## Portfolio Highlights
        For each creative work:
        - Project Title & Type
        - Client/Purpose
        - Creative Brief/Requirements
        - Your Creative Process
        - Final Outcome
        - Impact/Results
        
        ## Creative Process
        - How you approach creative challenges
        - Research and inspiration methods
        - Iteration and feedback process
        
        ## Creative Growth
        - Skills currently developing
        - Creative influences and inspirations
        - Future creative directions
      `
    },
    {
      id: "business",
      name: "Business Skills Portfolio",
      description: "Template focused on business, management, and entrepreneurship skills.",
      previewUrl: "/templates/business-skills-portfolio.png",
      downloadUrl: "/templates/business-skills-portfolio.pdf",
      content: `
        # Business Skills Portfolio Template
        
        ## Professional Profile
        - Name: [Your Name]
        - Business Focus Areas: [e.g., Marketing, Management, Entrepreneurship]
        - Professional Statement: [Brief value proposition]
        
        ## Business Competencies
        - Management Skills: [List with examples]
        - Analysis & Strategy Skills: [List with examples]
        - Client/Customer Relations: [Approaches and successes]
        
        ## Business Projects & Cases
        For each business case:
        - Project/Business Name
        - Role & Responsibilities
        - Business Challenge Addressed
        - Strategies Implemented
        - Results & Key Metrics
        - Lessons Learned
        
        ## Business Acumen
        - Market Understanding
        - Financial Literacy
        - Strategic Thinking Examples
        
        ## Professional Development
        - Business Courses/Training
        - Mentors & Business Influences
        - Professional Goals
      `
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing Portfolio",
      description: "Specialized template for digital marketing and social media management skills.",
      previewUrl: "/templates/digital-marketing-portfolio.png",
      downloadUrl: "/templates/digital-marketing-portfolio.pdf",
      content: `
        # Digital Marketing Portfolio Template
        
        ## Marketer Profile
        - Name: [Your Name]
        - Marketing Specializations: [e.g., Social Media, SEO, Content Marketing]
        - Professional Links: [LinkedIn, Personal Website]
        
        ## Marketing Expertise
        - Digital Platforms: [List platforms with proficiency levels]
        - Marketing Tools: [Analytics tools, CRM, etc.]
        - Campaign Types: [Lead gen, brand awareness, etc.]
        
        ## Campaign Showcases
        For each campaign:
        - Campaign Objective
        - Target Audience
        - Platforms Used
        - Strategy & Implementation
        - Budget Management
        - Results & KPIs
        - Visual Examples
        
        ## Analytics & Data Skills
        - Data Analysis Capabilities
        - Performance Tracking Methods
        - Insights Generation Process
        
        ## Marketing Innovation
        - New approaches tested
        - Experimental campaigns
        - Emerging platforms explored
      `
    },
    {
      id: "data-analytics",
      name: "Data Analytics Portfolio",
      description: "Template for showcasing data analysis and insight generation skills.",
      previewUrl: "/templates/data-analytics-portfolio.png",
      downloadUrl: "/templates/data-analytics-portfolio.pdf",
      content: `
        # Data Analytics Portfolio Template
        
        ## Data Analyst Profile
        - Name: [Your Name]
        - Data Specialization: [e.g., Business Intelligence, Data Visualization]
        - Technical Profile: [Tools/Languages mastered]
        
        ## Data Skills
        - Analysis Tools: [Excel, Tableau, Power BI, etc.]
        - Programming Languages: [SQL, Python, R, etc.]
        - Data Visualization: [Chart types, storytelling approaches]
        
        ## Data Projects
        For each project:
        - Project Title
        - Problem Statement
        - Data Sources Used
        - Methodology & Analysis
        - Key Findings
        - Visualizations & Dashboards
        - Business Impact/Recommendations
        
        ## Data Challenges
        - Complex Problems Solved
        - Technical Obstacles Overcome
        - Creative Solutions Implemented
        
        ## Continuous Learning
        - Data Science Courses Completed
        - New Tools Being Learned
        - Data Communities Participation
      `
    },
    {
      id: "freelancing",
      name: "Freelancer Portfolio",
      description: "Client-focused template for showcasing freelance work and service offerings.",
      previewUrl: "/templates/freelancer-portfolio.png",
      downloadUrl: "/templates/freelancer-portfolio.pdf",
      content: `
        # Freelancer Portfolio Template
        
        ## Professional Profile
        - Name: [Your Name]
        - Services Offered: [List your service categories]
        - Contact Information: [Professional email, phone, website]
        
        ## Service Packages
        - Service Type 1: [Description, deliverables, timeframe, pricing range]
        - Service Type 2: [Description, deliverables, timeframe, pricing range]
        - Service Type 3: [Description, deliverables, timeframe, pricing range]
        
        ## Client Projects
        For each project:
        - Client Name/Industry
        - Project Scope
        - Challenges & Requirements
        - Solution Provided
        - Results Delivered
        - Client Testimonial
        
        ## Work Process
        - Client Onboarding Process
        - Project Management Approach
        - Communication Style
        - Quality Assurance Methods
        
        ## Professional Development
        - Skills Currently Expanding
        - Recent Certifications
        - Industry Knowledge
      `
    },
    {
      id: "content-creation",
      name: "Content Creator Portfolio",
      description: "Template for digital content creators focused on audience building.",
      previewUrl: "/templates/content-creator-portfolio.png",
      downloadUrl: "/templates/content-creator-portfolio.pdf",
      content: `
        # Content Creator Portfolio Template
        
        ## Creator Profile
        - Name: [Your Name]
        - Content Niche: [Your specialty areas]
        - Platforms: [YouTube, Instagram, Blogs, etc.]
        
        ## Content Skills
        - Content Formats: [Videos, articles, podcasts, etc.]
        - Production Skills: [Filming, editing, writing, etc.]
        - Audience Engagement: [Community building tactics]
        
        ## Featured Content
        For each content piece:
        - Content Title & Format
        - Target Audience
        - Key Message/Purpose
        - Creation Process
        - Performance Metrics
        - Audience Feedback
        
        ## Audience Building
        - Growth Strategies Used
        - Community Management Approach
        - Engagement Metrics
        
        ## Brand Collaborations
        - Previous Brand Work
        - Collaboration Approach
        - Results Delivered for Partners
      `
    },
    {
      id: "education-training",
      name: "Education & Training Portfolio",
      description: "Template for educators, trainers and those developing learning content.",
      previewUrl: "/templates/education-training-portfolio.png",
      downloadUrl: "/templates/education-training-portfolio.pdf",
      content: `
        # Education & Training Portfolio Template
        
        ## Educator Profile
        - Name: [Your Name]
        - Teaching Specialties: [Subject areas/skills]
        - Teaching Philosophy: [Brief statement]
        
        ## Teaching Competencies
        - Instructional Methods: [Approaches you use]
        - Assessment Techniques: [How you evaluate learning]
        - Curriculum Development: [Course design experience]
        
        ## Course/Workshop Highlights
        For each course/workshop:
        - Title & Topic
        - Learning Objectives
        - Target Audience
        - Teaching Methods Used
        - Materials Developed
        - Student Outcomes & Feedback
        
        ## Educational Resources Created
        - Resource Types: [Worksheets, guides, videos, etc.]
        - Purpose & Application
        - Impact on Learning
        
        ## Professional Growth
        - Pedagogical Training
        - Recent Learning Innovations
        - Educational Technology Integration
      `
    },
    {
      id: "communication",
      name: "Communication Skills Portfolio",
      description: "Template focused on written, verbal and interpersonal communication abilities.",
      previewUrl: "/templates/communication-skills-portfolio.png",
      downloadUrl: "/templates/communication-skills-portfolio.pdf",
      content: `
        # Communication Skills Portfolio Template
        
        ## Communication Profile
        - Name: [Your Name]
        - Communication Strengths: [e.g., public speaking, writing, etc.]
        - Languages: [Languages spoken/written with proficiency levels]
        
        ## Communication Skills
        - Written Communication: [Writing styles, formats mastered]
        - Verbal Communication: [Presentation, negotiation, etc.]
        - Digital Communication: [Platforms, technologies used]
        
        ## Communication Projects
        For each project:
        - Project Type: [Speech, article, campaign, etc.]
        - Audience & Purpose
        - Communication Strategy
        - Key Messages Delivered
        - Outcomes & Impact
        
        ## Problem-Solving Through Communication
        - Communication Challenges Overcome
        - Conflict Resolution Examples
        - Persuasive Communication Successes
        
        ## Communication Development
        - Courses & Training
        - Feedback Methods Used
        - Areas Currently Improving
      `
    }
  ];

  return <div className="min-h-screen flex flex-col">
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
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
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
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
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
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
                        View full session plan →
                      </a>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Tech Literacy Fundamentals</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Basic tech literacy skills workshop designed for students with minimal prior exposure to technology.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 3 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Basic computer operations, internet searching skills, online safety, simple productivity tools
                          </p>
                        </div>
                      </div>
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
                        View full session plan →
                      </a>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Growth Mindset Development</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Workshop focused on developing a growth mindset, resilience, and forward thinking abilities.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 2 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Understanding growth vs fixed mindset, practicing resilience, developing goal-setting habits
                          </p>
                        </div>
                      </div>
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
                        View full session plan →
                      </a>
                    </div>
                    
                    <div className="border border-gray-100 rounded-lg p-4 bg-white">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 mr-2 text-fss-primary" />
                        <h3 className="font-semibold">Problem-Solving Techniques</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Interactive workshop on developing creative and critical problem-solving skills.
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">Duration: 2.5 hours</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                          <p className="text-sm text-gray-600">
                            Objectives: Learn problem identification, brainstorming techniques, solution evaluation methods
                          </p>
                        </div>
                      </div>
                      
                      <a href="#" className="text-sm text-fss-primary hover:text-fss-secondary font-medium">
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
                    {portfolioTemplates.map((template) => (
                      <div key={template.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                            Portfolio Template Preview
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">{template.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {template.description}
                          </p>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-sm text-fss-primary hover:text-fss-secondary flex items-center"
                              onClick={() => setOpenTemplate(template.id)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Template
                            </Button>
                            <a 
                              href={template.downloadUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 shadow-sm bg-white text-fss-primary hover:bg-gray-50"
                              download={`${template.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Dialog open={!!openTemplate} onOpenChange={() => setOpenTemplate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {portfolioTemplates.find(t => t.id === openTemplate)?.name || "Portfolio Template"}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 whitespace-pre-wrap font-mono text-sm bg-gray-50 p-6 rounded-md">
            {portfolioTemplates.find(t => t.id === openTemplate)?.content || ""}
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={() => setOpenTemplate(null)}>
              Close
            </Button>
            <a 
              href={portfolioTemplates.find(t => t.id === openTemplate)?.downloadUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 font-medium rounded-md border border-transparent shadow-sm bg-fss-primary text-white hover:bg-fss-secondary"
              download={`${portfolioTemplates.find(t => t.id === openTemplate)?.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Template
            </a>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>;
};
export default TeachingTools;

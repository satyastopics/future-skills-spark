
import { useState } from "react";
import { Search, Clock, Calendar, Users, Download, FileDown, Filter, CheckCircle, BookOpen, ScaleBattery, PuzzleSolver, ChevronDown, ChevronUp, PenLine, Briefcase, Brain } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

enum FrequencyType {
  WEEKLY = "weekly",
  BIWEEKLY = "biweekly", 
  MONTHLY = "monthly",
}

enum GroupSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type ResourceType = "handout" | "activity" | "assessment" | "guide" | "template";

interface SessionResource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  downloadUrl: string;
}

interface GuidanceSession {
  id: string;
  title: string;
  description: string;
  duration: number;
  phase: "assessment" | "exploration" | "development" | "implementation" | "refinement";
  groupSize: GroupSize;
  frequency: FrequencyType;
  objectives: string[];
  structure: {
    activity: string;
    timeAllocation: number;
    description: string;
    materials: string[];
  }[];
  adaptations: {
    scenario: string;
    adjustment: string;
  }[];
  resources: SessionResource[];
  notes: string;
}

const sessionData: GuidanceSession[] = [
  {
    id: "initial-assessment",
    title: "Initial Skill Assessment & Career Exploration",
    description: "Help students discover their existing skills and explore potential high-income career paths that match their interests and strengths.",
    duration: 60,
    phase: "assessment",
    groupSize: GroupSize.LARGE,
    frequency: FrequencyType.MONTHLY,
    objectives: [
      "Identify existing skills and strengths in students",
      "Introduce various high-income skill pathways",
      "Help students begin to form career interests",
      "Create baseline skill portfolios"
    ],
    structure: [
      {
        activity: "Introduction & Overview",
        timeAllocation: 10,
        description: "Explain the purpose of skill portfolio building and how it connects to future careers and financial independence.",
        materials: ["Program overview handout", "Projector/Whiteboard (if available)"]
      },
      {
        activity: "Self-Assessment Activity",
        timeAllocation: 15,
        description: "Students complete a skills inventory worksheet identifying their existing skills, interests, and strengths.",
        materials: ["Skills inventory worksheets", "Pens/pencils"]
      },
      {
        activity: "High-Income Skill Pathways Introduction",
        timeAllocation: 15,
        description: "Present various skill pathway options with real-world examples of how they translate to income opportunities.",
        materials: ["Career pathways handout", "Success stories printouts"]
      },
      {
        activity: "Group Discussion & Questions",
        timeAllocation: 10,
        description: "Facilitate discussion about skills and pathways that sparked interest and address student questions.",
        materials: ["Discussion prompt cards"]
      },
      {
        activity: "Initial Portfolio Setup & Next Steps",
        timeAllocation: 10,
        description: "Students begin documenting their existing skills and interests in portfolio templates and select 2-3 pathways they want to explore further.",
        materials: ["Portfolio starter templates", "Career interest forms"]
      }
    ],
    adaptations: [
      {
        scenario: "Limited time (30-40 minutes only)",
        adjustment: "Focus on the self-assessment and a brief overview of pathways. Assign the portfolio setup as take-home work."
      },
      {
        scenario: "Large class size (30+ students)",
        adjustment: "Use peer assessment pairs for the skills inventory portion and conduct pathway introductions with visual aids for larger groups."
      },
      {
        scenario: "Students struggling to identify skills",
        adjustment: "Provide a comprehensive skill checklist where students can mark abilities they possess rather than generating them independently."
      }
    ],
    resources: [
      {
        id: "skills-inventory",
        title: "Comprehensive Skills Inventory Worksheet",
        type: "assessment",
        description: "Helps students identify existing skills across technical, soft, and creative domains.",
        downloadUrl: "/resources/skills-inventory.pdf"
      },
      {
        id: "career-pathways",
        title: "High-Income Skill Pathways Overview",
        type: "handout",
        description: "Visual guide to various high-income skill paths with income potential and growth trajectories.",
        downloadUrl: "/resources/career-pathways.pdf"
      },
      {
        id: "portfolio-template",
        title: "Starter Portfolio Template",
        type: "template",
        description: "Simple template for students to document their skills, interests, and pathway preferences.",
        downloadUrl: "/resources/starter-portfolio.pdf"
      },
      {
        id: "success-stories",
        title: "Real-World Success Stories",
        type: "handout",
        description: "Examples of individuals who built skill portfolios and achieved financial success, emphasizing different pathways.",
        downloadUrl: "/resources/success-stories.pdf"
      }
    ],
    notes: "This initial session sets the foundation for the entire program. Pay special attention to students who seem unsure or overwhelmed - they may need additional guidance in selecting pathways that match their strengths."
  },
  {
    id: "group-formation",
    title: "Interest Group Formation & Pathway Deep Dive",
    description: "Organize students into interest groups based on chosen pathways and facilitate deeper exploration of skill requirements and opportunities.",
    duration: 50,
    phase: "exploration",
    groupSize: GroupSize.MEDIUM,
    frequency: FrequencyType.BIWEEKLY,
    objectives: [
      "Form student groups based on shared interests",
      "Deep dive into specific skill pathways",
      "Explore real-world applications of skills",
      "Develop initial learning roadmaps"
    ],
    structure: [
      {
        activity: "Review & Group Assignment",
        timeAllocation: 10,
        description: "Briefly review previous session outcomes and organize students into 3-6 groups based on their pathway interests.",
        materials: ["Group assignment sheets", "Pathway interest forms from previous session"]
      },
      {
        activity: "Pathway Exploration Activity",
        timeAllocation: 15,
        description: "Groups explore their chosen pathways in detail using guided worksheets covering skill requirements, learning resources, and application opportunities.",
        materials: ["Pathway exploration worksheets", "Skill tree templates"]
      },
      {
        activity: "Skill Gap Analysis",
        timeAllocation: 10,
        description: "Students identify gaps between current skills and pathway requirements, creating a prioritized list of skills to develop.",
        materials: ["Skill gap analysis worksheets", "Pathway requirement cards"]
      },
      {
        activity: "Learning Roadmap Creation",
        timeAllocation: 10,
        description: "Groups collaborate to create learning roadmaps with milestones for skill acquisition and portfolio development.",
        materials: ["Learning roadmap templates", "Milestone stickers/markers"]
      },
      {
        activity: "Group Presentations & Feedback",
        timeAllocation: 5,
        description: "Each group briefly presents their pathway focus and receives feedback from teacher and peers.",
        materials: ["Feedback forms"]
      }
    ],
    adaptations: [
      {
        scenario: "Very small class (fewer than 15 students)",
        adjustment: "Form just 2-3 broader interest groups and allow for more personalized roadmap development within each group."
      },
      {
        scenario: "Uneven distribution of interests",
        adjustment: "Create multi-pathway groups where necessary, identifying common underlying skills that span multiple pathways."
      },
      {
        scenario: "Limited meeting frequency (monthly sessions only)",
        adjustment: "Provide more detailed take-home materials and optional peer meetup guidelines for students to continue exploration between sessions."
      }
    ],
    resources: [
      {
        id: "pathway-exploration",
        title: "Pathway Exploration Worksheet Pack",
        type: "activity",
        description: "Detailed exploration guides for each major skill pathway with guided reflection questions.",
        downloadUrl: "/resources/pathway-exploration.pdf"
      },
      {
        id: "skill-gap",
        title: "Skill Gap Analysis Tool",
        type: "assessment",
        description: "Framework for identifying and prioritizing skill development needs based on pathway requirements.",
        downloadUrl: "/resources/skill-gap-analysis.pdf"
      },
      {
        id: "learning-roadmap",
        title: "Learning Roadmap Template",
        type: "template",
        description: "Visual planning tool for mapping skill acquisition over time with milestone markers.",
        downloadUrl: "/resources/learning-roadmap.pdf"
      },
      {
        id: "peer-meetup",
        title: "Peer Learning Circle Guidelines",
        type: "guide",
        description: "Structure for student-led learning sessions between formal guidance meetings.",
        downloadUrl: "/resources/peer-circle-guide.pdf"
      }
    ],
    notes: "Group formation is crucial for peer support and collaborative learning. Try to balance groups not just by interest but also by existing skill levels to encourage peer mentoring opportunities."
  },
  {
    id: "core-skills",
    title: "Universal High-Value Skills Development",
    description: "Focus on developing core transferable skills that are valuable across all career paths and essential for future readiness.",
    duration: 60,
    phase: "development",
    groupSize: GroupSize.LARGE,
    frequency: FrequencyType.WEEKLY,
    objectives: [
      "Develop foundational communication skills", 
      "Build critical thinking frameworks",
      "Introduce basic digital literacy concepts",
      "Practice collaborative problem-solving"
    ],
    structure: [
      {
        activity: "Core Skills Introduction",
        timeAllocation: 10,
        description: "Explain the importance of universal high-value skills that transfer across all career paths and their role in portfolio building.",
        materials: ["Core skills handout", "Skills value matrix"]
      },
      {
        activity: "Communication Skills Workshop",
        timeAllocation: 15,
        description: "Practice structured communication exercises focusing on clarity, confidence, and persuasion.",
        materials: ["Communication scenario cards", "Feedback rubric"]
      },
      {
        activity: "Critical Thinking Challenge",
        timeAllocation: 15,
        description: "Work through real-world problems using structured critical thinking frameworks in small groups.",
        materials: ["Problem scenario cards", "Critical thinking framework worksheets"]
      },
      {
        activity: "Digital Concepts Overview",
        timeAllocation: 10,
        description: "Introduce essential digital concepts through visual aids and simple exercises that don't require technology.",
        materials: ["Digital concepts visual guides", "Paper-based digital simulation activities"]
      },
      {
        activity: "Portfolio Documentation",
        timeAllocation: 10,
        description: "Students document newly practiced skills in their portfolios with specific examples and reflection.",
        materials: ["Portfolio worksheets", "Skill evidence log templates"]
      }
    ],
    adaptations: [
      {
        scenario: "Advanced students who already possess basic skills",
        adjustment: "Provide peer teaching opportunities where these students can help others while deepening their own understanding."
      },
      {
        scenario: "Students struggling with abstract concepts",
        adjustment: "Use more concrete, relevant examples that connect directly to students' lives and interests."
      },
      {
        scenario: "Limited materials",
        adjustment: "Focus on discussion-based activities and simple role plays that require minimal resources."
      }
    ],
    resources: [
      {
        id: "comm-scenarios",
        title: "Communication Scenario Card Set",
        type: "activity",
        description: "Role play scenarios designed to practice different communication skills in professional contexts.",
        downloadUrl: "/resources/communication-scenarios.pdf"
      },
      {
        id: "critical-thinking",
        title: "Critical Thinking Framework Guide",
        type: "guide",
        description: "Step-by-step approaches to analyzing problems and developing solutions across different contexts.",
        downloadUrl: "/resources/critical-thinking.pdf"
      },
      {
        id: "digital-concepts",
        title: "Visual Guide to Essential Digital Concepts",
        type: "handout",
        description: "Illustrated explanations of key digital literacy concepts that can be taught without computers.",
        downloadUrl: "/resources/digital-concepts.pdf"
      },
      {
        id: "skill-evidence",
        title: "Skill Evidence Documentation Templates",
        type: "template",
        description: "Frameworks for recording specific examples of skills practiced and reflections on growth.",
        downloadUrl: "/resources/skill-evidence.pdf"
      }
    ],
    notes: "This session works well as a recurring foundation that can be revisited with increasing complexity. These core skills support all specialized pathways, so even students with different career interests benefit from this shared development."
  },
  {
    id: "pathway-specific",
    title: "Pathway-Specific Skill Building Workshop",
    description: "Focused skill development session tailored to specific interest groups where students practice skills central to their chosen pathways.",
    duration: 50,
    phase: "development",
    groupSize: GroupSize.SMALL,
    frequency: FrequencyType.BIWEEKLY,
    objectives: [
      "Build specific high-income skills within chosen pathways",
      "Practice real-world application scenarios",
      "Create portfolio-worthy skill demonstrations",
      "Develop peer feedback capabilities"
    ],
    structure: [
      {
        activity: "Skill Focus Introduction",
        timeAllocation: 5,
        description: "Briefly introduce the specific skills being targeted in each pathway group with examples of their application.",
        materials: ["Pathway skill focus sheets", "Application example cards"]
      },
      {
        activity: "Guided Practice",
        timeAllocation: 20,
        description: "Students work through structured practice activities specific to their pathway group's focus skills.",
        materials: ["Pathway-specific practice materials", "Skill development worksheets"]
      },
      {
        activity: "Application Challenge",
        timeAllocation: 15,
        description: "Groups solve a realistic scenario requiring application of their target skills with constraints similar to real-world conditions.",
        materials: ["Challenge scenario cards", "Solution planning templates"]
      },
      {
        activity: "Peer Review & Refinement",
        timeAllocation: 5,
        description: "Students review each other's work using structured feedback protocols, identifying strengths and improvement areas.",
        materials: ["Peer feedback forms", "Skill rubrics"]
      },
      {
        activity: "Portfolio Documentation",
        timeAllocation: 5,
        description: "Students document their skill development process, including work samples and reflection on growth.",
        materials: ["Portfolio documentation templates", "Work sample capture guides"]
      }
    ],
    adaptations: [
      {
        scenario: "Mixed skill levels within pathway groups",
        adjustment: "Use tiered activities with core, intermediate, and challenge options that students can select based on their readiness."
      },
      {
        scenario: "Limited teacher knowledge in all pathway areas",
        adjustment: "Prepare structured, self-guided materials and identify student 'experts' who can assist peers."
      },
      {
        scenario: "Students wanting to explore multiple pathways",
        adjustment: "Create rotation opportunities where students can participate in different pathway activities across multiple sessions."
      }
    ],
    resources: [
      {
        id: "tech-practice",
        title: "Tech Skills Practice Pack",
        type: "activity",
        description: "Paper-based exercises for developing tech skills that can be applied when technology access is available.",
        downloadUrl: "/resources/tech-practice.pdf"
      },
      {
        id: "creative-practice",
        title: "Creative Skills Development Activities",
        type: "activity",
        description: "Structured exercises to develop design thinking, visual communication, and creative problem-solving.",
        downloadUrl: "/resources/creative-practice.pdf"
      },
      {
        id: "business-practice",
        title: "Business & Entrepreneurship Skill Building",
        type: "activity",
        description: "Practical activities for developing market analysis, value proposition, and business model skills.",
        downloadUrl: "/resources/business-practice.pdf"
      },
      {
        id: "communication-practice",
        title: "Advanced Communication Practice Set",
        type: "activity",
        description: "Exercises for developing persuasion, storytelling, and audience engagement skills.",
        downloadUrl: "/resources/communication-practice.pdf"
      },
      {
        id: "data-practice",
        title: "Data Skills Development Pack",
        type: "activity",
        description: "Activities to develop data literacy, analysis, and insight generation without requiring technology.",
        downloadUrl: "/resources/data-practice.pdf"
      }
    ],
    notes: "The key to effective pathway-specific sessions is balanced facilitation across groups. Move between groups to provide guidance while encouraging peer support within groups. Monitor for students who might benefit from exploring a different pathway if they're struggling to connect with their current choice."
  },
  {
    id: "portfolio-building",
    title: "Portfolio Development & Showcase Preparation",
    description: "Guide students in organizing and presenting their developing skills in a structured portfolio format that showcases their value to potential employers or clients.",
    duration: 60,
    phase: "implementation",
    groupSize: GroupSize.MEDIUM,
    frequency: FrequencyType.MONTHLY,
    objectives: [
      "Organize skill evidence effectively",
      "Create compelling skill demonstrations",
      "Develop portfolio presentation skills",
      "Prepare for real-world skill application"
    ],
    structure: [
      {
        activity: "Portfolio Structure Review",
        timeAllocation: 10,
        description: "Examine effective portfolio organization and how to highlight skills for maximum impact.",
        materials: ["Portfolio example handouts", "Organization templates"]
      },
      {
        activity: "Skill Evidence Curation",
        timeAllocation: 15,
        description: "Students select and refine their best skill demonstrations for inclusion in their portfolios.",
        materials: ["Evidence selection worksheets", "Curation guide"]
      },
      {
        activity: "Portfolio Narrative Development",
        timeAllocation: 15,
        description: "Create compelling descriptions and context for skill demonstrations that tell a coherent story about capabilities.",
        materials: ["Narrative framework templates", "Storytelling guides"]
      },
      {
        activity: "Peer Portfolio Review",
        timeAllocation: 10,
        description: "Students review each other's portfolios using a structured protocol and provide actionable feedback.",
        materials: ["Portfolio review rubrics", "Feedback forms"]
      },
      {
        activity: "Next Steps Planning",
        timeAllocation: 10,
        description: "Identify skill gaps and create action plans for continued portfolio development.",
        materials: ["Gap analysis worksheets", "Action plan templates"]
      }
    ],
    adaptations: [
      {
        scenario: "Limited materials for physical portfolios",
        adjustment: "Focus on simplified portfolio formats using available materials, with emphasis on content quality over presentation."
      },
      {
        scenario: "Students with limited work to showcase",
        adjustment: "Provide mini-project opportunities that can quickly generate portfolio-worthy demonstrations."
      },
      {
        scenario: "Varying levels of portfolio progress",
        adjustment: "Pair students at different stages for mutual support, with more advanced students mentoring those just beginning."
      }
    ],
    resources: [
      {
        id: "portfolio-templates",
        title: "Skill Portfolio Templates Pack",
        type: "template",
        description: "Various formats for organizing and presenting skills in accessible portfolio formats.",
        downloadUrl: "/resources/portfolio-templates.pdf"
      },
      {
        id: "evidence-guide",
        title: "Skill Evidence Selection Guide",
        type: "guide",
        description: "Framework for identifying and selecting the most compelling demonstrations of skills.",
        downloadUrl: "/resources/evidence-guide.pdf"
      },
      {
        id: "narrative-templates",
        title: "Portfolio Narrative Templates",
        type: "template",
        description: "Structured formats for writing compelling descriptions of skills and their applications.",
        downloadUrl: "/resources/narrative-templates.pdf"
      },
      {
        id: "portfolio-review",
        title: "Portfolio Peer Review Protocol",
        type: "activity",
        description: "Structured process for giving and receiving constructive feedback on portfolios.",
        downloadUrl: "/resources/portfolio-review.pdf"
      }
    ],
    notes: "Portfolio development sessions work best when spaced to allow time for students to generate evidence between sessions. Consider this session as a recurring checkpoint rather than a one-time activity."
  },
  {
    id: "real-world-application",
    title: "Real-World Application & Opportunity Identification",
    description: "Connect skill development to actual opportunities and help students identify ways to apply their skills in their current context.",
    duration: 50,
    phase: "implementation",
    groupSize: GroupSize.LARGE,
    frequency: FrequencyType.MONTHLY,
    objectives: [
      "Identify real-world applications for skills",
      "Connect to local and online opportunities",
      "Practice opportunity evaluation",
      "Build networking and presentation skills"
    ],
    structure: [
      {
        activity: "Opportunity Landscape Overview",
        timeAllocation: 10,
        description: "Present various ways students can apply their skills now, including local needs, online platforms, and community projects.",
        materials: ["Opportunity matrix handout", "Application pathway maps"]
      },
      {
        activity: "Opportunity Matching Exercise",
        timeAllocation: 15,
        description: "Students identify specific opportunities that match their skill portfolios and interests.",
        materials: ["Opportunity matching worksheets", "Skill-opportunity alignment guides"]
      },
      {
        activity: "Application Planning",
        timeAllocation: 10,
        description: "Develop concrete plans for applying skills to selected opportunities, including timelines and resource needs.",
        materials: ["Application planning templates", "Resource inventory worksheets"]
      },
      {
        activity: "Elevator Pitch Development",
        timeAllocation: 10,
        description: "Students create and practice concise presentations of their skills and value for potential opportunities.",
        materials: ["Pitch framework templates", "Feedback guides"]
      },
      {
        activity: "Next Steps Commitment",
        timeAllocation: 5,
        description: "Students commit to specific actions to pursue identified opportunities with accountability partners.",
        materials: ["Commitment forms", "Accountability partner worksheets"]
      }
    ],
    adaptations: [
      {
        scenario: "Limited local opportunities",
        adjustment: "Focus more on remote/online opportunities and skill applications within the school environment."
      },
      {
        scenario: "Students hesitant to pursue external opportunities",
        adjustment: "Start with lower-stakes applications like school projects or family/community needs."
      },
      {
        scenario: "Wide variation in student readiness for application",
        adjustment: "Provide tiered opportunity options ranging from simple starter projects to more complex applications."
      }
    ],
    resources: [
      {
        id: "opportunity-guide",
        title: "Skill Application Opportunity Guide",
        type: "guide",
        description: "Comprehensive overview of ways to apply different skill sets in various contexts.",
        downloadUrl: "/resources/opportunity-guide.pdf"
      },
      {
        id: "pitch-templates",
        title: "Skill Presentation & Pitch Templates",
        type: "template",
        description: "Frameworks for creating compelling presentations of skills and value to others.",
        downloadUrl: "/resources/pitch-templates.pdf"
      },
      {
        id: "online-platforms",
        title: "Online Opportunity Platform Guide",
        type: "handout",
        description: "Overview of online platforms where students can showcase and apply skills, even with limited internet access.",
        downloadUrl: "/resources/online-platforms.pdf"
      },
      {
        id: "local-needs",
        title: "Local Needs Assessment Guide",
        type: "activity",
        description: "Process for identifying skill application opportunities in the local community.",
        downloadUrl: "/resources/local-needs.pdf"
      }
    ],
    notes: "This session helps students bridge from learning to application, which is crucial for building confidence and seeing the real value of their developing skills. Ensure you have identified some concrete opportunities beforehand that students could realistically pursue."
  },
  {
    id: "progress-reflection",
    title: "Progress Review & Portfolio Refinement",
    description: "Guide students in assessing their progress, refining their portfolios, and setting new development goals based on their experiences.",
    duration: 50,
    phase: "refinement",
    groupSize: GroupSize.LARGE,
    frequency: FrequencyType.BIWEEKLY,
    objectives: [
      "Reflect on skill development progress",
      "Refine portfolios based on experience",
      "Identify new learning priorities",
      "Celebrate growth and achievements"
    ],
    structure: [
      {
        activity: "Progress Self-Assessment",
        timeAllocation: 10,
        description: "Students evaluate their progress against their initial plans and identify growth areas using structured reflection.",
        materials: ["Progress assessment worksheets", "Initial planning documents"]
      },
      {
        activity: "Peer Success Sharing",
        timeAllocation: 15,
        description: "In small groups, students share successes, challenges, and lessons learned from their skill application experiences.",
        materials: ["Experience sharing prompts", "Lesson learned capture sheets"]
      },
      {
        activity: "Portfolio Enhancement",
        timeAllocation: 15,
        description: "Based on experiences and feedback, students refine their portfolios to better showcase their developed skills.",
        materials: ["Portfolio revision guides", "Enhancement checklists"]
      },
      {
        activity: "Next Phase Planning",
        timeAllocation: 10,
        description: "Students set new skill development goals and create action plans for the next phase of growth.",
        materials: ["Goal-setting templates", "Action planning worksheets"]
      }
    ],
    adaptations: [
      {
        scenario: "Students discouraged by limited progress",
        adjustment: "Focus on small wins and incremental growth, using concrete examples of how skills have developed from starting point."
      },
      {
        scenario: "Highly varied progress among students",
        adjustment: "Use peer mentoring pairs where students with more progress can support those who are still developing."
      },
      {
        scenario: "Limited time for full session",
        adjustment: "Focus on the self-assessment and next phase planning, with abbreviated sharing component."
      }
    ],
    resources: [
      {
        id: "progress-assessment",
        title: "Skill Development Progress Assessment",
        type: "assessment",
        description: "Comprehensive tool for evaluating growth across various skill domains and portfolio development.",
        downloadUrl: "/resources/progress-assessment.pdf"
      },
      {
        id: "reflection-guide",
        title: "Structured Reflection Guide",
        type: "guide",
        description: "Framework for meaningful reflection on learning experiences and skill application.",
        downloadUrl: "/resources/reflection-guide.pdf"
      },
      {
        id: "portfolio-enhancement",
        title: "Portfolio Enhancement Checklist",
        type: "template",
        description: "Structured process for refining and improving skill portfolios based on experience.",
        downloadUrl: "/resources/portfolio-enhancement.pdf"
      },
      {
        id: "goal-revision",
        title: "Goal Revision & Action Planning Tool",
        type: "template",
        description: "Framework for setting new development goals based on progress and experiences.",
        downloadUrl: "/resources/goal-revision.pdf"
      }
    ],
    notes: "This reflective session is crucial for consolidating learning and ensuring continued growth. Schedule these regularly to maintain momentum and help students see their progress over time."
  }
];

const GuidanceProgramBuilder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterFrequency, setFilterFrequency] = useState<string>("all");
  const [filterPhase, setFilterPhase] = useState<string>("all");
  const [filterGroupSize, setFilterGroupSize] = useState<string>("all");
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleDownload = (resourceId: string, resourceName: string) => {
    // In a real app, this would download the file
    // For now we just show a toast notification
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

  // Helper to get icon for resource type
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case "handout": return <FileDown className="h-4 w-4" />;
      case "activity": return <PuzzleSolver className="h-4 w-4" />;
      case "assessment": return <ScaleBattery className="h-4 w-4" />;
      case "guide": return <BookOpen className="h-4 w-4" />;
      case "template": return <PenLine className="h-4 w-4" />;
      default: return <FileDown className="h-4 w-4" />;
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
    <div>
      <div className="mb-8 bg-white p-6 rounded-lg border border-gray-100">
        <h2 className="text-2xl font-semibold mb-3">Program Builder Overview</h2>
        <p className="text-gray-600 mb-4">
          This comprehensive toolkit helps you build and deliver effective guidance programs for students developing high-income skill portfolios. 
          The resources below are adaptable to any teaching schedule - whether you meet with students twice weekly or just once a month.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-fss-primary" />
                Program Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Divide each classroom into 3-6 interest-based groups. Allow students to choose pathways based on their strengths and interests, 
                then provide targeted guidance to each group while maintaining whole-class activities for universal skills.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-fss-primary" />
                Flexible Scheduling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                These sessions work with any schedule frequency. Filter below for weekly, bi-weekly, or monthly options based on your availability.
                Each session can be adapted to different time allocations while maintaining core objectives.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Brain className="h-5 w-5 mr-2 text-fss-primary" />
                Skill Development Phases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                The program follows five key phases: Assessment, Exploration, Development, Implementation, and Refinement.
                These create a complete cycle that can be repeated with increasing complexity as students progress.
              </p>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="getting-started">
            <AccordionTrigger className="text-fss-primary">Getting Started Guide</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-gray-600 text-sm">
                <p><strong>Step 1:</strong> Begin with an Initial Assessment session (see below) to help students discover their interests and existing skills.</p>
                <p><strong>Step 2:</strong> Form interest-based groups around common skill pathways selected by students.</p>
                <p><strong>Step 3:</strong> Alternate between whole-class universal skill sessions and pathway-specific group sessions.</p>
                <p><strong>Step 4:</strong> Schedule regular portfolio development and reflection sessions to document progress.</p>
                <p><strong>Step 5:</strong> Connect skills to real-world applications as early as possible to maintain engagement.</p>
                <p className="font-medium text-fss-primary">Remember, you can implement this program successfully regardless of how frequently you meet with students - the session plans below can be adapted to any schedule.</p>
                <Button className="mt-2">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Program Guide
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-6">
        <div className="text-xl font-semibold mb-4">Guidance Session Plans</div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search session plans..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Select value={filterPhase} onValueChange={setFilterPhase}>
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Group Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Group Sizes</SelectItem>
                <SelectItem value={GroupSize.SMALL}>Small Groups</SelectItem>
                <SelectItem value={GroupSize.MEDIUM}>Medium Groups</SelectItem>
                <SelectItem value={GroupSize.LARGE}>Large Groups</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredSessions.length > 0 ? (
          <div className="space-y-6">
            {filteredSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Session Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{session.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{session.description}</p>
                    </div>
                    <Badge className={getPhaseColor(session.phase)}>
                      {getPhaseDisplayName(session.phase)}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3 items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {session.duration} minutes
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {getFrequencyDisplayName(session.frequency)}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {getGroupSizeDisplayName(session.groupSize)}
                    </div>
                  </div>
                </div>
                
                {/* Session Details Toggle Button */}
                <button
                  className="w-full px-4 py-2 text-left flex items-center justify-between text-fss-primary bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleSessionDetails(session.id)}
                >
                  <span className="font-medium">Session Details</span>
                  {expandedDetails === session.id ? 
                    <ChevronUp className="h-5 w-5" /> : 
                    <ChevronDown className="h-5 w-5" />
                  }
                </button>
                
                {/* Expanded Content */}
                {expandedDetails === session.id && (
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-800">Objectives</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {session.objectives.map((objective, idx) => (
                          <li key={idx}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-800">Session Structure</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-200 px-3 py-2 text-left">Activity</th>
                              <th className="border border-gray-200 px-3 py-2 text-left">Time</th>
                              <th className="border border-gray-200 px-3 py-2 text-left">Description</th>
                              <th className="border border-gray-200 px-3 py-2 text-left">Materials</th>
                            </tr>
                          </thead>
                          <tbody>
                            {session.structure.map((item, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="border border-gray-200 px-3 py-2 font-medium">{item.activity}</td>
                                <td className="border border-gray-200 px-3 py-2">{item.timeAllocation} min</td>
                                <td className="border border-gray-200 px-3 py-2">{item.description}</td>
                                <td className="border border-gray-200 px-3 py-2">
                                  <ul className="list-disc pl-5">
                                    {item.materials.map((material, midx) => (
                                      <li key={midx}>{material}</li>
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-800">Adaptations</h4>
                      <div className="space-y-2">
                        {session.adaptations.map((adaptation, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-md">
                            <div className="font-medium text-gray-700">{adaptation.scenario}</div>
                            <div className="text-gray-600">{adaptation.adjustment}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-800">Resources</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {session.resources.map((resource) => (
                          <div key={resource.id} className="border border-gray-200 rounded-md p-3 flex items-start">
                            <div className="mr-3 p-2 bg-gray-100 rounded-md">
                              {getResourceIcon(resource.type)}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-800">{resource.title}</h5>
                              <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDownload(resource.id, resource.title)}
                              >
                                <Download className="h-3.5 w-3.5 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {session.notes && (
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-3 text-amber-700">
                        <h4 className="font-medium mb-1 text-amber-800">Teacher Notes</h4>
                        <p className="text-sm">{session.notes}</p>
                      </div>
                    )}
                    
                    <div className="mt-4 flex justify-end">
                      <Button className="bg-fss-primary hover:bg-fss-secondary">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Session Plan
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <div className="text-gray-500">No session plans found matching your search.</div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setFilterFrequency("all");
                setFilterPhase("all");
                setFilterGroupSize("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-3">Program Implementation Support</h2>
        <p className="text-gray-600 mb-4">
          Need additional help implementing these guidance sessions? Download these supporting resources:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Teacher Preparation Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Complete preparation instructions to help you set up your guidance program with minimal resources.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Guide
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Group Formation Toolkit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Tools and activities to help you effectively divide students into interest-based skill development groups.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Toolkit
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Progress Tracking System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Simple, paper-based system for tracking student progress through their skill development journey.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download System
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuidanceProgramBuilder;

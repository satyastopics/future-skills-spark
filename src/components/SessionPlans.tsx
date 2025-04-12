
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Download, Printer, Clock, Users, Target, Bookmark, CheckCircle2, FileText, FolderTree, Stars, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Session plan categories
const CATEGORIES = [
  "Portfolio Development",
  "Career Exploration",
  "Technical Skills",
  "Communication Skills",
  "Future-Ready Skills",
  "Digital Literacy"
];

// Difficulty levels
const DIFFICULTY_LEVELS = ["Beginner", "Intermediate", "Advanced"];

// Duration options
const DURATION_OPTIONS = ["30 min", "45 min", "60 min", "90 min"];

const SessionPlans = () => {
  const [category, setCategory] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [duration, setDuration] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter session plans based on selected filters
  const filteredSessionPlans = sessionPlans.filter(plan => {
    const matchesCategory = category === "all" || plan.category === category;
    const matchesDifficulty = difficulty === "all" || plan.difficulty === difficulty;
    const matchesDuration = duration === "all" || plan.duration === duration;
    const matchesSearch = plan.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesDuration && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search session plans..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              className="w-full border border-gray-300 rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select 
              className="w-full border border-gray-300 rounded-md p-2"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="all">All Levels</option>
              {DIFFICULTY_LEVELS.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select 
              className="w-full border border-gray-300 rounded-md p-2"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="all">All Durations</option>
              {DURATION_OPTIONS.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Session plans list */}
      <div className="space-y-4">
        {filteredSessionPlans.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">No session plans match your filters. Try adjusting your search criteria.</p>
          </div>
        ) : (
          filteredSessionPlans.map((plan) => (
            <SessionPlanCard key={plan.id} plan={plan} />
          ))
        )}
      </div>
      
      {/* Quick-start guides */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick-Start Guides for Teachers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-2 flex items-center">
              <FolderTree className="h-5 w-5 mr-2 text-fss-primary" />
              First-Time Session Structure
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              A step-by-step guide for running your first skill-building session with a new group of students.
            </p>
            <Button
              size="sm"
              variant="outline" 
              className="flex items-center text-xs"
            >
              <Download className="h-3 w-3 mr-1" />
              Download Guide
            </Button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="font-medium mb-2 flex items-center">
              <Stars className="h-5 w-5 mr-2 text-fss-primary" />
              Career Assessment Methods
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Simple techniques to help students discover their interests and aptitudes without complex tools.
            </p>
            <Button
              size="sm"
              variant="outline" 
              className="flex items-center text-xs"
            >
              <Download className="h-3 w-3 mr-1" />
              Download Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Session Plan Card Component
const SessionPlanCard = ({ plan }: { plan: SessionPlan }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header section */}
      <div 
        className="p-4 cursor-pointer flex justify-between items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div className="flex items-center mb-2">
            {plan.icon}
            <h3 className="font-semibold ml-2">{plan.title}</h3>
          </div>
          
          <p className="text-sm text-gray-600">{plan.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline" className="bg-blue-50 text-xs">
              {plan.category}
            </Badge>
            <Badge variant="outline" className="bg-gray-50 text-xs">
              {plan.difficulty}
            </Badge>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              {plan.duration}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Users className="h-3 w-3 mr-1" />
              {plan.groupSize}
            </div>
          </div>
        </div>
        
        <Button
          size="sm"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {/* Expanded content */}
      <Collapsible open={isOpen}>
        <CollapsibleContent>
          <div className="border-t border-gray-100 p-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                <TabsTrigger value="structure" className="text-xs">Session Structure</TabsTrigger>
                <TabsTrigger value="materials" className="text-xs">Materials</TabsTrigger>
                <TabsTrigger value="notes" className="text-xs">Teacher Notes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center">
                      <Target className="h-4 w-4 mr-2 text-fss-primary" />
                      Objectives
                    </h4>
                    <ul className="ml-6 mt-2 list-disc text-sm text-gray-700 space-y-1">
                      {plan.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium flex items-center">
                      <Bookmark className="h-4 w-4 mr-2 text-fss-primary" />
                      Key Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {plan.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-fss-primary" />
                      Expected Outcomes
                    </h4>
                    <ul className="ml-6 mt-2 list-disc text-sm text-gray-700 space-y-1">
                      {plan.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="structure">
                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {plan.structure.map((section, index) => (
                      <AccordionItem value={`section-${index}`} key={index}>
                        <AccordionTrigger className="text-sm font-medium">
                          <div className="flex items-center">
                            <span className="bg-gray-100 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">
                              {index + 1}
                            </span>
                            {section.title} 
                            <span className="text-xs text-gray-500 ml-2">
                              ({section.duration})
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-7 text-sm text-gray-700 space-y-3">
                            <p>{section.description}</p>
                            <div>
                              <h5 className="font-medium text-xs uppercase text-gray-500 mb-1">Step-by-step</h5>
                              <ol className="list-decimal pl-5 space-y-1">
                                {section.steps.map((step, stepIdx) => (
                                  <li key={stepIdx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                            {section.tips && (
                              <div className="bg-amber-50 p-2 rounded-md">
                                <h5 className="font-medium text-xs uppercase text-amber-800 mb-1">Facilitation Tips</h5>
                                <p className="text-amber-700">{section.tips}</p>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
              
              <TabsContent value="materials">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Required Materials</h4>
                    <ul className="ml-6 list-disc text-sm text-gray-700 space-y-1">
                      {plan.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Printable Resources</h4>
                    <div className="space-y-2">
                      {plan.printables.map((printable, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-md bg-gray-50">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">{printable.name}</span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex items-center text-xs"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notes">
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Preparation Notes</h4>
                    <p className="text-gray-700">{plan.teacherNotes.preparation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Adaptations</h4>
                    <ul className="ml-6 list-disc text-gray-700 space-y-1">
                      {plan.teacherNotes.adaptations.map((adaptation, index) => (
                        <li key={index}>{adaptation}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Assessments</h4>
                    <p className="text-gray-700">{plan.teacherNotes.assessment}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Follow-up Activities</h4>
                    <ul className="ml-6 list-disc text-gray-700 space-y-1">
                      {plan.teacherNotes.followUp.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between">
              <Button
                size="sm"
                variant="outline"
                className="flex items-center"
              >
                <Printer className="h-4 w-4 mr-1" />
                Print Session Plan
              </Button>
              
              <Button
                size="sm"
                className="bg-fss-primary hover:bg-fss-secondary flex items-center"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Full Package
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Types for session plans
type SessionPlan = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  groupSize: string;
  objectives: string[];
  outcomes: string[];
  skills: string[];
  structure: {
    title: string;
    duration: string;
    description: string;
    steps: string[];
    tips?: string;
  }[];
  materials: string[];
  printables: {
    name: string;
    url: string;
  }[];
  teacherNotes: {
    preparation: string;
    adaptations: string[];
    assessment: string;
    followUp: string[];
  };
};

// Session plans data
const sessionPlans: SessionPlan[] = [
  {
    id: "career-exploration-intro",
    icon: <Target className="h-5 w-5 text-fss-primary" />,
    title: "Career Exploration & Skill Mapping Workshop",
    description: "Help students identify high-income skill paths that align with their interests, aptitudes, and future opportunities.",
    category: "Career Exploration",
    difficulty: "Beginner",
    duration: "60 min",
    groupSize: "Full class or groups of 5-8",
    objectives: [
      "Help students identify career interests and aptitudes",
      "Introduce the concept of high-income skills",
      "Map student interests to potential career paths",
      "Begin developing individual skill development roadmaps"
    ],
    outcomes: [
      "Students identify at least 2-3 potential career paths that interest them",
      "Students recognize how their existing strengths connect to high-income skills",
      "Each student starts a basic skill development roadmap",
      "Students understand next steps for skill exploration"
    ],
    skills: ["Self-assessment", "Career planning", "Goal setting", "Decision making", "Research skills"],
    structure: [
      {
        title: "Introduction & Self-Assessment",
        duration: "15 min",
        description: "Students complete a simple self-assessment to identify their interests, strengths, and values related to future careers.",
        steps: [
          "Distribute the 'Skills & Interests Inventory' worksheet to each student",
          "Explain that there are no right or wrong answers - the goal is self-discovery",
          "Guide students through the first section on existing skills and interests",
          "Have students identify their top 3 skill categories and 3 interest areas",
          "Briefly discuss how interests and skills can translate to career opportunities"
        ],
        tips: "For students who struggle with self-assessment, suggest they think about what activities they lose track of time doing, or ask them what friends and family say they're good at."
      },
      {
        title: "High-Income Skills Introduction",
        duration: "10 min",
        description: "Present key categories of high-income skills and discuss why they're valuable regardless of specific career paths.",
        steps: [
          "Use the 'High-Income Skills Framework' chart to introduce the six main skill categories",
          "Explain that high-income skills are those that: solve problems, create value, and are in demand",
          "Give examples of how each skill category translates to real-world roles",
          "Emphasize that most successful careers involve multiple skill categories",
          "Connect these skills back to students' self-assessment results"
        ]
      },
      {
        title: "Career Path Exploration",
        duration: "15 min",
        description: "Students match their interests and aptitudes to potential career paths using the career mapping tool.",
        steps: [
          "Distribute the 'Career Pathways Map' that shows connections between skills and careers",
          "Demonstrate how to use the map with a volunteer example",
          "Have students work independently to identify 2-3 potential career paths",
          "Encourage students to write questions about careers they don't know much about",
          "Facilitate small group discussions where students share their findings"
        ],
        tips: "Some students may not see their exact interest represented. Encourage them to look for related fields or ways to combine multiple interests into a unique path."
      },
      {
        title: "Building Initial Skill Roadmaps",
        duration: "15 min",
        description: "Students create initial skill development plans based on their identified career interests.",
        steps: [
          "Provide each student with the 'My Skill Development Roadmap' template",
          "Explain the template sections: career goals, required skills, existing strengths, development areas",
          "Guide students to fill out their personal roadmap based on earlier exercises",
          "Have students identify 1-2 immediate action steps they can take to develop a key skill",
          "Emphasize that roadmaps will evolve as they learn more"
        ]
      },
      {
        title: "Reflection & Next Steps",
        duration: "5 min",
        description: "Students reflect on their discoveries and commit to next steps in their skill development journey.",
        steps: [
          "Ask students to share one insight they gained during the session",
          "Explain how future sessions will build on this foundation",
          "Distribute the 'Career Research Assignment' for independent work",
          "Preview upcoming skill-building workshops based on common interests",
          "Collect completed worksheets to review before next session"
        ]
      }
    ],
    materials: [
      "Skills & Interests Inventory worksheets (1 per student)",
      "High-Income Skills Framework chart (1 for display)",
      "Career Pathways Map handouts (1 per student)",
      "My Skill Development Roadmap templates (1 per student)",
      "Career Research Assignment sheets (1 per student)",
      "Pencils and erasers",
      "Optional: colored markers or highlighters"
    ],
    printables: [
      {
        name: "Skills & Interests Inventory",
        url: "/printables/skills-interests-inventory.pdf"
      },
      {
        name: "High-Income Skills Framework",
        url: "/printables/high-income-skills-framework.pdf"
      },
      {
        name: "Career Pathways Map",
        url: "/printables/career-pathways-map.pdf"
      },
      {
        name: "My Skill Development Roadmap Template",
        url: "/printables/skill-development-roadmap.pdf"
      },
      {
        name: "Career Research Assignment",
        url: "/printables/career-research-assignment.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Review the career pathways map thoroughly before the session. Consider adding locally relevant career opportunities if available. For larger classes, prepare to divide students into groups of similar interests for the career exploration section.",
      adaptations: [
        "For younger students: Focus more on interests and less on specific career paths. Use more visual materials.",
        "For students with limited career awareness: Provide additional examples and consider inviting guest speakers from different fields if possible.",
        "For advanced students: Add a section where they research salary potential and market demand for their chosen paths."
      ],
      assessment: "Success can be measured by the quality and thoughtfulness of completed roadmaps. Look for realistic connections between interests, skills, and career paths. Students should demonstrate understanding that skills can be developed over time.",
      followUp: [
        "Review students' career interests to plan future targeted skill-building sessions",
        "Create small groups of students with similar interests for peer support",
        "Schedule one-on-one follow-ups with students who seem uncertain about their paths",
        "Connect interested students with any available mentorship opportunities"
      ]
    }
  },
  {
    id: "portfolio-development-intro",
    icon: <FolderOpen className="h-5 w-5 text-fss-primary" />,
    title: "Building Your First Skill Portfolio",
    description: "Guide students through creating a basic portfolio structure that showcases their developing high-income skills.",
    category: "Portfolio Development",
    difficulty: "Beginner",
    duration: "45 min",
    groupSize: "Groups of 4-6",
    objectives: [
      "Understand what makes an effective skill portfolio",
      "Create a physical portfolio structure that can be digitized later",
      "Learn how to document skills and achievements effectively",
      "Begin collecting portfolio evidence from existing work"
    ],
    outcomes: [
      "Each student creates a basic portfolio structure with sections",
      "Students identify at least 3-5 items to include in their portfolios",
      "Students understand how to frame skills for different audiences",
      "Students develop a system for ongoing portfolio maintenance"
    ],
    skills: ["Organization", "Self-presentation", "Documentation", "Evidence collection", "Reflection"],
    structure: [
      {
        title: "Portfolio Purpose & Structure",
        duration: "10 min",
        description: "Introduce the concept of skill portfolios and their importance for career development.",
        steps: [
          "Define what a skill portfolio is and why it's important",
          "Show examples of different portfolio types (paper-based and digital)",
          "Explain the core sections every portfolio should include",
          "Discuss how portfolios differ from resumes or CVs",
          "Introduce the Portfolio Planning Worksheet"
        ]
      },
      {
        title: "Core Portfolio Sections",
        duration: "15 min",
        description: "Guide students through setting up the essential sections of their portfolios with examples.",
        steps: [
          "Distribute portfolio folder materials to each student",
          "Help students create dividers for each major section",
          "Demonstrate how to create an effective skills summary page",
          "Guide students in brainstorming project examples for their portfolio",
          "Explain how to document learning experiences and achievements"
        ],
        tips: "Emphasize quality over quantity. A few well-documented examples are better than many superficial entries."
      },
      {
        title: "Evidence Collection Exercise",
        duration: "15 min",
        description: "Students practice identifying and documenting existing work as portfolio evidence.",
        steps: [
          "Hand out the 'Evidence Collection Guide' worksheet",
          "Explain the different types of evidence (projects, testimonials, certifications, etc.)",
          "Have students list 3-5 existing items they could add to their portfolio",
          "Demonstrate how to write effective descriptions for portfolio items",
          "Guide students in planning how to collect missing evidence"
        ]
      },
      {
        title: "Maintenance Plan & Next Steps",
        duration: "5 min",
        description: "Establish systems for regularly updating portfolios and tracking skill development.",
        steps: [
          "Introduce the Portfolio Maintenance Tracker",
          "Discuss how often to update portfolios (recommend monthly)",
          "Set expectations for portfolio reviews in future sessions",
          "Assign the first portfolio entry as homework",
          "Preview how portfolios will connect to future skill development"
        ]
      }
    ],
    materials: [
      "Portfolio folders (1 per student)",
      "Section dividers (5-6 per student)",
      "Portfolio Planning Worksheet (1 per student)",
      "Evidence Collection Guide (1 per student)",
      "Portfolio Maintenance Tracker (1 per student)",
      "Sample portfolio entries (for demonstration)",
      "Pens and pencils"
    ],
    printables: [
      {
        name: "Portfolio Planning Worksheet",
        url: "/printables/portfolio-planning-worksheet.pdf"
      },
      {
        name: "Evidence Collection Guide",
        url: "/printables/evidence-collection-guide.pdf"
      },
      {
        name: "Portfolio Maintenance Tracker",
        url: "/printables/portfolio-maintenance-tracker.pdf"
      },
      {
        name: "Sample Portfolio Entries",
        url: "/printables/sample-portfolio-entries.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Gather sample portfolios or create a simple example to show students. If possible, prepare a few examples relevant to different career interests identified in previous sessions.",
      adaptations: [
        "For students with limited materials: Focus on creating portfolio content lists that can be assembled later when resources allow.",
        "For tech-savvy students: Provide optional guidance for creating simple digital portfolios if resources permit.",
        "For advanced students: Introduce specialized portfolio sections for their specific career interests."
      ],
      assessment: "Evaluate initial portfolio structures for completeness and organization. Look for thoughtful selection of evidence items and clear connections to students' career interests.",
      followUp: [
        "Schedule regular portfolio check-ins (suggest once monthly)",
        "Help students identify opportunities to create portfolio-worthy projects",
        "Provide feedback on initial portfolio entries",
        "Connect portfolio development to subsequent skill-building workshops"
      ]
    }
  },
  {
    id: "communication-foundations",
    icon: <Users className="h-5 w-5 text-fss-primary" />,
    title: "Essential Communication Skills Workshop",
    description: "Develop fundamental verbal and written communication skills that enhance employability across all career paths.",
    category: "Communication Skills",
    difficulty: "Beginner",
    duration: "60 min",
    groupSize: "Pairs or small groups",
    objectives: [
      "Practice clear and concise verbal communication",
      "Develop active listening skills",
      "Learn basic principles of effective written communication",
      "Understand how to adapt communication for different audiences"
    ],
    outcomes: [
      "Students demonstrate improved clarity in verbal explanations",
      "Students practice giving and receiving feedback effectively",
      "Students create clear written communications for different purposes",
      "Students understand how communication impacts professional perception"
    ],
    skills: ["Verbal communication", "Active listening", "Written communication", "Feedback", "Audience awareness"],
    structure: [
      {
        title: "Communication Fundamentals",
        duration: "10 min",
        description: "Introduce key communication principles and their importance in professional settings.",
        steps: [
          "Discuss why communication is consistently rated as a top skill by employers",
          "Present the '4 C's of Communication': Clear, Concise, Correct, Complete",
          "Explain how communication varies across contexts (casual vs. professional)",
          "Introduce the Communication Self-Assessment worksheet",
          "Have students identify their communication strengths and growth areas"
        ]
      },
      {
        title: "Active Listening Exercise",
        duration: "15 min",
        description: "Students practice active listening techniques through paired exercises.",
        steps: [
          "Explain the components of active listening (attention, reflection, questions)",
          "Demonstrate good vs. poor listening with a volunteer",
          "Divide students into pairs and distribute topic cards",
          "Have students take turns speaking for 2 minutes while partners practice active listening",
          "After both turns, have students provide feedback using the Active Listening Checklist"
        ],
        tips: "For students who struggle with the open-ended format, provide specific topic prompts like 'Explain something you're knowledgeable about' or 'Describe a challenge you've overcome.'"
      },
      {
        title: "Clear Written Communication",
        duration: "20 min",
        description: "Practice writing clearly and effectively for different professional scenarios.",
        steps: [
          "Review principles of effective written communication using examples",
          "Distribute the Written Communication Scenarios worksheet",
          "Have students draft responses to 2-3 scenarios (email, message, instruction)",
          "Guide pairs in reviewing each other's writing using the feedback form",
          "Discuss common issues and improvement strategies as a group"
        ]
      },
      {
        title: "Communication Challenge: Explain Complex Ideas Simply",
        duration: "10 min",
        description: "Students practice explaining complex topics in simple, accessible language.",
        steps: [
          "Distribute the Complex Concept Cards to volunteers",
          "Challenge students to explain their concept in 60 seconds using simple language",
          "Have audience members provide feedback on clarity and comprehension",
          "Discuss strategies for simplifying complex information",
          "Connect this skill to workplace and interview scenarios"
        ]
      },
      {
        title: "Application & Reflection",
        duration: "5 min",
        description: "Students reflect on key learnings and plan specific communication improvements.",
        steps: [
          "Guide students in completing the Communication Skills Reflection form",
          "Have students identify one communication habit to change",
          "Introduce the Communication Practice Journal for ongoing improvement",
          "Explain how these skills will be applied in future portfolio development",
          "Assign a follow-up communication exercise"
        ]
      }
    ],
    materials: [
      "Communication Self-Assessment worksheets",
      "Active Listening Checklist (1 per pair)",
      "Topic cards for listening exercise",
      "Written Communication Scenarios worksheets",
      "Communication feedback forms",
      "Complex Concept Cards",
      "Communication Skills Reflection form",
      "Communication Practice Journal template"
    ],
    printables: [
      {
        name: "Communication Self-Assessment",
        url: "/printables/communication-self-assessment.pdf"
      },
      {
        name: "Active Listening Checklist",
        url: "/printables/active-listening-checklist.pdf"
      },
      {
        name: "Written Communication Scenarios",
        url: "/printables/written-communication-scenarios.pdf"
      },
      {
        name: "Communication Feedback Form",
        url: "/printables/communication-feedback-form.pdf"
      },
      {
        name: "Communication Skills Reflection",
        url: "/printables/communication-skills-reflection.pdf"
      },
      {
        name: "Communication Practice Journal",
        url: "/printables/communication-practice-journal.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Review the scenario cards and adjust examples to match students' experience levels and cultural context. For larger groups, prepare to circulate and provide feedback during pair exercises.",
      adaptations: [
        "For shy students: Begin with written exercises before moving to verbal communication.",
        "For advanced students: Add more complex scenarios and professional contexts.",
        "For mixed-level groups: Pair stronger communicators with those who need more support."
      ],
      assessment: "Look for improvement in clarity and structure of communication. Assess students' ability to adapt their communication style for different purposes and audiences.",
      followUp: [
        "Encourage students to practice active listening in daily conversations",
        "Assign communication challenges to complete before the next session",
        "Have students add communication work samples to their portfolios",
        "Integrate communication practice into all subsequent skill sessions"
      ]
    }
  },
  {
    id: "tech-literacy-fundamentals",
    icon: <FileText className="h-5 w-5 text-fss-primary" />,
    title: "Tech Literacy Fundamentals",
    description: "Build essential technology concepts and skills that apply even without constant computer access.",
    category: "Digital Literacy",
    difficulty: "Beginner",
    duration: "60 min",
    groupSize: "Full class or small groups",
    objectives: [
      "Build understanding of core technology concepts",
      "Learn basic terminology and principles that apply across platforms",
      "Develop technology problem-solving skills",
      "Understand digital safety and privacy fundamentals"
    ],
    outcomes: [
      "Students demonstrate understanding of key tech concepts",
      "Students can identify common technology tools and their purposes",
      "Students apply basic troubleshooting approaches to tech problems",
      "Students recognize important digital safety practices"
    ],
    skills: ["Digital literacy", "Problem-solving", "Adaptability", "Information management", "Critical thinking"],
    structure: [
      {
        title: "Technology Concepts Foundation",
        duration: "15 min",
        description: "Introduce core technology concepts using visual aids and hands-on materials.",
        steps: [
          "Use the Technology Concepts Map to introduce key terminology",
          "Explain how hardware, software, networks and data work together",
          "Demonstrate using physical props or diagrams how information flows through systems",
          "Have students complete the Tech Concepts Matching activity",
          "Review answers as a group and clarify misconceptions"
        ]
      },
      {
        title: "Digital Tools & Their Purposes",
        duration: "15 min",
        description: "Explore common software tools and platforms, focusing on their functions rather than specific interfaces.",
        steps: [
          "Introduce common categories of digital tools using the Digital Tools Chart",
          "For each category, discuss what problems these tools solve",
          "Have students brainstorm how these tools might be used in different careers",
          "Distribute the Tool/Task Matching Worksheet",
          "Guide students in matching appropriate tools to various work scenarios"
        ],
        tips: "Focus on the purpose and function of tools rather than specific brands or interfaces, which may change over time."
      },
      {
        title: "Problem-Solving with Technology",
        duration: "15 min",
        description: "Develop a systematic approach to solving technology problems without technical support.",
        steps: [
          "Introduce the SOLVE method for tech problems (State, Options, Learn, Verify, Extend)",
          "Walk through example problems using the SOLVE worksheet",
          "Divide students into groups and distribute Tech Problem Scenario cards",
          "Have groups apply the SOLVE method to their scenarios",
          "Groups present their solutions and reasoning to the class"
        ]
      },
      {
        title: "Digital Safety & Privacy Essentials",
        duration: "10 min",
        description: "Cover critical digital safety practices that protect personal information and digital well-being.",
        steps: [
          "Present the Digital Safety Checklist covering passwords, personal information, and online interactions",
          "Discuss real consequences of security and privacy breaches using simplified case studies",
          "Guide students through the Password Strength Exercise",
          "Introduce the concept of digital footprints and their impact on future opportunities",
          "Have students complete the Digital Safety Self-Assessment"
        ]
      },
      {
        title: "Application & Next Steps",
        duration: "5 min",
        description: "Connect tech literacy concepts to future skill building and create an action plan.",
        steps: [
          "Have students identify which tech skills are most relevant to their career interests",
          "Discuss how to develop tech skills with limited resource access",
          "Introduce the Tech Skills Action Plan template",
          "Assign the Technology Observation Journal for continued learning",
          "Preview upcoming sessions that will build on these foundations"
        ]
      }
    ],
    materials: [
      "Technology Concepts Map (visual aid)",
      "Tech Concepts Matching Activity sheets",
      "Digital Tools Chart (visual aid)",
      "Tool/Task Matching Worksheets",
      "SOLVE Method Worksheets",
      "Tech Problem Scenario cards",
      "Digital Safety Checklist",
      "Password Strength Exercise sheets",
      "Digital Safety Self-Assessment forms",
      "Tech Skills Action Plan templates",
      "Technology Observation Journal templates"
    ],
    printables: [
      {
        name: "Technology Concepts Map",
        url: "/printables/technology-concepts-map.pdf"
      },
      {
        name: "Tech Concepts Matching Activity",
        url: "/printables/tech-concepts-matching.pdf"
      },
      {
        name: "Digital Tools Chart",
        url: "/printables/digital-tools-chart.pdf"
      },
      {
        name: "Tool-Task Matching Worksheet",
        url: "/printables/tool-task-matching.pdf"
      },
      {
        name: "SOLVE Method Worksheet",
        url: "/printables/solve-method-worksheet.pdf"
      },
      {
        name: "Digital Safety Checklist",
        url: "/printables/digital-safety-checklist.pdf"
      },
      {
        name: "Tech Skills Action Plan",
        url: "/printables/tech-skills-action-plan.pdf"
      }
    ],
    teacherNotes: {
      preparation: "This session is designed to build tech understanding without requiring computer access. Prepare all visual aids in advance and, if possible, bring physical examples of technology components to demonstrate concepts.",
      adaptations: [
        "For students with some tech experience: Add more complex problem scenarios and focus more on troubleshooting.",
        "For students with very limited tech exposure: Spend more time on basic concepts and terminology.",
        "For mixed groups: Use peer teaching by pairing more tech-savvy students with beginners during group activities."
      ],
      assessment: "Success is measured by students' understanding of concepts rather than hands-on tech skills. Look for their ability to match tools to appropriate tasks and apply the problem-solving framework to new scenarios.",
      followUp: [
        "Suggest free community resources where students might access computers",
        "Provide a glossary of tech terms for continued reference",
        "Have students document technology they encounter in daily life in their journals",
        "Connect concepts to future career-specific technology sessions"
      ]
    }
  },
  {
    id: "growth-mindset-development",
    icon: <Target className="h-5 w-5 text-fss-primary" />,
    title: "Developing a Growth Mindset",
    description: "Foster resilience, adaptability, and continuous learning attitudes essential for long-term career success.",
    category: "Future-Ready Skills",
    difficulty: "Beginner",
    duration: "45 min",
    groupSize: "Any size",
    objectives: [
      "Understand fixed vs. growth mindset concepts",
      "Recognize personal mindset patterns",
      "Learn strategies for developing a stronger growth mindset",
      "Apply growth mindset principles to skill development challenges"
    ],
    outcomes: [
      "Students identify their own mindset patterns and triggers",
      "Students practice reframing challenges as opportunities",
      "Students develop personalized strategies for maintaining a growth mindset",
      "Students apply growth mindset language to their learning plans"
    ],
    skills: ["Resilience", "Adaptability", "Self-awareness", "Positive self-talk", "Emotional intelligence"],
    structure: [
      {
        title: "Mindset Foundations",
        duration: "10 min",
        description: "Introduce core concepts of fixed and growth mindsets and their impact on learning and success.",
        steps: [
          "Define fixed and growth mindsets using the Mindset Comparison Chart",
          "Share examples of how mindsets affect learning and skill development",
          "Guide students in completing the Mindset Self-Assessment",
          "Discuss how the brain changes through learning (neuroplasticity basics)",
          "Connect mindset concepts to high-income skill development"
        ]
      },
      {
        title: "Identifying Mindset Triggers",
        duration: "10 min",
        description: "Help students recognize situations that trigger fixed mindset reactions and how to address them.",
        steps: [
          "Introduce common mindset triggers: criticism, challenges, others' success, setbacks",
          "Have students reflect on their own triggers using the Triggers Worksheet",
          "Guide small group discussions about mindset experiences",
          "Demonstrate how to recognize fixed mindset self-talk",
          "Practice identifying fixed mindset language in scenario examples"
        ],
        tips: "Create a safe space for sharing by acknowledging that everyone experiences fixed mindset moments - what matters is recognizing and addressing them."
      },
      {
        title: "Growth Mindset Strategies",
        duration: "15 min",
        description: "Explore practical techniques for developing and maintaining a growth mindset during skill development.",
        steps: [
          "Present the Growth Mindset Strategy Toolkit with key approaches",
          "Model the process of reframing challenges using the Challenge Reframing Worksheet",
          "Practice using growth mindset language and questions",
          "Introduce the 'Yet' Strategy for managing frustration",
          "Have students create personal strategy cards for their specific triggers"
        ]
      },
      {
        title: "Application to Skill Development",
        duration: "8 min",
        description: "Connect growth mindset principles directly to students' skill development journeys and career goals.",
        steps: [
          "Have students identify a skill they find challenging",
          "Guide them through applying growth mindset strategies to that challenge",
          "Introduce the Progress Journal template for tracking growth",
          "Discuss how employers value growth mindset in employees",
          "Share examples of famous success stories that demonstrate persistence"
        ]
      },
      {
        title: "Commitment & Next Steps",
        duration: "2 min",
        description: "Students commit to specific mindset practices and establish accountability.",
        steps: [
          "Guide students in completing the Mindset Commitment form",
          "Establish mindset check-in partners for peer accountability",
          "Explain how mindset will be integrated into future skill sessions",
          "Distribute Growth Mindset Reminder cards",
          "Preview the connection to future resilience-building activities"
        ]
      }
    ],
    materials: [
      "Mindset Comparison Chart (visual aid)",
      "Mindset Self-Assessment worksheets",
      "Mindset Triggers Worksheets",
      "Growth Mindset Strategy Toolkit handouts",
      "Challenge Reframing Worksheets",
      "Progress Journal templates",
      "Mindset Commitment forms",
      "Growth Mindset Reminder cards"
    ],
    printables: [
      {
        name: "Mindset Comparison Chart",
        url: "/printables/mindset-comparison-chart.pdf"
      },
      {
        name: "Mindset Self-Assessment",
        url: "/printables/mindset-self-assessment.pdf"
      },
      {
        name: "Mindset Triggers Worksheet",
        url: "/printables/mindset-triggers-worksheet.pdf"
      },
      {
        name: "Growth Mindset Strategy Toolkit",
        url: "/printables/growth-mindset-toolkit.pdf"
      },
      {
        name: "Challenge Reframing Worksheet",
        url: "/printables/challenge-reframing-worksheet.pdf"
      },
      {
        name: "Progress Journal Template",
        url: "/printables/progress-journal-template.pdf"
      },
      {
        name: "Mindset Commitment Form",
        url: "/printables/mindset-commitment-form.pdf"
      }
    ],
    teacherNotes: {
      preparation: "This session works best when teachers model growth mindset themselves. Be prepared to share your own examples of overcoming challenges through effort and strategy changes.",
      adaptations: [
        "For younger students: Use more concrete examples and simplify the language around neuroplasticity.",
        "For students facing significant challenges: Incorporate additional examples of resilience relevant to their circumstances.",
        "For advanced students: Include more neuroscience background on how the brain changes with practice."
      ],
      assessment: "Look for changes in how students describe challenges and setbacks. Success indicators include increased use of growth-oriented language and willingness to attempt difficult tasks.",
      followUp: [
        "Incorporate regular mindset check-ins at the beginning of future sessions",
        "Encourage students to document their mindset shifts in their journals",
        "Celebrate effort and strategy use, not just achievement",
        "Connect with parents/guardians to share growth mindset concepts for reinforcement"
      ]
    }
  },
  {
    id: "critical-thinking-problem-solving",
    icon: <FileText className="h-5 w-5 text-fss-primary" />,
    title: "Critical Thinking & Problem-Solving Techniques",
    description: "Develop essential analytical skills that apply across all high-income careers and entrepreneurial paths.",
    category: "Future-Ready Skills",
    difficulty: "Intermediate",
    duration: "60 min",
    groupSize: "Small groups of 3-5",
    objectives: [
      "Learn systematic approaches to analyzing problems",
      "Practice breaking down complex challenges into manageable parts",
      "Develop evidence-based decision-making skills",
      "Apply creative thinking to generate multiple solution paths"
    ],
    outcomes: [
      "Students apply structured problem-solving frameworks to real challenges",
      "Students demonstrate ability to evaluate information critically",
      "Students generate multiple solution options for given scenarios",
      "Students create action plans for implementing solutions"
    ],
    skills: ["Critical thinking", "Analysis", "Decision-making", "Creativity", "Evaluation"],
    structure: [
      {
        title: "Problem-Solving Fundamentals",
        duration: "10 min",
        description: "Introduce systematic approaches to problem-solving and establish a common framework.",
        steps: [
          "Present the IDEAL Problem-Solving Framework: Identify, Define, Explore, Act, Look back",
          "Demonstrate the framework using a simple example problem",
          "Discuss how effective problem-solving is valued in high-income careers",
          "Distribute the Problem-Solving Self-Assessment",
          "Have students identify their current approach to challenges"
        ]
      },
      {
        title: "Problem Analysis Exercise",
        duration: "15 min",
        description: "Practice breaking down complex problems into components and root causes.",
        steps: [
          "Introduce techniques: 5 Whys, Problem Tree Analysis, and SWOT Analysis",
          "Demonstrate each technique with a simple example",
          "Divide students into groups and distribute Problem Scenario cards",
          "Guide groups in applying analysis techniques to their scenarios",
          "Have groups share their analyses and insights"
        ],
        tips: "Encourage students to dig deeper with each level of analysis. The first identified cause is rarely the root cause."
      },
      {
        title: "Solution Generation Workshop",
        duration: "15 min",
        description: "Apply creative thinking techniques to generate multiple potential solutions.",
        steps: [
          "Introduce ideation techniques: Brainstorming, Reverse Thinking, SCAMPER",
          "Demonstrate how to suspend judgment during idea generation",
          "Have groups generate solutions for their previously analyzed problems",
          "Guide students in using the Solution Evaluation Matrix",
          "Discuss how to balance creativity with practicality in solution development"
        ]
      },
      {
        title: "Decision-Making Framework",
        duration: "15 min",
        description: "Learn evidence-based approaches to evaluating options and making sound decisions.",
        steps: [
          "Present the Decision-Making Framework: Options, Criteria, Evidence, Decision, Action",
          "Guide students through the Decision Analysis Worksheet",
          "Discuss common decision-making biases and how to overcome them",
          "Have groups make and justify decisions for their problem scenarios",
          "Practice creating simple implementation plans"
        ]
      },
      {
        title: "Application & Reflection",
        duration: "5 min",
        description: "Connect problem-solving skills to personal goals and ongoing skill development.",
        steps: [
          "Have students complete the Problem-Solving Reflection form",
          "Identify a personal or school challenge to apply these techniques to",
          "Distribute the Problem-Solving Journal template",
          "Explain how to add problem-solving evidence to portfolios",
          "Preview how these skills connect to future sessions"
        ]
      }
    ],
    materials: [
      "IDEAL Problem-Solving Framework handout",
      "Problem-Solving Self-Assessment worksheets",
      "Problem Scenario cards",
      "Analysis Technique guides (5 Whys, Problem Tree, SWOT)",
      "Solution Evaluation Matrix worksheets",
      "Decision Analysis Worksheets",
      "Problem-Solving Reflection forms",
      "Problem-Solving Journal templates"
    ],
    printables: [
      {
        name: "IDEAL Problem-Solving Framework",
        url: "/printables/ideal-problem-solving-framework.pdf"
      },
      {
        name: "Problem-Solving Self-Assessment",
        url: "/printables/problem-solving-self-assessment.pdf"
      },
      {
        name: "Analysis Techniques Guide",
        url: "/printables/analysis-techniques-guide.pdf"
      },
      {
        name: "Solution Evaluation Matrix",
        url: "/printables/solution-evaluation-matrix.pdf"
      },
      {
        name: "Decision Analysis Worksheet",
        url: "/printables/decision-analysis-worksheet.pdf"
      },
      {
        name: "Problem-Solving Reflection",
        url: "/printables/problem-solving-reflection.pdf"
      },
      {
        name: "Problem-Solving Journal Template",
        url: "/printables/problem-solving-journal.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Review the problem scenario cards and consider creating additional scenarios relevant to your students' local context or interests. Prepare examples that demonstrate both successful and unsuccessful problem-solving approaches.",
      adaptations: [
        "For students who struggle with abstract thinking: Use more concrete, immediate problems related to their daily experiences.",
        "For advanced students: Add constraints to problem scenarios to increase complexity.",
        "For mixed groups: Create differentiated problem cards with varying levels of complexity."
      ],
      assessment: "Look for thorough analysis, diverse solution ideas, and well-reasoned decisions. Effective problem-solvers should consider multiple perspectives and anticipate potential issues with their solutions.",
      followUp: [
        "Assign real-world problems for students to analyze before the next session",
        "Create opportunities for students to observe and document problem-solving in action",
        "Connect these techniques to specific career fields based on student interests",
        "Integrate problem-solving challenges into other skill-building activities"
      ]
    }
  },
  {
    id: "entrepreneurial-mindset",
    icon: <Users className="h-5 w-5 text-fss-primary" />,
    title: "Developing an Entrepreneurial Mindset",
    description: "Build the entrepreneurial thinking patterns that drive success in both business ownership and employment.",
    category: "Future-Ready Skills",
    difficulty: "Intermediate",
    duration: "60 min",
    groupSize: "Any size, with small group activities",
    objectives: [
      "Understand the core components of entrepreneurial thinking",
      "Recognize opportunities in everyday challenges",
      "Develop creative approaches to resource constraints",
      "Learn basic value proposition creation"
    ],
    outcomes: [
      "Students identify entrepreneurial qualities they already possess",
      "Students practice converting problems into opportunities",
      "Students create simple value propositions for identified opportunities",
      "Students apply entrepreneurial thinking to their career development"
    ],
    skills: ["Opportunity recognition", "Initiative", "Resourcefulness", "Value creation", "Risk assessment"],
    structure: [
      {
        title: "Entrepreneurial Mindset Foundations",
        duration: "10 min",
        description: "Introduce the concept of entrepreneurial thinking and its relevance beyond business ownership.",
        steps: [
          "Define entrepreneurial mindset using the Entrepreneurial Traits Framework",
          "Distinguish between entrepreneurial thinking and business ownership",
          "Share examples of entrepreneurial thinking in various careers",
          "Guide students through the Entrepreneurial Self-Assessment",
          "Discuss how entrepreneurial skills connect to income potential"
        ]
      },
      {
        title: "Opportunity Recognition Workshop",
        duration: "15 min",
        description: "Practice identifying opportunities within everyday problems and challenges.",
        steps: [
          "Introduce the Problem-to-Opportunity Conversion Framework",
          "Demonstrate the process using a simple example",
          "Distribute the Community Challenge cards",
          "Have students work in pairs to identify opportunities within the challenges",
          "Guide group discussion on the most promising opportunities identified"
        ],
        tips: "Encourage students to look beyond obvious solutions. The best opportunities often address underlying needs in unexpected ways."
      },
      {
        title: "Resourcefulness Challenge",
        duration: "15 min",
        description: "Develop creative approaches to achieving goals despite resource constraints.",
        steps: [
          "Introduce the concept of resourcefulness as a key entrepreneurial trait",
          "Present the Resource Leverage Framework: Substitute, Combine, Adapt, Repurpose, Eliminate",
          "Divide class into small groups and distribute the Resource Challenge scenarios",
          "Have groups develop solutions using limited available resources",
          "Share and evaluate solutions based on creativity and feasibility"
        ]
      },
      {
        title: "Value Proposition Development",
        duration: "15 min",
        description: "Learn to create compelling value propositions for ideas and services.",
        steps: [
          "Introduce the Value Proposition Canvas components",
          "Demonstrate creating a simple value proposition for a familiar product/service",
          "Have students select one opportunity from earlier exercises",
          "Guide them through developing a value proposition using the worksheet",
          "Practice pitching value propositions to partners in 30 seconds"
        ]
      },
      {
        title: "Application & Next Steps",
        duration: "5 min",
        description: "Connect entrepreneurial thinking to personal career development and ongoing skill building.",
        steps: [
          "Discuss how entrepreneurial thinking applies to all career paths",
          "Have students complete the Entrepreneurial Mindset Reflection",
          "Introduce the Opportunity Journal for ongoing practice",
          "Explain how to document entrepreneurial thinking in portfolios",
          "Preview connection to future skill development sessions"
        ]
      }
    ],
    materials: [
      "Entrepreneurial Traits Framework (visual aid)",
      "Entrepreneurial Self-Assessment worksheets",
      "Problem-to-Opportunity Conversion Framework",
      "Community Challenge cards",
      "Resource Challenge scenarios",
      "Value Proposition Canvas worksheets",
      "Entrepreneurial Mindset Reflection forms",
      "Opportunity Journal templates"
    ],
    printables: [
      {
        name: "Entrepreneurial Traits Framework",
        url: "/printables/entrepreneurial-traits-framework.pdf"
      },
      {
        name: "Entrepreneurial Self-Assessment",
        url: "/printables/entrepreneurial-self-assessment.pdf"
      },
      {
        name: "Problem-to-Opportunity Framework",
        url: "/printables/problem-to-opportunity-framework.pdf"
      },
      {
        name: "Resource Leverage Framework",
        url: "/printables/resource-leverage-framework.pdf"
      },
      {
        name: "Value Proposition Canvas",
        url: "/printables/value-proposition-canvas.pdf"
      },
      {
        name: "Entrepreneurial Mindset Reflection",
        url: "/printables/entrepreneurial-mindset-reflection.pdf"
      },
      {
        name: "Opportunity Journal Template",
        url: "/printables/opportunity-journal-template.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Gather local examples of entrepreneurial success, particularly those that started with limited resources. If possible, adapt the community challenge cards to reflect issues relevant to your specific school community.",
      adaptations: [
        "For younger students: Focus more on creativity and problem-solving aspects, less on formal business concepts.",
        "For communities with limited business exposure: Incorporate more examples of entrepreneurial thinking in employment settings.",
        "For advanced students: Add market research components to the value proposition exercise."
      ],
      assessment: "Look for students' ability to reframe problems as opportunities and create value with limited resources. Effective entrepreneurial thinkers should demonstrate both creativity and practicality in their approaches.",
      followUp: [
        "Challenge students to find one opportunity in their daily lives each week",
        "Connect interested students with local entrepreneurs or business mentors if available",
        "Incorporate entrepreneurial challenges into future skill-building sessions",
        "Have students research entrepreneurial approaches within their chosen career fields"
      ]
    }
  },
  {
    id: "collaborative-teamwork",
    icon: <Users className="h-5 w-5 text-fss-primary" />,
    title: "Collaborative Teamwork Skills",
    description: "Develop essential skills for working effectively in teams across all professional environments.",
    category: "Future-Ready Skills",
    difficulty: "Intermediate",
    duration: "60 min",
    groupSize: "Groups of 4-6",
    objectives: [
      "Understand different team roles and their importance",
      "Develop effective team communication strategies",
      "Learn conflict resolution techniques for group settings",
      "Practice collaborative problem-solving methods"
    ],
    outcomes: [
      "Students identify their natural team role preferences",
      "Students effectively communicate ideas in team settings",
      "Students apply structured approaches to team decision-making",
      "Students demonstrate constructive conflict resolution strategies"
    ],
    skills: ["Collaboration", "Team communication", "Conflict resolution", "Role flexibility", "Group decision-making"],
    structure: [
      {
        title: "Team Dynamics Foundation",
        duration: "10 min",
        description: "Introduce key concepts in team effectiveness and the value of diverse roles.",
        steps: [
          "Present the Team Roles Framework showing complementary team functions",
          "Explain how different roles contribute to team success",
          "Guide students through the Team Role Preference Assessment",
          "Discuss how understanding one's preferred role impacts collaboration",
          "Connect effective teamwork to workplace success and income potential"
        ]
      },
      {
        title: "Communication for Collaboration",
        duration: "15 min",
        description: "Practice communication techniques specifically designed for team effectiveness.",
        steps: [
          "Introduce key team communication principles: clarity, active listening, checking understanding",
          "Demonstrate ineffective vs. effective team communication patterns",
          "Divide into groups for the Blind Drawing Communication Exercise",
          "Debrief on communication challenges and effective strategies",
          "Practice giving constructive input using the Feedback Framework"
        ],
        tips: "Emphasize that communication styles may need to adapt based on team dynamics and the specific task at hand."
      },
      {
        title: "Collaborative Problem-Solving",
        duration: "15 min",
        description: "Apply structured approaches to solving problems as a team.",
        steps: [
          "Present the Collaborative Problem-Solving Model",
          "Distribute Team Challenge scenarios to each group",
          "Guide teams through the structured problem-solving process",
          "Have groups document their process using the Team Decision Worksheet",
          "Discuss how the process differed from individual problem-solving"
        ]
      },
      {
        title: "Constructive Conflict Resolution",
        duration: "15 min",
        description: "Learn and practice techniques for addressing team conflicts productively.",
        steps: [
          "Define constructive vs. destructive conflict in teams",
          "Introduce the RESOLVE Conflict Framework for team settings",
          "Distribute Conflict Scenario cards to each team",
          "Have teams role-play resolution approaches for their scenarios",
          "Debrief on effective strategies and common pitfalls"
        ]
      },
      {
        title: "Application & Reflection",
        duration: "5 min",
        description: "Connect teamwork skills to career development and identify growth areas.",
        steps: [
          "Guide students in completing the Teamwork Skills Reflection",
          "Have students identify one teamwork habit to improve",
          "Discuss how to document teamwork skills in portfolios",
          "Explain ongoing team challenges for future sessions",
          "Connect teamwork skills to specific career interests"
        ]
      }
    ],
    materials: [
      "Team Roles Framework chart",
      "Team Role Preference Assessment worksheets",
      "Blind Drawing Communication Exercise materials",
      "Feedback Framework handouts",
      "Collaborative Problem-Solving Model guide",
      "Team Challenge scenarios",
      "Team Decision Worksheets",
      "RESOLVE Conflict Framework guide",
      "Conflict Scenario cards",
      "Teamwork Skills Reflection forms"
    ],
    printables: [
      {
        name: "Team Roles Framework",
        url: "/printables/team-roles-framework.pdf"
      },
      {
        name: "Team Role Preference Assessment",
        url: "/printables/team-role-preference-assessment.pdf"
      },
      {
        name: "Feedback Framework Guide",
        url: "/printables/feedback-framework-guide.pdf"
      },
      {
        name: "Collaborative Problem-Solving Model",
        url: "/printables/collaborative-problem-solving-model.pdf"
      },
      {
        name: "Team Decision Worksheet",
        url: "/printables/team-decision-worksheet.pdf"
      },
      {
        name: "RESOLVE Conflict Framework",
        url: "/printables/resolve-conflict-framework.pdf"
      },
      {
        name: "Teamwork Skills Reflection",
        url: "/printables/teamwork-skills-reflection.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Form balanced teams before the session if possible, mixing students with different communication styles and strengths. Prepare to adjust group composition if certain dynamics aren't productive.",
      adaptations: [
        "For groups with existing conflict: Begin with more structured activities and clear ground rules.",
        "For shy or reserved students: Use written brainstorming techniques before verbal sharing.",
        "For advanced students: Add complexity to the team challenges or add leadership rotation components."
      ],
      assessment: "Effective teamwork is shown through balanced participation, constructive communication, and the ability to leverage diverse perspectives. Look for how students handle disagreements and whether quieter members' input is incorporated.",
      followUp: [
        "Create opportunities for students to work in different team configurations",
        "Have students document specific teamwork contributions in their portfolios",
        "Introduce more complex team challenges in future sessions",
        "Connect teamwork skills to specific workplace scenarios in students' fields of interest"
      ]
    }
  },
  {
    id: "job-search-interview",
    icon: <FileText className="h-5 w-5 text-fss-primary" />,
    title: "Job Search & Interview Skills",
    description: "Build practical skills for finding opportunities and presenting yourself effectively to employers or clients.",
    category: "Career Exploration",
    difficulty: "Advanced",
    duration: "90 min",
    groupSize: "Any size, with pair activities",
    objectives: [
      "Learn effective job search techniques with limited resources",
      "Create strong application materials that highlight skills",
      "Develop interview preparation strategies",
      "Practice responding to common interview questions"
    ],
    outcomes: [
      "Students create a functional CV/resume highlighting their skills",
      "Students demonstrate strong responses to common interview questions",
      "Students identify relevant job search strategies for their situation",
      "Students develop a plan for building job search networks"
    ],
    skills: ["Self-presentation", "Communication", "Research", "Networking", "Preparation"],
    structure: [
      {
        title: "Job Search Fundamentals",
        duration: "15 min",
        description: "Explore effective approaches to finding opportunities even with limited resources.",
        steps: [
          "Discuss various job search channels: formal, informal, and hidden job markets",
          "Present the Opportunity Finding Framework for limited-resource settings",
          "Guide students through the Job Search Planning worksheet",
          "Discuss networking strategies that don't require technology",
          "Introduce the concept of informational interviews"
        ]
      },
      {
        title: "Creating Effective Application Materials",
        duration: "25 min",
        description: "Develop compelling resumes/CVs and application letters focused on skills and potential.",
        steps: [
          "Present principles of effective resumes using the Resume Structure Guide",
          "Review sample resumes highlighting different approaches",
          "Guide students in listing their key skills and experiences",
          "Demonstrate how to craft achievement statements using the PAR formula",
          "Have students create a basic resume outline using the template provided"
        ],
        tips: "For students with limited formal work experience, emphasize transferable skills from projects, volunteer work, and classroom activities."
      },
      {
        title: "Interview Preparation Strategies",
        duration: "20 min",
        description: "Build a systematic approach to preparing for job interviews across various formats.",
        steps: [
          "Discuss different interview formats: traditional, behavioral, panel, etc.",
          "Introduce the STAR method for structuring interview responses",
          "Present the Interview Preparation Checklist",
          "Guide students through researching potential employers",
          "Practice non-verbal communication techniques for interviews"
        ]
      },
      {
        title: "Interview Response Practice",
        duration: "25 min",
        description: "Develop and refine responses to common interview questions through structured practice.",
        steps: [
          "Review the Common Interview Questions Guide with example responses",
          "Demonstrate effective vs. ineffective interview responses",
          "Divide students into pairs for interview role-play",
          "Have students practice using the STAR method for behavioral questions",
          "Provide structured feedback using the Interview Feedback Form"
        ]
      },
      {
        title: "Next Steps & Resources",
        duration: "5 min",
        description: "Create personalized job search plans and connect with available resources.",
        steps: [
          "Guide students in completing the Job Search Action Plan",
          "Introduce local employment resources and opportunities",
          "Discuss how to add job search materials to their portfolios",
          "Provide the Interview Preparation Checklist for future use",
          "Explain the value of practice interviews and continuous improvement"
        ]
      }
    ],
    materials: [
      "Opportunity Finding Framework guide",
      "Job Search Planning worksheets",
      "Resume Structure Guide",
      "Sample resume handouts",
      "PAR Formula worksheet (Problem-Action-Result)",
      "Resume template worksheets",
      "STAR Method guide (Situation-Task-Action-Result)",
      "Interview Preparation Checklist",
      "Common Interview Questions Guide",
      "Interview Feedback Forms",
      "Job Search Action Plan templates"
    ],
    printables: [
      {
        name: "Opportunity Finding Framework",
        url: "/printables/opportunity-finding-framework.pdf"
      },
      {
        name: "Job Search Planning Worksheet",
        url: "/printables/job-search-planning.pdf"
      },
      {
        name: "Resume Structure Guide",
        url: "/printables/resume-structure-guide.pdf"
      },
      {
        name: "PAR Formula Worksheet",
        url: "/printables/par-formula-worksheet.pdf"
      },
      {
        name: "Resume Template",
        url: "/printables/resume-template.pdf"
      },
      {
        name: "STAR Method Guide",
        url: "/printables/star-method-guide.pdf"
      },
      {
        name: "Interview Preparation Checklist",
        url: "/printables/interview-preparation-checklist.pdf"
      },
      {
        name: "Common Interview Questions Guide",
        url: "/printables/common-interview-questions.pdf"
      },
      {
        name: "Interview Feedback Form",
        url: "/printables/interview-feedback-form.pdf"
      },
      {
        name: "Job Search Action Plan",
        url: "/printables/job-search-action-plan.pdf"
      }
    ],
    teacherNotes: {
      preparation: "Research local employment opportunities and resources before the session. Consider inviting a local employer or HR professional to participate if possible. Prepare sample resumes relevant to your students' career interests.",
      adaptations: [
        "For younger students: Focus more on general presentation skills and less on formal job search processes.",
        "For students with no work experience: Emphasize school projects, volunteer work, and personal initiatives.",
        "For those with specific career goals: Customize interview questions to reflect industry expectations."
      ],
      assessment: "Evaluate students' ability to present their skills effectively and provide relevant examples. Successful interviews show preparation, clear communication, and ability to connect experiences to job requirements.",
      followUp: [
        "Schedule additional practice interviews, potentially with external volunteers",
        "Help students refine their resumes based on feedback",
        "Connect students with community job resources and opportunities",
        "Create a class job board where students can share opportunities they find",
        "Encourage students to conduct at least one informational interview"
      ]
    }
  },
  {
    id: "digital-content-creation",
    icon: <FileText className="h-5 w-5 text-fss-primary" />,
    title: "Digital Content Creation Fundamentals",
    description: "Learn the principles of creating effective digital content even with limited technology access.",
    category: "Technical Skills",
    difficulty: "Intermediate",
    duration: "60 min",
    groupSize: "Individual or pairs",
    objectives: [
      "Understand principles of effective digital content",
      "Learn planning and structure approaches for various content types",
      "Develop content creation skills that transfer across platforms",
      "Create content plans that can be implemented with minimal resources"
    ],
    outcomes: [
      "Students develop content plans for multiple formats",
      "Students create sample content pieces using available tools",
      "Students apply design principles to improve content effectiveness",
      "Students understand how to build portfolio examples"
    ],
    skills: ["Content planning", "Writing", "Visual design", "Audience awareness", "Information organization"],
    structure: [
      {
        title: "Content Creation Fundamentals",
        duration: "10 min",
        description: "Introduce core principles that apply across all digital content formats.",
        steps: [
          "Present the Universal Content Principles framework",
          "Discuss how audience, purpose, and format influence content design",
          "Explore examples of effective vs. ineffective content",
          "Guide students through the Content Creator Self-Assessment",
          "Connect content creation skills to various career paths"
        ]
      },
      {
        title: "Content Planning Workshop",
        duration: "15 min",
        description: "Learn and apply structured approaches to planning content for multiple formats.",
        steps: [
          "Introduce the Content Planning Canvas and its components",
          "Demonstrate planning process for a sample topic",
          "Have students select topics from the Topic Idea cards",
          "Guide students through creating content plans for their topics",
          "Discuss how the same content can be adapted for different formats"
        ],
        tips: "Encourage students to choose topics they're knowledgeable about or interested in for more authentic content planning."
      },
      {
        title: "Writing for Digital Formats",
        duration: "15 min",
        description: "Develop writing techniques optimized for online readability and engagement.",
        steps: [
          "Present the Digital Writing Guide with key principles",
          "Compare traditional writing with effective digital writing",
          "Demonstrate techniques for headlines, introductions, and formatting",
          "Have students practice rewriting traditional text for digital formats",
          "Provide peer feedback using the Writing Feedback Checklist"
        ]
      },
      {
        title: "Visual Design Basics",
        duration: "15 min",
        description: "Learn fundamental visual design principles that enhance content effectiveness.",
        steps: [
          "Introduce the Visual Design Principles Framework",
          "Demonstrate how layout, contrast, and hierarchy affect communication",
          "Have students sketch layout designs for their content plans",
          "Practice visual storytelling techniques",
          "Discuss how to create effective visuals with limited resources"
        ]
      },
      {
        title: "Content Portfolio Development",
        duration: "5 min",
        description: "Connect session learning to ongoing portfolio development.",
        steps: [
          "Explain how to incorporate content examples in skill portfolios",
          "Guide students in completing the Content Creation Reflection",
          "Introduce the Content Development Plan for continued practice",
          "Discuss opportunities to create portfolio-worthy content",
          "Connect content skills to specific career applications"
        ]
      }
    ],
    materials: [
      "Universal Content Principles framework",
      "Content Creator Self-Assessment worksheets",
      "Content Planning Canvas templates",
      "Topic Idea cards",
      "Digital Writing Guide handouts",
      "Writing sample transformation worksheets",
      "Writing Feedback Checklist forms",
      "Visual Design Principles Framework",
      "Layout templates and examples",
      "Content Creation Reflection forms",
      "Content Development Plan templates"
    ],
    printables: [
      {
        name: "Universal Content Principles",
        url: "/printables/universal-content-principles.pdf"
      },
      {
        name: "Content Creator Self-Assessment",
        url: "/printables/content-creator-self-assessment.pdf"
      },
      {
        name: "Content Planning Canvas",
        url: "/printables/content-planning-canvas.pdf"
      },
      {
        name: "Digital Writing Guide",
        url: "/printables/digital-writing-guide.pdf"
      },
      {
        name: "Writing Feedback Checklist",
        url: "/printables/writing-feedback-checklist.pdf"
      },
      {
        name: "Visual Design Principles Framework",
        url: "/printables/visual-design-principles.pdf"
      },
      {
        name: "Content Creation Reflection",
        url: "/printables/content-creation-reflection.pdf"
      },
      {
        name: "Content Development Plan",
        url: "/printables/content-development-plan.pdf"
      }
    ],
    teacherNotes: {
      preparation: "This session is designed to teach digital content principles without requiring constant technology access. Prepare visual examples of different content types to share with students. If possible, bring samples of well-designed print materials.",
      adaptations: [
        "For students with some technology access: Add time to implement digital versions of their content plans.",
        "For students with writing challenges: Increase focus on visual communication and structural planning.",
        "For advanced students: Add elements of audience research and content strategy."
      ],
      assessment: "Evaluate students' understanding of content principles through their planning documents and sample creations. Look for thoughtful audience consideration, clear structure, and application of design principles.",
      followUp: [
        "Have students complete their content pieces as homework if resources allow",
        "Create a class content showcase where students can share their work",
        "Connect content creation to specific career paths based on student interests",
        "Provide additional format-specific guides for students to continue learning"
      ]
    }
  },
  {
    id: "personal-branding",
    icon: <Users className="h-5 w-5 text-fss-primary" />,
    title: "Personal Branding & Professional Identity",
    description: "Develop a consistent, authentic professional identity that showcases your unique value proposition.",
    category: "Career Exploration",
    difficulty: "Advanced",
    duration: "60 min",
    groupSize: "Individual with pair sharing",
    objectives: [
      "Understand the concept and importance of personal branding",
      "Identify unique strengths, values, and differentiators",
      "Develop a clear professional identity statement",
      "Learn to communicate personal brand consistently across mediums"
    ],
    outcomes: [
      "Students create personal brand statements",
      "Students develop consistent professional presentation approaches",
      "Students align personal brands with career goals",
      "Students incorporate branding into their portfolios"
    ],
    skills: ["Self-presentation", "Brand consistency", "Professional communication", "Value articulation", "Authenticity"],
    structure: [
      {
        title: "Personal Branding Foundations",
        duration: "10 min",
        description: "Introduce the concept of personal branding and its impact on career development.",
        steps: [
          "Define personal branding and its relevance to career success",
          "Present the Personal Brand Framework: Values + Skills + Unique Perspective",
          "Discuss examples of effective personal brands across different fields",
          "Guide students through the Personal Brand Self-Assessment",
          "Connect personal branding to income potential and career opportunities"
        ]
      },
      {
        title: "Brand Discovery Workshop",
        duration: "15 min",
        description: "Identify the core elements that form an authentic personal brand.",
        steps: [
          "Introduce the Brand Discovery Canvas with key sections",
          "Guide students through identifying their core values",
          "Use the Strengths Identification Exercise to uncover key competencies",
          "Have students gather feedback from partners using Brand Perception cards",
          "Identify authentic differentiators that set each student apart"
        ],
        tips: "Encourage authenticity over aspiration. Personal brands should reflect genuine strengths and values rather than an idealized self."
      },
      {
        title: "Developing Your Brand Statement",
        duration: "15 min",
        description: "Create a concise, powerful statement that communicates professional identity.",
        steps: [
          "Present the Brand Statement Formula with examples",
          "Analyze sample statements across different career fields",
          "Guide students through drafting their initial brand statements",
          "Facilitate peer feedback using the Statement Feedback Checklist",
          "Help students refine statements based on feedback"
        ]
      },
      {
        title: "Brand Expression Planning",
        duration: "15 min",
        description: "Develop strategies for consistently expressing personal brand across different contexts.",
        steps: [
          "Introduce the Brand Expression Matrix showing different contexts",
          "Discuss how brand elements translate across written, verbal, and visual formats",
          "Guide students in completing their Brand Expression Plans",
          "Practice introducing yourself in alignment with your brand",
          "Develop strategies for maintaining authenticity while meeting professional norms"
        ]
      },
      {
        title: "Integration & Next Steps",
        duration: "5 min",
        description: "Incorporate personal branding into ongoing career development activities.",
        steps: [
          "Discuss how to integrate personal branding into portfolios",
          "Guide students in completing the Brand Implementation Timeline",
          "Identify opportunities to express brand in upcoming activities",
          "Connect personal branding to interview preparation",
          "Introduce the Personal Brand Journal for ongoing refinement"
        ]
      }
    ],
    materials: [
      "Personal Brand Framework guide",
      "Personal Brand Self-Assessment worksheets",
      "Brand Discovery Canvas templates",
      "Strengths Identification Exercise sheets",
      "Brand Perception cards",
      "Brand Statement Formula guide",
      "Sample brand statement handouts",
      "Statement Feedback Checklist forms",
      "Brand Expression Matrix templates",
      "Brand Expression Plans worksheets",
      "Brand Implementation Timeline templates",
      "Personal Brand Journal templates"
    ],
    printables: [
      {
        name: "Personal Brand Framework",
        url: "/printables/personal-brand-framework.pdf"
      },
      {
        name: "Personal Brand Self-Assessment",
        url: "/printables/personal-brand-self-assessment.pdf"
      },
      {
        name: "Brand Discovery Canvas",
        url: "/printables/brand-discovery-canvas.pdf"
      },
      {
        name: "Strengths Identification Exercise",
        url: "/printables/strengths-identification-exercise.pdf"
      },
      {
        name: "Brand Statement Formula Guide",
        url: "/printables/brand-statement-formula.pdf"
      },
      {
        name: "Statement Feedback Checklist",
        url: "/printables/statement-feedback-checklist.pdf"
      },
      {
        name: "Brand Expression Matrix",
        url: "/printables/brand-expression-matrix.pdf"
      },
      {
        name: "Brand Implementation Timeline",
        url: "/printables/brand-implementation-timeline.pdf"
      },
      {
        name: "Personal Brand Journal",
        url: "/printables/personal-brand-journal.pdf"
      }
    ],
    teacherNotes: {
      preparation: "This session works best when students have already done some career exploration and have general career directions in mind. Prepare examples of effective personal brands from various fields, including some that started with minimal resources.",
      adaptations: [
        "For students still exploring careers: Focus more on values and strengths, less on specific career positioning.",
        "For students with clear career goals: Add more field-specific branding elements and examples.",
        "For younger students: Simplify the brand statement formula and focus on strengths identification."
      ],
      assessment: "Effective personal brands should be authentic, clear, and aligned with career goals. Look for consistency between identified values, strengths, and brand expressions.",
      followUp: [
        "Have students incorporate their brand statements into their portfolios",
        "Create opportunities for students to practice presenting themselves according to their brands",
        "Connect personal branding to upcoming interview preparation activities",
        "Encourage students to gather additional external feedback on their branding"
      ]
    }
  },
  {
    id: "financial-literacy-entrepreneurs",
    icon: <FileText className="h-5 w-5 text-fss-primary" />,
    title: "Financial Literacy for Entrepreneurs",
    description: "Build essential financial management skills for those planning entrepreneurial or freelance careers.",
    category: "Technical Skills",
    difficulty: "Advanced",
    duration: "60 min",
    groupSize: "Individual or small groups",
    objectives: [
      "Understand basic business financial concepts",
      "Learn pricing and value strategies for services/products",
      "Develop simple financial tracking systems",
      "Create sustainable financial plans for early-stage ventures"
    ],
    outcomes: [
      "Students create basic business financial plans",
      "Students develop pricing strategies for their skills/services",
      "Students establish simple financial tracking systems",
      "Students understand business viability assessment"
    ],
    skills: ["Financial planning", "Pricing strategy", "Record keeping", "Business modeling", "Resource management"],
    structure: [
      {
        title: "Business Finance Fundamentals",
        duration: "15 min",
        description: "Introduction to core financial concepts for small businesses and freelancers.",
        steps: [
          "Present the Entrepreneur's Financial Framework",
          "Define key terms: revenue, expenses, profit, cash flow, etc.",
          "Discuss the difference between personal and business finances",
          "Guide students through the Financial Knowledge Self-Assessment",
          "Explain common financial mistakes new entrepreneurs make"
        ]
      },
      {
        title: "Pricing Your Skills & Services",
        duration: "15 min",
        description: "Develop strategic approaches to pricing that reflect value while remaining competitive.",
        steps: [
          "Introduce different pricing methodologies: hourly, project-based, value-based",
          "Present the Pricing Strategy Framework with examples",
          "Demonstrate calculations for minimum viable rates",
          "Guide students through the Service Pricing Worksheet for their skills",
          "Discuss strategies for communicating value to justify pricing"
        ],
        tips: "Emphasize that underpricing is a common mistake new entrepreneurs make. Help students recognize the full value of their skills and time."
      },
      {
        title: "Simple Financial Management Systems",
        duration: "15 min",
        description: "Create practical systems for tracking finances with minimal tools.",
        steps: [
          "Present options for financial tracking: paper systems, simple spreadsheets, apps",
          "Demonstrate basic income and expense recording using the templates",
          "Guide students in setting up their own tracking systems",
          "Introduce the Monthly Financial Review checklist",
          "Practice categorizing sample transactions"
        ]
      },
      {
        title: "Financial Sustainability Planning",
        duration: "10 min",
        description: "Develop approaches to ensure financial viability in early-stage ventures.",
        steps: [
          "Introduce the Business Viability Assessment framework",
          "Guide students through the Break-Even Analysis worksheet",
          "Discuss strategies for managing irregular income",
          "Explore options for keeping startup costs minimal",
          "Present the Financial Buffer Planning tool"
        ]
      },
      {
        title: "Application & Next Steps",
        duration: "5 min",
        description: "Connect financial learning to specific entrepreneurial plans and ongoing development.",
        steps: [
          "Have students complete the Financial Action Plan for their ventures",
          "Discuss common financial milestones for new entrepreneurs",
          "Explain how to document financial skills in portfolios",
          "Introduce resources for ongoing financial education",
          "Connect financial literacy to future business planning sessions"
        ]
      }
    ],
    materials: [
      "Entrepreneur's Financial Framework guide",
      "Financial Knowledge Self-Assessment worksheets",
      "Pricing Strategy Framework handouts",
      "Service Pricing Worksheets",
      "Financial Tracking Templates (paper-based)",
      "Monthly Financial Review checklists",
      "Sample transaction cards",
      "Business Viability Assessment worksheet",
      "Break-Even Analysis templates",
      "Financial Buffer Planning tool",
      "Financial Action Plan templates"
    ],
    printables: [
      {
        name: "Entrepreneur's Financial Framework",
        url: "/printables/entrepreneurs-financial-framework.pdf"
      },
      {
        name: "Financial Knowledge Self-Assessment",
        url: "/printables/financial-knowledge-assessment.pdf"
      },
      {
        name: "Pricing Strategy Framework",
        url: "/printables/pricing-strategy-framework.pdf"
      },
      {
        name: "Service Pricing Worksheet",
        url: "/printables/service-pricing-worksheet.pdf"
      },
      {
        name: "Financial Tracking Templates",
        url: "/printables/financial-tracking-templates.pdf"
      },
      {
        name: "Monthly Financial Review Checklist",
        url: "/printables/monthly-financial-review.pdf"
      },
      {
        name: "Business Viability Assessment",
        url: "/printables/business-viability-assessment.pdf"
      },
      {
        name: "Break-Even Analysis Template",
        url: "/printables/break-even-analysis.pdf"
      },
      {
        name: "Financial Action Plan Template",
        url: "/printables/financial-action-plan.pdf"
      }
    ],
    teacherNotes: {
      preparation: "This session is designed for students interested in entrepreneurship or freelance careers. Review local business regulations that might affect young entrepreneurs. Consider inviting a small business owner to share practical insights if possible.",
      adaptations: [
        "For younger students: Focus more on basic concepts and less on complex calculations.",
        "For students with specific business ideas: Allow time to apply concepts directly to their venture plans.",
        "For advanced students: Add sections on taxes and more complex financial projections."
      ],
      assessment: "Look for realistic financial planning that balances optimism with pragmatism. Successful students should demonstrate understanding of the relationship between pricing, volume, and profitability.",
      followUp: [
        "Have students refine their financial plans as their business ideas develop",
        "Connect interested students with local small business resources",
        "Encourage practice with real-world financial tracking for personal expenses",
        "Suggest resources for deeper financial learning based on specific interests"
      ]
    }
  }
];

export default SessionPlans;

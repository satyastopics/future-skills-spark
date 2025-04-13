
import { useState } from "react";
import { 
  BriefcaseBusiness, 
  Code, 
  Kanban, 
  CircleDollarSign, 
  PenTool, 
  Languages, 
  ChevronRight, 
  MessageSquare,
  LineChart,
  Search,
  Globe,
  MonitorSmartphone,
  PencilRuler,
  BookOpenCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillCard from "./SkillCard";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  description: string;
  resources?: {
    overview: string;
    keyPoints: string[];
    learningPath: {
      step: string;
      description: string;
    }[];
    tools: {
      name: string;
      description: string;
      link?: string;
    }[];
    practiceIdeas: string[];
  };
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "tech",
    title: "Tech & Digital Skills",
    icon: <Code size={24} />,
    description: "Technical skills that can be applied in various industries with high earning potential.",
    skills: [
      {
        name: "Web Development",
        level: "beginner",
        description: "Learn to build and maintain websites using HTML, CSS, and basic JavaScript.",
        resources: {
          overview: "Web development is one of the most versatile and in-demand skills in today's digital economy. Even basic web development skills can open doors to freelance opportunities, remote work, and entrepreneurial ventures with minimal startup costs.",
          keyPoints: [
            "Start with understanding the fundamentals before trying to use complex frameworks",
            "Build real projects from day one - even simple ones - to apply what you learn",
            "Focus on problem-solving skills alongside technical knowledge",
            "Document everything you learn and build a portfolio from the beginning"
          ],
          learningPath: [
            {
              step: "HTML Fundamentals",
              description: "Learn to create the structure of web pages with proper semantic markup"
            },
            {
              step: "CSS Styling",
              description: "Master the ability to style web pages and create responsive layouts"
            },
            {
              step: "JavaScript Basics",
              description: "Understand fundamental programming concepts and how to make websites interactive"
            },
            {
              step: "Building Simple Projects",
              description: "Create basic websites like portfolios, landing pages, or simple tools"
            },
            {
              step: "Version Control with Git",
              description: "Learn to track changes and collaborate with others"
            }
          ],
          tools: [
            {
              name: "Visual Studio Code",
              description: "Free code editor with helpful extensions for web development"
            },
            {
              name: "GitHub",
              description: "Platform for hosting code and collaborating with others"
            },
            {
              name: "Mozilla Developer Network (MDN)",
              description: "Comprehensive resource for web development documentation"
            },
            {
              name: "CodePen",
              description: "Online editor for testing and sharing HTML, CSS, and JS code snippets"
            }
          ],
          practiceIdeas: [
            "Create a personal portfolio website showcasing student skills and projects",
            "Build a website for a local business or community organization",
            "Develop a simple web app that solves a problem faced by students",
            "Recreate the homepage of popular websites to practice layout and styling"
          ]
        }
      },
      {
        name: "Data Analysis",
        level: "intermediate",
        description: "Analyze data using spreadsheets and basic visualization tools.",
        resources: {
          overview: "Data analysis skills allow you to transform raw information into valuable insights that drive decision-making. These skills are increasingly valuable across industries as organizations become more data-driven.",
          keyPoints: [
            "Start with spreadsheet tools like Excel or Google Sheets before advancing to specialized software",
            "Focus on asking the right questions - good analysis starts with clear objectives",
            "Learn to clean and organize data before analyzing it",
            "Practice communicating insights clearly through visualization and simple explanations"
          ],
          learningPath: [
            {
              step: "Spreadsheet Fundamentals",
              description: "Master formulas, functions, and basic data organization in Excel/Google Sheets"
            },
            {
              step: "Data Cleaning Techniques",
              description: "Learn to identify and fix inconsistencies, missing values, and errors in datasets"
            },
            {
              step: "Basic Statistical Analysis",
              description: "Understand descriptive statistics, correlations, and simple hypothesis testing"
            },
            {
              step: "Data Visualization",
              description: "Create charts, graphs, and dashboards to communicate findings effectively"
            },
            {
              step: "Introduction to SQL",
              description: "Learn to query databases to extract and manipulate data"
            }
          ],
          tools: [
            {
              name: "Microsoft Excel / Google Sheets",
              description: "Powerful spreadsheet applications for data analysis"
            },
            {
              name: "Tableau Public",
              description: "Free version of popular data visualization software"
            },
            {
              name: "Google Data Studio",
              description: "Free tool for creating interactive dashboards"
            },
            {
              name: "SQLite",
              description: "Lightweight database for practicing SQL queries"
            }
          ],
          practiceIdeas: [
            "Analyze local business data to identify trends and opportunities",
            "Create dashboards tracking school or community metrics",
            "Clean and analyze public datasets related to student interests",
            "Build a personal finance tracker with data visualization"
          ]
        }
      },
      {
        name: "UI/UX Design",
        level: "beginner",
        description: "Create user-friendly interfaces for digital products.",
        resources: {
          overview: "UI/UX design combines creativity with problem-solving to create digital products that are both beautiful and functional. These skills are in high demand as companies increasingly prioritize user experience.",
          keyPoints: [
            "Design is about solving problems, not just making things look pretty",
            "Start by understanding user needs and behaviors before designing solutions",
            "Learn to create wireframes and prototypes before jumping into detailed designs",
            "Develop a critical eye by analyzing existing interfaces and identifying what works and what doesn't"
          ],
          learningPath: [
            {
              step: "Design Fundamentals",
              description: "Learn color theory, typography, layout principles, and visual hierarchy"
            },
            {
              step: "User Research Methods",
              description: "Understand how to gather insights about user needs and behaviors"
            },
            {
              step: "Wireframing & Prototyping",
              description: "Create low-fidelity wireframes and interactive prototypes"
            },
            {
              step: "Interface Design",
              description: "Design usable and visually appealing interfaces for digital products"
            },
            {
              step: "User Testing",
              description: "Learn methods to test designs with users and iterate based on feedback"
            }
          ],
          tools: [
            {
              name: "Figma",
              description: "Free (with limitations) design tool for UI/UX design and prototyping"
            },
            {
              name: "Adobe XD",
              description: "Design and prototyping tool with a free starter plan"
            },
            {
              name: "Canva",
              description: "User-friendly design tool with templates and free tier"
            },
            {
              name: "Maze",
              description: "User testing platform with free options for students"
            }
          ],
          practiceIdeas: [
            "Redesign a poorly designed website or app interface",
            "Create a mobile app interface for a local community need",
            "Design a user interface for a school event or club",
            "Conduct user research and create personas for a target audience"
          ]
        }
      },
      {
        name: "Digital Marketing",
        level: "beginner",
        description: "Promote products and services through digital channels."
      }
    ]
  },
  {
    id: "business",
    title: "Business & Management",
    icon: <BriefcaseBusiness size={24} />,
    description: "Skills to run businesses, manage projects, and lead teams effectively.",
    skills: [
      {
        name: "Project Management",
        level: "intermediate",
        description: "Organize, plan, and execute projects efficiently.",
        resources: {
          overview: "Project management skills are universal and transferable across industries. They involve coordinating resources, people, and tasks to achieve specific goals within constraints like time and budget.",
          keyPoints: [
            "The core of project management is breaking down complex goals into manageable tasks",
            "Clear communication is often more important than technical project management knowledge",
            "Start with simple tools and methods before adopting complex frameworks",
            "Documentation and consistent processes create the foundation for success"
          ],
          learningPath: [
            {
              step: "Project Planning Basics",
              description: "Learn to define project scope, objectives, and deliverables"
            },
            {
              step: "Task Management",
              description: "Master breaking down projects into tasks, subtasks, and assigning responsibilities"
            },
            {
              step: "Time & Resource Planning",
              description: "Develop skills in estimating time needs and resource allocation"
            },
            {
              step: "Risk Management",
              description: "Identify potential risks and develop mitigation strategies"
            },
            {
              step: "Project Communication",
              description: "Learn effective status reporting and stakeholder communication"
            }
          ],
          tools: [
            {
              name: "Trello",
              description: "Visual task management tool with a free tier"
            },
            {
              name: "Asana",
              description: "Project management platform with free options for small teams"
            },
            {
              name: "Google Sheets/Docs",
              description: "Create project plans, timelines, and documentation"
            },
            {
              name: "Kanban boards",
              description: "Visual workflow management (digital or physical)"
            }
          ],
          practiceIdeas: [
            "Plan and execute a school event or community service project",
            "Create a project plan for a student-led initiative",
            "Develop a personal project management system for academic goals",
            "Volunteer to manage a project for a local organization"
          ]
        }
      },
      {
        name: "Business Development",
        level: "intermediate",
        description: "Identify growth opportunities and develop business strategies."
      },
      {
        name: "Leadership",
        level: "advanced",
        description: "Guide and inspire teams to achieve common goals."
      }
    ]
  },
  {
    id: "finance",
    title: "Finance & Investment",
    icon: <CircleDollarSign size={24} />,
    description: "Skills related to managing money, investments, and financial planning.",
    skills: [
      {
        name: "Financial Literacy",
        level: "beginner",
        description: "Understand basic financial concepts like budgeting and investing.",
        resources: {
          overview: "Financial literacy is the foundation of personal financial success and a key skill often overlooked in traditional education. It enables individuals to make informed decisions about money management, wealth building, and financial security.",
          keyPoints: [
            "Personal finance is exactly that - personal. There's no one-size-fits-all approach",
            "Start with understanding cash flow (income vs. expenses) before more complex concepts",
            "Focus on building good habits rather than looking for get-rich-quick strategies",
            "Financial decisions should align with personal values and long-term goals"
          ],
          learningPath: [
            {
              step: "Money Basics",
              description: "Understand income, expenses, assets, and liabilities"
            },
            {
              step: "Budgeting & Saving",
              description: "Learn to create and follow a budget, build emergency funds"
            },
            {
              step: "Banking & Credit",
              description: "Master banking fundamentals, understand credit scores and debt management"
            },
            {
              step: "Introduction to Investing",
              description: "Learn basic investment concepts, compound interest, and risk management"
            },
            {
              step: "Financial Protection",
              description: "Understand insurance and risk mitigation strategies"
            }
          ],
          tools: [
            {
              name: "Spreadsheet Templates",
              description: "Budget trackers and financial planning templates"
            },
            {
              name: "Financial Calculators",
              description: "Online tools for calculating compound interest, loan payments, etc."
            },
            {
              name: "Banking Apps",
              description: "Mobile applications for tracking spending and saving"
            },
            {
              name: "Financial Education Resources",
              description: "Free online courses, government resources, and financial literacy websites"
            }
          ],
          practiceIdeas: [
            "Create a personal or family budget and track expenses for a month",
            "Research and compare financial products (bank accounts, credit cards)",
            "Develop a mock investment plan with hypothetical scenarios",
            "Create a savings plan for a specific financial goal"
          ]
        }
      },
      {
        name: "Investment Analysis",
        level: "intermediate",
        description: "Evaluate investment opportunities and make informed decisions."
      },
      {
        name: "Financial Planning",
        level: "intermediate",
        description: "Create and implement plans to achieve financial goals."
      }
    ]
  },
  {
    id: "creative",
    title: "Creative & Content",
    icon: <PenTool size={24} />,
    description: "Skills for creating engaging content, designs, and media.",
    skills: [
      {
        name: "Content Writing",
        level: "beginner",
        description: "Write clear, engaging content for various platforms."
      },
      {
        name: "Graphic Design",
        level: "intermediate",
        description: "Create visual content using design principles and tools."
      },
      {
        name: "Video Production",
        level: "intermediate",
        description: "Plan, shoot, and edit videos for different purposes."
      }
    ]
  },
  {
    id: "communication",
    title: "Communication & Soft Skills",
    icon: <MessageSquare size={24} />,
    description: "Essential interpersonal skills that complement technical abilities.",
    skills: [
      {
        name: "Public Speaking",
        level: "intermediate",
        description: "Deliver effective presentations and speak confidently in public."
      },
      {
        name: "Negotiation",
        level: "advanced",
        description: "Reach agreements that benefit all parties involved."
      },
      {
        name: "Emotional Intelligence",
        level: "intermediate",
        description: "Understand and manage emotions in yourself and others."
      }
    ]
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    icon: <LineChart size={24} />,
    description: "Skills for promoting products/services and closing sales deals.",
    skills: [
      {
        name: "Copywriting",
        level: "intermediate",
        description: "Write persuasive copy that drives action and conversions."
      },
      {
        name: "Sales Strategy",
        level: "intermediate",
        description: "Develop and implement effective sales approaches."
      },
      {
        name: "Market Research",
        level: "beginner",
        description: "Gather and analyze data about target markets and competitors."
      }
    ]
  },
  // Adding three new skill categories
  {
    id: "languages",
    title: "Languages & Global Skills",
    icon: <Globe size={24} />,
    description: "Skills for effective communication across cultures and global contexts.",
    skills: [
      {
        name: "Language Learning",
        level: "beginner",
        description: "Acquire proficiency in high-demand languages for business and international relations.",
        resources: {
          overview: "Language skills open doors to global opportunities, from remote work with international companies to translation services and cultural consulting. In our connected world, multilingual individuals have a significant advantage.",
          keyPoints: [
            "Consistency beats intensity - short daily practice is more effective than occasional cramming",
            "Focus on practical communication skills before perfecting grammar",
            "Immerse yourself in the language through media, music, and conversation practice",
            "Set specific, achievable goals like 'order food' or 'introduce myself' rather than just 'learn Spanish'"
          ],
          learningPath: [
            {
              step: "Basic Vocabulary & Phrases",
              description: "Learn common words and expressions for everyday situations"
            },
            {
              step: "Listening & Pronunciation",
              description: "Develop ear training and proper pronunciation through audio resources"
            },
            {
              step: "Basic Grammar Structures",
              description: "Learn fundamental grammar patterns to form simple sentences"
            },
            {
              step: "Conversation Practice",
              description: "Build confidence through regular speaking practice, even if imperfect"
            },
            {
              step: "Cultural Context",
              description: "Understand cultural nuances and appropriate communication styles"
            }
          ],
          tools: [
            {
              name: "Language Learning Apps",
              description: "Free applications like Duolingo, Memrise, or Tandem"
            },
            {
              name: "Language Exchange",
              description: "Online platforms to find conversation partners"
            },
            {
              name: "Podcasts & Videos",
              description: "Beginner-friendly content in target languages"
            },
            {
              name: "Flashcards",
              description: "Digital or physical cards for vocabulary building (e.g., Anki)"
            }
          ],
          practiceIdeas: [
            "Create a 'language corner' in school for regular practice sessions",
            "Develop a mini phrasebook for a specific context (travel, business)",
            "Find a pen pal or digital exchange partner for authentic practice",
            "Label household items in the target language to build vocabulary"
          ]
        }
      },
      {
        name: "Cross-Cultural Communication",
        level: "intermediate",
        description: "Navigate cultural differences and communicate effectively across diverse contexts."
      },
      {
        name: "Global Business Etiquette",
        level: "intermediate",
        description: "Understand norms and practices for business interactions in different cultures."
      }
    ]
  },
  {
    id: "digital-creation",
    title: "Digital Content Creation",
    icon: <MonitorSmartphone size={24} />,
    description: "Skills for creating and managing digital content across various platforms.",
    skills: [
      {
        name: "Social Media Management",
        level: "beginner",
        description: "Create and manage content strategies across social media platforms."
      },
      {
        name: "Content Strategy",
        level: "intermediate",
        description: "Plan, develop, and manage content to achieve specific business objectives."
      },
      {
        name: "Digital Storytelling",
        level: "intermediate",
        description: "Create compelling narratives using various digital media formats."
      }
    ]
  },
  {
    id: "product-design",
    title: "Product Design & Development",
    icon: <PencilRuler size={24} />,
    description: "Skills for creating and improving products that solve real problems.",
    skills: [
      {
        name: "Design Thinking",
        level: "beginner",
        description: "Apply a human-centered approach to solving problems and creating products.",
        resources: {
          overview: "Design Thinking is a powerful problem-solving approach that focuses on understanding user needs before developing solutions. This skill is highly valued in innovation, product development, and service improvement across industries.",
          keyPoints: [
            "Design Thinking is about solving problems, not just creating pretty things",
            "Start with empathy - deeply understanding the people you're designing for",
            "Embrace iteration and prototyping - create to learn, not to perfect on first try",
            "Get comfortable with ambiguity and the messy middle part of the creative process"
          ],
          learningPath: [
            {
              step: "Empathy & Research",
              description: "Learn techniques to understand user needs, pain points, and contexts"
            },
            {
              step: "Problem Definition",
              description: "Master framing problems in ways that inspire innovative solutions"
            },
            {
              step: "Ideation Methods",
              description: "Practice techniques for generating diverse solution ideas"
            },
            {
              step: "Prototyping Skills",
              description: "Build quick, low-fidelity prototypes to test concepts"
            },
            {
              step: "Testing & Iteration",
              description: "Gather feedback and refine solutions based on user input"
            }
          ],
          tools: [
            {
              name: "Empathy Map Canvas",
              description: "Template for organizing user insights"
            },
            {
              name: "Paper Prototyping Materials",
              description: "Basic supplies for creating quick physical prototypes"
            },
            {
              name: "Digital Whiteboarding Tools",
              description: "Platforms like Miro or Google Jamboard with free options"
            },
            {
              name: "User Testing Templates",
              description: "Frameworks for gathering structured feedback"
            }
          ],
          practiceIdeas: [
            "Apply design thinking to solve a problem in your school or community",
            "Conduct user interviews to understand a specific group's needs",
            "Create a rapid prototype of a solution and test it with potential users",
            "Redesign an everyday object to better meet user needs"
          ]
        }
      },
      {
        name: "Prototyping",
        level: "intermediate",
        description: "Create functional models to test and refine product concepts."
      },
      {
        name: "User Research",
        level: "intermediate",
        description: "Gather and analyze insights about user needs, behaviors, and motivations."
      }
    ]
  },
  {
    id: "learning-skills",
    title: "Learning & Knowledge Management",
    icon: <BookOpenCheck size={24} />,
    description: "Meta-skills for efficiently acquiring and managing knowledge in any domain.",
    skills: [
      {
        name: "Learning How to Learn",
        level: "beginner",
        description: "Master techniques for efficient knowledge acquisition and skill development.",
        resources: {
          overview: "Learning how to learn is perhaps the most fundamental meta-skill for the 21st century. In a rapidly changing world, the ability to quickly acquire new knowledge and skills becomes more valuable than any specific domain expertise.",
          keyPoints: [
            "Focus on understanding concepts deeply rather than memorizing facts",
            "Use spaced repetition and active recall to improve long-term retention",
            "Connect new knowledge to existing understanding through mental models",
            "Embrace deliberate practice - challenging yourself just beyond your current ability"
          ],
          learningPath: [
            {
              step: "Understanding Your Learning Style",
              description: "Identify your preferred learning methods and environments"
            },
            {
              step: "Memory Techniques",
              description: "Learn methods for effective information encoding and retrieval"
            },
            {
              step: "Note-Taking Systems",
              description: "Master structured approaches to capturing and organizing information"
            },
            {
              step: "Focus & Concentration",
              description: "Develop techniques for sustained attention and deep work"
            },
            {
              step: "Self-Directed Learning",
              description: "Build skills to identify resources and create personal learning plans"
            }
          ],
          tools: [
            {
              name: "Spaced Repetition Software",
              description: "Digital flashcard systems like Anki or Quizlet"
            },
            {
              name: "Note-Taking Applications",
              description: "Tools like Notion, Obsidian (free), or simple notebooks"
            },
            {
              name: "Mind Mapping Software",
              description: "Visual organization tools like FreeMind or XMind"
            },
            {
              name: "Learning Trackers",
              description: "Templates for monitoring progress and identifying patterns"
            }
          ],
          practiceIdeas: [
            "Create a personal knowledge management system for an area of interest",
            "Teach a concept to someone else after learning it (the Feynman Technique)",
            "Break down a complex skill into sub-skills and create a learning plan",
            "Experiment with different note-taking methods to find what works best"
          ]
        }
      },
      {
        name: "Personal Knowledge Management",
        level: "intermediate",
        description: "Build systems to organize, access, and apply information effectively."
      },
      {
        name: "Critical Thinking",
        level: "intermediate",
        description: "Evaluate information objectively and make reasoned judgments."
      }
    ]
  }
];

const SkillPathways = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = searchTerm 
    ? skillCategories.filter(cat => 
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.skills.some(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : skillCategories;

  const handleSelectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const handleBackToCategory = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="py-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Skill Pathways</h2>
        <p className="text-gray-600">
          Explore in-demand skills that can lead to high-income opportunities for students
        </p>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search skills or categories..."
          className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-fss-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {selectedCategory ? (
        <div className="animate-fade-in">
          <Button 
            variant="ghost" 
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSkill(null);
            }}
            className="mb-4 text-fss-primary hover:text-fss-secondary flex items-center"
          >
            ← Back to all categories
          </Button>
          
          {selectedSkill ? (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToCategory}
                className="mb-4 text-fss-primary hover:text-fss-secondary flex items-center"
              >
                ← Back to {selectedCategory.title}
              </Button>
              
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold">{selectedSkill.name}</h2>
                <span className={cn(
                  "ml-3 text-xs px-2 py-1 rounded-full",
                  selectedSkill.level === "beginner" ? "bg-green-100 text-green-800" : 
                  selectedSkill.level === "intermediate" ? "bg-yellow-100 text-yellow-800" : 
                  "bg-red-100 text-red-800"
                )}>
                  {selectedSkill.level.charAt(0).toUpperCase() + selectedSkill.level.slice(1)}
                </span>
              </div>
              
              {selectedSkill.resources ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Overview</h3>
                    <p className="text-gray-700">{selectedSkill.resources.overview}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Key Points for Teachers</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedSkill.resources.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Learning Path</h3>
                    <div className="space-y-4">
                      {selectedSkill.resources.learningPath.map((step, idx) => (
                        <div key={idx} className="border-l-2 border-fss-light pl-4">
                          <h4 className="font-medium text-gray-800">{step.step}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Recommended Tools</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedSkill.resources.tools.map((tool, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-md">
                          <h4 className="font-medium text-gray-800">{tool.name}</h4>
                          <p className="text-gray-600 text-sm">{tool.description}</p>
                          {tool.link && (
                            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-fss-primary text-sm hover:underline">
                              Learn More →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Practice Ideas</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedSkill.resources.practiceIdeas.map((idea, idx) => (
                        <li key={idx} className="text-gray-700">{idea}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-medium mb-3 text-fss-primary">Teaching Tips</h3>
                    <div className="bg-fss-light p-4 rounded-md">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Break this skill into manageable chunks for students with varying ability levels</li>
                        <li>Connect learning to real-world applications that students can relate to</li>
                        <li>Encourage peer teaching to reinforce understanding</li>
                        <li>Create a project-based assessment rather than traditional testing</li>
                        <li>Find local mentors or professionals who use this skill to speak with students</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-md">
                  <p className="text-yellow-700">Detailed resources for this skill are coming soon. Check back later for comprehensive learning materials!</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-fss-light rounded-full text-fss-primary">
                  {selectedCategory.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{selectedCategory.title}</h2>
                  <p className="text-gray-600 text-sm">{selectedCategory.description}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Key Skills</h3>
                <div className="space-y-4">
                  {selectedCategory.skills.map((skill, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-gray-800">{skill.name}</h4>
                        <span className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          skill.level === "beginner" ? "bg-green-100 text-green-800" : 
                          skill.level === "intermediate" ? "bg-yellow-100 text-yellow-800" : 
                          "bg-red-100 text-red-800"
                        )}>
                          {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                      
                      <div className="mt-4 flex justify-end">
                        <Button 
                          size="sm" 
                          className="bg-fss-primary hover:bg-fss-secondary"
                          onClick={() => handleSelectSkill(skill)}
                        >
                          View Resources
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium mb-3">Teaching Tips</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>Start with foundational concepts before moving to advanced applications</li>
                  <li>Use real-world examples relevant to your local context</li>
                  <li>Encourage peer learning and group projects</li>
                  <li>Connect skills to actual income opportunities in your region</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
          {filteredCategories.map((category) => (
            <SkillCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No skill categories found matching your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillPathways;

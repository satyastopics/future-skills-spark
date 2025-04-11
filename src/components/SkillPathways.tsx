
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
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillCard from "./SkillCard";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Array<{
    name: string;
    level: "beginner" | "intermediate" | "advanced";
    description: string;
  }>;
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
        description: "Learn to build and maintain websites using HTML, CSS, and basic JavaScript."
      },
      {
        name: "Data Analysis",
        level: "intermediate",
        description: "Analyze data using spreadsheets and basic visualization tools."
      },
      {
        name: "UI/UX Design",
        level: "beginner",
        description: "Create user-friendly interfaces for digital products."
      },
      {
        name: "Digital Marketing",
        level: "beginner",
        description: "Promote products and services through digital channels."
      },
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
        description: "Organize, plan, and execute projects efficiently."
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
        description: "Understand basic financial concepts like budgeting and investing."
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
  }
];

const SkillPathways = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = searchTerm 
    ? skillCategories.filter(cat => 
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.skills.some(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : skillCategories;

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
            onClick={() => setSelectedCategory(null)}
            className="mb-4 text-fss-primary hover:text-fss-secondary flex items-center"
          >
            ← Back to all categories
          </Button>
          
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
                      <Button size="sm" className="bg-fss-primary hover:bg-fss-secondary">
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

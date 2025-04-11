
import { useState } from "react";
import { Search, Download, Printer, FileText, BookOpen, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PrintableResource {
  id: number;
  title: string;
  category: string;
  type: "worksheet" | "assessment" | "guide" | "template";
  pages: number;
  description: string;
  requiredMaterials: string[];
  downloadUrl: string;
}

const printableResources: PrintableResource[] = [
  {
    id: 1,
    title: "Skills Inventory Worksheet",
    category: "Assessment",
    type: "worksheet",
    pages: 2,
    description: "Helps students identify and categorize their existing skills as a starting point for portfolio building.",
    requiredMaterials: ["Pencils", "Printed worksheets"],
    downloadUrl: "/resources/skills-inventory-worksheet.pdf"
  },
  {
    id: 2,
    title: "Communication Practice Scenarios",
    category: "Communication",
    type: "worksheet",
    pages: 4,
    description: "Role-playing scenarios and exercises to develop verbal communication in professional settings.",
    requiredMaterials: ["Pencils", "Printed worksheets", "Paper for notes"],
    downloadUrl: "/resources/communication-scenarios.pdf"
  },
  {
    id: 3,
    title: "Paper Portfolio Template",
    category: "Portfolio Building",
    type: "template",
    pages: 12,
    description: "Printable portfolio format that students can complete by hand before digitizing when resources allow.",
    requiredMaterials: ["Pencils/pens", "Stapler", "Folder for organization"],
    downloadUrl: "/resources/paper-portfolio-template.pdf"
  },
  {
    id: 4,
    title: "Growth Mindset Activities",
    category: "Mindset",
    type: "worksheet",
    pages: 6,
    description: "Practical exercises to develop resilience and a growth-oriented approach to challenges.",
    requiredMaterials: ["Pencils", "Printed worksheets"],
    downloadUrl: "/resources/growth-mindset-activities.pdf"
  },
  {
    id: 5,
    title: "Tech Concept Visual Guide",
    category: "Tech Literacy",
    type: "guide",
    pages: 8,
    description: "Visual explanations of basic technology concepts that can be taught without computer access.",
    requiredMaterials: ["Printed guide"],
    downloadUrl: "/resources/tech-visual-guide.pdf"
  },
  {
    id: 6,
    title: "Financial Literacy Basics",
    category: "Finance",
    type: "worksheet",
    pages: 5,
    description: "Fundamentals of budgeting, saving, and financial planning exercises.",
    requiredMaterials: ["Pencils", "Calculator (optional)", "Printed worksheets"],
    downloadUrl: "/resources/financial-literacy-basics.pdf"
  },
  {
    id: 7,
    title: "Personal Brand Development",
    category: "Career",
    type: "worksheet",
    pages: 4,
    description: "Exercises to help students define and articulate their unique value proposition.",
    requiredMaterials: ["Pencils", "Printed worksheets"],
    downloadUrl: "/resources/personal-brand-worksheet.pdf"
  },
  {
    id: 8,
    title: "Project Planning Template",
    category: "Project Management",
    type: "template",
    pages: 3,
    description: "Simple project planning framework for students to organize skill-building activities.",
    requiredMaterials: ["Pencils", "Printed templates"],
    downloadUrl: "/resources/project-planning-template.pdf"
  },
  {
    id: 9,
    title: "Goal Setting Framework",
    category: "Mindset",
    type: "worksheet",
    pages: 2,
    description: "SMART goals worksheet adapted for high-income skill development.",
    requiredMaterials: ["Pencils", "Printed worksheets"],
    downloadUrl: "/resources/goal-setting-framework.pdf"
  },
  {
    id: 10,
    title: "Peer Feedback Forms",
    category: "Assessment",
    type: "template",
    pages: 1,
    description: "Structured forms for students to give constructive feedback on each other's work and presentations.",
    requiredMaterials: ["Pencils", "Printed forms"],
    downloadUrl: "/resources/peer-feedback-forms.pdf"
  },
  {
    id: 11,
    title: "Weekly Skill Practice Log",
    category: "Progress Tracking",
    type: "template",
    pages: 1,
    description: "Template for tracking daily/weekly practice of target skills.",
    requiredMaterials: ["Pencils", "Printed log sheets"],
    downloadUrl: "/resources/skill-practice-log.pdf"
  },
  {
    id: 12,
    title: "Visual Storytelling Guide",
    category: "Communication",
    type: "guide",
    pages: 6,
    description: "Techniques for effective visual communication and storytelling.",
    requiredMaterials: ["Printed guide", "Drawing materials (optional)"],
    downloadUrl: "/resources/visual-storytelling-guide.pdf"
  }
];

const PrintableResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const uniqueCategories = Array.from(new Set(printableResources.map(resource => resource.category)));
  
  const filteredResources = printableResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = categoryFilter ? resource.category === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search printable resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={categoryFilter === null ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategoryFilter(null)}
          >
            All
          </Button>
          {uniqueCategories.map(category => (
            <Button
              key={category}
              variant={categoryFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="border border-gray-100 rounded-lg p-4 bg-white">
              <div className="flex items-start">
                <div className="p-2 bg-gray-50 rounded-md mr-4">
                  {resource.type === 'worksheet' && <FileText className="h-5 w-5 text-blue-500" />}
                  {resource.type === 'template' && <BookOpen className="h-5 w-5 text-green-500" />}
                  {resource.type === 'guide' && <BookOpen className="h-5 w-5 text-purple-500" />}
                  {resource.type === 'assessment' && <Check className="h-5 w-5 text-amber-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="font-medium text-gray-800">{resource.title}</h3>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {resource.pages} {resource.pages === 1 ? 'page' : 'pages'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1 mb-3">{resource.description}</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs text-gray-500 font-medium mb-1">Materials needed:</h4>
                    <div className="flex flex-wrap gap-1">
                      {resource.requiredMaterials.map((material, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm"
                      className="bg-fss-primary hover:bg-fss-secondary flex items-center"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Printer className="h-4 w-4 mr-1" />
                      Print Directly
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No printable resources found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintableResources;

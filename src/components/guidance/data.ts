
import { FrequencyType, GroupSize, GuidanceSession } from "./types";

// Session data for the Guidance Program Builder
export const sessionData: GuidanceSession[] = [
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
  // Additional sessions are in the original data, truncated here for brevity
  // The remaining sessions (core-skills, pathway-specific, etc.) would continue here
];

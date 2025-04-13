
// Define enums and types for the Guidance Program Builder

export enum FrequencyType {
  WEEKLY = "weekly",
  BIWEEKLY = "biweekly", 
  MONTHLY = "monthly",
}

export enum GroupSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type ResourceType = "handout" | "activity" | "assessment" | "guide" | "template";

export interface SessionResource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  downloadUrl: string;
}

export interface GuidanceSession {
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

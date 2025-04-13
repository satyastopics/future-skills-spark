
import { useState } from "react";
import { Info, Calendar, Rocket, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the refactored sub-components
import ProgramOverview from "./guidance/ProgramOverview";
import SessionPlans from "./guidance/SessionPlans";
import ImplementationGuide from "./guidance/ImplementationGuide";
import TeacherResources from "./guidance/TeacherResources";

const GuidanceProgramBuilder = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
          <TabsTrigger value="overview">
            <Info className="h-4 w-4 mr-2" />
            Program Overview
          </TabsTrigger>
          <TabsTrigger value="sessions">
            <Calendar className="h-4 w-4 mr-2" />
            Session Plans
          </TabsTrigger>
          <TabsTrigger value="implementation">
            <Rocket className="h-4 w-4 mr-2" />
            Implementation Guide
          </TabsTrigger>
          <TabsTrigger value="resources">
            <BookOpen className="h-4 w-4 mr-2" />
            Teacher Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <ProgramOverview />
        </TabsContent>
        
        <TabsContent value="sessions">
          <SessionPlans />
        </TabsContent>
        
        <TabsContent value="implementation">
          <ImplementationGuide />
        </TabsContent>
        
        <TabsContent value="resources">
          <TeacherResources />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GuidanceProgramBuilder;

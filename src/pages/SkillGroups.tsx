
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillPathways from "@/components/SkillPathways";

const SkillGroups = () => {
  // Set page title
  useEffect(() => {
    document.title = "Skill Groups - Future Skills School";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 mx-auto py-8 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Skill Pathways</h1>
            <p className="text-gray-600 max-w-3xl">
              Explore high-demand skill pathways that can help students build diversified income sources.
              These skills are selected to be accessible even with limited resources.
            </p>
          </header>
          
          <SkillPathways />
          
          <div className="mt-12 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-xl font-bold mb-4">How to Use This Section</h2>
            <p className="mb-4 text-gray-700">
              As a teacher or mentor, use these skill pathways to:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Identify in-demand skills relevant to your students' interests and local opportunities</li>
              <li>Create customized learning paths combining multiple skill areas</li>
              <li>Develop lesson plans focused on specific high-value skills</li>
              <li>Guide students in building portfolios that showcase their capabilities</li>
            </ol>
            
            <div className="mt-8 p-4 bg-fss-light rounded-lg border border-fss-accent text-gray-700">
              <h3 className="font-semibold mb-2 text-fss-primary">Teaching Tip</h3>
              <p className="text-sm">
                Encourage students to master at least one skill from different categories to create a versatile 
                skill portfolio. This approach increases their adaptability and opens multiple income opportunities.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillGroups;

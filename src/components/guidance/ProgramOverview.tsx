
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, CheckCircle, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const ProgramOverview = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resource Ready",
      description: "Program Guide has been prepared for download.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Program Philosophy & Goals</h2>
        <p className="mb-4 text-gray-700">
          The Future Skills Portfolio Development Program is designed specifically for Indian high school students, 
          with a focus on building high-income skills that lead to financial independence. This program addresses 
          the unique challenges faced by schools with limited resources while maximizing student opportunities.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Core Program Principles:</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Early exposure to high-income skill pathways accessible to students regardless of background</li>
          <li>Continuous, structured guidance that builds portfolios incrementally over time</li>
          <li>Resource-conscious approach using readily available materials</li>
          <li>Support for teachers with varying levels of technical expertise</li>
          <li>Integration with existing curriculum while adding future-ready skills</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Program Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                The complete program spans one academic year with flexible implementation options:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">Phase 1</Badge>
                  <span className="text-sm">Assessment & Exploration (2 months)</span>
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">Phase 2</Badge>
                  <span className="text-sm">Core Skill Development (3 months)</span>
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">Phase 3</Badge>
                  <span className="text-sm">Pathway Specialization (3-4 months)</span>
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">Phase 4</Badge>
                  <span className="text-sm">Portfolio Finalization (2 months)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Expected Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                By the end of the program, students will have:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                  <span className="text-sm">A professional portfolio of high-income skills</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                  <span className="text-sm">Clear understanding of their strongest career pathways</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                  <span className="text-sm">Evidence of skill application in real-world contexts</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                  <span className="text-sm">Increased confidence in their future earning potential</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 border-t pt-6 flex justify-between items-center">
          <div>
            <h3 className="font-medium">Complete Program Guide</h3>
            <p className="text-sm text-gray-600">Comprehensive overview of the entire skill portfolio program</p>
          </div>
          <Button onClick={handleDownload} className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Download Guide
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Implementation Models</h2>
        <p className="mb-6 text-gray-700">
          The program is designed to be flexible and adapt to various school settings and schedules. 
          Choose the implementation model that works best for your students and resources:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Weekly Guidance Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Dedicate one class period per week (40-60 minutes) to skill portfolio development.
                This approach provides consistent, incremental progress throughout the year.
              </p>
              <div className="mt-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Recommended</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Intensive Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Conduct half-day or full-day workshops monthly, with self-guided activities between sessions.
                Ideal for schools unable to schedule weekly sessions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">After-School Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Run as an extracurricular activity with 1-2 hour sessions weekly or biweekly.
                Works well for optional participation or pilot implementations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Integrated Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Embed portfolio development activities within existing subjects, with teachers collaborating
                across disciplines to cover different skill aspects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;

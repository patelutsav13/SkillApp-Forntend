import { Database, Zap } from 'lucide-react';

const SkillBar = ({ skill, percent, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
      <span className="text-sm font-medium text-gray-500">{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const SkillAnalysis = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Left Column: Skill Bars */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        <h2 className="text-xl font-bold mb-2 dark:text-white">Detailed Skill Breakdown</h2>
        <p className="text-sm text-gray-500 mb-8">Comparing your academic output vs. Real-time Job Market Data (Q3 2025)</p>

        <div className="space-y-8">
          <div>
            <h3 className="flex items-center gap-2 text-red-500 font-bold text-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500"></div> Healthcare Tech
            </h3>
            <SkillBar skill="Bio-Statistics" percent={50} color="bg-red-500" />
            <SkillBar skill="Public Health Policies" percent={45} color="bg-red-500" />
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-blue-500 font-bold text-sm mb-4">
               <div className="w-2 h-2 rounded-full bg-blue-500"></div> Smart City Systems
            </h3>
            <SkillBar skill="IoT Architecture" percent={60} color="bg-blue-500" />
            <SkillBar skill="GIS & Spatial Analysis" percent={80} color="bg-blue-500" />
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-green-500 font-bold text-sm mb-4">
               <div className="w-2 h-2 rounded-full bg-green-500"></div> Ag-Tech (Elective)
            </h3>
            <SkillBar skill="Soil Data Modeling" percent={30} color="bg-green-500" />
          </div>
        </div>
      </div>

      {/* Right Column: AI Insight & Milestones */}
      <div className="w-full lg:w-96 space-y-6">
        
        {/* AI Insight Card - Purple Gradient */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
             <Database className="w-5 h-5" />
             <h3 className="font-bold">AI Insight Engine</h3>
          </div>
          <p className="text-sm opacity-90 leading-relaxed mb-6">
            Based on your recent performance in "Urban Planning 101", your spatial reasoning is strong. However, your data handling in "Intro to Bio-Stats" suggests a need for Python pandas reinforcement.
          </p>
          <div className="bg-white/10 p-3 rounded-lg border border-white/20">
            <p className="text-xs uppercase tracking-wide opacity-70 mb-1">Suggestion Generated:</p>
            <p className="font-bold text-sm">Take "Python for Health Data" (Week 3-4)</p>
          </div>
        </div>

        {/* Recent Milestones */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="font-bold mb-4 dark:text-white">Recent Milestones</h3>
          <div className="space-y-6 border-l-2 border-gray-200 dark:border-gray-700 ml-2 pl-4">
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-800"></span>
              <p className="text-sm font-bold dark:text-white">Completed Module: GIS Basics</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-800"></span>
              <p className="text-sm font-bold dark:text-white">Skill Verified: Python Basics</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-800"></span>
              <p className="text-sm font-bold dark:text-white">Joined Project: Smart Traffic Light</p>
              <p className="text-xs text-gray-500">3 days ago</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillAnalysis;
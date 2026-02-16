import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Activity, Zap, Briefcase, Award, ArrowRight } from 'lucide-react';

const radarData = [
  { subject: 'Data Analytics', A: 80, B: 100, fullMark: 100 },
  { subject: 'IoT Systems', A: 45, B: 90, fullMark: 100 },
  { subject: 'Public Health', A: 50, B: 70, fullMark: 100 },
  { subject: 'GIS Mapping', A: 95, B: 60, fullMark: 100 },
  { subject: 'Bio-Statistics', A: 60, B: 80, fullMark: 100 },
  { subject: 'Project Mgmt', A: 70, B: 75, fullMark: 100 },
];

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1 dark:text-white">{value}</h3>
        <p className={`text-xs mt-2 font-medium ${subtext.includes('+') ? 'text-green-500' : 'text-blue-500'}`}>
          {subtext}
        </p>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-opacity-100`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Skill Readiness" value="68%" subtext="+4% this month" icon={Activity} color="bg-blue-500" />
        <StatCard title="Learning Streak" value="12 Days" subtext="Keep it up!" icon={Zap} color="bg-green-500" />
        <StatCard title="Projects" value="4 Active" subtext="2 Due this week" icon={Briefcase} color="bg-purple-500" />
        <StatCard title="Badges" value="15 Earned" subtext="Latest: IoT Hero" icon={Award} color="bg-yellow-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Chart Section */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold dark:text-white">Holistic Skill Intelligence</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">Full Analysis &gt;</button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="h-[300px] w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="You" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                  <Radar name="Industry Target" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0} strokeDasharray="4 4" />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2 text-xs">
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 opacity-50"></span> You</div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full border border-green-500 border-dashed"></span> Industry Target</div>
              </div>
            </div>

            {/* Insights Side Panel */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400 font-bold text-sm">
                  <Activity className="w-4 h-4" /> Critical Gap
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Public Health & Bio-Statistics are 25% below target for your desired role.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Zap className="w-4 h-4" /> Strong Point
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  GIS Mapping skills are exceeding industry entry-level requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommended Path Column */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold mb-4 dark:text-white">AI Recommended Path</h2>
          <div className="space-y-4">
            
            {/* Card 1 */}
            <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between text-xs mb-1">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Healthcare</span>
                <span className="text-green-600 font-bold">98% Match</span>
              </div>
              <h4 className="font-bold text-sm dark:text-white">AI in Healthcare Informatics</h4>
              <p className="text-xs text-gray-500 mt-1">Coursera via DeepLearning.ai • 4 Weeks</p>
              <div className="mt-2 text-xs text-purple-600 font-medium">~ +15 Public Health</div>
            </div>

            {/* Card 2 */}
            <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between text-xs mb-1">
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Urban</span>
                <span className="text-green-600 font-bold">92% Match</span>
              </div>
              <h4 className="font-bold text-sm dark:text-white">Urban IoT Sensor Deployment</h4>
              <p className="text-xs text-gray-500 mt-1">Internal University Lab • 2 Months</p>
              <div className="mt-2 text-xs text-purple-600 font-medium">~ +20 IoT Systems</div>
            </div>

             {/* Card 3 */}
             <div className="p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between text-xs mb-1">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Agriculture</span>
                <span className="text-green-600 font-bold">85% Match</span>
              </div>
              <h4 className="font-bold text-sm dark:text-white">Precision Agriculture Data Models</h4>
              <p className="text-xs text-gray-500 mt-1">AgriTech Hub • 3 Weeks</p>
              <div className="mt-2 text-xs text-purple-600 font-medium">~ +10 Data Analytics</div>
            </div>

          </div>
          <button className="w-full mt-5 bg-gray-900 text-white dark:bg-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            View All Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
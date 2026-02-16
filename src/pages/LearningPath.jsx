import { CheckCircle, PlayCircle, Lock, BookOpen } from 'lucide-react';
import { useParams } from 'react-router-dom';

const pathsData = {
  health: {
    title: "Health Technology & Informatics",
    desc: "Master the intersection of medical science and data engineering to improve patient outcomes.",
    progress: 45,
    color: "bg-red-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
    modules: [
      { title: "Intro to Medical Terminology", type: "Video", status: "completed" },
      { title: "Electronic Health Records (EHR) Data", type: "Lab", status: "completed" },
      { title: "Privacy & HIPAA Compliance", type: "Reading", status: "current" },
      { title: "Bio-Statistics with R", type: "Project", status: "locked" },
      { title: "Telemedicine Architectures", type: "Course", status: "locked" },
    ]
  },
  agri: {
    title: "Agricultural Science & Tech",
    desc: "Learn how to use sensors, drones, and AI to optimize food production and sustainability.",
    progress: 15,
    color: "bg-green-500",
    bg: "bg-green-50",
    iconColor: "text-green-500",
    modules: [
      { title: "Fundamentals of Soil Science", type: "Reading", status: "completed" },
      { title: "IoT Sensors in Agriculture", type: "Lab", status: "current" },
      { title: "Drone Mapping for Crop Health", type: "Video", status: "locked" },
      { title: "Supply Chain Logistics", type: "Course", status: "locked" },
    ]
  },
  urban: {
    title: "Urban Planning & Smart Cities",
    desc: "Design the cities of the future using GIS, spatial data, and urban connectivity frameworks.",
    progress: 72,
    color: "bg-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    modules: [
      { title: "Urban Theory 101", type: "Course", status: "completed" },
      { title: "GIS Mapping Fundamentals", type: "Project", status: "completed" },
      { title: "Smart Mobility Systems", type: "Lab", status: "completed" },
      { title: "Urban Energy Grids", type: "Reading", status: "current" },
      { title: "Sustainable Infrastructure", type: "Course", status: "locked" },
    ]
  }
};

const LearningPath = () => {
  const { type } = useParams(); // 'health', 'agri', or 'urban'
  const data = pathsData[type] || pathsData.health;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className={`${data.bg} dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700`}>
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2 dark:text-white flex items-center gap-3">
             {data.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{data.desc}</p>
          
          <div className="space-y-2">
             <div className="flex justify-between text-sm font-bold">
               <span className="dark:text-white">Track Progress</span>
               <span className={data.iconColor}>{data.progress}% Completed</span>
             </div>
             <div className="w-full bg-white dark:bg-gray-700 h-3 rounded-full overflow-hidden">
               <div className={`h-full ${data.color}`} style={{ width: `${data.progress}%` }}></div>
             </div>
          </div>
        </div>
      </div>

      {/* Curriculum List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <h3 className="font-bold text-lg mb-6 dark:text-white">Core Curriculum</h3>
        <div className="space-y-4">
          {data.modules.map((mod, idx) => (
            <div key={idx} className={`flex items-center p-4 rounded-lg border ${mod.status === 'current' ? 'border-blue-500 bg-blue-50/10' : 'border-gray-100 dark:border-gray-700'}`}>
              <div className="mr-4">
                {mod.status === 'completed' && <CheckCircle className="w-6 h-6 text-green-500" />}
                {mod.status === 'current' && <PlayCircle className="w-6 h-6 text-blue-500" />}
                {mod.status === 'locked' && <Lock className="w-6 h-6 text-gray-300" />}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${mod.status === 'locked' ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}>{mod.title}</h4>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-500 mt-1 inline-block">{mod.type}</span>
              </div>
              {mod.status === 'current' && (
                <button className="bg-gray-900 dark:bg-gray-100 dark:text-black text-white px-4 py-2 rounded-lg text-sm font-bold">Continue</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
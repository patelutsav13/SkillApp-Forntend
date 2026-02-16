import { Filter } from 'lucide-react';

const RecCard = ({ category, match, type, title, provider, duration, skillImpact, color, bg }) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
    <div className="flex justify-between items-start mb-3">
      <div className="flex gap-2">
         <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${bg} ${color}`}>{category}</span>
         <span className="text-[10px] font-bold px-2 py-1 rounded uppercase bg-orange-100 text-orange-600">{type}</span>
      </div>
    </div>
    
    <h3 className="font-bold text-lg leading-tight mb-2 dark:text-white">{title}</h3>
    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{provider}</p>
    
    <div className="flex items-center text-xs text-gray-500 gap-4 mb-4">
       <span>⏱ {duration}</span>
       <span>⚡ Intermediate</span>
    </div>

    <div className="mt-auto">
      <div className="flex justify-between items-center text-xs font-bold text-green-600 mb-4">
        <span>Skill Impact</span>
        <span>{skillImpact}</span>
      </div>
      <button className="w-full py-2.5 rounded-lg bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition-colors">
        Start Now
      </button>
    </div>
  </div>
);

const Recommendations = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
           <h1 className="text-xl font-bold dark:text-white">Personalized Recommendations</h1>
           <p className="text-gray-500 text-sm">AI-curated opportunities to bridge your skill gaps</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecCard 
           category="Healthcare" match="98%" type="Course"
           title="AI in Healthcare Informatics"
           provider="Coursera via DeepLearning.ai"
           duration="4 Weeks"
           skillImpact="+15 Public Health"
           bg="bg-red-100" color="text-red-600"
        />
        <RecCard 
           category="Urban" match="92%" type="Project"
           title="Urban IoT Sensor Deployment"
           provider="Internal University Lab"
           duration="2 Months"
           skillImpact="+20 IoT Systems"
           bg="bg-blue-100" color="text-blue-600"
        />
         <RecCard 
           category="Agriculture" match="85%" type="Certification"
           title="Precision Agriculture Data Models"
           provider="AgriTech Hub"
           duration="3 Weeks"
           skillImpact="+10 Data Analytics"
           bg="bg-green-100" color="text-green-600"
        />
        <RecCard 
           category="Healthcare" match="80%" type="Project"
           title="Epidemiology Visualization"
           provider="DataCamp"
           duration="1 Week"
           skillImpact="+12 Bio-Statistics"
           bg="bg-red-100" color="text-red-600"
        />
        <RecCard 
           category="Urban" match="75%" type="Course"
           title="Smart Grid Infrastructure"
           provider="edX / MIT"
           duration="6 Weeks"
           skillImpact="+15 Urban Planning"
           bg="bg-blue-100" color="text-blue-600"
        />
      </div>
    </div>
  );
};

export default Recommendations;
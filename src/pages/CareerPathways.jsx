import { CheckCircle, Activity, Lock } from 'lucide-react';

const CareerPathways = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold dark:text-white">Your Career Roadmap</h1>
          <p className="text-blue-500 text-sm">Target: Smart City Health Analyst</p>
        </div>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Activity className="w-3 h-3" /> On Track
        </span>
      </div>

      <div className="space-y-6 relative">
        {/* Connecting Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

        {/* Step 1: Completed */}
        <div className="relative z-10 flex gap-6">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-green-500 flex items-center justify-center text-green-500 shadow-sm shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg dark:text-white">Junior Data Analyst</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Foundation</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Mastering Python, SQL, and Basic Visualization</p>
            <div className="flex gap-2">
              {['Python', 'SQL', 'Tableau'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: In Progress */}
        <div className="relative z-10 flex gap-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-blue-100 dark:border-blue-900 flex items-center justify-center text-white shadow-md shrink-0">
            <Activity className="w-6 h-6" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-blue-500 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg dark:text-white">Health Systems Intern</h3>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Development</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Applying analytics to public health datasets and EHR systems.</p>
            <div className="flex gap-2">
              {['Bio-Stats', 'FHIR Standards', 'Public Health'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded border border-blue-100 dark:border-blue-800">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Locked */}
        <div className="relative z-10 flex gap-6 opacity-60">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 border-dashed">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg dark:text-white">Smart City Health Analyst</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Specialization</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Integrating urban IoT data with epidemiological models.</p>
            <div className="flex gap-2">
              {['IoT Architecture', 'GIS Mapping', 'Predictive Modeling'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 text-xs rounded border border-gray-200 dark:border-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Step 4: Locked */}
        <div className="relative z-10 flex gap-6 opacity-60">
           <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 border-dashed">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg dark:text-white">Urban Health Policy Architect</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Expert</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Leading data-driven policy making for future cities.</p>
             <div className="flex gap-2">
              {['Policy Design', 'Team Leadership', 'Complex Systems'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 text-xs rounded border border-gray-200 dark:border-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPathways;
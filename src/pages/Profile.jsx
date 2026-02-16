import { Save } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        
        {/* Header with Save Button */}
        <div className="flex justify-between items-start mb-8">
           <div className="flex items-center gap-6">
             <div className="w-24 h-24 rounded-full bg-gray-900 text-white flex items-center justify-center text-3xl font-bold">
               GI
             </div>
             <div className="space-y-4 w-96">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" defaultValue="gill77" className="w-full border-b-2 border-blue-500 pb-1 text-xl font-bold bg-transparent outline-none dark:text-white" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Role / Goal</label>
                   <input type="text" defaultValue="Student" className="w-full border-b border-gray-300 pb-1 text-gray-700 dark:text-gray-300 bg-transparent outline-none focus:border-blue-500 transition-colors" />
                </div>
             </div>
           </div>
           <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-bold transition-colors">
             <Save className="w-4 h-4" /> Save Changes
           </button>
        </div>

        {/* University Section */}
        <div className="grid grid-cols-2 gap-8 mb-12 pl-32">
           <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">University</label>
              <input type="text" defaultValue="Metropolitan Tech University" className="w-full border-b border-blue-500 pb-1 text-gray-800 dark:text-gray-200 bg-transparent outline-none" />
           </div>
           <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Semester</label>
              <input type="text" defaultValue="1st Semester" className="w-full border-b border-blue-500 pb-1 text-gray-800 dark:text-gray-200 bg-transparent outline-none" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg dark:text-white">Verified Certifications</h3>
              <button className="text-gray-400 text-xl">+</button>
            </div>
            <div className="space-y-3">
              {['Google Data Analytics', 'IBM AI Foundations', 'Urban Planning Certificate'].map(cert => (
                <div key={cert} className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                   <span className="text-yellow-500">🏅</span>
                   <span className="font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="font-bold text-lg dark:text-white mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
               {['Smart Cities', 'Tele-health', 'Vertical Farming', 'Big Data', 'Sustainability'].map(tag => (
                 <span key={tag} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg text-sm font-medium">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
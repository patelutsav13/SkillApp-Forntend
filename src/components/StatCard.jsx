import React from 'react';

const StatCard = ({ title, value, subtext, icon: Icon, color }) => {
  // Extract the color name (e.g., "bg-blue-500") to use for text styling
  // This assumes the format "bg-color-number"
  const colorClass = color ? color.replace('bg-', 'text-') : 'text-gray-500';

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</h3>
          
          {/* Conditional styling for the subtext (green for positive, gray/blue for others) */}
          <p className={`text-xs mt-2 font-medium ${subtext.includes('+') ? 'text-green-500' : 'text-blue-500'}`}>
            {subtext}
          </p>
        </div>
        
        <div className={`p-3 rounded-lg bg-opacity-10 ${color} ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart2, Map, BookOpen, User, LogOut, HeartPulse, Sprout, Building2, X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen, onLogout }) => {
  const location = useLocation();

  // Helper for standard nav items
  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
          isActive 
            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" 
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        }`}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Link>
    );
  };

  // Helper for Colorful Learning Path Items
  const PathItem = ({ to, icon: Icon, label, colorClass, iconColor }) => {
     const isActive = location.pathname === to;
     return (
       <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
          isActive ? "bg-gray-50 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800"
        }`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <span className={colorClass}>{label}</span>
      </Link>
     )
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Logo Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <div className="bg-blue-600 text-white p-1 rounded-md">
              <BarChart2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">SkillIntel</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Nav Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-1 px-3">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
          <NavItem to="/analysis" icon={BarChart2} label="Skill Analysis" />
          <NavItem to="/pathways" icon={Map} label="Career Pathways" />
          <NavItem to="/recommendations" icon={BookOpen} label="Recommendations" />
          <NavItem to="/profile" icon={User} label="My Profile" />

          <div className="mt-8 mb-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
            Learning Paths
          </div>
          
          {/* Colorful Links matching screenshot */}
          <PathItem 
            to="/learn/health" 
            icon={HeartPulse} 
            label="Health Tech" 
            colorClass="text-red-500" 
            iconColor="text-red-500" 
          />
          <PathItem 
            to="/learn/agri" 
            icon={Sprout} 
            label="Agri-Science" 
            colorClass="text-green-500" 
            iconColor="text-green-500" 
          />
          <PathItem 
            to="/learn/urban" 
            icon={Building2} 
            label="Urban Planning" 
            colorClass="text-blue-500" 
            iconColor="text-blue-500" 
          />
        </div>

        {/* User Footer */}
        <div className="p-4 border-t dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold">
              PA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">patelurmik231</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Student</p>
            </div>
            <button onClick={onLogout} className="text-gray-400 hover:text-red-500 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
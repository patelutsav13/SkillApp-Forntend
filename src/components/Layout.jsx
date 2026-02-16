import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

const Layout = ({ isAuthenticated, onLogout, theme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen flex ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        isAuthenticated={isAuthenticated} 
        onLogout={onLogout} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        
        {/* Top Header for Toggle Buttons */}
        <header className="flex justify-between items-center p-4 shadow-sm bg-opacity-90 backdrop-blur-sm sticky top-0 z-20">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
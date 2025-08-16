import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "../ui/MobileMenu";
import NotificationIcon from "../../assets/notification-svgrepo-com.svg";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with true for desktop
  const [activeItem, setActiveItem] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Apply dark theme to body
  useEffect(() => {
    document.body.classList.add('bg-gray-900');
    return () => document.body.classList.remove('bg-gray-900');
  }, []);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  useEffect(() => {
    document.body.classList.toggle('bg-gray-900', theme === 'dark');
    document.body.classList.toggle('bg-gray-50', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // Only auto-close on mobile, keep user preference on desktop
      if (mobile) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    console.log("Toggle sidebar clicked, current state:", sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (itemId) => {
    setActiveItem(itemId);
    // In a real app, this would handle routing
    console.log(`Navigating to: ${itemId}`);

    // Close mobile menu after navigation
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}> 
      <div className="flex flex-row w-full min-h-screen">
        {/* Sidebar for desktop */}
        <div className="hidden lg:block">
          <Sidebar
            isOpen={sidebarOpen}
            onToggle={toggleSidebar}
            activeItem={activeItem}
            onNavigate={handleNavigation}
          />
        </div>
        {/* Sidebar for mobile */}
        <MobileMenu
          isOpen={sidebarOpen && isMobile}
          onClose={() => setSidebarOpen(false)}
          activeItem={activeItem}
          onNavigate={handleNavigation}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        {/* Main content container */}
        <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24 ${sidebarOpen && !isMobile ? "lg:ml-64" : !isMobile ? "lg:ml-16" : ""}`}>
          {/* Mobile header */}
          <div className={`lg:hidden shadow-sm border-b px-2 sm:px-4 py-2 sm:py-3 sticky top-0 z-40 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
              <button
                onClick={toggleSidebar}
                className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-upkraft-purple'}`}>UPKRAFT</div>
              <div className="flex items-center space-x-2">
                {/* Bell notification icon for mobile */}
                <button
                  onClick={() => console.log("Mobile notifications clicked")}
                  className="w-8 h-8 bg-upkraft-purple rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  title=""
                >
                  <img
                    src={NotificationIcon}
                    className="w-4 h-4 filter brightness-0 invert"
                    draggable="false"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Main content area */}
          <main className="flex-1 w-full max-w-full mx-auto overflow-x-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

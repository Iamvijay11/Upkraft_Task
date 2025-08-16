import React from 'react';
import { navigationItems } from '../../data/mockData';

const MobileMenu = ({ isOpen, onClose, activeItem, onNavigate, theme, toggleTheme }) => {
  const handleNavigation = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Semi-transparent backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Mobile menu */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 lg:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header with user profile */}
        <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-3 mb-4">
            {/* Profile Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sherry Wolf</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Piano Tutor</div>
            </div>
          </div>
          
          {/* Theme toggle and close button */}
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-md ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeItem === item.id
                    ? 'bg-upkraft-purple text-white'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-xl mr-4">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => handleNavigation('logout')}
            className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
              theme === 'dark'
                ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span className="text-xl mr-4">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
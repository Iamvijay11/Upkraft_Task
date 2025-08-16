import React from 'react';
import { navigationItems } from '../../data/mockData';

const Sidebar = ({ isOpen = true, onToggle, activeItem = 'home', onNavigate }) => {
  const handleNavigation = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className={`bg-slate-500 text-white h-screen fixed left-0 top-0 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'
      } flex flex-col z-40`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && (
            <div className="text-xl font-bold text-white transition-opacity duration-300">
              UPKRAFT
            </div>
          )}
          <button
            onClick={() => {
              console.log('Sidebar toggle button clicked, isOpen:', isOpen);
              if (onToggle) {
                onToggle();
              }
            }}
            className="p-2 rounded-lg hover:bg-slate-600 transition-colors flex-shrink-0 bg-slate-600/50"
            aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto" role="navigation" aria-label="Main navigation">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none ${isOpen
                ? 'focus:ring-2 focus:ring-upkraft-purple focus:ring-offset-2 focus:ring-offset-slate-700'
                : 'focus:bg-slate-600'
                } ${activeItem === item.id
                  ? 'bg-upkraft-purple text-white'
                  : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                } ${!isOpen ? 'justify-center' : ''}`}
              aria-current={activeItem === item.id ? 'page' : undefined}
              aria-label={`Navigate to ${item.label}`}
              title={!isOpen ? item.label : ''}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span className={`ml-3 transition-all duration-300 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-slate-600">
        <button
          onClick={() => handleNavigation('logout')}
          className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-600 hover:text-white transition-all duration-200 focus:outline-none ${isOpen
            ? 'focus:ring-2 focus:ring-upkraft-purple focus:ring-offset-2 focus:ring-offset-slate-700'
            : 'focus:bg-slate-600'
            } ${!isOpen ? 'justify-center' : ''}`}
          title={!isOpen ? 'Logout' : ''}
        >
          <span className="text-lg flex-shrink-0">🚪</span>
          <span className={`ml-3 transition-all duration-300 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
            }`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
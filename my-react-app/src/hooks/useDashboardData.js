import { useState, useEffect } from 'react';
import { tutorProfile, upcomingLessons, performanceMetrics } from '../data/mockData';

// Custom hook for managing dashboard data and state
export const useDashboardData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    profile: null,
    lessons: [],
    metrics: null
  });

  // Simulate API call with loading state
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate potential error (uncomment to test error state)
        // if (Math.random() > 0.8) {
        //   throw new Error('Failed to fetch dashboard data');
        // }
        
        setData({
          profile: tutorProfile,
          lessons: upcomingLessons,
          metrics: performanceMetrics
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Function to refresh data
  const refreshData = () => {
    setData({
      profile: tutorProfile,
      lessons: upcomingLessons,
      metrics: performanceMetrics
    });
  };

  // Function to update profile stats (for demo purposes)
  const updateProfileStats = (newStats) => {
    setData(prevData => ({
      ...prevData,
      profile: {
        ...prevData.profile,
        stats: {
          ...prevData.profile.stats,
          ...newStats
        }
      }
    }));
  };

  return {
    data,
    loading,
    error,
    refreshData,
    updateProfileStats
  };
};

// Loading skeleton components
export const LoadingSkeleton = {
  ProfileCard: () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-gray-200 animate-pulse">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-24 mx-auto mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-16 mx-auto mb-4"></div>
        <div className="flex justify-center space-x-4">
          <div className="h-3 bg-gray-300 rounded w-12"></div>
          <div className="h-3 bg-gray-300 rounded w-12"></div>
          <div className="h-3 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
    </div>
  ),

  StatCard: () => (
    <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
      <div className="text-center">
        <div className="h-8 bg-gray-300 rounded w-16 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
      </div>
    </div>
  ),

  LessonsTable: () => (
    <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 bg-gray-300 rounded w-32"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Error boundary component
export const ErrorDisplay = ({ error, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
    <div className="text-red-600 text-4xl mb-2">⚠️</div>
    <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
    <p className="text-red-600 mb-4">{error}</p>
    {onRetry && (
      <button 
        onClick={onRetry}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    )}
  </div>
);
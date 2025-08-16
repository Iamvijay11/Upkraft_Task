import React from 'react';
import CircularProgress from '../ui/CircularProgress';

const FeedbackSection = ({ feedbackPending = 0, onGiveFeedback }) => {
  const handleGiveFeedback = () => {
    if (onGiveFeedback) {
      onGiveFeedback();
    } else {
      console.log('Give Feedback clicked');
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Feedback Pending</h3>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Circular progress bar for feedback pending */}
        <div className="text-center">
          <CircularProgress 
            value={feedbackPending} 
            maxValue={20} 
            color="red"
            label="Feedback Pending"
            size="lg"
          />
        </div>
        
        {/* Fixed button with explicit purple color */}
        <button 
          onClick={handleGiveFeedback}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
          style={{ backgroundColor: '#6366f1' }}
        >
          <span>Give Feedback</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeedbackSection;
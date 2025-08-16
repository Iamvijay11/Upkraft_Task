import React from 'react';

const ReferralCard = ({ onReferNow }) => {
  const handleReferNow = () => {
    if (onReferNow) {
      onReferNow();
    } else {
      // Default action
      console.log('Refer Now clicked');
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200 h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Refer and Earn</h3>
        <p className="text-sm text-gray-600">
          Invite friends and earn rewards
        </p>
      </div>

      {/* Stats/Benefits */}
      <div className="flex-1 flex flex-col justify-center mb-4">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="text-lg font-bold text-purple-600">$50</div>
            <div className="text-xs text-gray-600">Per Referral</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-lg font-bold text-blue-600">∞</div>
            <div className="text-xs text-gray-600">No Limit</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleReferNow}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
      >
        <span>Refer Now</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};

export default ReferralCard;
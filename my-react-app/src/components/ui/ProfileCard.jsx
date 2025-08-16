import React from "react";

const ProfileCard = ({ name, role, avatar, stats }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200 h-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Profile</h3>
      </div>

      {/* Main Content - Fully Responsive Layout */}
      <div className="flex flex-col space-y-3">
        {/* Enlarged Avatar and Name Section */}
        <div className="flex items-center space-x-4 py-2">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
          {/* Name and role */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-base leading-tight truncate">
              {name}
            </h3>
            <p className="text-xs text-gray-600 mt-0.5 truncate">{role}</p>
          </div>
        </div>

        {/* Stats Section - Horizontal Cards Layout */}
        {stats && (
          <div className="space-y-2">
            {/* Students */}
            <div className="bg-purple-50 rounded-xl p-2 flex items-center justify-between min-h-[48px]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V10.5c0-2.21-1.79-4-4-4H8.5c-2.21 0-4 1.79-4 4V18H4z" />
                  </svg>
                </div>
                <div className="text-base font-medium text-gray-700">
                  Students
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {stats.students}
              </div>
            </div>

            {/* Course */}
            <div className="bg-blue-50 rounded-xl p-2 flex items-center justify-between min-h-[48px]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div className="text-base font-medium text-gray-700">
                  Course
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {stats.courses}
              </div>
            </div>

            {/* Reward */}
            <div className="bg-yellow-50 rounded-xl p-2 flex items-center justify-between min-h-[48px]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-base font-medium text-gray-700">
                  Reward
                </div>
              </div>
              <div className="text-2xl font-bold text-yellow-600">
                {stats.rewards}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

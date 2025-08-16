import React from 'react';

const UpcomingLessons = ({ lessons = [], onViewAll }) => {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Lessons</h3>
        <button 
          onClick={handleViewAll}
          className="text-sm text-upkraft-purple hover:text-upkraft-purple/80 font-medium focus:outline-none focus:ring-2 focus:ring-upkraft-purple focus:ring-offset-2 rounded px-2 py-1"
          aria-label="View all upcoming lessons"
        >
          View All
        </button>
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-fixed" role="table" aria-label="Upcoming lessons schedule">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 w-1/4" scope="col">Date</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 w-1/4" scope="col">Time</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 w-1/4" scope="col">Course</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 w-1/4" scope="col">Student Name</th>
            </tr>
          </thead>
          <tbody>
            {lessons.slice(0, 8).map((lesson, index) => (
              <tr key={lesson.id || index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-sm text-gray-900 w-1/4">{lesson.date}</td>
                <td className="py-3 px-2 text-sm text-gray-600 w-1/4">
                  {lesson.startTime} - {lesson.endTime}
                </td>
                <td className="py-3 px-2 text-sm font-medium text-gray-900 w-1/4">{lesson.course}</td>
                <td className="py-3 px-2 text-sm text-gray-600 w-1/4">{lesson.studentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {lessons.slice(0, 6).map((lesson, index) => (
          <div key={lesson.id || index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm font-medium text-gray-900">{lesson.course}</div>
              <div className="text-xs text-gray-500">{lesson.date}</div>
            </div>
            <div className="text-sm text-gray-600 mb-1">
              {lesson.startTime} - {lesson.endTime}
            </div>
            <div className="text-sm text-gray-600">{lesson.studentName}</div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {lessons.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-4xl mb-2">📅</div>
          <div className="text-gray-500 text-sm">No upcoming lessons scheduled</div>
        </div>
      )}
    </div>
  );
};

export default UpcomingLessons;
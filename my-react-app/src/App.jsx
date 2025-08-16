import React from 'react';
import TutorDashboard from './components/dashboard/TutorDashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <TutorDashboard />
    </ErrorBoundary>
  );
}

export default App

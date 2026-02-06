import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProfileWizard from './pages/ProfileWizard';
import Assessment from './pages/Assessment';
import Recommendations from './pages/Recommendations';
import Roadmap from './pages/Roadmap';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Jobs from './pages/Jobs';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile-setup" element={<ProfileWizard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/roadmap/:careerId" element={<Roadmap />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

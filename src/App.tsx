import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './components/home/HomePage';
import { CoursesPage } from './components/courses/CoursesPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { MessengerPage } from './components/messenger/MessengerPage';
import { UserFeed } from './components/feed/UserFeed';
import { SignUpForm } from './components/auth/SignUpForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<UserFeed />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessengerPage />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Club, Menu, Search, User, MessageSquare, Bell, Home, Map, Rss } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-200' : 'hover:text-green-200';
  };

  return (
    <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Club className="w-8 h-8" />
            <span className="text-xl font-bold">GolfSpace</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-4">
              <Link 
                to="/" 
                className={`flex items-center space-x-1 transition ${isActive('/')}`}
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/feed" 
                className={`flex items-center space-x-1 transition ${isActive('/feed')}`}
                aria-label="Feed"
              >
                <Rss className="w-4 h-4" />
                <span>Feed</span>
              </Link>
              <Link 
                to="/courses" 
                className={`flex items-center space-x-1 transition ${isActive('/courses')}`}
                aria-label="Courses"
              >
                <Map className="w-4 h-4" />
                <span>Courses</span>
              </Link>
              <Link 
                to="/profile" 
                className={`flex items-center space-x-1 transition ${isActive('/profile')}`}
                aria-label="Profile"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/messages" 
                className={`p-2 rounded-full transition ${isActive('/messages')}`}
                aria-label="Messages"
              >
                <MessageSquare className="w-5 h-5" />
              </Link>
              <button 
                className="p-2 rounded-full hover:text-green-200 transition"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
              <button 
                className="p-2 rounded-full hover:text-green-200 transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-full hover:text-green-200 transition"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
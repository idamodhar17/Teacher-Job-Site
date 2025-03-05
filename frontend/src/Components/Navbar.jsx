import React, { useState } from 'react';
import { BriefcaseIcon, BellIcon, UserCircleIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">teacherjob</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Find Jobs</Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600">Companies</Link>
            <Link to="/post-job" className="text-gray-700 hover:text-blue-600">Post a Job</Link>
            <div className="flex items-center space-x-4">
              <BellIcon className="h-6 w-6 text-gray-500" />
              <Link to="/login">
                <UserCircleIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XIcon className="h-6 w-6 text-gray-500" /> : <MenuIcon className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">Find Jobs</Link>
          <Link to="/companies" className="block text-gray-700 hover:text-blue-600">Companies</Link>
          <Link to="/post-job" className="block text-gray-700 hover:text-blue-600">Post a Job</Link>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <Link to="/login">
              <UserCircleIcon className="h-6 w-6 text-gray-500" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

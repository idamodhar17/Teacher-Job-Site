import React, { useState } from 'react';
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function MainContent(){
      const [currentPage, setCurrentPage] = useState('main');
          return(

        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">JobsLab</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-gray-700 hover:text-blue-600">Find Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Companies</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Post a Job</a>
                  <div className="flex items-center space-x-4">
                    <BellIcon className="h-6 w-6 text-gray-500" />
                  <Link to="/Login">
                  <button onClick={() => setCurrentPage('login')}>
                      <UserCircleIcon className="h-6 w-6 text-gray-500" />
                    </button>
                  </Link>
                  </div>
                </div>
                <div className="md:hidden flex items-center">
                  <MenuIcon className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find Your Dream Job</span>
                  <span className="block text-blue-600">Today</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Discover thousands of job opportunities with all the information you need.
                </p>
                
                {/* Search Form */}
                <div className="mt-10">
                  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Job title or keyword"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <BuildingIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Company"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <MapPinIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Location"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Featured Jobs Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((job) => (
                <div key={job} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Senior Frontend Developer</h3>
                      <p className="text-gray-600 mt-1">Google Inc.</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        San Francisco, CA
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Full-time</span>
                        <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Remote</span>
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=64&h=64&fit=crop&auto=format"
                      alt="Google Logo"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">$120k - $150k</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Job Categories */}
          <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {['Design', 'Development', 'Marketing', 'Business', 'Sales', 'Customer Service', 'Finance', 'HR'].map((category) => (
                  <div key={category} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
                    <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                    <p className="text-gray-500 mt-1">1,234 jobs</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center">
                    <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                    <span className="ml-2 text-xl font-bold">JobsLab</span>
                  </div>
                  <p className="mt-4 text-gray-400">
                    Find the perfect job match for your skills and career goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Browse Companies</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Salary Calculator</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">For Employers</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Browse Resumes</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Recruiting Solutions</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2024 JobsLab. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>

              )
    
}
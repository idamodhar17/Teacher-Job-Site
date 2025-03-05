import React from 'react'
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon, LogIn } from 'lucide-react';


export default function Footer() {
  return (
    <>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center">
                  <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                  <span className="ml-2 text-xl font-bold">teacherjob</span>
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
    
    </>
  )
}

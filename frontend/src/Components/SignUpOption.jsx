import React from 'react'
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function SignUpOption() {
  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <BriefcaseIcon className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setCurrentPage('login')} className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </button>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-5 ">
         <Link to="/TeacherSignUp" className='shadow-2xl'>
         <button
            onClick={() => setCurrentPage('teacherSignup')}
            className="w-full flex items-center justify-center px-4 py-4 border border-blue-600 rounded-lg shadow-sm text-lg font-medium text-blue-600 bg-white hover:bg-blue-50 transition duration-150"
          >
            Sign up as a Teacher
          </button>
         </Link>
        <Link to="/SchoolSignUp"  className='shadow-2xl'>
        <button
            onClick={() => setCurrentPage('schoolSignup')}
            className="w-full  flex items-center justify-center px-4 py-4 border border-blue-600 rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
          >
            Sign up as a School
          </button>
        </Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

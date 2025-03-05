import { useState } from 'react'
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom'
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon, LogIn } from 'lucide-react';

import './App.css'
import Landing from './Components/Landing'
import Login from './Components/Login'
import SignUpOption from './Components/SignUpOption';
import TeacherSignUp from './Components/TeacherSignUp';
import SchoolSignUp from './Components/SchoolSignUp';
import Job from './Components/Job';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SchoolProfile from './Components/SchoolProfile';
import ApplingJob from './Components/ApplingJob';
import TeacherProfile from './Components/TeacherProfile';
import TeacherList from './Components/TeacehrList'
import ConnectToTecher from './Components/ConnectToTecher';
import Admin from './Components/Admin';

function App() {
      const location = useLocation(); 
      const hideNavAndFooterRoutes = ['/']; 

  return (
   <>


  

    {!hideNavAndFooterRoutes.includes(location.pathname) && <Navbar />}
                       
          <Routes>
                  
                <Route path='/' element={<Landing/>}/>
                <Route path='/Login' element={<Login/>} />
                <Route path='/SignUpOption' element={<SignUpOption/>} />
                <Route path='/TeacherSignUp' element={<TeacherSignUp/>} />
                <Route path='/SchoolSignUp' element={<SchoolSignUp/>} />
                <Route path='/Jobs' element={<Job/>} />
                <Route path='/SchoolProfile' element={<SchoolProfile/>} />
                <Route path='/ApplyJob' element={<ApplingJob/>} />
                <Route path='/TeacherProfile' element={<TeacherProfile/>}/>
                <Route path='/TeacherList' element={<TeacherList/>} />
                <Route path='/ConnectToTeacher' element={<ConnectToTecher/>} />
                <Route path='/Admin' element={<Admin/>} />

          </Routes>

          <Footer/>


    
   
   </>
  )
}

export default App

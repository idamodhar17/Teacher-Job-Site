import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon, LogIn } from 'lucide-react';
import Landing from './Components/Landing'
import Login from './Components/Login'
import SignUpOption from './Components/SignUpOption';
import TeacherSignUp from './Components/TeacherSignUp';
import SchoolSignUp from './Components/SchoolSignUp';

function App() {


  return (
   <>
    <BrowserRouter>
          <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/Login' element={<Login/>} />
                <Route path='/SignUpOption' element={<SignUpOption/>} />
                <Route path='/TeacherSignUp' element={<TeacherSignUp/>} />
                <Route path='/SchoolSignUp' element={<SchoolSignUp/>} />

          </Routes>

    </BrowserRouter>
    
   
   </>
  )
}

export default App

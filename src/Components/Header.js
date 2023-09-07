import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Student_login from './Student_login';
import Admin_login from './Admin_login';
import Teacher_login from './Teacher_login';
import Services from './Services';
import Courses from './Courses';


export default function Header() {
  return (
    <BrowserRouter>
   <Routes>

   <Route path='/' element={<Home/>}>  </Route>
   <Route path='/contact' element={<Contact />}>  </Route>
   <Route path='/signup' element={<Signup />}>  </Route>
   <Route path='/login' element={<Login />}></Route>
   <Route path='/admin' element={<Admin_login />}></Route>
   <Route path='/student' element={<Student_login/>}></Route>
   <Route path='/teacher' element={<Teacher_login />}></Route>
   <Route path='/services' element={<Services />}></Route>
   <Route path='/courses' element={<Courses />}></Route>

  
</Routes>
   </BrowserRouter>
  )
}

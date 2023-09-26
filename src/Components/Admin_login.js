import React from 'react'
import Login from './Login'
import Nav2 from './Nav2'
import Footer from './Footer'

export default function Admin_login() {
  return (
    <div>
      <Nav2/>
       <Login title='Admin Log in' loginLink='/admin/AdminDashboard'/>
       <Footer/>
    </div>
  )
}

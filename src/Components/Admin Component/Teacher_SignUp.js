import React from 'react'
import Nav2 from '../Nav2'
import Footer from '../Footer'


export default function Teacher_SignUp() {
  return (
    <div>
      <Nav2/>
      <div className="container">
        <h2>Teacher Sign Up</h2>
        <form >
            
            <input  className='input-field' type="text" id="firstName" name="firstName" placeholder='Enter First Name'required/>
            
            <br />

            <input className='input-field' type="text" id="lastName" name="lastName" placeholder='Enter Last Name' required/>
            <br />
            
   
            <input className='input-field' type="email" id="email" name="email" placeholder='Enter Email' required/>
            <br />

            
            <input className='input-field' type="tel" id="contactNo" name="contactNo" placeholder='Enter Contact No.' required/>
            <br />

            <input className='btn' type="submit" value="Sign Up"/>
        </form>
    </div>
      <Footer/>
    </div>
  )
}

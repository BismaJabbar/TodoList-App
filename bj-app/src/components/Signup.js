import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-pink vh-100 '>
    <div className='bg-black p-3 rounded w-45'>
      <h4 className='text-white'> Signup</h4>
      <form action="">
      <div className='mb-3'>
              <label htmlfor="firstname" className='text-white'>First Name</label>
              <input type="firstname" placeholder='Enter Firstname' className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
              <label htmlfor="lastname" className='text-white'>Last Name</label>
              <input type="lastname" placeholder='Enter Lastname' className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
              <label htmlfor="email" className='text-white'>Email</label>
              <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
              <label htmlfor="password" className='text-white'>Password</label>
              <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
          </div>
          <Link to="/" className='btn btn-secondary w-100 '>Signup
              </Link> 
              <Link to="/" className='btn btn-default border w-100 text-white '>OR Already have an Account?,Login 
              </Link>


      </form>
    </div>
  </div>
  )
}

export default Signup

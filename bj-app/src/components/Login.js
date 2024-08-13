import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
   
    <div className='d-flex justify-content-center align-items-center bg-pink vh-100'>
       
      <div className='bg-black p-3 rounded w-150'>
      
        <h4 className='text-white'>Login</h4>
        <form action="">
          <div className='mb-3'>
            <label htmlFor="email" className='text-white'>Email</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='text-white'>Password</label>
            <input type="password" id="password" placeholder='Enter Password' className='form-control rounded-0 w-100' />
          </div>
          <Link to="/todolist" className='btn btn-secondary w-100'>Login</Link>
          <Link to="/signup" className='btn btn-default border w-100 text-white'>OR Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

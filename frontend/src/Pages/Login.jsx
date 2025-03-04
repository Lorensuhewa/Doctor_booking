import React from 'react'

const Login = () => {

  const handleClick = ()=>{
    window.location.href = '/';
  }
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='flex flex-col items-center w-1/3 rounded-md mt-20'>
          <form className='flex flex-col gap-5 w-3/4 bg-blue-400 p-10'>
            <h1 className='text-3xl font-bold py-3 text-center'>Login</h1>
            <p>Please login to book appointment</p>
            <label className='flex flex-col gap-1 p-3'>
              Email:
              <input type="email" name="email" className='border border-gray-300 p-2 rounded-md' />
            </label>
            <label className='flex flex-col gap-1 p-3'>
              Password:
              <input type="password" name="password" className='border border-gray-300 p-2 rounded-md' />
            </label>
            <input onClick={handleClick} type="submit" value="Login" className='bg-primary text-white px-8 py-3 rounded-full font-light mt-3'/>
            <p className='py-5'>Already have an account? <a href='/sign-up'>Login here</a> </p>
          </form>
      </div>
    </div>
  )
}

export default Login

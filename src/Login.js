import React from 'react'
import './Login.css'
import Logo1 from './Assets/Logo1.png'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clciked')
    navigate('/');
  };

return (
<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img className="mb-3 w-64" src={Logo1} alt="logo"/>
          <div className='mb-10'>[Your Company ]</div>
      
      <div className="w-full bg-white rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-semibold  text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="email" className="bg-grayy border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm  text-gray-900 font-semibold dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-grayy border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="pr-2 text-sm">
                            <span className='text-purples'> Remember me </span>
                            <label className="text-gray-500 dark:text-gray-300"></label> 
                          </div>
                          <div className="flex items-center h-5">
                            <input type="checkbox" className='w-4 h-4 border-2 bg-grayy' />
                          </div>
                      </div>
                      <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-purples">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purples">LOG IN</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400  text-center">
                      Don’t have an account yet?   <span className='text-purples  '> Sing Up</span>
                      
                      {/* <Link to="/Login">
                       <a href="{{Html::linkRoute('/Complains')}}" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                       </Link> */}
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

  )
}

export default Login;
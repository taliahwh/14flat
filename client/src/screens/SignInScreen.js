import React from 'react';
import { Link } from 'react-router-dom';

import logo_white from '../assets/logo_white.png';

const SignInScreen = () => {
  return (
    <div className="bg-black h-screen text-white font-roboto flex justify-center pt-10 md:pt-20">
      <div className="w-[20rem] sm:w-[24rem] md:w-[30rem]">
        <form>
          <Link to="/">
            <img
              className="w-3/6 flex mx-auto"
              src={logo_white}
              alt="1-4 flat logo"
            />
          </Link>

          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" border text-sm  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
              placeholder="name@14flat.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" border   text-sm  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white w-full font-medium text-sm px-5 py-2.5 text-center bg-gray-900 hover:bg-gray-800 focus:outline-none"
          >
            Sign in
          </button>
          <p className="text-sm text-center pt-2">
            Don't have an account?{' '}
            <span>
              <Link to="/signup" className="underline font-medium">
                Sign up
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;

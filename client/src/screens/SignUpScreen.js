import React from 'react';
import { Link } from 'react-router-dom';

const SignUpScreen = () => {
  const handleSubmit = () => {};

  return (
    <div className="container px-10 py-20 bg-background h-screen font-roboto">
      <form action="submit" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 px-2 md:px-14 lg:px-52">
          {/* <img src="" alt="booklyst" className="w-auto h-6" /> */}
          <Link to="/">
            <h1 className="text-center font-spratBold text-[8rem] md:text-[10rem]">
              1-4
            </h1>
          </Link>

          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            // value={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
            placeholder="Enter full name"
            // onChange={(e) => setName(e.target.value)}
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
            placeholder="email@14flat.com"
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-900 pt-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
            placeholder="•••••••"
            // onChange={(e) => setPassword(e.target.value)}
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-900 pt-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            // value={confirmPassword}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
            placeholder="•••••••"
            // onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="py-1"></div>

          <button
            type="submit"
            className="text-white w-full font-medium text-sm px-5 py-2.5 text-center bg-neutral-600 hover:bg-neutral-700 focus:outline-none transition-colors"
          >
            Create an Account
          </button>

          <p className="text-sm block mb-2  text-neutral-600 pt-1 text-center">
            Already have an account?{' '}
            <span>
              <Link to="/signin" className="font-medium underline text-black">
                Login
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;

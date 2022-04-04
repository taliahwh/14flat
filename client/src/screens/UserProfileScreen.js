import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';

import Header from '../components/Header';
import ViewWrittenArticle from '../components/Articles/ViewWrittenArticle';

const UserProfileScreen = () => {
  const location = useLocation();
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto h-screen md:h-full">
      <Header />

      <h1 className="font-spratBold text-7xl lg:text-8xl pb-5">
        {location.pathname.includes('view-articles') ? '/Articles' : '/Profile'}
      </h1>

      <div className="pt-8 md:pt-12 pb-8">
        <div className="flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-center space-x-4">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'font-spratRegular text-neutral-900 text-lg py-3 underline  hover:text-neutral-600'
                : 'font-spratRegular text-neutral-500 text-lg py-3  hover:text-neutral-900 hover:underline'
            }
          >
            Account Settings
          </NavLink>

          <NavLink
            to="/view-articles"
            className={({ isActive }) =>
              isActive
                ? 'font-spratRegular text-lg py-3 underline  hover:text-neutral-600'
                : 'font-spratRegular text-neutral-500 text-lg py-3  hover:text-neutral-900 hover:underline'
            }
          >
            View Articles
          </NavLink>
        </div>

        {/* Account Settings Screen */}
        {location.pathname.includes('profile') && (
          <div className="flex flex-col space-y-6 w-full md:w-1/2 mx-auto font-roboto text-[#333333]">
            <div className="pt-4 md:pt-10">
              <h2 className="font-medium">Toni Miller</h2>
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm text-neutral-500">Email</h3>
              <div className="flex justify-between">
                <p className="">tmiller@email.com</p>
                <p
                  className="text-[#4A90E2] cursor-pointer hover:underline"
                  onClick={() => setEmailOpen(!emailOpen)}
                >
                  Change Email
                </p>
              </div>
              <Transition
                show={emailOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <form
                  action="submit"
                  id="passwordForm"
                  className="mt-5 flex flex-col space-y-5"
                >
                  <input
                    type="email"
                    id="newEmail"
                    // value={email}
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="New Email Address"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="email"
                    id="confirmNewEmail"
                    // value={email}
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="Confirm New Email Address"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <button
                      type="sumbit"
                      className="bg-green-500 px-8 py-2 text-white font-medium text-sm"
                    >
                      SAVE
                    </button>
                    <button className="bg-neutral-800 px-8 py-2 text-white font-medium text-sm">
                      CANCEL
                    </button>
                  </div>
                </form>
              </Transition>
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm text-neutral-500">Password</h3>
              <div className="flex justify-between">
                <p className="">*********</p>
                <p
                  onClick={() => setPasswordOpen(!passwordOpen)}
                  className="text-[#4A90E2] cursor-pointer hover:underline"
                >
                  Change Password
                </p>
              </div>

              <Transition
                show={passwordOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <form
                  action="submit"
                  id="emailForm"
                  className="mt-5 flex flex-col space-y-5"
                >
                  <input
                    type="password"
                    id="oldPassword"
                    // value={email}
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="Old Password"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    id="newPassword"
                    // value={email}
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="New Password"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    id="confirmNewPassword"
                    // value={email}
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="Confirm New Password"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <button
                      type="sumbit"
                      className="bg-green-500 px-8 py-2 text-white font-medium text-sm"
                    >
                      SAVE
                    </button>
                    <button className="bg-neutral-800 px-8 py-2 text-white font-medium text-sm">
                      CANCEL
                    </button>
                  </div>
                </form>
              </Transition>
            </div>
          </div>
        )}

        {/* View Articles Screen */}
        {location.pathname.includes('view-articles') && (
          <div className="w-full pt-8 flex flex-col space-y-5">
            <ViewWrittenArticle />
            <ViewWrittenArticle />
            <ViewWrittenArticle />
            <ViewWrittenArticle />
            <ViewWrittenArticle />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileScreen;
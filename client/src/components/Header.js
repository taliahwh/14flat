import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';

import user from '../assets/user.png';
import menu from '../assets/menu.png';
import cancel from '../assets/cancel.png';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="bg-background pb-8">
      <nav className="flex items-center justify-between h-20 px-10 max-w-8xl mx-auto relative z-50">
        <div>
          {' '}
          <NavLink to="/">
            {/* <img src={logo} className="w-16 h-16" alt="test" /> */}
            <h1 className="font-spratBold text-4xl">1-4</h1>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-16">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-12 font-roboto font-medium'
                : 'no-underline font-robotoLight'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-12 font-roboto font-medium'
                : 'no-underline font-robotoLight'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/podcasts"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-12 font-roboto font-medium'
                : 'no-underline font-robotoLight'
            }
          >
            Podcasts
          </NavLink>
        </div>

        <div className="items-center hidden md:flex">
          <Link to="/">
            <img src={user} className="w-8 h-8" alt="user" />
          </Link>
        </div>
        <div
          className="text-black text-3xl cursor-pointer md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <img src={cancel} className="w-4 h-4" alt="close menu" />
          ) : (
            <img src={menu} className="w-7 h-7" alt="open menu" />
          )}
        </div>
        {mobileOpen && (
          <div className=" absolute top-full left-0 flex flex-col  w-full h-screen py-8 bg-background lg:hidden">
            <div className="flex-1 flex flex-col items-center text-lg space-y-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-roboto font-medium'
                    : 'no-underline font-robotoLight'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-roboto font-medium'
                    : 'no-underline font-robotoLight'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/podcasts"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-roboto font-medium'
                    : 'no-underline font-robotoLight'
                }
              >
                Podcasts
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

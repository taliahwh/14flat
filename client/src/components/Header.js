import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import user from '../assets/user.png';
import menu from '../assets/line_menu.png';
import cancel from '../assets/cancel.png';

// Action
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.userSignIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-background pb-8">
      <nav className="flex items-center justify-between h-20 max-w-8xl mx-auto relative z-50">
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
                ? 'underline underline-offset-12  font-robotoMedium'
                : 'no-underline font-robotoLight'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-12  font-robotoMedium'
                : 'no-underline font-robotoLight'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/podcasts"
            className={({ isActive }) =>
              isActive
                ? 'underline underline-offset-12  font-robotoMedium'
                : 'no-underline font-robotoLight'
            }
          >
            Podcasts
          </NavLink>
        </div>

        <div className="items-center hidden md:flex">
          {/* User Drowdown Dropdown */}
          <div
            className="text-black text-3xl cursor-pointer hidden md:flex"
            onClick={() => setUserOpen(!userOpen)}
          >
            {userOpen ? (
              <img src={cancel} className="w-4 h-4" alt="close menu" />
            ) : (
              <img src={user} className="w-7 h-7" alt="open menu" />
            )}
          </div>
          {userOpen && userInfo && (
            <div className=" absolute top-full right-0 flex flex-col  w-1/5 h-[20rem] py-8 bg-background shadow-md">
              <h1 className="font-robotoMedium text-md text-center py-4 text-neutral-600">
                {userInfo.name}
              </h1>

              {/* Border */}
              <div className="border-t-1 border-x-neutral-500 pb-5"></div>

              <div className="flex-1 flex flex-col items-center text-md space-y-4">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline underline-offset-12 font-robotoMedium'
                      : 'no-underline font-robotoLight'
                  }
                >
                  Profile
                </NavLink>
                {userInfo && userInfo.isAdmin === true && (
                  <NavLink
                    to="/new-article"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline underline-offset-12  font-robotoMedium'
                        : 'no-underline font-robotoLight'
                    }
                  >
                    New Article
                  </NavLink>
                )}
                <NavLink
                  to="/saved-articles"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline underline-offset-12  font-robotoMedium'
                      : 'no-underline font-robotoLight'
                  }
                >
                  Saved Articles
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="'underline underline-offset-12  font-robotoMedium text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {userOpen && !userInfo && (
            <div className=" absolute top-full right-0 flex flex-col  w-1/5 h-[8rem] py-8 bg-background shadow-md">
              <div className="flex-1 flex flex-col items-center text-md space-y-1">
                <Link to="/signin" className="no-underline  font-robotoMedium">
                  Sign In
                </Link>

                <p className="text-sm font-roboto">or</p>

                <Link to="/signup" className="no-underline  font-robotoMedium">
                  Create an Account
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Dropdown */}
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
        {mobileOpen && userInfo && (
          <div className=" absolute top-full left-0 flex flex-col  w-full h-screen py-8 bg-background lg:hidden">
            <div className="flex flex-col items-center text-lg space-y-8 pt-4 pb-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12  font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/podcasts"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12  font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Podcasts
              </NavLink>
            </div>

            {/* Border */}
            <div className="border-t-1 border-x-neutral-500 pb-5"></div>

            <h1 className=" font-robotoMedium text-md text-center py-4 text-neutral-600">
              {userInfo.name}
            </h1>

            <div className="flex-1 flex flex-col items-center text-md space-y-4">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12  font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Profile
              </NavLink>
              {userInfo && userInfo.isAdmin === true && (
                <NavLink
                  to="/new-article"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline underline-offset-12 font-robotoMedium'
                      : 'no-underline font-robotoLight'
                  }
                >
                  New Article
                </NavLink>
              )}
              <NavLink
                to="/saved-articles"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Saved Articles
              </NavLink>

              <button
                onClick={handleLogout}
                className="'underline underline-offset-12 font-robotoMedium text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {mobileOpen && !userInfo && (
          <div className=" absolute top-full left-0 flex flex-col  w-full h-screen py-8 bg-background lg:hidden">
            <div className="flex flex-col items-center text-lg space-y-8 pt-4 pb-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12 font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12  font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/podcasts"
                className={({ isActive }) =>
                  isActive
                    ? 'underline underline-offset-12  font-robotoMedium'
                    : 'no-underline font-robotoLight'
                }
              >
                Podcasts
              </NavLink>
            </div>

            {/* Border */}
            <div className="border-t-1 border-x-neutral-500 pb-5"></div>

            <div className="flex-1 flex flex-col items-center text-md space-y-2">
              <Link
                to="/signin"
                className="no-underline  font-robotoMedium pt-2"
              >
                Sign In
              </Link>

              <p className="text-sm font-roboto">or</p>

              <Link to="/signup" className="no-underline  font-robotoMedium">
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

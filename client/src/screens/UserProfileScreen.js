import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';

import { MdCircleNotifications } from 'react-icons/md';

// Actions
import { listUserArticles } from '../actions/articleActions';
import {
  getAnalytics,
  getUserDetails,
  updateEmail,
  updatePassword,
} from '../actions/userActions';

// Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import FullScreen from '../components/FullScreen';
import FullHeight from '../components/FullHeight';
import ViewWrittenArticle from '../components/Articles/ViewWrittenArticle';
import AdminAnalyticsCard from '../components/Admin/AdminAnalyticsCard';
import UserRequestCard from '../components/Admin/UserRequestCard';

const UserProfileScreen = () => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState('');
  const [confirmNewEmail, setConfirmNewEmail] = useState('');
  const [emailOpen, setEmailOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordOpen, setPasswordOpen] = useState(false);

  const { userDetails, error: errorUserDetails } = useSelector(
    (state) => state.userDetails
  );

  const {
    error: errorListUserArticles,
    loading: loadingUserArticles,
    userArticles,
  } = useSelector((state) => state.userArticles);

  const { success: successArticleDelete } = useSelector(
    (state) => state.deleteArticle
  );

  const { error: errorUpdateEmail, success: successUpdateEmail } = useSelector(
    (state) => state.userUpdateEmail
  );

  const { error: errorUpdatePassword, success: successUpdatePassword } =
    useSelector((state) => state.userUpdatePassword);

  const {
    loading: loadingAnalytics,
    analytics,
    error: errorAnalytics,
  } = useSelector((state) => state.adminAnalytics);

  /* TODO Create alert module for user to confirm they want
  to delete article before dispatching the action */

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    dispatch(updateEmail(newEmail, confirmNewEmail));
    setNewEmail('');
    setConfirmNewEmail('');
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword, confirmNewPassword));
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  useEffect(() => {
    if (!userFromLocalStorage._id) {
      navigate('/signin');
    }
    dispatch(getUserDetails(userFromLocalStorage._id));
    dispatch(listUserArticles(userFromLocalStorage._id));
    dispatch(getAnalytics());
  }, [userFromLocalStorage._id, dispatch, navigate, successArticleDelete]);

  return (
    <div
      className={
        location.pathname.includes('/profile')
          ? 'bg-background px-4 md:px-10 max-w-8xl mx-auto h-screen'
          : 'bg-background px-4 md:px-10 max-w-8xl mx-auto h-full'
      }
    >
      <Header />
      <FullScreen>
        <h1 className="font-spratBold text-7xl lg:text-8xl pb-5">
          {location.pathname.includes('view-articles')
            ? '/Articles'
            : location.pathname.includes('/admin')
            ? '/Admin'
            : '/Profile'}
        </h1>

        <div className="pt-8 md:pt-12 pb-8">
          <div className="flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-center space-x-4">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? 'font-spratRegular text-neutral-900 text-md md:text-lg py-3 underline  hover:text-neutral-600'
                  : 'font-spratRegular text-neutral-500 text-md md:text-lg py-3  hover:text-neutral-900 hover:underline'
              }
            >
              Account Settings
            </NavLink>

            <NavLink
              to="/view-articles"
              className={({ isActive }) =>
                isActive
                  ? 'font-spratRegular text-md md:text-lg py-3 underline  hover:text-neutral-600'
                  : 'font-spratRegular text-neutral-500 text-md md:text-lg py-3  hover:text-neutral-900 hover:underline'
              }
            >
              View Articles
            </NavLink>

            {userDetails && userDetails.isAdmin === true && (
              <>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-spratRegular text-md md:text-lg py-3 underline  hover:text-neutral-600'
                      : 'font-spratRegular text-neutral-500 text-md md:text-lg py-3  hover:text-neutral-900 hover:underline'
                  }
                >
                  Admin
                </NavLink>

                <span className="hidden sm:inline-flex bg-neutral-300 text-neutral-800 text-xs font-medium font-roboto items-center px-2.5 py-0.5 rounded">
                  <MdCircleNotifications className="text-sm mr-1" />2 requests
                </span>
              </>
            )}
          </div>

          {/* Account Settings Screen */}
          {location.pathname.includes('profile') && (
            <div className="flex flex-col space-y-6 w-full md:w-1/2 mx-auto font-roboto text-[#333333]">
              <div className="pt-4 md:pt-10">
                {errorUserDetails && (
                  <Alert variant="error">{errorUserDetails}</Alert>
                )}
                <h2 className="font-medium">{userFromLocalStorage.name}</h2>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-neutral-500">Email</h3>
                <div className="flex justify-between">
                  <p className="">{userFromLocalStorage.email}</p>
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
                    onSubmit={handleUpdateEmail}
                  >
                    {errorUpdateEmail && (
                      <Alert variant="error">{errorUpdateEmail}</Alert>
                    )}
                    {successUpdateEmail && (
                      <Alert variant="success">
                        Email updated successfully
                      </Alert>
                    )}
                    <input
                      type="email"
                      id="newEmail"
                      value={newEmail}
                      autoComplete="off"
                      className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                      placeholder="New Email Address"
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <input
                      type="email"
                      id="confirmNewEmail"
                      value={confirmNewEmail}
                      autoComplete="off"
                      className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                      placeholder="Confirm New Email Address"
                      onChange={(e) => setConfirmNewEmail(e.target.value)}
                    />
                    <div className="flex space-x-2">
                      <button
                        type="sumbit"
                        className="bg-green-500 px-8 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                      >
                        SAVE
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
                    onSubmit={handleUpdatePassword}
                    className="mt-5 flex flex-col space-y-5"
                  >
                    {errorUpdatePassword && (
                      <Alert variant="error">{errorUpdatePassword}</Alert>
                    )}
                    {successUpdatePassword && (
                      <Alert variant="success">
                        Password updated successfully
                      </Alert>
                    )}
                    <input
                      type="password"
                      id="oldPassword"
                      value={oldPassword}
                      className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                      placeholder="Old Password"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                      placeholder="New Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      id="confirmNewPassword"
                      value={confirmNewPassword}
                      className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                      placeholder="Confirm New Password"
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <div className="flex space-x-2">
                      <button
                        type="sumbit"
                        className="bg-green-500 px-8 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                      >
                        SAVE
                      </button>
                    </div>
                  </form>
                </Transition>
              </div>
            </div>
          )}

          {/* View Articles Screen */}
          {location.pathname.includes('view-articles') && (
            <div className="w-full pt-8 flex flex-col space-y-5 h-full">
              {errorListUserArticles && (
                <Alert variant="error">{errorListUserArticles}</Alert>
              )}
              {loadingUserArticles && <Loader />}
              {userArticles &&
                userArticles.length > 0 &&
                userArticles.map((article) => (
                  <div key={article._id}>
                    <ViewWrittenArticle article={article} />
                  </div>
                ))}
            </div>
          )}

          {/* Admin Screen */}
          {location.pathname.includes('admin') && (
            <div className="py-8 flex flex-col space-y-7">
              <h1 className="font-spratRegular text-4xl">Analytics</h1>
              {loadingAnalytics && <Loader />}
              {errorAnalytics && (
                <Alert variant="error">{errorAnalytics}</Alert>
              )}
              {analytics && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <AdminAnalyticsCard
                    users={true}
                    userCount={analytics.totalUsers}
                  />
                  <AdminAnalyticsCard
                    articles={true}
                    articleCount={analytics.totalArticles}
                  />
                  <AdminAnalyticsCard views={true} dailyViews={1365} />
                </div>
              )}
              <h1 className="font-spratRegular text-4xl">Requests</h1>
              <Alert variant="info">
                There are no requests for writers at this time.
              </Alert>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <UserRequestCard />
                <UserRequestCard />
                {/* <UserRequestCard />
              <UserRequestCard />
              <UserRequestCard /> */}
              </div>
            </div>
          )}
        </div>
      </FullScreen>
    </div>
  );
};

export default UserProfileScreen;

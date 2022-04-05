import React, { useState } from 'react';
import { FaUsers, FaPen, FaEye } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';

const AdminAnalyticsCard = ({
  users = false,
  userCount,
  posts = false,
  postCount,
  views,
  dailyViews,
  weeklyViews,
}) => {
  const [showDailyViews, setShowDailyViews] = useState(true);
  const [showWeeklyViews, setShowWeeklyViews] = useState(false);
  return (
    <>
      {users && (
        <div className="border-1 border-neutral-900 py-5 px-8 flex justify-between items-center">
          <div className="flex flex-col space-y-3">
            <h1 className="font-spratRegular text-md md:text-lg">
              Total Users
            </h1>
            <h3 className="text-2xl md:text-3xl font-roboto font-bold">
              {userCount}
            </h3>
          </div>
          <FaUsers className="text-5xl lg:text-6xl text-neutral-800" />
        </div>
      )}

      {posts && (
        <div className="border-1 border-neutral-900 py-5 px-8 flex justify-between items-center">
          <div className="flex flex-col space-y-3">
            <h1 className="font-spratRegular text-md md:text-lg">
              Total Posts
            </h1>
            <h3 className="text-2xl md:text-3xl font-roboto font-bold">
              {postCount}
            </h3>
          </div>
          <FaPen className="text-4xl lg:text-5xl text-neutral-800" />
        </div>
      )}

      {views && (
        <div className="border-1 border-neutral-900 py-5 px-8 flex justify-between items-center">
          <div className="flex flex-col space-y-3">
            <h1 className="font-spratRegular text-md md:text-lg">
              Total Views:{' '}
              <span>
                <div className="inline-block relative w-36">
                  <select
                    id="view"
                    className="font-spratRegular text-neutral-600 underline block appearance-none bg-background border-none  px-1 py-2 pr-8 focus:outline-none focus:shadow-outline"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-roboto font-bold">
              {dailyViews}
            </h3>
          </div>
          <FaEye className="text-4xl lg:text-5xl text-neutral-800" />
        </div>
      )}
    </>
  );
};

export default AdminAnalyticsCard;

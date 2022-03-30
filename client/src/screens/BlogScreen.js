import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import LatestArticle from '../components/Articles/LatestArticle';

const BlogScreen = () => {
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto">
      <Header />

      <h1 className="font-spratBold text-7xl lg:text-8xl pb-5">Blog</h1>

      {/* Latest Articles Section */}
      <div className="pt-8 md:pt-12 pb-8">
        <div className="flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-center space-x-4">
          <NavLink
            to="/blog"
            className="font-spratRegular text-lg py-3 underline  hover:text-neutral-600"
          >
            View all
          </NavLink>

          <div className="inline-block relative w-36">
            <select className="font-spratRegular text-neutral-500 block appearance-none bg-background border-none  px-1 py-2 pr-8 focus:outline-none focus:shadow-outline">
              <option className="font-spratRegular">Filter by Team</option>
              <option value="atl">Atlanta Hawks</option>
              <option value="bos">Boston Celtics</option>
              <option value="bkn">Brooklyn Nets</option>
              <option value="cha">Charlotte Hornets</option>
              <option value="chi">Chicago Bulls</option>
              <option value="cle">Cleveland Cavaliers</option>
              <option value="dal">Dallas Mavericks</option>
              <option value="den">Denver Nuggets</option>
              <option value="det">Detroit Pistons</option>
              <option value="gsw">Golden State Warriors</option>
              <option value="hou">Houston Rockets</option>
              <option value="ind">Indiana Pacers</option>
              <option value="lac">Los Angeles Clippers</option>
              <option value="lal">Los Angeles Lakers</option>
              <option value="mem">Memphis Grizzlies</option>
              <option value="mia">Miami Heat</option>
              <option value="mil">Milwaukee Bucks</option>
              <option value="min">Minnesota Timberwolves</option>
              <option value="nop">New Orleans Pelicans</option>
              <option value="nyk">New York Knicks</option>
              <option value="okc">Oklahoma City Thunder</option>
              <option value="orl">Orlando Magic</option>
              <option value="phi">Philadelphia 76ers</option>
              <option value="phx">Phoenix Suns</option>
              <option value="por">Portland Trail Blazers</option>
              <option value="sac">Sacramento Kings</option>
              <option value="sas">San Antonio Spurs</option>
              <option value="tor">Toronto Raptors</option>
              <option value="uta">Utah Jazz</option>
              <option value="was">Washington Wizards</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Header View */}
        {/* <div className="block md:hidden w-full border-t-1 border-b-1 border-neutral-300">
          <p className="font-spratRegular text-center text-xl md:text-3xl py-3">
            THE LATEST ARTICLES
          </p>
        </div> */}

        <div className="flex flex-col space-y-10 pt-2 md:pt-14">
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
          <Link
            to="/"
            className="font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;

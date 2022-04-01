import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import EpisodeCard from '../components/Podcasts/EpisodeCard';

const PodcastShowScreen = () => {
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto h-full">
      <Header />
      <div className="hidden md:grid grid-cols-10">
        {/* Show Info Section */}
        <div className="col-span-3 flex flex-col space-y-2">
          <img
            src="https://cdn.theathletic.com/app/uploads/2021/10/18160943/NBA_SHOW2-copy-scaled.jpg"
            alt="podcast"
          />
          <p className="text-sm text-neutral-600 font-robotoLight">
            797 episodes
          </p>
          {/* Border */}
          <div className="border-t-1 border-x-neutral-300 mt-10 mb-7 flex-col flex"></div>
          <p className="pt-2 text-sm font-robotoLight">
            An NBA podcast featuring a rotating lineup of the best insiders,
            writers, and reporters from The Athletic. Monday thru Saturday.
            Monday: Basketball Buds with Zach Harper and Friends | Tuesday:
            Tampering with Sam Amick, Anthony Slater and Fred Katz | Wednesday:
            Hoops Adjacent with David Aldridge and Marcus Thompson | Thursday:
            Point of Contention with Zach Harper, Marcus Thompson and Special
            Guests | Friday: Nerder She Wrote with Dave DuFour, Seth Partnow,
            and Mo Dakhil | And the Saturday Slam & Jam with Andrew Schlecht and
            Alex Speers. Plus, The NBA Daily Ding, a quick recap of the previous
            night's action.
          </p>
        </div>
        <div className="col-span-7 pl-7 flex flex-col space-y-2">
          <h1 className="font-spratRegular text-5xl">The Athletic NBA Show</h1>
          <p className="font-robotoLight text-xl pb-5">The Athletic</p>
          <div className="flex space-x-2 pb-5">
            <Link to="/">
              <p className="font-robotoLight text-sm border-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 px-3 ">
                Listen on
                <span className="font-roboto font-medium pl-1">
                  Spotify Podcasts
                </span>
              </p>
            </Link>

            <Link to="/">
              <p className="font-robotoLight text-sm border-1 border-[#7D50DF] text-[#7D50DF] hover:bg-[#7D50DF] hover:text-white py-1.5 px-3">
                Listen on
                <span className="font-roboto font-medium pl-1">
                  Apple Podcasts
                </span>
              </p>
            </Link>
          </div>
          {/* Border */}
          <div className="border-t-1 border-x-neutral-300"></div>
          <div className="flex flex-col space-y-2">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <p className="font-robotoLight text-sm text-neutral-600 py-2">
              © 2019 - The Athletic
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="grid grid-cols-5 md:hidden">
          <div className="col-span-2 bg-blue-100">
            <img
              src="https://cdn.theathletic.com/app/uploads/2021/10/18160943/NBA_SHOW2-copy-scaled.jpg"
              alt="podcast"
            />
          </div>
          <div className="col-span-3 pl-5 justify-center flex flex-col space-y-1">
            <p className="font-spratRegular text-2xl">The Athletic NBA Show</p>
            <p className="font-robotoLight">The Athletic</p>
            <p className="text-xs text-neutral-600 font-robotoLight">
              797 episodes
            </p>

            <Link to="/">
              <p className="font-robotoLight w-52 text-sm border-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 px-3 ">
                Listen on
                <span className="font-roboto font-medium pl-1">
                  Spotify Podcasts
                </span>
              </p>
            </Link>

            <Link to="/">
              <p className="font-robotoLight w-52 text-sm border-1 border-[#7D50DF] text-[#7D50DF] hover:bg-[#7D50DF] hover:text-white py-1.5 px-3">
                Listen on
                <span className="font-roboto font-medium pl-1">
                  Apple Podcasts
                </span>
              </p>
            </Link>
          </div>
        </div>
        {/* Border */}
        <div className="border-t-1 border-x-neutral-300 mt-5 mb-3 flex-col flex md:hidden"></div>
        <p className="pt-2 text-sm font-robotoLight md:hidden">
          An NBA podcast featuring a rotating lineup of the best insiders,
          writers, and reporters from The Athletic. Monday thru Saturday.
          Monday: Basketball Buds with Zach Harper and Friends | Tuesday:
          Tampering with Sam Amick, Anthony Slater and Fred Katz | Wednesday:
          Hoops Adjacent with David Aldridge and Marcus Thompson | Thursday:
          Point of Contention with Zach Harper, Marcus Thompson and Special
          Guests | Friday: Nerder She Wrote with Dave DuFour, Seth Partnow, and
          Mo Dakhil | And the Saturday Slam & Jam with Andrew Schlecht and Alex
          Speers. Plus, The NBA Daily Ding, a quick recap of the previous
          night's action.
        </p>
      </div>
      {/* Border */}
      <div className="border-t-1 border-x-neutral-300 mt-5 mb-3 flex-col flex md:hidden"></div>
      <div className="flex flex-col space-y-2 md:hidden">
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <p className="font-robotoLight text-sm text-neutral-600 py-2">
          © 2019 - The Athletic
        </p>
      </div>
    </div>
  );
};

export default PodcastShowScreen;

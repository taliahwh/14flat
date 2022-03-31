import React from 'react';

import Header from '../components/Header';

import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';

const PodcastScreen = () => {
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto h-full sm:h-screen">
      <Header />
      <div className="hidden sm:grid  grid-cols-9 gap-2">
        <div className="col-span-3 lg:col-span-3">
          <img
            className="h-64 w-64 lg:h-[20rem] lg:w-[20rem]"
            src="https://i.scdn.co/image/ab6765630000ba8a0ad27730b1072f7f275998dd"
            alt="podcast"
          />
        </div>

        <div className="col-span-6 h-full flex flex-col justify-center  space-y-5 pl-0 md:pl-4">
          <p className="text-neutral-700 font-robotoLight hidden md:block text-sm">
            Mar 28, 2022
          </p>
          <p className="text-neutral-600 text-lg md:text-xl text-center md:text-left mx-auto md:mx-0 font-robotoLight">
            Shattered: Hope, Heartbreak and the New York Knicks
          </p>

          <h1 className="font-spratRegular text-4xl text-center md:text-left">
            Ep. 2: The Dolan Family Business
          </h1>
        </div>
      </div>
      <div>
        <div className="hidden border-1 border-neutral-900 py-10 px-5 sm:flex justify-center shadow-md mt-10">
          Media player
        </div>
      </div>

      {/* Mobile view / Header*/}
      <div className="sm:hidden flex flex-col space-y-4 text-center">
        <p className="text-neutral-700 font-robotoLight text-sm">
          Mar 28, 2022
        </p>
        <p className="text-neutral-600 font-robotoLight">
          Shattered: Hope, Heartbreak and the New York Knicks
        </p>
        <h1 className="font-spratRegular text-3xl py-2">
          Ep. 2: The Dolan Family Business
        </h1>
        <img
          className="w-full"
          src="https://i.scdn.co/image/ab6765630000ba8a0ad27730b1072f7f275998dd"
          alt="podcast"
        />
        {/* Media player */}
        <div className="border-1 border-neutral-900 py-10 px-5 flex justify-center shadow-md">
          Media player
        </div>
      </div>
      {/* Border */}
      <div className="border-t-1 border-x-neutral-300 mt-10 mb-7 flex-col flex"></div>
      {/* Description Section */}
      <div className="hidden md:grid grid-cols-10 divide-x-1 divide-neutral-300">
        {/* Share Buttons */}
        <div className="col-span-2 flex flex-col space-y-3 pr-10 text-right">
          <h2 className="font-robotoLight text-lg lg:text-xl">
            Share this podcast
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-end items-end">
            <FaFacebookSquare className="text-4xl text-neutral-700" />
            <FaTwitterSquare className="text-4xl text-neutral-700" />
            <FaLinkedin className="text-4xl text-neutral-700" />
          </div>
        </div>

        {/* Description */}
        <div className="col-span-8">
          <div className="pl-10  flex flex-col space-y-5">
            <h1 className="font-spratRegular text-3xl">Description</h1>
            <p className="font-robotoLight">
              James Dolan is a controversial figure as owner of the Knicks.
              Episode two of Shattered looks at where the Dolan family came
              from, how Charles Dolan brought his son James into the business,
              and how James has decided to run the Knicks and Madison Square
              Garden.
            </p>
            <p className="font-robotoLight">
              The 90's Knicks were tough, talented and always in contention.
              Episode one of Shattered looks at what made those Knicks teams
              special, the internal issues that broke the team apart, and the
              early signs inside the organization that would lead to two decades
              of dysfunction at the Garden. Voices in episode one include
              Patrick Ewing, Jeff Van Gundy, Dave Checketts and more.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View Description */}
      <div className="flex flex-col space-y-5 md:hidden">
        <h1 className="font-spratRegular text-3xl">Description</h1>
        <p className="font-robotoLight">
          James Dolan is a controversial figure as owner of the Knicks. Episode
          two of Shattered looks at where the Dolan family came from, how
          Charles Dolan brought his son James into the business, and how James
          has decided to run the Knicks and Madison Square Garden.
        </p>
        <p className="font-robotoLight">
          The 90's Knicks were tough, talented and always in contention. Episode
          one of Shattered looks at what made those Knicks teams special, the
          internal issues that broke the team apart, and the early signs inside
          the organization that would lead to two decades of dysfunction at the
          Garden. Voices in episode one include Patrick Ewing, Jeff Van Gundy,
          Dave Checketts and more.
        </p>

        <div className="flex space-x-4 items-center pb-10">
          <FaFacebookSquare className="text-3xl text-neutral-700" />
          <FaTwitterSquare className="text-3xl text-neutral-700" />
          <FaLinkedin className="text-3xl text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;

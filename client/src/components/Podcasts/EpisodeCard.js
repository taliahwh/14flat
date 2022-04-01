import React from 'react';
import { Link } from 'react-router-dom';

import { FaPlay } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const EpisodeCard = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-11">
          <div className="flex flex-col py-2 space-y-1">
            <h4 className="text-neutral-500 text-xs font-roboto font-bold">
              APR 1, 2022
            </h4>
            <Link to="/podcasts/1">
              <h1 className="font-spratRegular text-2xl hover:underline">
                Nerder vs No Dunks Trivia Battle
              </h1>
            </Link>
            <p className="font-robotoLight text-sm pb-2 text-neutral-600">
              Jared Weiss and Mo Dahkil break down the top NBA games and stories
              from Thursday, March 31st. The guys break down the Bucks beating
              the Nets in OT, DeRozan drops 50 in the Bulls OT win vs the
              Clippers & the Pistons stun the 76ers.
            </p>
            {/* Play button */}
            <div className="flex space-x-3 items-center">
              <Link
                to="/"
                className="py-2 px-3 bg-neutral-200 w-20 flex justify-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-200"
              >
                <div className="flex space-x-1.5 items-center">
                  <FaPlay className="text-xs" />
                  <span className="font-roboto text-xs">PLAY</span>
                </div>
              </Link>
              <p className="font-robotoLight text-xs">34 min</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end pt-3">
          <IoIosArrowForward className="text-2xl text-neutral-600" />
        </div>
      </div>
      {/* Border */}
      <div className="border-t-1 border-x-neutral-300 mt-2"></div>
    </div>
  );
};

export default EpisodeCard;

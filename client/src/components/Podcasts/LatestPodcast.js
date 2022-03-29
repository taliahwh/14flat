import React from 'react';

import play from '../../assets/play.png';

const LatestPodcast = () => {
  return (
    <>
      <div className="md:flex space-x-10 hidden">
        <img
          className="h-60 object-fit"
          src="https://bdc2020.o0bc.com/wp-content/uploads/2021/06/Celtics_Nets_Basketball_23312-60cb7d422173b-scaled-768x432.jpg?width=800"
          alt="latest article"
        />

        <div className="flex flex-col space-y-2">
          <p className="text-neutral-600 text-xs pb-3 pt-1">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p>
          <h1 className="text-2xl font-spratRegular">
            Kyrie Irving is back in Brooklyn: EMERGENCY POD
          </h1>
          <p className="font-robotoLight text-sm">
            THE NETS ARE BACK! The City is changing its rule to allow Kyrie
            Irving to play at home in Brooklyn. Brian and Mike run through the 8
            biggest questions surrounding the now full-time Kyrie Irving-led
            Nets including how much does this elevate the Nets...
          </p>

          <div className="flex space-x-3 text-xs pt-3">
            <p className="text-neutral-400">Feb 11</p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">5 min read</p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col w-full md:hidden">
        <img
          className="h-60 object-fit"
          src="https://bdc2020.o0bc.com/wp-content/uploads/2021/06/Celtics_Nets_Basketball_23312-60cb7d422173b-scaled-768x432.jpg?width=800"
          alt="latest article"
        />

        <div className="flex justify-between pt-3 font-robotoLight text-sm">
          <div className="flex space-x-3 text-xs">
            <p className="text-neutral-400">Feb 11</p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">5 min read</p>
          </div>
          <p className="text-neutral-600 text-xs">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p>
        </div>

        <h1 className="text-2xl font-spratRegular py-3">
          Kyrie Irving is back in Brooklyn: EMERGENCY POD
        </h1>
        <p className="font-robotoLight text-sm text-justify">
          THE NETS ARE BACK! The City is changing its rule to allow Kyrie Irving
          to play at home in Brooklyn. Brian and Mike run through the 8 biggest
          questions surrounding the now full-time Kyrie Irving-led Nets
          including how much does this elevate the Nets...
        </p>
      </div>
    </>
  );
};

export default LatestPodcast;

import React from 'react';

const PodcastCard = () => {
  return (
    <div className="flex flex-col space-y-3 w-full md:w-64 pb-3">
      <img
        className="w-full md:w-64 md:h-64"
        src="https://cdn.theathletic.com/app/uploads/2021/10/18160943/NBA_SHOW2-copy-scaled.jpg"
        alt="podcast"
      />
      <div className="flex flex-col space-y-1 text-center">
        <h1 className="font-spratRegular text-[22px]">The Athletic NBA Show</h1>
        <p className="font-robotoLight">The Athletic</p>
      </div>
    </div>
  );
};

export default PodcastCard;

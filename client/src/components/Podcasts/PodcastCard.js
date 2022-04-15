import React from 'react';

const PodcastCard = ({ show }) => {
  return (
    <div className="flex flex-col space-y-3 w-full md:w-64 pb-3">
      <img
        className="w-full md:w-52 md:h-52 lg:w-64 lg:h-64"
        src={show.images[0].url}
        alt={show.name}
      />
      <div className="flex flex-col space-y-1 text-center">
        <h1 className="font-spratRegular text-[22px] hover:underline">
          {show.name}
        </h1>
        <p className="font-robotoLight text-sm">{show.publisher}</p>
      </div>
    </div>
  );
};

export default PodcastCard;

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LatestPodcast = ({ episode }) => {
  function msToMinutes(millis) {
    var minutes = Math.floor(millis / 60000);
    return `${minutes} min`;
  }

  return (
    <>
      <div className="md:flex space-x-10 hidden">
        <img
          className="h-[13.5rem] w-[13.5rem] object-fit"
          src={episode.images[0].url}
          alt="latest article"
        />

        <div className="flex flex-col space-y-2">
          {/* <p className="text-neutral-600 text-xs pb-3 pt-1">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p> */}
          <Link to={`/podcasts/episode/${episode.id}`}>
            <h1 className="text-2xl font-spratRegular hover:underline">
              {episode.name}
            </h1>
          </Link>
          <p className="font-robotoLight text-sm">{episode.description}</p>

          <div className="flex space-x-3 text-xs pt-3">
            <p className="text-neutral-400">
              {' '}
              {moment(episode.release_date).format('MMM D')}
            </p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">
              {msToMinutes(episode.duration_ms)}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col space-y-2 w-full md:hidden">
        <img
          className="h-full object-fit"
          src={episode.images[0].url}
          alt="latest article"
        />

        <div className="flex justify-between pt-3 font-robotoLight text-sm">
          <div className="flex space-x-3 text-xs">
            <p className="text-neutral-400">
              {' '}
              {moment(episode.release_date).format('MMM D YYYY').toUpperCase()}
            </p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">
              {msToMinutes(episode.duration_ms)}
            </p>
          </div>
          {/* <p className="text-neutral-600 text-xs">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p> */}
        </div>

        <Link to={`/podcasts/episode/${episode.id}`}>
          <h1 className="text-2xl font-spratRegular hover:underline">
            {episode.name}
          </h1>
        </Link>
        <p className="font-robotoLight text-sm text-justify">
          {episode.description}
        </p>
      </div>
    </>
  );
};

export default LatestPodcast;

import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BsArrowLeft } from 'react-icons/bs';

//  Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import EpisodeCard from '../components/Podcasts/EpisodeCard';
import ScrollToTop from '../config/ScrollToTop';

//  Actions
import {
  listFeaturedPodcasts,
  listPodcastDetails,
} from '../actions/podcastActions';

const PodcastShowScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    loading: loadingPodcastDetails,
    podcastDetails,
    error: errorPodcastDetails,
  } = useSelector((state) => state.podcastDetails);

  const {
    loading: loadingFeaturedPodcasts,
    featuredPodcasts,
    error: errorFeaturedPodcasts,
  } = useSelector((state) => state.featuredPodcasts);

  const show =
    featuredPodcasts &&
    featuredPodcasts.shows &&
    featuredPodcasts.shows.length > 0 &&
    featuredPodcasts.shows.filter((show) => id === show.id);

  // console.log(show);

  useEffect(() => {
    dispatch(listFeaturedPodcasts());
    dispatch(listPodcastDetails(id));
  }, [dispatch, id]);
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto h-full">
      <Header />
      <ScrollToTop />
      <Link
        to="/podcasts"
        className="font-robotoLight underline text-sm flex items-center space-x-2 pt-2 pb-5 text-neutral-500"
      >
        <BsArrowLeft />
        <p>Back to all podcasts</p>
      </Link>
      <div className="hidden md:grid grid-cols-10">
        {/* Show Info Section */}
        {loadingFeaturedPodcasts && <Loader />}
        {errorFeaturedPodcasts && (
          <Alert variant="error">errorFeaturedPodcasts</Alert>
        )}

        {featuredPodcasts &&
          featuredPodcasts.shows &&
          featuredPodcasts.shows.length > 0 && (
            <div className="col-span-3 flex flex-col space-y-2">
              <img src={show[0].images[0].url} alt="podcast" />
              <p className="text-sm text-neutral-600 font-robotoLight">
                {show[0].total_episodes} episodes
              </p>
              {/* Border */}
              <div className="border-t-1 border-x-neutral-300 mt-10 mb-7 flex-col flex"></div>
              <p className="pt-2 text-sm font-robotoLight">
                {show[0].description}
              </p>
            </div>
          )}

        <div className="col-span-7 pl-7 flex flex-col space-y-2">
          <h1 className="font-spratRegular text-5xl">{show[0].name}</h1>
          <p className="font-robotoLight text-xl pb-5">{show[0].publisher}</p>
          <div className="flex space-x-2 pb-5">
            <a
              href={`https://open.spotify.com/show/${id}`}
              target="_blank"
              rel="noreferrer"
              aria-label={show[0].name}
            >
              <p className="font-robotoLight text-sm border-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 px-3 ">
                Listen on
                <span className="font-roboto font-medium pl-1">
                  Spotify Podcasts
                </span>
              </p>
            </a>

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
            {loadingPodcastDetails && <Loader />}
            {errorPodcastDetails && (
              <Alert variant="error">errorPodcastDetails</Alert>
            )}

            {podcastDetails &&
              podcastDetails.items &&
              podcastDetails.items.length > 0 && (
                <>
                  {podcastDetails.items.map((episode) => (
                    <div key={episode.id}>
                      <EpisodeCard episode={episode} />
                    </div>
                  ))}
                  <Link
                    to="/"
                    className="hidden md:block font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
                  >
                    View all episodes
                  </Link>
                </>
              )}

            <p className="font-robotoLight text-sm text-neutral-600 py-2">
              © 2019 - The Athletic
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="grid grid-cols-5 md:hidden">
          <div className="col-span-2 ">
            <img src={show[0].images[0].url} alt="podcast" />
          </div>
          <div className="col-span-3 pl-5 justify-center flex flex-col space-y-1">
            <p className="font-spratRegular text-2xl">{show[0].name}</p>
            <p className="font-robotoLight">{show[0].publisher}</p>
            <p className="text-xs text-neutral-600 font-robotoLight">
              {show[0].total_episodes} episodes
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
          {show[0].description}
        </p>
      </div>
      {/* Border */}
      <div className="border-t-1 border-x-neutral-300 mt-5 mb-3 flex-col flex md:hidden"></div>
      <div className="flex flex-col space-y-2 md:hidden">
        {loadingPodcastDetails && <Loader />}
        {errorPodcastDetails && (
          <Alert variant="error">errorPodcastDetails</Alert>
        )}

        {podcastDetails &&
          podcastDetails.items &&
          podcastDetails.items.length > 0 && (
            <>
              {podcastDetails.items.map((episode) => (
                <div key={episode.id}>
                  <EpisodeCard episode={episode} />
                </div>
              ))}
              <Link
                to="/"
                className="hidden md:block font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
              >
                View all episodes
              </Link>
            </>
          )}

        <p className="font-robotoLight text-sm text-neutral-600 py-2">
          © 2019 - The Athletic
        </p>
      </div>
    </div>
  );
};

export default PodcastShowScreen;

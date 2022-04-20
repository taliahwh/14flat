import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import PodcastCard from '../components/Podcasts/PodcastCard';

// Actions
import { listFeaturedPodcasts } from '../actions/podcastActions';

const PodcastScreen = () => {
  const dispatch = useDispatch();

  const {
    loading: loadingFeaturedPodcasts,
    featuredPodcasts,
    error: errorFeaturedPodcasts,
  } = useSelector((state) => state.featuredPodcasts);

  useEffect(() => {
    dispatch(listFeaturedPodcasts());
  }, [dispatch]);

  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto">
      <Header />

      <h1 className="font-spratBold text-7xl lg:text-8xl pb-5">Podcasts</h1>

      {/* Podcasts Section */}
      <div className="pt-8 md:pt-12 pb-8">
        <div className="flex w-full border-t-1 border-b-1 border-neutral-300 items-center mb-7 md:mb-0 justify-center md:justify-start">
          <p className="font-spratLight text-xl md:text-3xl py-3">
            FEATURED PODCASTS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
          {loadingFeaturedPodcasts && (
            <div className="h-screen bg-background flex justify-center">
              <Loader />
            </div>
          )}

          {errorFeaturedPodcasts && (
            <Alert variant="error">{errorFeaturedPodcasts}</Alert>
          )}

          {featuredPodcasts &&
            featuredPodcasts.shows &&
            featuredPodcasts.shows.length > 0 && (
              <>
                {featuredPodcasts.shows.map((show, index) => (
                  <Link to={`/podcasts/show/${show.id}`} key={index}>
                    <PodcastCard show={show} />
                  </Link>
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import {
  listLatestArticles,
  listCoverArticle,
  listFeaturedArticles,
} from '../actions/articleActions';
import { listLatestEpisodes } from '../actions/podcastActions';

// COMPONENTS
import Header from '../components/Header';
import Meta from '../components/Meta';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import CoverArticle from '../components/Articles/CoverArticle';
import FeaturedArticle from '../components/Articles/FeaturedArticle';
import LatestArticle from '../components/Articles/LatestArticle';
import LatestPodcast from '../components/Podcasts/LatestPodcast';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {
    loading: loadingLatestArticles,
    articles: latestArticles,
    error: errorLatestArticles,
  } = useSelector((state) => state.latestArticles);

  const {
    loading: loadingCoverArticle,
    article: coverArticle,
    error: errorCoverArticle,
  } = useSelector((state) => state.coverArticle);

  const {
    loading: loadingFeaturedArticles,
    articles: featuredArticles,
    error: errorFeautredArticles,
  } = useSelector((state) => state.featuredArticles);

  const {
    loading: loadingLatestEpisodes,
    latestEpisodes,
    error: errorLatestEpisodes,
  } = useSelector((state) => state.latestEpisodes);

  useEffect(() => {
    dispatch(listCoverArticle());
    dispatch(listFeaturedArticles());
    dispatch(listLatestArticles());
    dispatch(listLatestEpisodes());
  }, [dispatch]);

  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto">
      <Meta title={'1-4 Flat | Home'} />
      <Header />
      {/* Featured Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 divide-y-1 md:divide-y-0 md:divide-x-1 divide-neutral-300">
        <div className="col-span-1 md:col-span-6">
          {loadingCoverArticle && <Loader />}
          {errorCoverArticle && (
            <Alert variant="error">{errorCoverArticle}</Alert>
          )}
          {coverArticle && <CoverArticle article={coverArticle} />}
        </div>
        {/* Featured Article Desktop View */}
        <div className="md:grid md:col-span-4 pt-10 md:pt-0 hidden">
          {loadingFeaturedArticles && <Loader />}
          {errorFeautredArticles && (
            <Alert variant="error">{errorFeautredArticles}</Alert>
          )}
          {featuredArticles &&
            featuredArticles.map((article) => (
              <div key={article._id}>
                <FeaturedArticle article={article} />
              </div>
            ))}
        </div>

        {/* Featured Article Mobile View */}
        <div className="col-span-1 md:hidden pt-10">
          <div className="flex space-x-5">
            {loadingFeaturedArticles && <Loader />}
            {errorFeautredArticles && (
              <Alert variant="error">{errorFeautredArticles}</Alert>
            )}
            {featuredArticles &&
              featuredArticles.map((article) => (
                <div key={article._id} className="w-1/2">
                  <FeaturedArticle article={article} />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="pt-8 md:pt-16 pb-8">
        <div className="hidden md:flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-between">
          <p className="font-spratLight text-xl md:text-3xl py-3">
            THE LATEST ARTICLES
          </p>
          <Link
            to="/blog"
            className="font-spratLight text-md py-3 underline text-neutral-400 hover:text-neutral-600"
          >
            View all
          </Link>
        </div>
        {/* Mobile Header View */}
        <div className="block md:hidden w-full border-t-1 border-b-1 border-neutral-300">
          <p className="font-spratRegular text-center text-xl md:text-3xl py-3">
            THE LATEST ARTICLES
          </p>
        </div>

        <div className="flex flex-col space-y-10 pt-5 md:pt-14">
          {loadingLatestArticles ? (
            <Loader />
          ) : errorLatestArticles ? (
            <Alert variant="error">{errorLatestArticles}</Alert>
          ) : (
            <>
              {latestArticles &&
                latestArticles.length > 0 &&
                latestArticles.slice(0, 5).map((article) => (
                  <div key={article._id}>
                    <LatestArticle article={article} />
                  </div>
                ))}

              <Link
                to="/blog"
                className="md:hidden font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
              >
                View all articles
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Latest Podcasts Section */}
      <div className="pt-4 pb-8">
        <div className="hidden md:flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-between">
          <p className="font-spratLight text-xl md:text-3xl py-3">
            THE LATEST PODCAST EPISODES
          </p>
          <Link
            to="/podcasts"
            className="font-spratLight text-md py-3 underline text-neutral-400 hover:text-neutral-600"
          >
            View all
          </Link>
        </div>

        {/* Mobile Header View */}
        <div className="block md:hidden w-full border-t-1 border-b-1 border-neutral-300">
          <p className="font-spratRegular text-center text-xl md:text-3xl py-3">
            THE LATEST PODCAST EPISODES
          </p>
        </div>

        <div className="flex flex-col space-y-10 pt-3 md:pt-14">
          {loadingLatestEpisodes && <Loader />}
          {errorLatestEpisodes && (
            <Alert variant="error">{errorLatestEpisodes}</Alert>
          )}

          {latestEpisodes &&
            latestEpisodes.episodes &&
            latestEpisodes.episodes.length > 0 && (
              <>
                {latestEpisodes.episodes.map((episode) => (
                  <LatestPodcast episode={episode} key={episode.id} />
                ))}

                <Link
                  to="/podcasts"
                  className="md:hidden font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
                >
                  View all podcasts
                </Link>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

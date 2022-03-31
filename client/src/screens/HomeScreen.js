import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CoverArticle from '../components/Articles/CoverArticle';
import FeaturedArticle from '../components/Articles/FeaturedArticle';
import LatestArticle from '../components/Articles/LatestArticle';
import LatestPodcast from '../components/Podcasts/LatestPodcast';
// import LatestPodcast from '../components/Podcasts/LatestPodcast';

const HomeScreen = () => {
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto">
      <Header />
      {/* Featured Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 divide-y-1 md:divide-y-0 md:divide-x-1 divide-neutral-300">
        <div className="col-span-1 md:col-span-6">
          <CoverArticle />
        </div>
        <div className="md:grid md:col-span-4 pt-10 md:pt-0 hidden">
          <FeaturedArticle />
          <FeaturedArticle />
        </div>

        <div className="col-span-1 md:hidden pt-10">
          <div className="flex space-x-7">
            <FeaturedArticle />
            <FeaturedArticle />
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
            to="/"
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
          <Link to="/blog/1">
            <LatestArticle />
          </Link>
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
          <Link
            to="/"
            className="md:hidden font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
          >
            View all articles
          </Link>
        </div>
      </div>

      {/* Latest Podcasts Section */}
      <div className="pt-4 pb-8">
        <div className="hidden md:flex w-full border-t-1 border-b-1 border-neutral-300 items-center justify-between">
          <p className="font-spratLight text-xl md:text-3xl py-3">
            THE LATEST PODCASTS
          </p>
          <Link
            to="/"
            className="font-spratLight text-md py-3 underline text-neutral-400 hover:text-neutral-600"
          >
            View all
          </Link>
        </div>

        {/* Mobile Header View */}
        <div className="block md:hidden w-full border-t-1 border-b-1 border-neutral-300">
          <p className="font-spratRegular text-center text-xl md:text-3xl py-3">
            THE LATEST PODCASTS
          </p>
        </div>
        <div className="flex flex-col space-y-10 pt-3 md:pt-14">
          <Link to="/podcasts/1">
            <LatestPodcast />
          </Link>
          <LatestPodcast />
          <LatestPodcast />
          <LatestPodcast />
          <Link
            to="/"
            className="md:hidden font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
          >
            View all podcasts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

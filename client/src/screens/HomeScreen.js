import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CoverArticle from '../components/Articles/CoverArticle';
import FeaturedArticle from '../components/Articles/FeaturedArticle';
import LatestArticle from '../components/Articles/LatestArticle';

const HomeScreen = () => {
  return (
    <div className="bg-background px-10 max-w-8xl mx-auto">
      <Header />
      {/* Featured Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-300">
        <div className="col-span-1 md:col-span-6">
          <CoverArticle />
        </div>
        <div className="md:grid md:col-span-4 pt-10 md:pt-0 hidden">
          <FeaturedArticle />
          <FeaturedArticle />
        </div>

        <div className="col-span-1 md:hidden pt-10">
          <div className="flex space-x-5">
            <FeaturedArticle />
            <FeaturedArticle />
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="pt-16 pb-8">
        <div className="w-full border-t-1 border-b-1 border-neutral-300 flex items-center justify-between">
          <p className="font-spratLight text-3xl py-3">THE LATEST ARTICLES</p>
          <Link
            to="/"
            className="font-spratLight text-md py-3 underline text-neutral-400 hover:text-neutral-600"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-col space-y-10 pt-7 md:pt-14">
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
          <LatestArticle />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

import React from 'react';

import Header from '../components/Header';
import CoverArticle from '../components/Articles/CoverArticle';
import FeaturedArticle from '../components/Articles/FeaturedArticle';

const HomeScreen = () => {
  return (
    <div className="bg-background">
      <Header />
      <div className="px-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-7 divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-300">
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
    </div>
  );
};

export default HomeScreen;

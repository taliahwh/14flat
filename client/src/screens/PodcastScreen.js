import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PodcastCard from '../components/Podcasts/PodcastCard';
// import PodcastCard from '../components/Podcasts/PodcastCard';

const PodcastScreen = () => {
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
          <Link to="/podcasts/show/1">
            <PodcastCard />
          </Link>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;

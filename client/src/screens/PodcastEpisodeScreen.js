import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { GoPlay } from 'react-icons/go';
import { GiPauseButton } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';

// Components
import Header from '../components/Header';
import Meta from '../components/Meta';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import ScrollToTop from '../config/ScrollToTop';

// Actions
// Actions
import {
  listEpisodeDetails,
  listFeaturedPodcasts,
} from '../actions/podcastActions';

const PodcastEpisodeScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = window.location.href;

  const {
    loading: loadingEpisodeDetails,
    episodeDetails,
    error: errorEpisodeDetails,
  } = useSelector((state) => state.episodeDetails);

  useEffect(() => {
    dispatch(listEpisodeDetails(id));
    dispatch(listFeaturedPodcasts());
  }, [dispatch, id]);

  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto h-screen">
      <Header />
      {loadingEpisodeDetails && <Loader />}
      {errorEpisodeDetails && (
        <Alert variant="error">{errorEpisodeDetails}</Alert>
      )}

      {episodeDetails &&
        episodeDetails.images &&
        episodeDetails.images.length > 0 && (
          <>
            <ScrollToTop />
            <Meta title={`1-4 Flat | ${episodeDetails.name}`} />
            <Link
              to={`/podcasts/show/${episodeDetails.show.id}`}
              className="font-robotoLight underline text-sm flex items-center space-x-2 pt-2 pb-5 text-neutral-500"
            >
              <BsArrowLeft />
              <p>Back to all episodes</p>
            </Link>
            <div className="hidden sm:grid  grid-cols-9 gap-2">
              <div className="col-span-3 lg:col-span-3">
                <img
                  className="h-64 w-64 lg:h-[20rem] lg:w-[20rem]"
                  src={episodeDetails.images[0].url}
                  alt="podcast"
                />
              </div>

              <div className="col-span-6 h-full flex flex-col justify-center  space-y-5 pl-0 md:pl-4">
                <p className="text-neutral-700 font-robotoLight hidden md:block text-sm">
                  {moment(episodeDetails.release_date).format('MMM D, YYYY')}
                </p>
                <p className="text-neutral-600 text-lg md:text-xl text-center md:text-left mx-auto md:mx-0 font-robotoLight">
                  {episodeDetails.show.name}
                </p>

                <h1 className="font-spratRegular text-4xl text-center md:text-left">
                  {episodeDetails.name}
                </h1>
              </div>
            </div>
            <div>
              <div className="pt-5 drop-shadow hidden sm:flex">
                <AudioPlayer
                  autoPlay={false}
                  muted
                  src={episodeDetails.audio_preview_url}
                  // onPlay={(e) => console.log('onPlay')}
                  layout="stacked-reverse"
                  showJumpControls={false}
                  customIcons={{
                    play: <GoPlay className="text-neutral-500" />,
                    pause: (
                      <GiPauseButton className="text-neutral-500 text-md" />
                    ),
                  }}
                  // other props here
                />
              </div>
              <div className="hidden sm:flex w-full justify-center mt-5 font-spratRegular text-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-center border-1 py-2  hover:shadow-md">
                <a href={episodeDetails.uri}>
                  Listen to full episode on Spotify
                </a>
              </div>
            </div>

            {/* Mobile view / Header*/}
            <div className="sm:hidden flex flex-col space-y-4 text-center">
              <p className="text-neutral-700 font-robotoLight text-sm">
                {moment(episodeDetails.release_date).format('MMM D, YYYY')}
              </p>
              <p className="text-neutral-600 font-robotoLight">
                Shattered: Hope, Heartbreak and the New York Knicks
              </p>
              <h1 className="font-spratRegular text-3xl py-2">
                {episodeDetails.name}
              </h1>
              <img
                className="w-full"
                src={episodeDetails.images[0].url}
                alt="podcast"
              />
              {/* Media player */}
              {/* <div className="border-1 border-neutral-900 py-10 px-5 flex justify-center shadow-md">
          Media player
        </div> */}
              <div className="pt-5 drop-shadow flex">
                <AudioPlayer
                  autoPlay={false}
                  src={episodeDetails.audio_preview_url}
                  // onPlay={(e) => console.log('onPlay')}
                  layout="stacked-reverse"
                  showJumpControls={false}
                  customIcons={{
                    play: <GoPlay className="text-neutral-500" />,
                    pause: (
                      <GiPauseButton className="text-neutral-500 text-md" />
                    ),
                  }}
                  // other props here
                />
              </div>

              <div className="sm:hidden w-full mt-5 font-spratRegular text-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-center border-1 py-2  hover:shadow-md">
                <a href={episodeDetails.uri}>
                  Listen to full episode on Spotify
                </a>
              </div>
            </div>
            {/* Border */}
            <div className="border-t-1 border-x-neutral-300 mt-10 mb-7 flex-col flex"></div>
            {/* Description Section */}
            <div className="hidden md:grid grid-cols-10 divide-x-1 divide-neutral-300">
              {/* Share Buttons */}
              <div className="col-span-2 flex flex-col space-y-3 pr-10 text-right">
                <h2 className="font-robotoLight text-lg lg:text-xl">
                  Share this podcast
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-4 justify-end items-end">
                  <FacebookShareButton url={url}>
                    <FaFacebookSquare className="text-4xl text-neutral-700" />
                  </FacebookShareButton>
                  <TwitterShareButton url={url}>
                    <FaTwitterSquare className="text-4xl text-neutral-700" />
                  </TwitterShareButton>
                  <LinkedinShareButton url={url}>
                    <FaLinkedin className="text-4xl text-neutral-700" />
                  </LinkedinShareButton>
                </div>
              </div>

              {/* Description */}
              <div className="col-span-8">
                <div className="pl-10  flex flex-col space-y-5">
                  <h1 className="font-spratRegular text-3xl">Description</h1>
                  <div className="font-robotoLight">
                    {episodeDetails.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View Description */}
            <div className="flex flex-col space-y-5 md:hidden">
              <h1 className="font-spratRegular text-3xl">Description</h1>
              <div className="font-robotoLight">
                {episodeDetails.description}
              </div>
              <div className="flex space-x-4 items-center pb-10">
                <FacebookShareButton url={url}>
                  <FaFacebookSquare className="text-3xl text-neutral-700" />
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                  <FaTwitterSquare className="text-3xl text-neutral-700" />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                  <FaLinkedin className="text-3xl text-neutral-700" />
                </LinkedinShareButton>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default PodcastEpisodeScreen;

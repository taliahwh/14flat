import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const ArticleDetailsScreen = () => {
  return (
    <div className="">
      <div className="px-4 md:px-10 max-w-8xl mx-auto">
        <Header />
      </div>

      <img
        className="w-full max-h-[40rem] object-cover mx-auto"
        src="https://www.bostonglobe.com/resizer/NBlPUtk-sIXAiHFy8_3Fu7-OQqU=/arc-anglerfish-arc2-prod-bostonglobe/public/HNAXSDKHOE2FCGBWAGE5I53MJY.jpg"
        alt="cover"
      />
      <div className="bg-background px-4 md:px-0 max-w-2xl mx-auto h-screen pt-10 flex flex-col items-center">
        <h1 className="font-spratRegular text-3xl md:text-4xl text-center">
          Ime Udoka unplugged: On Jayson Tatum, Jaylen Brown, the Celtics’ surge
          and the film session that turned the tide
        </h1>

        <div className="flex space-x-5 pt-3 text-sm items-center">
          <p className="text-neutral-600 text-sm font-roboto ">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p>
          <p className="text-neutral-700 font-robotoLight">3h ago</p>
        </div>

        <div className="text-left">
          <p className="font-robotoLight pt-10">
            This was all part of Ime Udoka’s plan.
          </p>

          <p className="font-robotoLight pt-10">
            Back when he jumped on Gregg Popovich’s assistant coaching offer
            with San Antonio in 2012, when the then-34-year-old decided to cut
            his playing career short overseas so he could grow alongside one of
            the game’s all-time greats, Udoka didn’t know he would be a head
            coach one day. Nor did he know the Boston Celtics would be the team
            to give him that well-deserved chance, or that he’d make such a
            massive mark in his first season that they’d start talking about
            title contention in Beantown again.
          </p>

          <p className="font-robotoLight pt-10">How could he?</p>

          <p className="font-robotoLight pt-10">
            But he knew this was his calling, and that there was no better place
            to hone the coaching craft than the Spurs organization where he’d
            spent three of his seven NBA seasons as a defensive-minded role
            player who always inspired respect. So no, in other words, another
            year chasing a check to play for UCAM Murcia in Spain or some other
            European team just didn’t compare.
          </p>

          <p className="font-robotoLight pt-10">
            A decade later, with Udoka’s bench work in Philadelphia, Brooklyn
            and with Team USA adding to his reputation as someone today’s
            players would trust and follow, he has officially arrived. To say
            the least.
          </p>

          <p className="font-robotoLight pt-10">
            Regardless of what comes next for these Celtics, who lost big man
            Robert Williams on Sunday to a meniscus tear that will sideline him
            for four to six weeks and could certainly lower their collective
            ceiling, Udoka’s unique combination of authenticity, affability and
            sheer audacity has reinvigorated a group that was seemingly on the
            fritz.
          </p>

          <p className="font-robotoLight pt-10">
            All those questions about whether Brown and Jayson Tatum could
            thrive alongside each other have disappeared, with Udoka challenging
            the team’s co-stars early on to trust their teammates and become
            better playmakers as a way to spark collective growth. Marcus
            Smart’s infamous Nov. 1 news conference, when he said Tatum and
            Brown “don’t want to pass the ball”, that coming after a loss to
            Chicago that was their fifth defeat in the first seven games, is a
            distant memory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsScreen;

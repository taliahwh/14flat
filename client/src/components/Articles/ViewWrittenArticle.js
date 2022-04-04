import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';

const ViewWrittenArticle = () => {
  return (
    <>
      <div className="md:flex space-x-10 hidden">
        <img
          className="w-[19rem] h-[12rem] object-fit"
          src="https://www.nbcsports.com/sites/rsnunited/files/article/hero/steph-curry-klay-thompson-warriors-Getty.jpg"
          alt="latest article"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <h4 className="text-neutral-500 text-xs font-roboto font-bold">
              APR 1, 2022
            </h4>
            <h1 className="text-2xl font-spratRegular">
              What's going on in Dub Nation?
            </h1>
            <p className="font-robotoLight text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              fuga, molestiae in perspiciatis explicabo animi laboriosam quam
              ipsa beatae quos neque facere, totam blanditiis facilis eius ab
              ipsam repellendus aperiam.
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex space-x-2">
              <button className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm">
                EDIT
              </button>
              <button className="border-neutral-500 hover:bg-neutral-500 hover:text-white transition-all border-1 px-8 py-2 text-neutral-600 font-medium text-sm">
                VIEW
              </button>
            </div>

            <div className="flex space-x-2">
              <div className="bg-neutral-500 px-6 py-2 text-white font-medium text-sm flex space-x-2 items-center">
                <FaThumbsUp />
                <p className="font-roboto tracking-wide">27</p>
              </div>
              <div className="bg-neutral-800 px-6 py-2 text-white font-medium text-sm flex space-x-2 items-center">
                <IoMdEye className="text-xl" />
                <p className="font-roboto tracking-wide">308</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col w-full md:hidden space-y-2">
        <img
          className="h-60 object-fit"
          src="https://www.nbcsports.com/sites/rsnunited/files/article/hero/steph-curry-klay-thompson-warriors-Getty.jpg"
          alt="latest article"
        />

        <div className="flex space-x-2 pt-1">
          <div className="pl-1 text-neutral-800 font-medium text-sm flex space-x-2 items-center">
            <FaThumbsUp />
            <p className="font-roboto tracking-wide">27</p>
          </div>
          <div className="text-neutral-800 font-medium text-sm flex space-x-2 items-center">
            <IoMdEye className="text-xl" />
            <p className="font-roboto tracking-wide">308</p>
          </div>
        </div>

        <h1 className="text-2xl font-spratRegular">
          What's going on in Dub Nation?
        </h1>
        <p className="font-robotoLight text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga,
          molestiae in perspiciatis explicabo animi laboriosam quam ipsa beatae
          quos neque facere, totam blanditiis facilis eius ab ipsam repellendus
          aperiam.
        </p>

        <div className="flex space-x-2">
          <button className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm">
            EDIT
          </button>
          <button className="border-neutral-500 hover:bg-neutral-500 hover:text-white transition-all border-1 px-8 py-2 text-neutral-600 font-medium text-sm">
            VIEW
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewWrittenArticle;

import React from 'react';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

const SavedArticle = () => {
  return (
    <>
      <div className="md:grid grid-cols-12 hidden">
        <div className="col-span-1">
          <BsBookmarkFill className="text-2xl" />
        </div>

        <div className="col-span-11 ">
          <div className="md:flex space-x-10 hidden">
            <div className="flex flex-col space-y-2">
              <p className="text-neutral-600 text-xs pb-3 pt-1">
                ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
              </p>
              <h1 className="text-2xl font-spratRegular">
                What's going on in Dub Nation?
              </h1>
              <p className="font-robotoLight text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                fuga, molestiae in perspiciatis explicabo animi laboriosam quam
                ipsa beatae quos neque facere, totam blanditiis facilis eius ab
                ipsam repellendus aperiam.
              </p>

              <div className="flex space-x-3 text-xs pt-3">
                <p className="text-neutral-400">Feb 11</p>
                <p className="text-neutral-400">•</p>
                <p className="text-neutral-400">5 min read</p>
              </div>
            </div>
            <img
              className="w-[19rem] h-[12rem] object-fit"
              src="https://www.nbcsports.com/sites/rsnunited/files/article/hero/steph-curry-klay-thompson-warriors-Getty.jpg"
              alt="latest article"
            />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="grid grid-cols-10 md:hidden">
        <div className="col-span-1">
          <BsBookmarkFill className="text-xl" />
        </div>
        <div className="col-span-9">
          <div className="flex flex-col w-full ">
            <img
              className="h-60 object-fit"
              src="https://www.nbcsports.com/sites/rsnunited/files/article/hero/steph-curry-klay-thompson-warriors-Getty.jpg"
              alt="latest article"
            />

            <div className="flex justify-between pt-3 font-robotoLight text-sm">
              <div className="flex space-x-3 text-xs">
                <p className="text-neutral-400">Feb 11</p>
                <p className="text-neutral-400">•</p>
                <p className="text-neutral-400">5 min read</p>
              </div>
              <p className="text-neutral-600 text-xs">
                ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
              </p>
            </div>

            <h1 className="text-2xl font-spratRegular py-3">
              What's going on in Dub Nation?
            </h1>
            <p className="font-robotoLight text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              fuga, molestiae in perspiciatis explicabo animi laboriosam quam
              ipsa beatae quos neque facere, totam blanditiis facilis eius ab
              ipsam repellendus aperiam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedArticle;

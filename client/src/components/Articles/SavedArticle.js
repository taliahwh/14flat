import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import readingTime from 'reading-time/lib/reading-time';

import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';

const SavedArticle = ({ article }) => {
  const { text: readingLength } = readingTime(article.content);
  return (
    <>
      {article && (
        <>
          <div className="md:grid grid-cols-12 hidden">
            <div className="col-span-1">
              <BsBookmarkFill className="text-2xl" />
            </div>

            <div className="col-span-11 ">
              <div className="md:flex space-x-10 hidden">
                <div className="flex flex-col space-y-2">
                  <p className="text-neutral-600 text-xs pb-3 pt-1">
                    ⸻{' '}
                    <span className="pl-3">
                      BY {article.writtenBy.name.toUpperCase()}
                    </span>
                  </p>
                  <Link to={`/blog/${article._id}`}>
                    <h1 className="text-2xl font-spratRegular hover:underline">
                      {article.title}
                    </h1>
                  </Link>
                  <p className="font-robotoLight text-sm">{article.excerpt}</p>

                  <div className="flex space-x-3 text-xs pt-3">
                    <p className="text-neutral-400">
                      {moment(article.createdAt).format('MMMM D')}
                    </p>
                    <p className="text-neutral-400">•</p>
                    <p className="text-neutral-400">{readingLength}</p>
                  </div>
                </div>
                <img
                  className="w-[16rem] h-[12rem] object-fit"
                  src={article.coverImage}
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
                  src={article.coverImage}
                  alt="latest article"
                />

                <div className="flex justify-between pt-3 font-robotoLight text-sm">
                  <div className="flex space-x-3 text-xs">
                    <p className="text-neutral-400">
                      {moment(article.createdAt).format('MMMM Do')}
                    </p>
                    <p className="text-neutral-400">•</p>
                    <p className="text-neutral-400">{readingLength}</p>
                  </div>
                  <p className="text-neutral-600 text-xs">
                    ⸻{' '}
                    <span className="pl-3">
                      BY {article.writtenBy.name.toUpperCase()}
                    </span>
                  </p>
                </div>

                <Link to={`/blog/${article._id}`}>
                  <h1 className="text-2xl font-spratRegular py-3 hover:underline">
                    {article.title}
                  </h1>
                </Link>
                <p className="font-robotoLight text-sm text-justify">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SavedArticle;

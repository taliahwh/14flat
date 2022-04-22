import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time/lib/reading-time';

const LatestArticle = ({ article }) => {
  const { text: readingLength } = readingTime(article.content);

  return (
    <>
      <div className="md:flex space-x-10 hidden">
        <img
          className="min-w-[19rem] max-w-[19rem] h-[12rem] object-fit"
          src={article.coverImage}
          alt="latest article"
        />
        <div className="flex flex-col space-y-2">
          <p className="text-neutral-600 text-xs pb-3 pt-1">
            ⸻{' '}
            <span className="pl-3">
              BY {article.writtenBy.name.toUpperCase()}
            </span>
          </p>
          <h1 className="text-2xl font-spratRegular">{article.title}</h1>
          <p className="font-robotoLight text-sm">{article.excerpt}</p>

          <div className="flex space-x-3 text-xs pt-3">
            <p className="text-neutral-400">
              {moment(article.createdAt).format('MMMM Do')}
            </p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">{readingLength}</p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col w-full md:hidden">
        <img
          className="h-60 object-fit"
          src={article.coverImage}
          alt="latest article"
        />

        <div className="flex justify-between pt-3 font-robotoLight text-sm">
          <div className="flex space-x-3 text-xs">
            <p className="text-neutral-400">
              {' '}
              {moment(article.createdAt).format('MMMM Do')}
            </p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">5 min read</p>
          </div>
          <p className="text-neutral-600 text-xs">
            ⸻{' '}
            <span className="pl-3">
              BY {article.writtenBy.name.toUpperCase()}
            </span>
          </p>
        </div>

        <h1 className="text-2xl font-spratRegular py-3">{article.title}</h1>
        <p className="font-robotoLight text-sm text-justify">
          {article.excerpt}
        </p>
      </div>
    </>
  );
};

export default LatestArticle;

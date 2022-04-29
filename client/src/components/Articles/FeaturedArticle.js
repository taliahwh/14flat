import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import readingTime from 'reading-time/lib/reading-time';

const FeaturedArticle = ({ article }) => {
  const { text: readingLength } = readingTime(article.content);
  return (
    <div className="flex flex-col space-y-2 pb-4 md:pl-8 pl-0">
      <div className="flex flex-col space-y-1">
        <img
          className="md:w-full h-48 w-full md:h-52 md:object-fit object-fit"
          src={article.coverImage}
          alt="Cover"
        />
        <div className="hidden lg:flex justify-between pt-2 font-robotoLight text-sm">
          <div className="space-x-3 md:flex hidden">
            <p className="text-neutral-400">
              {article.createdAt && moment(article.createdAt).format('MMMM D')}
            </p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">{readingLength}</p>
          </div>
          <p className="text-neutral-600 text-xs md:text-sm">
            ⸻
            <span className="pl-3">
              BY {article.writtenBy.name.toUpperCase()}
            </span>
          </p>
        </div>
      </div>

      <p className="text-neutral-600 text-xs md:text-sm block lg:hidden">
        ⸻<span className="pl-3">BY {article.writtenBy.name.toUpperCase()}</span>
      </p>

      <Link to={`/blog/${article._id}`}>
        <h1 className="text-xl md:text-2xl font-spratRegular hover:underline ">
          {article.title}
        </h1>
      </Link>
      <p className="font-robotoLight text-sm md:block hidden">
        {article.excerpt}
      </p>

      <div className="space-x-3 lg:hidden flex text-xs md:text-sm font-robotoLight">
        <p className="text-neutral-400">
          {article.createdAt && moment(article.createdAt).format('MMMM D')}
        </p>
        <p className="text-neutral-400">•</p>
        <p className="text-neutral-400">{readingLength}</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;

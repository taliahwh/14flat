import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import parse from 'html-react-parser';
// import readingTime from 'reading-time/lib/reading-time';

const CoverArticle = ({ article }) => {
  // const { text: readingLength } = readingTime(article.excerpt);
  return (
    <>
      {article && (
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <img
              className="w-full md:h-[30rem] h-30 md:object-fill object-cover"
              src={article.coverImage}
              alt="Cover"
            />
            <div className="flex justify-between pt-2 font-robotoLight text-xs md:text-sm">
              <div className="flex space-x-3">
                <p className="text-neutral-400">
                  {article.createdAt &&
                    moment(article.createdAt).format('MMMM D')}
                </p>
                {/* <p className="text-neutral-400">•</p>
                {article.content && (
                  <p className="text-neutral-400">{readingLength}</p>
                )} */}
              </div>
              <p className="text-neutral-600 text-xs md:text-sm">
                ⸻
                <span className="pl-3">
                  BY {article.writtenBy && article.writtenBy.name.toUpperCase()}
                </span>
              </p>
            </div>
          </div>

          <Link to={`/blog/${article._id}`}>
            <h1 className="text-3xl md:text-4xl font-spratRegular hover:underline">
              {article.title}
            </h1>
          </Link>
          {article.content && (
            <div className="font-robotoLight md:block hidden">
              {parse(article.content.slice(0, 710))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CoverArticle;

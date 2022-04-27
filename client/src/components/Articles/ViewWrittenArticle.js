import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaThumbsUp } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';

// Actions
import { deleteArticle } from '../../actions/articleActions';

const ViewWrittenArticle = ({ article }) => {
  const dispatch = useDispatch();

  const id = article && article._id;

  const handleDeleteArticle = () => {
    dispatch(deleteArticle(id));
  };
  return (
    <>
      <div className="lg:flex space-x-10 hidden">
        <img
          className="w-[15rem] h-[12rem] object-fit"
          src={article.coverImage}
          alt="latest article"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <h4 className="text-neutral-500 text-xs font-roboto font-bold">
              APR 1, 2022
            </h4>
            <Link to={`/blog/${article && article._id}`}>
              <h1 className="text-2xl font-spratRegular hover:underline">
                {article && article.title}
              </h1>
            </Link>
            <p className="font-robotoLight text-sm">
              {article && article.excerpt}
            </p>
          </div>

          <div className="flex justify-between ">
            <div className="flex space-x-2">
              <button className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm">
                EDIT
              </button>
              <button
                onClick={handleDeleteArticle}
                className="border-red-500 hover:bg-red-500 hover:text-white transition-all border-1 px-8 py-2 text-red-600 font-medium text-sm"
              >
                DELETE
              </button>
            </div>

            <div className="flex space-x-2">
              <div className="bg-neutral-500 px-6 py-2 text-white font-medium text-sm flex space-x-2 items-center">
                <FaThumbsUp />
                <p className="font-roboto tracking-wide">
                  {article && article.likes.length}
                </p>
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
      <div className="flex flex-col w-full lg:hidden space-y-2">
        <img
          className="h-60 lg:object-fit object-cover"
          src={article && article.coverImage}
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
          {article && article.title}
        </h1>
        <p className="font-robotoLight text-sm text-justify">
          {article && article.excerpt}
        </p>

        <div className="flex space-x-2">
          <button className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm">
            EDIT
          </button>
          <button
            onClick={handleDeleteArticle}
            className="border-red-500 hover:bg-red-500 hover:text-white transition-all border-1 px-8 py-2 text-red-600 font-medium text-sm"
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewWrittenArticle;

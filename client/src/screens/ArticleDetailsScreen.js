import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import parse from 'html-react-parser';
import {
  BsBookmarkFill,
  BsBookmark,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsArrowLeft,
} from 'react-icons/bs';

// Actions
import { listArticleDetails, likeArticle } from '../actions/articleActions';

// Components
import ScrollToTop from '../config/ScrollToTop';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const ArticleDetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    loading: loadingArticleDetails,
    article,
    error: errorArticleDetails,
  } = useSelector((state) => state.articleDetails);

  const handleLikePost = () => {
    dispatch(likeArticle(id));
  };

  useEffect(() => {
    dispatch(listArticleDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <ScrollToTop />
      <div className="px-4 md:px-10 max-w-8xl mx-auto">
        <Header />
      </div>
      {loadingArticleDetails ? (
        <div className="h-screen bg-background">
          <Loader />
        </div>
      ) : errorArticleDetails ? (
        <Alert variant="error">errorArticleDetails</Alert>
      ) : (
        <>
          <Link
            to="/blog"
            className="font-robotoLight underline text-sm flex items-center space-x-2 pb-5 pl-5 text-neutral-500"
          >
            <BsArrowLeft />
            <p>Back to blog</p>
          </Link>
          <img
            className="w-full max-h-[40rem] object-cover mx-auto"
            src={article.coverImage && article.coverImage}
            alt="cover"
          />
          <div className="bg-background px-4 md:px-0 max-w-2xl mx-auto h-full py-10 flex flex-col items-center">
            <h1 className="font-spratRegular text-3xl md:text-4xl text-center">
              {article.title && article.title}
            </h1>

            <div className="flex space-x-5 pt-3 text-sm items-center">
              <p className="text-neutral-600 text-sm font-roboto ">
                ⸻{' '}
                <span className="pl-3">
                  BY {article.writtenBy && article.writtenBy.name.toUpperCase()}
                </span>
              </p>
              <p className="text-neutral-700 font-robotoLight">
                {article.createdAt &&
                  moment(article.createdAt).format('MMMM Do')}
              </p>
            </div>

            <div className="mt-5 flex space-x-1 w-full justify-end items-center text-neutral-800 pb-5">
              <div className="flex space-x-1 items-center">
                <BsHandThumbsUp
                  className="text-2xl cursor-pointer"
                  onClick={handleLikePost}
                />
                <p className="font-robotoLight text-sm">
                  {article && article.likes && article.likes.length}
                </p>
              </div>
              <BsBookmark className="text-2xl cursor-pointer" />
            </div>

            {/* Border */}
            <div className="border-t-1 border-x-neutral-500 w-full"></div>

            <div className="text-left font-robotoLight pt-10">
              {article.content && parse(`${article.content}`)}
            </div>

            <div className="flex space-x-2 pt-8 w-full font-robotoLight text-sm">
              {article.tags &&
                article.tags.length > 0 &&
                article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-neutral-600 bg-neutral-200 last:mr-0 mr-1"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ArticleDetailsScreen;

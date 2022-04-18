import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';
import parse from 'html-react-parser';

// Actions
import { listArticleDetails } from '../actions/articleActions';

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

            <div className="text-left font-robotoLight pt-16">
              {article.content && parse(`${article.content}`)}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ArticleDetailsScreen;

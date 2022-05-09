import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { FaThumbsUp } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { HiOutlineExclamation } from 'react-icons/hi';

// Actions
import { deleteArticle } from '../../actions/articleActions';

const ViewWrittenArticle = ({ article }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const id = article && article._id;

  const handleDeleteArticle = () => {
    dispatch(deleteArticle(id));
  };
  return (
    <>
      {article && (
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
                  {moment(article.createdAt).format('MMM D').toUpperCase()}
                </h4>
                <Link to={`/blog/${article._id}`}>
                  <h1 className="text-2xl font-spratRegular hover:underline">
                    {article.title}
                  </h1>
                </Link>
                <p className="font-robotoLight text-sm">{article.excerpt}</p>
              </div>

              <div className="flex justify-between ">
                <div className="flex space-x-2">
                  <Link
                    to={`/edit-article/${article._id}`}
                    className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm"
                  >
                    EDIT
                  </Link>
                  <button
                    onClick={() => setOpen(true)}
                    className="border-red-500 hover:bg-red-500 hover:text-white transition-all border-1 px-8 py-2 text-red-600 font-medium text-sm"
                  >
                    DELETE
                  </button>
                </div>

                <div className="flex space-x-2">
                  <div className="bg-neutral-500 px-6 py-2 text-white font-medium text-sm flex space-x-2 items-center">
                    <FaThumbsUp />
                    <p className="font-roboto tracking-wide">
                      {article.likes.length}
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
              src={article.coverImage}
              alt="latest article"
            />

            <div className="flex space-x-2 pt-1">
              <div className="pl-1 text-neutral-800 font-medium text-sm flex space-x-2 items-center">
                <FaThumbsUp />
                <p className="font-roboto tracking-wide">
                  {article.likes.length}
                </p>
              </div>
              <div className="text-neutral-800 font-medium text-sm flex space-x-2 items-center">
                <IoMdEye className="text-xl" />
                <p className="font-roboto tracking-wide">308</p>
              </div>
            </div>

            <h1 className="text-2xl font-spratRegular">{article.title}</h1>
            <p className="font-robotoLight text-sm text-justify">
              {article.excerpt}
            </p>

            <div className="flex space-x-2">
              <button className="bg-neutral-800 hover:bg-neutral-600 transition-colors px-8 py-2 text-white font-medium text-sm">
                EDIT
              </button>
              <button
                onClick={() => setOpen(true)}
                className="border-red-500 hover:bg-red-500 hover:text-white transition-all border-1 px-8 py-2 text-red-600 font-medium text-sm"
              >
                DELETE
              </button>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-neutral-300 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <HiOutlineExclamation
                              className="h-6 w-6 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left font-roboto">
                            <Dialog.Title
                              as="h3"
                              className="text-lg leading-6 font-medium text-neutral-800"
                            >
                              Delete article
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-neutral-500">
                                Are you sure you want to delete this article?
                                All of your data will be permanently removed.
                                This action cannot be undone.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse font-roboto">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-none sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={handleDeleteArticle}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center border border-neutral-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </>
  );
};

export default ViewWrittenArticle;

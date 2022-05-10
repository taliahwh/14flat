import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { FaTimes } from 'react-icons/fa';
import { HiOutlineExclamation } from 'react-icons/hi';

// Actions
import { deleteUser } from '../../actions/userActions';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleDeleteUser = () => {
    dispatch(deleteUser(user._id));
    setOpen(false);
  };
  return (
    <>
      {/* Desktop View */}
      {user && (
        <>
          <div className="hidden md:flex w-full py-2 px-2 justify-between bg-neutral-100 border-1">
            {/* User info containter */}
            <div className="flex space-x-4">
              <img
                className="h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="user"
              />
              <div className="flex flex-col my-auto">
                <h1 className="font-spratRegular text-xl">{user.name}</h1>
                <p className="font-robotoLight text-sm text-neutral-600">
                  User since:
                  <span className="underline pl-1">
                    {moment(user.createdAt).format('MMMM-YYYY')}
                  </span>
                </p>
              </div>
            </div>
            {/* Button container */}
            <div className="flex h-12 my-auto">
              <button onClick={() => setOpen(true)} className="pr-5 pt-2">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Mobile view */}
          <div className="flex md:hidden flex-col space-y-1 p-2 bg-neutral-100 border-1">
            <h1 className="font-spratRegular text-xl text-center">
              {user.name}
            </h1>
            <p className="font-robotoLight text-sm text-neutral-600 text-center">
              User since:
              <span className="underline pl-1">
                {moment(user.createdAt).format('MMMM-YYYY')}
              </span>
            </p>

            <div className="flex justify-center pt-1">
              <button onClick={() => setOpen(true)} className="pr-5 pt-2">
                <FaTimes />
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
                              className="text-lg leading-6 font-robotoMedium text-neutral-800"
                            >
                              Deactivate account
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-neutral-500">
                                Are you sure you want to deactivate your
                                account? All of your data will be permanently
                                removed. This action cannot be undone.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse font-roboto">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-robotoMedium text-white hover:bg-red-600 focus:outline-none focus:ring-none sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={handleDeleteUser}
                        >
                          Deactivate
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center border border-neutral-300 shadow-sm px-4 py-2 bg-white text-base font-robotoMedium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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

export default UserCard;

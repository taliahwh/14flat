import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from '@headlessui/react';

import { FaTimes } from 'react-icons/fa';

// Actions
import {
  approveRequest,
  declineRequest,
  deleteNotification,
} from '../../actions/userActions';

const UserRequestCard = ({ request, markAsViewed, respond }) => {
  const dispatch = useDispatch();
  const [declineResponseOpen, setDeclineResponeOpen] = useState(false);
  const [response, setRespone] = useState('');

  const handleApproveRequest = () => {
    dispatch(approveRequest(request._id));
  };

  const handleDeclineRequest = (e) => {
    e.preventDefault();
    dispatch(declineRequest(request._id, response));
  };

  const handleDeleteNotification = () => {
    dispatch(deleteNotification(request._id));
  };
  return (
    <>
      {request && (
        <>
          {/* Desktop View */}

          <div className="hidden md:flex flex-col space-y-2">
            <div className="col-1">
              <div className="hidden md:flex w-full py-2 px-2 justify-between bg-neutral-100">
                {/* User info containter */}
                <div className="flex space-x-4">
                  <img
                    className="h-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="user"
                  />
                  <div className="flex flex-col my-auto">
                    <h1 className="font-spratRegular text-xl">
                      {request.admin}
                    </h1>
                    <p className="font-robotoLight">{request.description}</p>
                  </div>
                </div>
                {/* Button container */}
                <div className="flex h-12 my-auto">
                  {respond && (
                    <>
                      <button
                        onClick={handleApproveRequest}
                        className="bg-green-500 px-4 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                      >
                        ACCEPT
                      </button>
                      <button
                        onClick={() =>
                          setDeclineResponeOpen(!declineResponseOpen)
                        }
                        className="bg-red-600 px-4 py-1 lg:py-1 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                      >
                        DECLINE
                      </button>
                    </>
                  )}
                  {markAsViewed && (
                    <button
                      onClick={handleDeleteNotification}
                      className="pr-5 pt-2"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-2">
              <Transition
                show={declineResponseOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <form
                  action="submit"
                  id="emailForm"
                  onSubmit={handleDeclineRequest}
                  className="mt-5 flex flex-col space-y-5"
                >
                  <input
                    type="text"
                    id="requestDescription"
                    value={response}
                    autoComplete="off"
                    className="font-robotoLight bg-neutral-100 border border-gray-300 text-gray-900 text-sm  focus:ring-neutral-500 focus:bg-neutral-100 focus:outline-none block w-full p-2.5"
                    placeholder="Reasoning for declining writer request"
                    onChange={(e) => setRespone(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <button
                      type="sumbit"
                      className="bg-neutral-600 px-6 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                    >
                      DECLINE REQUEST
                    </button>
                  </div>
                </form>
              </Transition>
            </div>
          </div>

          {/* Mobile view */}
          <div className="flex md:hidden flex-col space-y-1 p-2 bg-neutral-100">
            <h1 className="font-spratRegular text-xl">{request.admin}</h1>
            <p className="font-robotoLight">{request.description}</p>

            <div className="flex justify-center pt-1">
              {respond && (
                <>
                  <button
                    onClick={handleApproveRequest}
                    className="bg-green-500 px-4 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                  >
                    ACCEPT
                  </button>
                  <button
                    onClick={() => setDeclineResponeOpen(!declineResponseOpen)}
                    className="bg-red-600 px-4 py-1 lg:py-1 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
                  >
                    DECLINE
                  </button>
                </>
              )}
              {markAsViewed && (
                <button
                  onClick={handleDeleteNotification}
                  className="pr-5 pt-2"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserRequestCard;

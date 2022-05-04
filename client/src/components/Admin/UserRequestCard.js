import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { approveRequest, declineRequest } from '../../actions/userActions';

const UserRequestCard = ({ request }) => {
  const dispatch = useDispatch();

  const handleApproveRequest = () => {
    dispatch(approveRequest(request._id));
  };

  const handleDeclineRequest = () => {
    dispatch(declineRequest(request._id));
  };
  return (
    <>
      {request && (
        <>
          {/* Desktop View */}
          <div className="hidden md:flex w-full py-2 px-2 justify-between">
            <div className="flex space-x-4">
              <img
                className="h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="user"
              />
              <div className="flex flex-col my-auto">
                <h1 className="font-spratRegular text-xl">{request.name}</h1>
                <p className="font-robotoLight">{request.description}</p>
              </div>
            </div>
            <div className="flex h-12 my-auto">
              <button
                onClick={handleApproveRequest}
                className="bg-green-500 px-4 py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
              >
                ACCEPT
              </button>
              <button
                onClick={handleDeclineRequest}
                className="bg-red-600 px-4 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
              >
                DECLINE
              </button>
            </div>
          </div>

          {/* Mobile view */}
          <div className="flex md:hidden flex-col space-y-1 p-2">
            <h1 className="font-spratRegular text-xl">{request.name}</h1>
            <p className="font-robotoLight">{request.description}</p>

            <div className="flex justify-center pt-1">
              <button
                onClick={handleApproveRequest}
                className="bg-green-500 px-4 py-1 lg:py-1 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
              >
                ACCEPT
              </button>
              <button
                onClick={handleDeclineRequest}
                className="bg-red-600 px-4 py-1 lg:py-1 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
              >
                DECLINE
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserRequestCard;

import React from 'react';

const UserRequestCard = () => {
  return (
    <div className="w-full py-2 bg-blue-10 flex flex-col space-y-2">
      <img
        className=""
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="user"
      />
      <h1 className="font-spratRegular text-xl">Toni Miller</h1>
      <p className="font-robotoLight">
        Beat reporter for the Boston Celtics. Previously @TheAthletic
      </p>
      <div className="flex space-x-2 pb-2">
        <button
          type="sumbit"
          className="bg-green-500 px-4 lg:px-8 py-1 lg:py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
        >
          ACCEPT
        </button>
        <button className="bg-red-600 px-4 lg:px-8 py-1 lg:py-2 text-white font-medium text-sm transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300">
          DECLINE
        </button>
      </div>
      <div className="border-t-1 border-x-neutral-300 mt-2"></div>
    </div>
  );
};

export default UserRequestCard;

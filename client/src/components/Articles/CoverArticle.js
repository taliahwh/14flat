import React from 'react';

const CoverArticle = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-1">
        <img
          className="w-full md:h-[30rem] h-30"
          src="https://e0.365dm.com/21/10/1600x900/skysports-joel-embiid-nikola-jokic_5547083.jpg?20211015111816"
          alt="Cover"
        />
        <div className="flex justify-between pt-2 font-robotoLight text-xs md:text-sm">
          <div className="flex space-x-3">
            <p className="text-neutral-400">Feb 11</p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">5 min read</p>
          </div>
          <p className="text-neutral-600 text-xs md:text-sm">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-spratRegular">
        The Final Race to MVP
      </h1>
      <p className="font-robotoLight md:block hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error,
        necessitatibus, placeat to dk facere labore quia, quis atque laborum
        molestias ullam sit expedita! Placeat aliquam cum sint a porro adipisci
        sed dolorum s, placeat to dk facere labore qui.
      </p>
    </div>
  );
};

export default CoverArticle;

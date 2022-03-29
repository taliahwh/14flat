import React from 'react';

const FeaturedArticle = () => {
  return (
    <div className="flex flex-col space-y-2 pb-4 md:pl-8 pl-0">
      <div className="flex flex-col space-y-1">
        <img
          className="w-full h-52 md:h-52 md:object-fill object-cover"
          src="https://sportshub.cbsistatic.com/i/r/2022/01/11/a886ee4f-011e-4deb-aca3-d209920410bc/thumbnail/1200x675/470eee4b9dbe3be529dee35e99bf0a05/jaylen-brown-jayson-tatum-celtics-getty.jpg"
          alt="Cover"
        />
        <div className="flex justify-between pt-2 font-robotoLight text-sm">
          <div className="space-x-3 md:flex hidden">
            <p className="text-neutral-400">Feb 11</p>
            <p className="text-neutral-400">•</p>
            <p className="text-neutral-400">5 min read</p>
          </div>
          <p className="text-neutral-600 text-xs md:text-sm">
            ⸻ <span className="pl-3">BY ELLEN JHOSH</span>
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-spratRegular">
        Boston Celtics: Contenders or Pretenders?
      </h1>
      <p className="font-robotoLight text-sm md:block hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error,
        necessitatibus, placeat to dk facere labore quia, quis atque laborum
      </p>
      <div className="space-x-3 md:hidden flex text-xs md:text-sm font-robotoLight">
        <p className="text-neutral-400">Feb 11</p>
        <p className="text-neutral-400">•</p>
        <p className="text-neutral-400">5 min read</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;

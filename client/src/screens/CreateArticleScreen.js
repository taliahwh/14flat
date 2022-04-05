import React from 'react';

const CreateArticleScreen = () => {
  return (
    <div className="h-screen bg-background max-w-6xl mx-auto w-full">
      <form action="submit" className="pt-16">
        <input
          type="text"
          placeholder="Title"
          className="w-full font-spratRegular text-4xl md:text-5xl py-2 text-neutral-800 bg-background border-1 border-neutral-900 focus:outline-none"
        />

        <textarea
          name="article"
          id="article"
          cols="30"
          rows="10"
          className="w-full font-roboto text-ld py-2 text-neutral-800 bg-background border-1 border-neutral-900 focus:outline-none"
        ></textarea>
      </form>
    </div>
  );
};

export default CreateArticleScreen;

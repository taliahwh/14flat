import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { BsFileEarmarkImage, BsArrowLeft } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

const CreateArticleScreen = () => {
  // const [content, setContent] = useState('');
  const [image, setImage] = useState([]);
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    excerpt: '',
  });
  const maxNumber = 1;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(articleData, image);

    console.log('submit');
  };

  const handleChange = (imageList, appUpdateIndex) => {
    // data for submit
    // console.log(imageList, appUpdateIndex);
    // setArticleData({ ...articleData, coverImage: imageList[0].data_url });
    setImage(imageList);
  };

  return (
    <div className="h-screen bg-background max-w-6xl mx-auto w-full px-4">
      <Link
        to="/"
        className="font-robotoLight underline text-sm flex items-center space-x-2 pt-10 text-neutral-500"
      >
        <BsArrowLeft />
        <p>Back to home</p>
      </Link>
      {/* Image Uploading Component */}
      <div className="pt-16 ">
        <h1 className="font-spratRegular text-2xl md:text-3xl text-[#9CA3AF] pb-2">
          Cover Image
        </h1>
        <ImageUploading
          multiple={false}
          value={image}
          onChange={handleChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
            <div className="bg-neutral-200 px-2 py-2">
              <div className="grid grid-cols-1">
                <div className="upload__image-wrapper col-span-1 py-6 flex justify-center border-1 border-dashed border-neutral-50 font-roboto">
                  {/* Upload Button */}
                  <button
                    onClick={onImageUpload}
                    {...dragProps}
                    className="flex flex-col space-y-3 items-center"
                  >
                    <BsFileEarmarkImage className="text-4xl md:text-5xl text-neutral-600" />
                    <h1>
                      Drop your image here, or{' '}
                      <span className="text-neutral-600 font-medium">
                        browse
                      </span>
                    </h1>
                    <p className="font-light text-xs text-center px-4">
                      For best results, upload PNG or JPG images of at least
                      1280×720 pixels. 5MB file-size limit.
                    </p>
                  </button>
                </div>

                {/* Image Display */}
                <div className="col-span-1">
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item flex bg-neutral-50 px-4 py-2 items-center justify-between"
                    >
                      <div className="flex space-x-8 items-center">
                        <img
                          src={image.data_url}
                          alt="cover"
                          width="75"
                          className=""
                        />
                        <h4 className="text-sm font-medium text-neutral-500 font-roboto">
                          {image.file.name}
                        </h4>
                      </div>

                      <div className="image-item__btn-wrapper pl-2 flex space-x-2 items-center">
                        <button className="text-green-600 text-3xl">
                          <FiCheck />
                        </button>
                        <button
                          onClick={() => onImageRemove(index)}
                          className="text-red-500 text-2xl"
                        >
                          <MdCancel />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ImageUploading>
      </div>

      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-8">
        <div className="editor-container">
          <input
            type="text"
            name="title"
            id="title"
            value={articleData.title}
            onChange={(e) =>
              setArticleData({ ...articleData, title: e.target.value })
            }
            placeholder="Title"
            className="w-full font-spratRegular text-4xl md:text-5xl pt-7 pb-2 text-neutral-800 bg-background focus:outline-none"
            required
          />

          {/* Text Editor */}
          <ReactQuill
            theme="snow"
            name="content"
            label="content"
            placeholder={'Start writing your article...'}
            value={articleData.content}
            onChange={(e) => setArticleData({ ...articleData, content: e })}
            required
          />
        </div>

        <div className="excerpt-container flex flex-col space-y-2">
          <label
            htmlFor="excerpt"
            className="font-spratRegular text-2xl md:text-3xl text-[#9CA3AF]"
          >
            Excerpt{' '}
            <span className={'text-xl'}>
              (to be dispalyed on home and posts screen)
            </span>
          </label>
          <textarea
            // maxLength="251"
            name="excerpt"
            id="excerpt"
            value={articleData.excerpt}
            onChange={(e) =>
              setArticleData({ ...articleData, excerpt: e.target.value })
            }
            // placeholder="Enter excerpt to be displayed"
            className="w-full font-robotoLight text-md py-2 italic text-neutral-800 bg-background border-1 px-3 border-neutral-300 focus:outline-none"
            required
          />
        </div>

        <button
          type=""
          className="font-roboto font-medium text-white bg-neutral-500 w-full py-2 text-md"
        >
          PUBLISH POST
        </button>
      </form>
    </div>
  );
};

export default CreateArticleScreen;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { BsFileEarmarkImage, BsArrowLeft } from 'react-icons/bs';

// Components
import Alert from '../components/Alert';
import Loader from '../components/Loader';

// Actions
import { createNewArticle } from '../actions/articleActions';

const CreateArticleScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [uploading, setUploading] = useState(false);

  const { success: newArticleSuccess } = useSelector(
    (state) => state.newArticle
  );

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data.data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2] }],
      [['bold', 'italic', 'underline']],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
    ],
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewArticle(title, image, content, excerpt));
    navigate('/blog');
  };

  return (
    <div className="h-full bg-background max-w-6xl mx-auto w-full px-4">
      <Link
        to="/"
        className="font-robotoLight underline text-sm flex items-center space-x-2 pt-10 text-neutral-500"
      >
        <BsArrowLeft />
        <p>Back to home</p>
      </Link>
      <form
        action="submitForm"
        onSubmit={handleFormSubmit}
        className="flex flex-col space-y-8"
      >
        {/* Image Uploading Component */}
        <div className="pt-16 ">
          {newArticleSuccess && (
            <Alert variant="success">Article successfully created.</Alert>
          )}
          <h1 className="font-spratRegular text-2xl md:text-3xl text-[#9CA3AF] pb-2">
            Cover Image
          </h1>
          <div className="bg-neutral-200 px-2 py-2">
            <div className="grid grid-cols-1">
              <div className="upload__image-wrapper col-span-1 py-6 flex justify-center border-1 border-dashed border-neutral-50 font-roboto">
                {/* Upload Button */}
                <button className="flex flex-col space-y-3 items-center">
                  <BsFileEarmarkImage className="text-4xl md:text-5xl text-neutral-600" />
                  <label
                    htmlFor="image-file"
                    className="custom-image-file text-md"
                  >
                    <span className="underline underline-offset-1">
                      Choose file
                    </span>{' '}
                    to upload or paste image address
                  </label>
                  <input
                    type="file"
                    id="image-file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full "
                    onChange={uploadFileHandler}
                  />
                  <input
                    type="text"
                    id="image"
                    value={image}
                    placeholder="Paste image address"
                    required
                    className="border border-gray-300 text-gray-900 bg-neutral-100 text-sm block w-full font-roboto py-1.5 px-1.5"
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <p className="font-light text-xs text-center px-4">
                    For best results, upload PNG or JPG images of at least
                    1280×720 pixels. 5MB file-size limit.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {uploading && <Loader />}
        </div>

        <div className="editor-container">
          <input
            required
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full font-spratRegular text-4xl md:text-5xl pt-7 pb-2 text-neutral-800 bg-background focus:outline-none"
          />

          {/* Text Editor */}
          <ReactQuill
            theme="snow"
            // modules={modules}
            name="content"
            label="content"
            placeholder={'Start writing your article...'}
            value={content}
            onChange={(e) => setContent(e)}
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
            required
            // maxLength="251"
            name="excerpt"
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            // placeholder="Enter excerpt to be displayed"
            className="w-full font-robotoLight text-md py-2 italic text-neutral-800 bg-background border-1 px-3 border-neutral-300 focus:outline-none"
          />

          <button
            type="submitForm"
            className="font-roboto font-medium text-white bg-neutral-500 w-full py-2 text-md"
          >
            PUBLISH POST
          </button>
        </div>

        <div className="py-3"></div>
      </form>
    </div>
  );
};

export default CreateArticleScreen;

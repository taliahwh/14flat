import React, { useState, useRef } from 'react';
import ImageUploading from 'react-images-uploading';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../config/editorTools';

import Header from '@editorjs/header';

import { BsFileEarmarkImage } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

const CreateArticleScreen = () => {
  const [image, setImage] = useState([]);
  const maxNumber = 1;
  const instanceRef = useRef(null);
  const ReactEditorJS = createReactEditorJS();

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(savedData);
  }

  let data = { 1: 'test' };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('submit');
  };

  const handleChange = (imageList, appUpdateIndex) => {
    // data for submit
    console.log(imageList, appUpdateIndex);
    setImage(imageList);
  };

  // TODO: When upload button is clicked, form is submitted

  return (
    <div className="h-full bg-background max-w-6xl mx-auto w-full px-4">
      <form
        onSubmit={handleFormSubmit}
        className="pt-16 flex flex-col space-y-8"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="w-full font-spratRegular text-4xl md:text-5xl py-2 text-neutral-800 bg-background focus:outline-none"
        />
        {/* Image Uploading Component */}
        <div>
          <h1 className="font-spratRegular text-2xl md:text-3xl text-[#9CA3AF] pb-2">
            Cover Image
          </h1>
          <ImageUploading
            multiple
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

        {/* Text Editor */}
        {/* <ReactEditorJS defaultValue={'Test'} tools={EDITOR_JS_TOOLS} /> */}

        <ReactEditorJS
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
          data={{
            time: 1556098174501,
            blocks: [
              {
                type: 'header',
                data: {
                  text: 'Editor.js',
                  level: 2,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
                },
              },
              {
                type: 'header',
                data: {
                  text: 'Key features',
                  level: 3,
                },
              },
              {
                type: 'list',
                data: {
                  style: 'unordered',
                  items: [
                    'It is a block-styled editor',
                    'It returns clean data output in JSON',
                    'Designed to be extendable and pluggable with a simple API',
                  ],
                },
              },
              {
                type: 'header',
                data: {
                  text: 'What does it mean «block-styled editor»',
                  level: 3,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
                },
              },
              {
                type: 'header',
                data: {
                  text: 'What does it mean clean data output',
                  level: 3,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Clean data is useful to sanitize, validate and process on the backend.',
                },
              },
              {
                type: 'delimiter',
                data: {},
              },
              {
                type: 'paragraph',
                data: {
                  text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                },
              },
              {
                type: 'image',
                data: {
                  file: {
                    url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                  },
                  caption: '',
                  withBorder: true,
                  stretched: false,
                  withBackground: false,
                },
              },
            ],
            version: '2.12.4',
          }}
        />

        {/* <input
          type="text"
          name="excerpt"
          id="excerpt"
          placeholder="Excerpt"
          className="w-full font-spratRegular text-4xl md:text-5xl py-2 text-neutral-800 bg-background focus:outline-none"
        /> */}

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

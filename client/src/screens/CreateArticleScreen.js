import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { BsFileEarmarkImage } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
// import { MdCancel } from 'react-icons/md';

const CreateArticleScreen = () => {
  const [image, setImage] = useState([]);
  const maxNumber = 1;

  const editorConfiguration = {
    plugins: [],
    toolbar: ['bold', 'italic'],
  };

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
    <div className="h-screen bg-background max-w-6xl mx-auto w-full px-4">
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

        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data="<p>Start writing your article..</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
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

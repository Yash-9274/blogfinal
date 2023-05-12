import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from "react-icons/ai";
import "../../Css/AddStory.css";
import badWords from 'bad-words';

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const imageEl = useRef(null);
  const editorEl = useRef(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const filter = new badWords();

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setImage("");
    editorEl.current.editor.setData("");
    imageEl.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    
    
    // Filter out bad words from title and content
    const filteredTitle = filter.clean(title);
    const filteredContent = filter.clean(content);
    
    formdata.append("title", filteredTitle);
    formdata.append("image", image);
    formdata.append("content", filteredContent);

    try {
      console.log("HEADERS", {
        headers : {
            ...config.headers,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            type: "formData",
        },
      });
      const { data } = await axios.post("/story/addstory", formdata, {
        headers : {
            ...config.headers,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            type: "formData",
        },
      });
      setSuccess("Add Blog successfully ");

      clearInputs();
      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 7000);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="Inclusive-addStory-page ">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="addStory-form"
      >
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>
            <Link to="/">Go home</Link>
          </div>
        )}

        <input
          type="text"
          required
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          ref={editorEl}
        />
        <div className="StoryImageField">
          <AiOutlineUpload />
          <div className="txt">
            {image
              ? image.name
              : " Include a high-quality image in your blog to make it more inviting to readers."}
          </div>
          <input
            name="image"
            type="file"
            ref={imageEl}
            onChange={(e) => {

              console.log(e.target.files[0]);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={image ? false : true}
          className={image ? "addStory-btn" : "dis-btn"}
        >
          Publish{" "}
        </button>
      </form>
    </div>
  );
};

export default AddStory;

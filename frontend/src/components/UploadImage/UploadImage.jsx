import React, { useState } from "react";
import "./UploadImage.scss";
import Axios from "axios";
const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("No message herer");

  const uploadAxios = async () => {
    try {

      const formData = new FormData()
      formData.append('name',name)
      formData.append('img',image)
      formData.append('message',message)

      const response = await Axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData,
        {
          withCredentials: true, // Important for sending cookies
        }
        
      );

      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    uploadAxios()
   


    console.log("submitted");
    // console.log(image);
  };

  return (
    <form onSubmit={submitForm} style={{ all: "unset" }}>
      <div className="upload-component">
        <h1>Upload image for detection</h1>
        <input
          className="plant-upload-name"
          type="text"
          name="plant name"
          placeholder="Plant name?"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />

        {image && (
          <div className="uploaded-view">
            <img alt="not found" src={URL.createObjectURL(image)} />
            <br />

            <button
              style={{ background: "#E36868" }}
              type="button"
              onClick={() => {
                setImage(null);
                document.querySelector(".uploadIcon").style.display = "block"; // when image is removed the defualt logo returns
              }}
            >
              Remove
            </button>
            <button type="submit">Upload</button>
          </div>
        )}

        <br />
        <br />

        <input
          className="uploadIcon"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
            document.querySelector(".uploadIcon").style.display = "none"; // so i stop seeing the defualt logo after image is loaded
          }}
        />
      </div>
    </form>
  );
};

export default UploadImage;

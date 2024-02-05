import React, { useState } from "react";
import "./UploadImage.scss";
const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="upload-component">
      <h1>Upload image for detection</h1>
      <input
        className="plant-upload-name"
        type="text"
        name="plant name"
        placeholder="Plant name?"
      />

      {selectedImage && (
        <div className="uploaded-view">
          <img
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />

          <button
          style={{background:"#E36868"}}
            type="button"
            onClick={() => {
              setSelectedImage(null);
              document.querySelector(".uploadIcon").style.display = "block"; // when image is removed the defualt logo returns
            }}
          >
            Remove
          </button>
          <button>Upload</button>
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
          setSelectedImage(event.target.files[0]);
          document.querySelector(".uploadIcon").style.display = "none"; // so i stop seeing the defualt logo after image is loaded
        }}
      />
    </div>
  );
};

export default UploadImage;

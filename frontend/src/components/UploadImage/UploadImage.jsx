import React, { useState } from "react";
import './UploadImage.scss'
const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="upload-component">
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        className="icon"
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;

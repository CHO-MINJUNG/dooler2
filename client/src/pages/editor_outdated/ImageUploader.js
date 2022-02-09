import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const UploadAndDisplayImage = () => {

  ////////////////////////////////////
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(selectedImage);

  function f(statef) {
    console.log(statef);
    return statef.imageList[0];
  }
  const number = useSelector(f);


  const dispatch = useDispatch();
  ////////////////////////////////////
  
  return (
    <div>
      <p>{number}</p>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />

    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>

    </div>
  );
};

export default UploadAndDisplayImage;
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter Text here");

  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleClick}>
          Click to Convert UpperCase
        </button>
      </div>

      <div className="container">Text Summary</div>
      <div className="container">
        total words {text.split(" ").length} total text length {text.length}
      </div>
    </div>
  );
}

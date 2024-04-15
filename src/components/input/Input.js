import React, { useState } from "react";

import "./Input.scss";
const Input = (props) => {
  return (
    <div
      className={`${props.control ? "control" : ""} ${
        props.error ? "error" : ""
      } ${props.disable ? "disable" : ""} ${
        props.helperText ? "Some interesting text" : ""
      }`}
    >
      <label className="label">Label </label>

      <input
        placeholder={`${
          props.startIcon ? (
            <span class="material-symbols-outlined">call</span>
          ) : (
            ""
          )
        } Placeholder`}
        type="text"
        name="inputValue"
      />
      {props.helperText && (
        <label className="label">Some interesting text</label>
      )}
    </div>
  );
};

export default Input;

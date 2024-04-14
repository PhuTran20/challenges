import React from "react";
import "./Button.scss";
const Button = (props) => {
  return (
    <button
      className={`  ${
        props.variant === "outline"
          ? "outline"
          : props.variant === "text"
          ? "text"
          : ""
      } ${props.disableShadow ? "disableShadow" : ""}  ${
        props.disable ? "disable" : ""
      } ${props.startIcon || ""} ${props.endIcon || ""}
      ${
        props.size === "md"
          ? "md"
          : props.size === "sm"
          ? "sm"
          : props.size
          ? "lg"
          : ""
      }
      ${
        props.color === "default"
          ? "default"
          : props.color === "primary"
          ? "primary"
          : props.color === "secondary"
          ? "secondary"
          : props.color === "danger"
          ? "danger"
          : ""
      }
       `}
    >
      {props.startIcon && (
        <span className="material-symbols-outlined icon">
          add_shopping_cart
        </span>
      )}
      {props.children}
      {props.endIcon && (
        <span className="material-symbols-outlined icon">
          add_shopping_cart
        </span>
      )}
    </button>
  );
};

export default Button;

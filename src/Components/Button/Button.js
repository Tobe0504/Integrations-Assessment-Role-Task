import React from "react";
import classes from "./Button.module.css";

const Button = ({ disabled, invalid, onClick, children, type }) => {
  return (
    <button
      disabled={disabled}
      className={
        disabled === true ? `${classes.button_invalid}` : `${classes.button}`
      }
      onClick={onClick}
      invalid={invalid}
      type={type ?? "submit"}
      style={{ border: "none" }}
    >
      {children}
    </button>
  );
};

export default Button;

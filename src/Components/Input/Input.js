import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputSubClass}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={
          props.invalid
            ? `${classes.textInput_invalid}`
            : `${classes.textInput}`
        }
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        id={props.id}
        readOnly={props.readOnly ?? false}
        style={props.style}
        min={props.min}
        onKeyDown={props.onKeyDown}
        name={props.name}
      />
      <label className={classes.inputLabel} htmlFor={props.htmlFor}>
        {props.children}
      </label>
    </div>
  );
};

export default Input;

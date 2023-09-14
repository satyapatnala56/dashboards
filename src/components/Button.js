import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  var combined = `${props.class} ${styles.button}`;

  return (
    <button className={combined} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

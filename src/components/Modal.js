import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop}></div>;
};
const Content = (props) => {
  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const { children } = props;

  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <Content> {children} </Content>,
        document.getElementById("content")
      )}
    </Fragment>
  );
};

export default Modal;

import React from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css";

const CustomModal = (props) => {
  const { title, children, height, width, handleClose } = props;

  return (
    <Modal>
      <div
        className={styles.card}
        style={{
          height: height,
          width: width,
          minHeight: "fit-content",
        }}
      >
        <div className={styles.header}>
          <div>{title}</div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "10px",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            X
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;

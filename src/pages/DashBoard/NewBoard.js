import React, { useEffect, useState } from "react";
import CustomModal from "../../components/CustomModal";
import styles from "./NewBoard.module.css";
import Button from "../../components/Button";

const NewBoard = (props) => {
  const {
    handleClose,
    addNewBoardHandler,
    isEdit,
    toBeEditedBoard,
    saveBoardHandler,
  } = props;

  const [activeColor, setActiveColor] = useState(0);
  const [sampleColors, setSampleColors] = useState([
    "#A7F0F9",
    "#C5C5FC",
    "#FFAEC0",
    "#FFCC66",
  ]);
  const [title, setTitle] = useState(isEdit ? toBeEditedBoard.title : "");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const index = sampleColors.findIndex(
        (color) => color === toBeEditedBoard.color
      );
      setActiveColor(index);
    }
  }, [isEdit, sampleColors, toBeEditedBoard]);

  return (
    <CustomModal
      title={isEdit ? "Edit your Board" : "Add a name for your board"}
      height="300px"
      width="30vw"
      handleClose={handleClose}
    >
      <div className={styles.inputDiv}>
        <input
          type="text"
          placeholder="Title for your board"
          value={title}
          onChange={(e) => {
            if (e.target.value.length > 0) setWarning(false);
            setTitle(e.target.value);
          }}
        />
        <p
          className={styles.warning}
          style={{ visibility: warning ? "" : "hidden" }}
        >
          Board Title cannot be empty
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <h3>Select post colour</h3>
          <p style={{ fontSize: "0.9rem" }}>
            Here are some templates to help you get started
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
          {sampleColors.map((color, index) => {
            return (
              <div
                style={{
                  height: "24px",
                  width: "24px",
                  borderRadius: "50%",
                  background: color,
                  cursor: "pointer",
                  border: activeColor === index ? "1px solid black" : "none",
                }}
                className={styles.colorCircle}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColor(index);
                }}
              ></div>
            );
          })}
        </div>
        <Button
          class={styles.button}
          onClick={() => {
            if (title.trim().length === 0) {
              setWarning(true);
              return;
            }
            if (!isEdit) {
              addNewBoardHandler(title, sampleColors[activeColor]);
            } else {
              saveBoardHandler(
                title,
                sampleColors[activeColor],
                toBeEditedBoard.id
              );
            }
          }}
        >
          {isEdit ? "Edit Board" : "Create Board"}
        </Button>
      </div>
    </CustomModal>
  );
};

export default NewBoard;

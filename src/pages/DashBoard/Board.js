import React, { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import Menu from "../../components/Menu";
import styles from "./DashBoard.module.css";
import NewBoard from "./NewBoard";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { boardsActions } from "../../redux/redux";
const Board = (props) => {
  const { board, optionsHandler, deleteHandler } = props;

  const navigate = useNavigate();

  const navigateHandler = (e) => {
    navigate(`/board/${board.id}`);
  };

  const [editBoard, setEditBoard] = useState(false);
  const [options, setOptions] = useState([
    {
      title: "Edit",
      icon: <AiOutlineEdit />,
      hoverColor: "blue",
      onClick: (e) => {
        e.stopPropagation();
        setEditBoard(true);
        optionsHandler(e, -1);
      },
    },
    {
      title: "Delete",
      icon: <RiDeleteBinLine />,
      hoverColor: "red",
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteHandler(board.id);
      },
    },
  ]);

  const menuRef = useRef(null);

  useOutsideClick(menuRef, (e) => {
    optionsHandler(e, -1);
  });

  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();

  const saveBoardHandler = (title, color, id) => {
    const index = boards.findIndex((board) => board.id === id);
    const newBoards = [...boards];
    newBoards[index] = { id, title, color, showOptions: false };
    dispatch(boardsActions.setBoards({ boards: newBoards }));
    setEditBoard(false);
  };

  return (
    <div className={styles.boardCard} onClick={navigateHandler}>
      <div
        className={styles.colorBox}
        style={{
          backgroundColor: board.color,
        }}
      ></div>
      <div
        ref={menuRef}
        style={{ display: "flex", width: "100%", overflow: "hidden" }}
      >
        <div className={styles.boardContent}>{board.title}</div>
        <div
          onClick={(e) => optionsHandler(e, board.id)}
          className={styles.dots}
        >
          <BsThreeDotsVertical />
        </div>
      </div>
      {board.showOptions && (
        <Menu options={options} right="-140px" bottom="-45%" />
      )}
      {editBoard && (
        <NewBoard
          isEdit={true}
          toBeEditedBoard={board}
          saveBoardHandler={saveBoardHandler}
          handleClose={() => {
            console.log(2222);
            setEditBoard(false);
          }}
        />
      )}
    </div>
  );
};

export default Board;

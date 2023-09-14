import React, { useEffect } from "react";
import styles from "./DashBoard.module.css";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { boardsActions } from "../../redux/redux";

const AllBoards = (props) => {
  const { filteredBoards, setFilteredBoards } = props;

  const optionsHandler = (event, id) => {
    event.stopPropagation();
    /*
    Making sure to close all other menu's when opening a new one
    */
    setFilteredBoards((prev) => {
      const newBoards = prev.map((board) => {
        if (board.id === id) {
          board = { ...board, showOptions: !board.showOptions };
        } else {
          board = { ...board, showOptions: false };
        }
        return board;
      });
      return newBoards;
    });
  };

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(boardsActions.deleteBoard({ id }));
  };

  return (
    <div className={styles.myBoard}>
      <h2>My Boards</h2>
      <div className={styles.boardsRow}>
        {filteredBoards.map((board) => {
          return (
            <Board
              board={board}
              key={board.id}
              optionsHandler={optionsHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllBoards;

import React, { useEffect, useState } from "react";
import NavBoard from "./NavBoard";
import AllBoards from "./AllBoards";
import NewBoard from "./NewBoard";
import { useSelector, useDispatch } from "react-redux";
import { boardsActions } from "../../redux/redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();

  const [newBoard, setNewBoard] = useState(false);
  const [filterString, setFilterString] = useState("");
  const [filteredBoards, setFilteredBoards] = useState(boards);

  const navigate = useNavigate();

  const addNewBoardHandler = (title, color) => {
    dispatch(
      boardsActions.addBoard({
        board: {
          id: boards.length + 1,
          title,
          color,
          showOptions: false,
          posts: [],
        },
      })
    );
    setNewBoard(false);
    setFilterString("");
  };

  useEffect(() => {
    if (filterString.trim().length === 0) {
      setFilteredBoards(boards);
      return;
    }
    const filterByString = boards.filter((board) => {
      return board.title.toLowerCase().includes(filterString.toLowerCase());
    });
    setFilteredBoards(filterByString);
  }, [filterString, boards]);

  return (
    <React.Fragment>
      <NavBoard
        setNewBoard={setNewBoard}
        filterString={filterString}
        setFilterString={setFilterString}
      />
      <AllBoards
        filteredBoards={filteredBoards}
        setFilteredBoards={setFilteredBoards}
      />
      {newBoard && (
        <NewBoard
          handleClose={() => setNewBoard(false)}
          addNewBoardHandler={addNewBoardHandler}
        />
      )}
    </React.Fragment>
  );
};

export default Dashboard;

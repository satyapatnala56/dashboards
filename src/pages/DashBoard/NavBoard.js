import React from "react";
import styles from "./DashBoard.module.css";
import toddle from "../../assets/logo.png";
import Button from "../../components/Button";

const NavBoard = (props) => {
  const { setNewBoard, filterString, setFilterString } = props;

  return (
    <div className={styles.nav}>
      <img src={toddle} alt="toddle logo" />
      <div className={styles.navEnd}>
        <input
          type="text"
          placeholder="Search"
          value={filterString}
          onChange={(e) => setFilterString(e.target.value)}
        />
        <Button onClick={() => setNewBoard(true)}>
          +&nbsp;Create New Board
        </Button>
      </div>
    </div>
  );
};

export default NavBoard;

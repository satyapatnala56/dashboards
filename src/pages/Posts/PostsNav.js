import React, { useState, useRef } from "react";
import { BsChevronLeft, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/plainLogo.png";
import styles from "./Posts.module.css";
import { useNavigate } from "react-router";

const PostsNav = (props) => {
  const {
    board,
    isBookMarksOn,
    setIsBookMarksOn,
    searchString,
    setSearchString,
  } = props;
  const [isSearchOn, setIsSearchOn] = useState(false);

  const inputRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <BsChevronLeft
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
      <div className={styles.logo}>
        <img src={logo} alt="toddle logo" />
      </div>
      <h4>{isBookMarksOn ? "My bookmarks" : board.title}</h4>
      <div className={styles.navEnd}>
        <div
          className={styles.customInput}
          style={{
            border: isSearchOn ? "1px solid #ccc" : "none",
            padding: isSearchOn ? "5px 10px" : "",
          }}
        >
          <AiOutlineSearch
            style={{ cursor: "pointer" }}
            onClick={() => {
              inputRef.current.focus();
              setIsSearchOn(true);
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              width: isSearchOn ? "50%" : 0,
              padding: isSearchOn ? "0 10px" : "",
            }}
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            ref={inputRef}
            onBlur={() => setIsSearchOn(false)}
          />
        </div>
        <div>|</div>
        <div style={{ cursor: "pointer" }}>
          {!isBookMarksOn ? (
            <BsBookmark onClick={() => setIsBookMarksOn(true)} />
          ) : (
            <BsBookmarkFill
              fill="gold"
              onClick={() => setIsBookMarksOn(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsNav;

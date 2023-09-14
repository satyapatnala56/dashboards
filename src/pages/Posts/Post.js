import React, { useState, useRef, useEffect } from "react";
import styles from "./Posts.module.css";
import {
  BsBookmark,
  BsThreeDotsVertical,
  BsBookmarkFill,
} from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import moment from "moment";
import Heart from "react-heart";
import useOutsideClick from "../hooks/useOutsideClick";
import Menu from "../../components/Menu";
import NewPost from "./NewPost";
import { useDrag } from "react-dnd";

const style = {
  backgroundColor: "white",
  cursor: "move",
};

const Post = (props) => {
  const { post, editHandler, deleteHandler, changeBookMarkHandler } = props;
  const [options, setOptions] = useState([]);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [showOptions, setShowOptions] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setShowOptions(false));

  const dragRef = useRef(null);
  const [{ isDragging }, ref] = useDrag(
    () => ({
      type: "component",
      item: { type: "component", path: post.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [post]
  );

  useEffect(() => {
    setOptions([
      {
        title: "Edit",
        icon: <AiOutlineEdit />,
        hoverColor: "blue",
        onClick: () => {
          setIsEdit(true);
        },
      },
      {
        title: "Delete",
        icon: <RiDeleteBinLine />,
        hoverColor: "red",
        onClick: () => {
          deleteHandler(post);
        },
      },
    ]);
  }, [deleteHandler, post]);

  const bookMarkHandler = () => {
    changeBookMarkHandler(post.id);
  };

  useEffect(() => {
    if (isDragging) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
  }, [isDragging]);

  ref(dragRef);

  return (
    <div
      className={styles.postCard}
      style={{ ...style, opacity }}
      ref={dragRef}
    >
      <div className={styles.postCardHeader}>
        <h3 style={{ width: "80%", fontSize: "20px" }}>
          <div>{post.title}</div>
          <div style={{ fontSize: "12px", margin: "5px 0", color: "#B0B0B0" }}>
            {moment(post.date).format("Do MMMM")}
          </div>
        </h3>
        <div
          style={{ cursor: "pointer", height: "20px" }}
          onClick={bookMarkHandler}
        >
          {!post.isBookMarked ? <BsBookmark /> : <BsBookmarkFill fill="gold" />}
        </div>
        <div ref={menuRef}>
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => setShowOptions((prev) => !prev)}
          />
        </div>
        {showOptions && <Menu options={options} right="-150px" bottom="-25%" />}
      </div>
      <div className={styles.image}>
        <img src={post.image} alt={post.title} />
      </div>
      <div className={styles.description}>{post.description}</div>
      <div className={styles.bottomLine}>
        <Heart
          style={{ height: "20px" }}
          isActive={isLiked}
          onClick={() => {
            setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
            setIsLiked((prev) => !prev);
            const newPost = {
              ...post,
              isLiked: !isLiked,
              likes: isLiked ? likes - 1 : likes + 1,
            };
            editHandler(newPost);
          }}
        />
        {likes}
      </div>
      {isEdit && (
        <NewPost
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          post={post}
          editHandler={editHandler}
          handleClose={() => setIsEdit(false)}
        />
      )}
    </div>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import PostsNav from "./PostsNav";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import styles from "./Posts.module.css";
import PostsContent from "./PostsContent";
import { boardsActions } from "../../redux/redux";
import { useDispatch } from "react-redux";
import NewPost from "./NewPost";

const Posts = () => {
  const params = useParams();

  const [board, setBoard] = useState({});
  const [boardWithFilteredPosts, setBoardWithFilteredPosts] = useState({});
  const [newPost, setNewPost] = useState(false);
  const [isBookMarksOn, setIsBookMarksOn] = useState(false);
  const [searchString, setSearchString] = useState("");

  const boards = useSelector((state) => state.boards.boards);

  useEffect(() => {
    const id = params.boardId;
    const board = boards.find((board) => board.id === parseInt(id));
    setBoard(board);
  }, [boards, params.boardId]);

  useEffect(() => {
    if (searchString.trim().length === 0) {
      setBoardWithFilteredPosts(board);
    } else {
      const filteredObject = { ...board };
      filteredObject.posts = filteredObject.posts.filter((post) =>
        post.title.toLowerCase().includes(searchString.toLowerCase())
      );
      setBoardWithFilteredPosts(filteredObject);
    }
  }, [board, searchString]);

  const dispatch = useDispatch();

  const addPostHandler = (post) => {
    dispatch(
      boardsActions.addPost({
        boardId: board.id,
        post: { ...post, id: board.posts.length + 1 },
      })
    );
    setNewPost(false);
  };

  return (
    <div className={styles.postsPage}>
      <PostsNav
        board={boardWithFilteredPosts}
        isBookMarksOn={isBookMarksOn}
        setIsBookMarksOn={setIsBookMarksOn}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <PostsContent
        board={boardWithFilteredPosts}
        setNewPost={setNewPost}
        isBookMarksOn={isBookMarksOn}
      />
      {newPost && (
        <NewPost
          addPostHandler={addPostHandler}
          handleClose={() => setNewPost(false)}
        />
      )}
    </div>
  );
};

export default Posts;

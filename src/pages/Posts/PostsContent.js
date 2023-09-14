import React, { Fragment } from "react";
import styles from "./Posts.module.css";
import NoPostMobile from "../../assets/NoPostMobile.png";
import Post from "./Post";
import { boardsActions } from "../../redux/redux";
import { useDispatch } from "react-redux";
import DropZone from "../../components/DropZone";
import Button from "../../components/Button";

const   PostsContent = (props) => {
  const { board, setNewPost, isBookMarksOn } = props;

  const dispatch = useDispatch();

  const editHandler = (post) => {
    dispatch(boardsActions.editPost({ boardId: board.id, post }));
  };

  const deleteHandler = (post) => {
    dispatch(boardsActions.deletePost({ boardId: board.id, postId: post.id }));
  };

  const dropHandler = (originalComponent, incomingComponent) => {
    dispatch(
      boardsActions.rearrangePost({
        boardId: board.id,
        originalComponent: originalComponent.path,
        incomingComponent: incomingComponent.path,
      })
    );
  };

  const changeBookMarkHandler = (postId) => {
    dispatch(boardsActions.alterBookMark({ boardId: board.id, postId }));
  };

  return (
    <div
      style={{
        background: board.color,
        flex: "1 1 auto",
        position: "relative",
        backgroundPosition: "fixed",
      }}
    >
      <div className={styles.contentHeader}>
        <h2>Your Posts</h2>
        <Button onClick={() => setNewPost(true)}>+Create New Post</Button>
      </div>
      {board.posts && (
        <Fragment>
          {board.posts.length === 0 ? (
            <div className={styles.noContent}>
              <img src={NoPostMobile} alt="No Posts" />
              <h4>Nothing here yet</h4>
              <p>Create your first post by clicking on the + button above</p>
            </div>
          ) : (
            <div
              className={styles.postsDisplay}
            >
              {board.posts
                .filter((post) => !isBookMarksOn || post.isBookMarked)
                .map((post, index) => {
                  return (
                    <div style={{ position: "relative" }} key={post.id}>
                      <DropZone
                        data={{ path: post.id }}
                        onDrop={(data, item) => {
                          dropHandler(data, item);
                        }}
                      />
                      <Post
                        post={post}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                        changeBookMarkHandler={changeBookMarkHandler}
                      />
                    </div>
                  );
                })}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default PostsContent;

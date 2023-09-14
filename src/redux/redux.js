import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";

const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: localStorage.getItem("store")
      ? JSON.parse(localStorage.getItem("store"))
      : initialState,
  },
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload.boards;
    },
    addBoard: (state, action) => {
      let newBoards = [...state.boards, action.payload.board];
      state.boards = newBoards;
      localStorage.setItem("store", JSON.stringify(state.boards));
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload.id
      );
    },
    addPost: (state, action) => {
      let newBoards = [...state.boards];
      const { boardId, post } = action.payload;
      const index = newBoards.findIndex((board) => board.id === boardId);
      newBoards[index].posts.push(post);
      state.boards = newBoards;
    },
    editPost: (state, action) => {
      const { boardId, post } = action.payload;
      let newBoards = [...state.boards];
      const boardIndex = newBoards.findIndex((board) => board.id === boardId);
      const postIndex = newBoards[boardIndex].posts.findIndex(
        (p) => p.id === post.id
      );
      newBoards[boardIndex].posts[postIndex] = post;
      state.boards = newBoards;
    },
    deletePost: (state, action) => {
      const { boardId, postId } = action.payload;
      console.log(postId);
      let newBoards = [...state.boards];
      const boardIndex = newBoards.findIndex((board) => board.id === boardId);
      newBoards[boardIndex].posts = newBoards[boardIndex].posts.filter(
        (p) => p.id !== postId
      );
      state.boards = newBoards;
    },
    rearrangePost: (state, action) => {
      const { boardId, originalComponent, incomingComponent } = action.payload;
      let newBoards = [...state.boards];
      const boardIndex = newBoards.findIndex((board) => board.id === boardId);
      const board = newBoards[boardIndex];
      const p1Index = board.posts.findIndex((p) => p.id === originalComponent);
      const incomingPost = board.posts.find((p) => p.id === incomingComponent);
      let filteredPosts = board.posts.filter((p) => p.id !== incomingPost.id);
      filteredPosts = [
        ...filteredPosts.slice(0, p1Index),
        incomingPost,
        ...filteredPosts.slice(p1Index),
      ];
      newBoards[boardIndex].posts = filteredPosts;
      state.boards = newBoards;
    },
    alterBookMark: (state, action) => {
      const { boardId, postId } = action.payload;
      let newBoards = [...state.boards];
      const boardIndex = newBoards.findIndex((board) => board.id === boardId);
      newBoards[boardIndex].posts = newBoards[boardIndex].posts.map((post) => {
        if (post.id === postId) {
          if (post.isBookMarked) {
            return { ...post, isBookMarked: false };
          }
          return { ...post, isBookMarked: true };
        }
        return post;
      });
      state.boards = newBoards;
    },
  },
});

const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  },
});

export const boardsActions = boardsSlice.actions;

export default store;

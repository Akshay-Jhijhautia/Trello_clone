import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    board: [],
  },
  reducers: {
    getAllBoards(state, action) {
      state.board = action.payload;
    },
    createBoard(state, action) {
      state.board.push(action.payload);
    },
  },
});

export const { getAllBoards, createBoard } = boardSlice.actions;
export default boardSlice.reducer;

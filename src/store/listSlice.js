import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
  },
  reducers: {
    getAllListData(state, action) {
      state.lists = action.payload;
    },
    createANewList(state, action) {
      state.lists.push(action.payload);
    },
    deleteAList(state, action) {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { getAllListData, createANewList, deleteAList } =
  listSlice.actions;
export default listSlice.reducer;

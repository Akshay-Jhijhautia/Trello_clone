import { createSlice } from "@reduxjs/toolkit";

const checkItemSlice = createSlice({
  name: "checkitem",
  initialState: {
    checkitems: {},
  },
  reducers: {
    getAllCheckItems(state, action) {
      state.checkitems[action.payload.checklistId] = action.payload.checkitems;
    },
    addACheckItem(state, action) {
      state.checkitems[action.payload.checklistId].push(
        action.payload.checkitems
      );
    },
    deleteASingleCheckItem(state, action) {
      state.checkitems[action.payload.checklistId] = action.payload.checkitems;
    },
  },
});

export const { getAllCheckItems, addACheckItem, deleteASingleCheckItem } =
  checkItemSlice.actions;
export default checkItemSlice.reducer;

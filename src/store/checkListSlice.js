import { createSlice } from "@reduxjs/toolkit";

const checkListSlice = createSlice({
  name: "checklists",
  initialState: {
    checkLists: {},
  },
  reducers: {
    getCheckListData(state, action) {
      state.checkLists[action.payload.cardId] = action.payload.checklists;
    },
    addCheckListData(state, action) {
      state.checkLists[action.payload.cardId].push(action.payload.checklist);
    },
    deleteASingleChecklist(state, action) {
      state.checkLists[action.payload.cardId] = action.payload.checklist;
    },
  },
});

export const { getCheckListData, addCheckListData, deleteASingleChecklist } =
  checkListSlice.actions;
export default checkListSlice.reducer;

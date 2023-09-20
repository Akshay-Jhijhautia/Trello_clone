import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";
import listSlice from "./listSlice";
import cardSlice from "./cardSlice";
import checkListSlice from "./checkListSlice";
import checkItemSlice from "./checkItemSlice";

let rootReducer = combineReducers({
  board: boardSlice,
  list: listSlice,
  card: cardSlice,
  checkList: checkListSlice,
  checkItem: checkItemSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

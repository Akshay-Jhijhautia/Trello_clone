import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    getAllCArds(state, action) {
      state.cards[action.payload.listId] = action.payload.cards;
    },
    createANewCard(state, action) {
      state.cards[action.payload.listId].push(action.payload.card);
    },
    deleteASingleCard(state, action) {
      state.cards[action.payload.listId] = action.payload.card;
    },
  },
});

export const { getAllCArds, createANewCard, deleteASingleCard } =
  cardSlice.actions;
export default cardSlice.reducer;

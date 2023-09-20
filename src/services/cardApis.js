import { key, token } from "./auth";
import axios from "axios";

class Card {
  getAllCardsInAList(listId) {
    return axios.get(
      `https://api.trello.com/1/lists/${listId}/cards?key=${key}&token=${token}`
    );
  }

  deleteOneCard(cardId) {
    return axios.delete(
      `https://api.trello.com/1/cards/${cardId}?key=${key}&token=${token}`
    );
  }

  createACardInAList(nameOfCard, listId) {
    return axios.post(
      `https://api.trello.com/1/cards?idList=${listId}&key=${key}&token=${token}`,
      { name: nameOfCard }
    );
  }
}

export default new Card();

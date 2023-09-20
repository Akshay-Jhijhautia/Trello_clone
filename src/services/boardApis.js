import { key, token } from "./auth";
import axios from "axios";

class Board {
  getAllBoards() {
    return axios.get(
      `https://api.trello.com/1/members/me/boards?&key=${key}&token=${token}`
    );
  }

  createBoard(name) {
    return axios.post(
      `https://api.trello.com/1/boards/?name=${name}&key=${key}&token=${token}`
    );
  }

  getOneBoard(boardId) {
    return `https://api.trello.com/1/boards/${boardId}?key=${key}&token=${token}`;
  }
}

export default new Board();

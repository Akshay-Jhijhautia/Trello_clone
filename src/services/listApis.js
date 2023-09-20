import { key, token } from "./auth";
import axios from "axios";

class List {
  getAllLists(boardId) {
    return axios.get(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${key}&token=${token}`
    );
  }

  createNewList(name, boardId) {
    return axios.post(
      `https://api.trello.com/1/lists?name=${name}&idBoard=${boardId}&key=${key}&token=${token}`
    );
  }

  deleteOneList(id) {
    return axios.put(
      `https://api.trello.com/1/lists/${id}/closed?key=${key}&token=${token}`,
      { value: true }
    );
  }
}

export default new List();

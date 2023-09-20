import { key, token } from "./auth";
import axios from "axios";

class CheckItem {
  getCheckItemsOnACheckList(checklistId) {
    return axios.get(
      `https://api.trello.com/1/checklists/${checklistId}/checkItems?key=${key}&token=${token}`
    );
  }

  createCheckItemOnACheckList(checkItemName, checklistId) {
    return axios.post(
      `https://api.trello.com/1/checklists/${checklistId}/checkItems?name=${checkItemName}&key=${key}&token=${token}`
    );
  }

  deleteCheckItemFromACheckList(checkItemId, checkListId) {
    return axios.delete(
      `https://api.trello.com/1/checklists/${checkListId}/checkItems/${checkItemId}?key=${key}&token=${token}`
    );
  }

  updateCheckItem(cardId, checkItemId, state) {
    return axios.put(
      `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?state=${state}&key=${key}&token=${token}`
    );
  }
}

export default new CheckItem();

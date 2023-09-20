import { key, token } from "./auth";
import axios from "axios";

class CheckList {
  getAllCheckListsOnACard(cardId) {
    return axios.get(
      `https://api.trello.com/1/cards/${cardId}/checklists?key=${key}&token=${token}`
    );
  }

  createChecklistOnACard(nameOfChecklist, cardId) {
    return axios.post(
      `https://api.trello.com/1/cards/${cardId}/checklists?key=${key}&token=${token}`,
      {
        name: nameOfChecklist,
      }
    );
  }

  deleteChecklistOnACard(checklistId) {
    return axios.delete(
      `https://api.trello.com/1/checklists/${checklistId}?key=${key}&token=${token}`
    );
  }
}

export default new CheckList();

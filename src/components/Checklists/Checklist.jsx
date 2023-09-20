import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";

import SingleChecklist from "./SingleChecklist";
import CheckListApi from "../../services/checkListApi";
import AddChecklist from "./AddChecklist";
import {
  getCheckListData,
  addCheckListData,
  deleteASingleChecklist,
} from "../../store/checkListSlice";

const Checklist = ({ cardId, modal, handleClose }) => {
  const [error, setError] = useState("");

  const checklist = useSelector((store) => {
    return store.checkList.checkLists[cardId];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getLists(cardId);
  }, []);

  function getLists(cardId) {
    CheckListApi.getAllCheckListsOnACard(cardId)
      .then((res) => {
        const checkListData = {
          cardId: cardId,
          checklists: res.data,
        };
        dispatch(getCheckListData(checkListData));
      })
      .catch((err) => setError(err.message));
  }

  function createCheckListInACard(nameOfChecklist, cardId) {
    CheckListApi.createChecklistOnACard(nameOfChecklist, cardId)
      .then((res) => {
        const checkListData = {
          cardId: cardId,
          checklist: res.data,
        };
        dispatch(addCheckListData(checkListData));
      })
      .catch((err) => setError(err.message));
  }

  function handleInputElement(event) {
    if (event.key === "Enter") {
      createCheckListInACard(event.target.value, cardId);
    }
  }

  function deleteAChecklist(checklistId) {
    dispatch(
      deleteASingleChecklist({
        cardId: cardId,
        checklist: checklist.filter((data) => data.id !== checklistId),
      })
    );

    CheckListApi.deleteChecklistOnACard(checklistId).catch((err) =>
      setError(err.message)
    );
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Modal open={modal} onClose={handleClose}>
        <div
          style={{
            width: 500,
            height: "auto",
            backgroundColor: "white",
            margin: "auto",
            marginTop: 100,
          }}
        >
          {checklist &&
            checklist.map((list, index) => (
              <SingleChecklist
                key={index}
                name={list.name}
                deleteAChecklist={deleteAChecklist}
                id={list.id}
                cardId={cardId}
              />
            ))}
          <AddChecklist handleInput={handleInputElement} />
        </div>
      </Modal>
    </>
  );
};

export default Checklist;

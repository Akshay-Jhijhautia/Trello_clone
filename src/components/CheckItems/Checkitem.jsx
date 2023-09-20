import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SingleCheckItem from "./SingleCheckItem";
import CheckItemApi from "../../services/checkItemApi";
import AddCheckItem from "./AddCheckItem";
import {
  getAllCheckItems,
  addACheckItem,
  deleteASingleCheckItem,
} from "../../store/checkItemSlice";

const Checkitem = ({ checklistId, cardId }) => {
  const [error, setError] = useState("");

  const checkItem = useSelector((store) => {
    return store.checkItem.checkitems[checklistId];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getCheckitems(checklistId);
  }, []);

  function getCheckitems(checkListid) {
    CheckItemApi.getCheckItemsOnACheckList(checkListid)
      .then((res) => {
        const checkItemData = {
          checklistId: checklistId,
          checkitems: res.data,
        };
        dispatch(getAllCheckItems(checkItemData));
      })
      .catch((err) => setError(err.message));
  }

  function handleInputElement(event) {
    if (event.key === "Enter") {
      createCheckItemInAChecklist(event.target.value, checklistId);
    }
  }

  function createCheckItemInAChecklist(nameOfCheckItem, checkListId) {
    CheckItemApi.createCheckItemOnACheckList(nameOfCheckItem, checkListId)
      .then((res) => {
        const checkItemData = {
          checklistId: checklistId,
          checkitems: res.data,
        };
        dispatch(addACheckItem(checkItemData));
      })
      .catch((err) => setError(err.message));
  }

  function deleteACheckItem(checkItemId, checklistId) {
    dispatch(
      deleteASingleCheckItem({
        checklistId: checklistId,
        checkitems: checkItem.filter((data) => data.id !== checkItemId),
      })
    );

    CheckItemApi.deleteCheckItemFromACheckList(checkItemId, checklistId).catch(
      (err) => setError(err.message)
    );
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {checkItem &&
        checkItem.map((list) => (
          <SingleCheckItem
            key={list.id}
            name={list.name}
            deleteACheckItem={deleteACheckItem}
            id={list.id}
            checklistId={checklistId}
            cardId={cardId}
            state={list.state}
          />
        ))}
      <AddCheckItem handleInput={handleInputElement} />
    </>
  );
};

export default Checkitem;

import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import List from "./List";
import AddList from "./AddList";
import ListApi from "../../services/listApis";
import {
  getAllListData,
  createANewList,
  deleteAList,
} from "../../store/listSlice";

const initialState = {
  inputVisible: false,
  isLoading: false,
  error: "",
};

const ACTION = {
  START: "startLoading",
  STOP: "stopLoading",
  INPUT_VISIBLE: "setInputVisible",
  INPUT_INVISIBLE: "setInputInvisible",
  FAILURE: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.START: {
      return { ...state, isLoading: true };
    }
    case ACTION.STOP: {
      return { ...state, isLoading: false };
    }
    case ACTION.INPUT_VISIBLE: {
      return { ...state, inputVisible: true };
    }
    case ACTION.INPUT_INVISIBLE: {
      return { ...state, inputVisible: false };
    }
    case ACTION.FAILURE: {
      return { ...state, isLoading: false, error: action.payload.data };
    }
    default:
      return state;
  }
}

const Lists = () => {
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputVisible, isLoading, error } = state;

  const dispatchReducer = useDispatch();
  const { lists } = useSelector((store) => store.list);

  useEffect(() => {
    dispatch({ type: ACTION.START });
    ListApi.getAllLists(id)
      .then((res) => {
        dispatch({ type: ACTION.STOP });
        dispatchReducer(getAllListData(res.data));
      })
      .catch((err) => {
        dispatch({ type: ACTION.FAILURE, payload: { data: err.message } });
      });
  }, []);

  function createNewList(listName, boardId) {
    ListApi.createNewList(listName, boardId)
      .then((res) => dispatchReducer(createANewList(res.data)))
      .catch((err) =>
        dispatch({ type: ACTION.FAILURE, payload: { data: err.message } })
      );
  }

  function handleInputElement(event) {
    if (event.key === "Enter") {
      createNewList(event.target.value, id);
      dispatch({ type: ACTION.INPUT_INVISIBLE });
    }
  }

  function inputVisibility() {
    dispatch({ type: ACTION.INPUT_VISIBLE });
  }

  function deleteOneList(listId) {
    dispatchReducer(deleteAList(listId));

    ListApi.deleteOneList(listId).catch((err) =>
      dispatch({ type: ACTION.FAILURE, payload: { data: err.message } })
    );
  }

  return (
    <>
      {isLoading && <CircularProgress />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AddList
        listInput={inputVisibility}
        inputValue={inputVisible}
        handleInput={handleInputElement}
      />
      {lists.map((data) => (
        <List
          key={data.id}
          name={data && data.name}
          deleteOneList={deleteOneList}
          id={data.id}
        />
      ))}
    </>
  );
};

export default Lists;

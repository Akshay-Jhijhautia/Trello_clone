import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import BoardApi from "../../services/boardApis";

import AddBoard from "./AddBoard";
import Board from "./Board";
import { getAllBoards, createBoard } from "../../store/boardSlice";

const initialState = {
  loading: false,
  inputVisible: false,
  error: "",
};

const ACTION = {
  START: "loading",
  INPUT_VISIBLE: "inputVisible",
  INPUT_INVISIBLE: "inputInvisible",
  LOADING: "setLoadingfalse",
  FAILURE: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.START: {
      return { ...state, loading: true };
    }
    case ACTION.INPUT_VISIBLE: {
      return { ...state, inputVisible: true };
    }
    case ACTION.INPUT_INVISIBLE: {
      return { ...state, inputVisible: false };
    }
    case ACTION.LOADING: {
      return { ...state, loading: false };
    }
    case ACTION.FAILURE: {
      return { ...state, error: action.payload.data, loading: false };
    }
    default:
      return state;
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, inputVisible, error } = state;

  const dispatchReducer = useDispatch();
  const { board } = useSelector((store) => store.board);

  useEffect(() => {
    dispatch({ type: ACTION.START });
    BoardApi.getAllBoards()
      .then((res) => {
        dispatch({ type: ACTION.LOADING });
        dispatchReducer(getAllBoards(res.data));
      })
      .catch((err) => {
        dispatch({ type: ACTION.FAILURE, payload: { data: err.message } });
      });
  }, []);

  function createNewBoard(boardName) {
    BoardApi.createBoard(boardName)
      .then((res) => {
        dispatchReducer(createBoard(res.data));
      })
      .catch((err) => {
        dispatch({ type: ACTION.FAILURE, payload: { data: err.message } });
      });
  }

  function handleInputElement(event) {
    if (event.key === "Enter") {
      createNewBoard(event.target.value);
      dispatch({ type: ACTION.INPUT_INVISIBLE });
    }
  }

  const inputVisibility = () => {
    dispatch({ type: ACTION.INPUT_VISIBLE });
  };

  return (
    <>
      {loading && <CircularProgress />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AddBoard
        boardInput={inputVisibility}
        inputValue={inputVisible}
        handleInput={handleInputElement}
      />
      {board.map((data, index) => (
        <Board
          key={index}
          id={data.id}
          img={data.prefs?.backgroundImage}
          name={data.name}
        />
      ))}
    </>
  );
};

export default Home;

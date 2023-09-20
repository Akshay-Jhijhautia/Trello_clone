import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SingleCard from "./SingleCard";
import CardApi from "../../services/cardApis";
import AddCard from "./AddCard";
import {
  getAllCArds,
  createANewCard,
  deleteASingleCard,
} from "../../store/cardSlice";

const Cards = ({ listId }) => {
  const [error, setError] = useState("");

  const cards = useSelector((store) => {
    return store.card.cards[listId];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getCards(listId);
  }, []);

  function getCards(listId) {
    CardApi.getAllCardsInAList(listId)
      .then((res) => {
        const cardsData = {
          listId: listId,
          cards: res.data,
        };
        dispatch(getAllCArds(cardsData));
      })
      .catch((err) => setError(err.message));
  }

  function deleteACardFromTheList(cardId) {
    dispatch(
      deleteASingleCard({
        listId: listId,
        card: cards.filter((card) => card.id !== cardId),
      })
    );

    CardApi.deleteOneCard(cardId).catch((err) => setError(err.message));
  }

  function createCardInAList(nameOfCard, listId) {
    CardApi.createACardInAList(nameOfCard, listId)
      .then((res) =>
        dispatch(createANewCard({ listId: listId, card: res.data }))
      )
      .catch((err) => setError(err.message));
  }

  function handleInputElement(event) {
    if (event.key === "Enter") {
      createCardInAList(event.target.value, listId);
    }
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {cards &&
        cards.map((cardData, index) => (
          <SingleCard
            key={index}
            name={cardData.name}
            deleteACardFromTheList={deleteACardFromTheList}
            id={cardData.id}
          />
        ))}
      <AddCard handleInput={handleInputElement} />
    </>
  );
};

export default Cards;

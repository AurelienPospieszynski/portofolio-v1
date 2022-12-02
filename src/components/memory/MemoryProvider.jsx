import { createContext, useContext, useState } from "react";
import { CARD_STATE, getInitialMemory } from "../../lib/memory";

const MemoryContext = createContext();

export const useMemory = () => {
  const context = useContext(MemoryContext);

  if (!context) {
    throw new Error("useMemory must be used inside the ContextProvider");
  }
  return context;
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCounter, setTryCounter] = useState(0);

  const onReturnedCard = (returnedCard) => {
    console.log(returnedCard);

    /* On ne fait rien quand la carte est retourne */
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }
    /* Recupere toutes les cartes deja retournees */
    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    /* Si le user a deja retourne 2 cartes, ou si le user clique rapidement 2x sur la meme carte*/
    if (returnedCards.length === 2 || returnedCards.includes(returnedCard)) {
      return;
    }

    setCards((current) =>
      current.map((c) => {
        if (returnedCard.id === c.id) {
          c.state = CARD_STATE.RETURNED;
        }
        return c;
      })
    );
  };
  const reset = () => {
    console.log("je reset");
    setCards(getInitialMemory());
  };
  const values = { cards, tryCounter, onReturnedCard, reset };

  return (
    <MemoryContext.Provider value={values}> {children} </MemoryContext.Provider>
  );
};

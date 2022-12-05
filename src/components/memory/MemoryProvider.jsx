import { createContext, useContext, useState, useMemo } from "react";
import {
  CARD_STATE,
  getInitialMemory,
  isMemoryFinished,
  isPairCards,
} from "../../lib/memory";

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

  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

  const onReturnedCard = (returnedCard) => {
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

    if (returnedCards.length === 0) {
      return;
    }
    returnedCards.push(returnedCard);
    computeReturnedCards(returnedCards);
  };

  const computeReturnedCards = (returnedCards) => {
    const isPair = isPairCards(returnedCards[0], returnedCards[1]);

    setTimeout(
      () => {
        setTryCounter((counter) => counter + 1);
        setCards((current) => {
          return current.map((card) => {
            if (
              card.state === CARD_STATE.RETURNED &&
              returnedCards.includes(card)
            ) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          });
        });
      },
      isPair ? 100 : 1000
    );
  };

  const reset = () => {
    setCards(getInitialMemory());
    setTryCounter(0);
  };
  const values = { cards, tryCounter, onReturnedCard, reset, isFinish };

  return (
    <MemoryContext.Provider value={values}> {children} </MemoryContext.Provider>
  );
};

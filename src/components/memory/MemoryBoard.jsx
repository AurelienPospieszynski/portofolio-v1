import { Typography } from "../atom/Typography";
import { useMemory, onReturnedCards } from "./MemoryProvider";
import { MemoryCard } from "./MemoryCard";

export const MemoryBoard = () => {
  const { cards, onReturnedCard } = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 w-max">
      {/* Memory Game - Exercise */}

      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          onClick={() => onReturnedCard(card)}
          card={card}
        >
          {card.emoji}
        </MemoryCard>
      ))}
    </div>
  );
};

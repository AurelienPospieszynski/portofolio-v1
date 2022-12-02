import { Button } from "../atom/Button";
import { SectionWrapper } from "../atom/SectionWrapper";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider, useMemory } from "./MemoryProvider";

export const MemorySection = () => {
  return (
    <SectionWrapper title="How fast can you do it ? Show me your talent 👀">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <p>Score :</p>
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

const ResetButton = () => {
  const { reset } = useMemory();
  return <Button onClick={reset}>Reset your game 🔁</Button>;
};

import { Button } from "../atom/Button";
import { SectionWrapper } from "../atom/SectionWrapper";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider } from "./MemoryProvider";

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're bored ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <p>Score :</p>
            <MemoryBoard />
            <Button>Reset your game 🔁</Button>
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

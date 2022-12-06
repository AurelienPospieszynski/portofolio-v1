import { useRef, useEffect } from "react";
import { Button } from "../atom/Button";
import { DrawCanvas } from "./DrawCanvas";
import { DrawControl } from "./DrawControl";

const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 4;

// Draw exercise
export const Draw = () => {
  const canvas = useRef(null);
  const canvasConfig = useRef({ color: DEFAULT_COLOR, size: DEFAULT_SIZE });

  useEffect(() => {
    updateCanva();
  }, []);

  const updateCanva = () => {
    const context = canvas.current.getContext("2d");
    if (!context) return;

    context.strokeStyle = canvasConfig.current.color;
    context.lineWidth = canvasConfig.current.size;
  };
  return (
    <div className="flex flex-col gap-8">
      <DrawCanvas canvas={canvas} />
      <DrawControl
        defaultColor={DEFAULT_COLOR}
        defaultSize={DEFAULT_SIZE}
        onColorChange={(color) => {
          canvasConfig.current.color = color;
          updateCanva();
        }}
        onSizeChange={(size) => {
          canvasConfig.current.size = size;
          updateCanva();
        }}
      />
      <div className="flex gap-4 m-auto">
        <Button
          onClick={() => {
            canvas.current
              .getContext("2d")
              .clearRect(0, 0, canvas.current.width, canvas.current.height);
          }}
        >
          Reset 🔁
        </Button>
        <Button
          onClick={() => {
            const data = canvas.current.toDataURL();
            const link = document.createElement("a");
            link.download = "image.png";
            link.href = data;
            link.click();
          }}
        >
          Save ✅
        </Button>
      </div>
    </div>
  );
};

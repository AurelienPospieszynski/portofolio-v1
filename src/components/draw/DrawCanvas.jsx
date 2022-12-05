import { useEffect, useRef } from "react";
import { getCoordinates } from "../../lib/canvas";

export const DrawCanvas = ({ canvas }) => {
  const isDrawing = useRef(false);
  /* permet de tracer les lignes, en sauvegardant les coords du point precedent */
  const lastCoordinate = useRef(null);

  const startDrawing = (event) => {
    isDrawing.current = true;
    lastCoordinate.current = getCoordinates(event, canvas.current);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const draw = (event) => {
    /* Simple return car on ne veut rien faire si le user ne dessine pas */
    if (!isDrawing.current) return;

    const context = canvas.current?.getContext("2d");

    const coordinate = getCoordinates(event, canvas.current);

    if (!context || !coordinate) return;

    if (lastCoordinate.current) {
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      context.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
      context.lineTo(coordinate.x, coordinate.y);
      context.stroke();
    }

    lastCoordinate.current = coordinate;
  };

  /* Cleanup function s'effectue avec la fonction qui est directement dans le useEffect */
  useEffect(() => {
    const handleMouseUp = () => {
      stopDrawing();
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="max-w-[90vw] overflow-hidden">
      <canvas
        onMouseDown={startDrawing}
        onMouseMove={draw}
        width={560}
        height={315}
        ref={canvas}
        className="m-auto bg-white rounded-md shadow-md"
      />
    </div>
  );
};

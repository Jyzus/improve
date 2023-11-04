import { Button } from "@nextui-org/react";
import { Stats } from "./Stats";

export const RandomMaths = () => {
  const { gameState, startGame, problems } = Stats();
  console.log(problems);
  return (
    <div className="bg-principal flex-center-center">
      {/* Presentation */}
      {gameState == "waiting" && (
        <div className="max-w-2xl">
          <h1 className="text-center font-bold text-2xl">Random Maths</h1>
          <p className="text-center">
            Realiza todas las sumas que puedas antes de que el tiempo se acabe.
            La dificultad se mantendrá, pero el tiempo disminuirá a medida que
            la partida avance.
          </p>

          <Button color="primary" className="w-full mt-4" onClick={startGame}>
            Iniciar Juego
          </Button>
        </div>
      )}

      {/* Game */}
      {gameState == "started" && (
        <div className="bg-red-100">
          <div>Este es el progress bar</div>
          <div className="flex-center-center gap-8 bg-red-300">
            <div className="w-24 h-24 rounded-md shadow-md bg-white flex-center-center p-4">
              <p className="text-black font-bold text-4xl">12</p>
            </div>
            <p className="text-white text-4xl font-black">+</p>
            <div className="w-24 h-24 rounded-md shadow-md bg-white flex-center-center p-4">
              <p className="text-black font-bold text-4xl">16</p>
            </div>
            <p className="text-white text-4xl font-black">=</p>
            <div className="w-24 h-24 rounded-md shadow-md bg-white flex-center-center p-4">
              <p className="text-black font-bold text-4xl">28</p>
            </div>
          </div>
          <div>score</div>
        </div>
      )}
    </div>
  );
};

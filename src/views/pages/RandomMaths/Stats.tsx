import { useState } from "react";
import { RandomMaths } from "./RandomMaths";
import { Chance } from "chance";

const chance = new Chance();

interface RandomMaths {
  gameState: "waiting" | "starting" | "started" | "finished";
  score: number;
  level: number;
  time: number;
  problems: {
    firstNumber: number;
    secondNumber: number;
    result: number;
  }[];
}

type operations = {
  firstNumber: number;
  secondNumber: number;
  result: number;
}[];

const mathGenerator = (amount = 5) => {
  let i = 0;
  const operations: operations = [];
  while (i < amount) {
    const a = chance.integer({ min: -10, max: 10 });
    const b = chance.integer({ min: -10, max: 10 });

    const result = a + b;
    const operation = {
      firstNumber: a,
      secondNumber: b,
      result,
    };

    operations.push(operation);
    // operations = [...operations, { firstNumber: a, secondNumber: b, result }];

    i++;
  }

  return operations;
};

export const Stats = () => {
  const [stats, setStats] = useState<RandomMaths>({
    gameState: "waiting",
    score: 0,
    level: 1,
    time: 12,
    problems: [],
  });

  const startGame = () => {
    setStats({ ...stats, gameState: "started", problems: mathGenerator() });
  };

  return { startGame, gameState: stats.gameState, problems: stats.problems };
};

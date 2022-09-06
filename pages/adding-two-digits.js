import { useEffect, useState } from "react";
import generateNumber from "../utils/generateNumber";
import Game from "../components/game";

export default function AddingBy1() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [expectedAnswer, setExpectedAnswer] = useState();

  const loadQuestion = () => {
    setNumber1(generateNumber(99, 10));
    setNumber2(generateNumber(number1, 10));
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  useEffect(() => {
    setNumber2(generateNumber(number1, 10));
  }, [number1]);

  useEffect(() => {
    setExpectedAnswer(number1 + number2);
  }, [number1, number2]);

  return (
    <Game
      number1={number1}
      number2={number2}
      expectedAnswer={expectedAnswer}
      loadQuestion={loadQuestion}
      operator="+"
    />
  );
}

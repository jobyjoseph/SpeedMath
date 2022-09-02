import { useEffect, useState } from "react";

import * as styles from "../styles/play.module.scss";

const generateNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Play() {
  const [answer, setAnswer] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [answerState, setAnswerState] = useState("default");
  const [questionStatus, setQuestionStatus] = useState("inprogress");

  useEffect(() => {
    setNumber1(generateNumber(20, 10));
    setNumber2(generateNumber(0, 9));
  }, []);

  const handleKeyPress = (key) => {
    if (key === "delete" && questionStatus === "inprogress") {
      setAnswer(answer.slice(0, -1));
      setAnswerState("default");
      return;
    }

    if (key === "submit" && questionStatus === "inprogress") {
      if (number1 + number2 == answer) {
        setAnswerState("right");
        setQuestionStatus("done");
      } else {
        setAnswerState("wrong");
      }
      return;
    } else if (key === "submit" && questionStatus === "done") {
      setNumber1(generateNumber(20, 10));
      setNumber2(generateNumber(0, 9));
      setAnswer("");
      setAnswerState("default");
      setQuestionStatus("inprogress");
      return;
    }

    if (answer.length < 3 && questionStatus === "inprogress") {
      setAnswer(answer + key);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <div className={styles.numberContainer}>
          <div className={styles.firstNumber}>{number1}</div>
          <div className={styles.secondNumber}>{number2}</div>
        </div>
        <div className={styles.operator}>+</div>
      </div>
      <div className={`${styles.answerContainer} ${styles[answerState]}`}>
        {answer}
      </div>
      <div className={styles.keypadContainer}>
        <div className={styles.keypad}>
          <div onClick={() => handleKeyPress(1)}>1</div>
          <div onClick={() => handleKeyPress(2)}>2</div>
          <div onClick={() => handleKeyPress(3)}>3</div>
          <div onClick={() => handleKeyPress(4)}>4</div>
          <div onClick={() => handleKeyPress(5)}>5</div>
          <div onClick={() => handleKeyPress(6)}>6</div>
          <div onClick={() => handleKeyPress(7)}>7</div>
          <div onClick={() => handleKeyPress(8)}>8</div>
          <div onClick={() => handleKeyPress(9)}>9</div>
          <div onClick={() => handleKeyPress("delete")}>&lt;</div>
          <div onClick={() => handleKeyPress(0)}>0</div>
          <div onClick={() => handleKeyPress("submit")}>
            {questionStatus == "inprogress" ? <>&#10003;</> : <>Next</>}
          </div>
        </div>
      </div>
    </div>
  );
}

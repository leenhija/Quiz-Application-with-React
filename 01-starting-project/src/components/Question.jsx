import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions";
export default function Question({ index, onSkip, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    highlightedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.highlightedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectAnswer(answer) {
    setAnswer({
      highlightedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        highlightedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.highlightedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.highlightedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={answer.highlightedAnswer==='' ? onSkip : null}
        mode={answerState}
        key={timer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selected={answer.highlightedAnswer}
        selectedAnswer={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

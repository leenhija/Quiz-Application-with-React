import { useCallback, useEffect, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summery";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQustionIndex =userAnswers.length;
  const quizCompleted = activeQustionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    

  },
  []);
  const handleSkipQuiz = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizCompleted) {
    return (
    <Summary userAnswers={userAnswers}/>
    );
  }


  return (
    <div id="quiz">
        <Question
        key={activeQustionIndex}
        index={activeQustionIndex}
        onSkip={handleSkipQuiz}
        onSelectAnswer={handleSelectAnswer}
        />
 
    </div>
  );
}

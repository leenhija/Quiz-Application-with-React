import QuizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from '../questions'
export default function Summary({userAnswers}){
    const skippedanswers=userAnswers.filter((answer)=>answer===null);
    const correctAnswers=userAnswers.filter((answer , index)=>{
        answer===QUESTIONS[index].answers[0]
    })
    const skippedanswersShare=Math.round((skippedanswers.length /userAnswers.length)*100);
    const correctAnswersShare=Math.round((correctAnswers.length /userAnswers.length)*100);
    const WrongAnswersShare=100-skippedanswersShare-correctAnswersShare;
    return(
    <div id="summary">
    <img src={QuizCompletedImg} alt="trophy icon" />
    <h2>Quiz Completed!</h2>
    <div id="summary-stats">
        <p>
            <span className="number">{skippedanswersShare}%</span>
            <span className="text">Skipped</span>
        </p>
        <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">Answered Correctly </span>
        </p>
        <p>
            <span className="number">{WrongAnswersShare}%</span>
            <span className="text">Answered inCorrectly</span>
        </p>
    </div>
    <ol>
      {
        userAnswers.map((answer , index)=>{
            let cssClass='user-answer';
            if(answer == null){
                cssClass+= ' skipped'
            }else if(answer == QUESTIONS[index].answers[0]){
                cssClass+=' correct'
            }else{
                cssClass+=' wrong';
            }
            return(
                <li key={index}>
                    <h3>{index}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>
            )
        })
      }
    </ol>
  </div>
  )

}
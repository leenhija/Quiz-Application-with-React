import { useRef } from "react";

export default function Answers({answers ,selected , selectedAnswer , onSelect}){
    const shuffledAnswers=useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return(
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            let cssClass='';
            const isSlected= answer==selected
            if(selectedAnswer=='answered' && isSlected){
                cssClass='selected';
            }
            if((selectedAnswer=='correct' || selectedAnswer=='wrong') && isSlected){
            cssClass=selectedAnswer;
            }
           return( 
           <li key={answer} className="answer">
              <button  className={cssClass} onClick={() => onSelect(answer)} disabled={selectedAnswer!==''}>
                {answer}
              </button>
            </li>)
          })}
        </ul>
    );
}
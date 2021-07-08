import React, { useState } from "react";
import "./EightBall.css";
import answers from "./answers"

const EightBall = () => {
    const genRandomAnswer = (arr) => arr[Math.floor(Math.random() * answers.length) + 1];
    const handleClick = () => {
        const { msg, color} = genRandomAnswer(answers);
        setAnswer(msg)
        setColor(color)
    }
    const restart = () =>{
        setAnswer("Think of a question")
        setColor("black")
    }
    const [answer, setAnswer] = useState("Think of a question");
    const [color, setColor] = useState("black");
    return(
        <React.Fragment>
        <div className="EightBall" onClick={handleClick} style={{ backgroundColor : color }}>         
          <p>{answer}</p>           
        </div>
        <button onClick={restart}>Restart</button>
        </React.Fragment>
    )
}

export default EightBall;
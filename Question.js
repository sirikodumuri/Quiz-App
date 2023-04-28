import {createContext, useState} from "react"
import { useContext } from "react";
import { myBasket } from "./App";

const myQuestions = 
[
    {
        "title": "what is the use of useState()?",
        "A":"To store the data temperarily",
        "B":"To store the data permanently",
        "C":"To connect with database",
        "D":"None of the above",
        "Answer": "A"
    },
    {
        "title": "what is 10+50?",
        "A":10,
        "B":-40,
        "C":50,
        "D":60,
        "Answer": "D"
    },
    {
        "title": "what is 4 * 2?",
        "A":100,
        "B":34,
        "C":12,
        "D":8,
        "Answer": "D"
    }
]

export const secondBasket = createContext();



function Question() 
{

    const { data, myScore, mySetScore } = useContext(myBasket);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answerChoosen, setAnswerChoosen] = useState("");

   
     function clickIt()
     {

        if(answerChoosen == myQuestions[currentQuestion].Answer)
        {
           mySetScore(myScore + 1)
        }

        setCurrentQuestion(currentQuestion+1)
     }

     function goToResults()
     {
       
        if(answerChoosen == myQuestions[currentQuestion].Answer)
        {
            mySetScore(myScore + 1)
        }

        
          data("result")
        
     }

  return (
    <div>
        <h3>Here are the quetions:</h3>

        <h2>Q:{myQuestions[currentQuestion].title}</h2>

        A:<button onClick={function()
        {
            setAnswerChoosen("A")
        }}>{myQuestions[currentQuestion].A}</button><br></br>

        B:<button onClick={function()
        {
            setAnswerChoosen("B")
        }}>{myQuestions[currentQuestion].B}</button><br></br>

        C:<button onClick={function()
        {
            setAnswerChoosen("C")
        }}>{myQuestions[currentQuestion].C}</button><br></br>

        D:<button onClick={function()
        {
            setAnswerChoosen("D")
        
        }}>{myQuestions[currentQuestion].D}</button><br></br>

       

        {
            (currentQuestion == myQuestions.length - 1)
            ?
            <button onClick={goToResults}>submit</button> 
            : 
            <button onClick={clickIt}>Next</button>
        }

    </div>
  )
}

export default Question
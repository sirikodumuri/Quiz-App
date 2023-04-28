
import {useState} from "react";
import HomePage from "./HomePage";
import Question from "./Question";
import Result from "./Result";
import {createContext} from "react"; 

export const myBasket = createContext();




function App() {

  const [currentData,setCurrentData] = useState("homepage");

  const [score, setScore] = useState(0)

  return (
    <div>
      <myBasket.Provider value={ {data : setCurrentData, myScore : score, mySetScore :setScore } }>
         { currentData == "homepage" && <HomePage/> }
         { currentData == "question" && <Question/> }
         { currentData == "result" && <Result/> }
      </myBasket.Provider>

    
    </div>
  );
}

export default App;

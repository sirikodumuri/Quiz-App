import { useContext } from "react"
import { myBasket } from "./App"

function Result() {

  const { myScore } = useContext(myBasket)

  return (
    <div>
        Your score is:- {myScore}
    </div>
  )
}

export default Result
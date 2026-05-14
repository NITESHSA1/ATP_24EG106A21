import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from '../store/CounterStore'

function Home() {
  let newCounter = useCounterStore(state => state.newCounter);
  let incrementCounter = useCounterStore(state => state.incrementCounter);
  let decrementCounter = useCounterStore(state => state.decrementCounter);
  const { counter, changeCounter } = useContext(counterContextObj)
  return (
    <div>
      <h1 className="text-4xl">Counter : {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5">Change</button>

      <h1 className="text-4xl">Counter : {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-red-300 p-5">Change</button>
      <button onClick={decrementCounter} className="bg-blue-300 p-5">Change</button>
    </div>
  )
}

export default Home
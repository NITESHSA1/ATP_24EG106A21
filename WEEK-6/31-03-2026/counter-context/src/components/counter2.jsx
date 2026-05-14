
// import { CounterContextObj } from "../context/ContextProvider"
import { useCounterStore } from "../store/CounterStore";

function Counter2() {
    let newCounter = useCounterStore(state => state.newCounter);
    let incrementCounter = useCounterStore(state => state.incrementCounter);
    let decrementCounter = useCounterStore(state => state.decrementCounter);
    console.log("counter - 2")

    return (
        <div className="p-4 bg-amber-100">
            <h1 className="bg-amber-300 text-center font-bold">counter</h1>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h1 className="text-2xl">Counter : {newCounter}</h1>

                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={incrementCounter}>+</button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={decrementCounter}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter2
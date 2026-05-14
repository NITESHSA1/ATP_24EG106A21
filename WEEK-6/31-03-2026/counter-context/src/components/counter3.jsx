
// import { CounterContextObj } from "../context/ContextProvider"
import { useCounterStore } from "../store/CounterStore";

function Counter3() {
    let newCounter1 = useCounterStore(state => state.newCounter1);
    let incrementCounter1 = useCounterStore(state => state.incrementCounter1);
    let decrementCounter1 = useCounterStore(state => state.decrementCounter1);
    console.log("counter - 3")

    return (
        <div className="p-4 bg-amber-100">
            <h1 className="bg-amber-300 text-center font-bold">counter</h1>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h1 className="text-2xl">Counter : {newCounter1}</h1>

                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={incrementCounter1}>+</button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={decrementCounter1}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter3
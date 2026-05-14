import { createContext, useState } from "react";


export const CounterContextObj = createContext()
function ContextProvider({children}) {
    const [counter, setCounter] = useState(0)
    const changeCounterP = () => setCounter(counter + 1);
    const changeCounterM = () => setCounter(counter - 1);
    return (
        <CounterContextObj.Provider value={{counter, changeCounterP, changeCounterM}}>
            {children}
        </CounterContextObj.Provider>
    )
}

export default ContextProvider;
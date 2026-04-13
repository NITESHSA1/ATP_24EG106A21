import { createContext, useState } from "react";


export const counterContextObj = createContext()
function contextProvider({children}) {
    const [counter, setCounter] = useState(10)
    const changeCounter = () => setCounter(counter + 1);
    return (
        <counterContextObj.Provider value={{counter, changeCounter}}>
            {children}
        </counterContextObj.Provider>
    )
}

export default contextProvider;
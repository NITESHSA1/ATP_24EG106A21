import { create } from "zustand";

// create store
export const useCounterStore = create((set) => ({
    
    // state
    newCounter: 0,

    // functions to modify the state
    incrementCounter: () => set(state => ({ newCounter: state.newCounter + 1 })),
    decrementCounter: () => set(state => ({ newCounter: state.newCounter - 1 })),
    reset: () => set({ newCounter: 0 })
}))

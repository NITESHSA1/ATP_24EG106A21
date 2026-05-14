import { create } from "zustand";

// create store
export const useCounterStore = create((set) => ({

    // state
    newCounter: 0,
    newCounter1:100,
    user: {
        name : "",
        age : 0,
        email: "somethin"
    },
    changeEmail:() => set({...user, email:"fahhhh@"}),
    chnageNameAge:() => set({...user, name:"meow", age:67}),
    // functions to modify the state
    incrementCounter: () => set(state => ({ newCounter: state.newCounter + 1 })),
    decrementCounter: () => set(state => ({ newCounter: state.newCounter - 1 })),
    reset: () => set({ newCounter: 0 }),
    incrementCounter1: () => set(state => ({ newCounter1: state.newCounter1 + 1 })),
    decrementCounter1: () => set(state => ({ newCounter1: state.newCounter1 - 20 })),
    change500:() => set({newCounter:500})

}))

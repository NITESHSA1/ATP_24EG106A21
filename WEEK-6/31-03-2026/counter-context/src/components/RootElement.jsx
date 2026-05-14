import Counter1 from "./counter1"
import Counter2 from "./counter2"
import Counter3 from "./counter3"
import Counter4 from "./counter4"

function RootElement() {
    console.log("re-rendered!")
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-15 p-10 gap-10">
            <Counter1 />
            <Counter2 />
            <Counter3 />
            <Counter4 />
        </div>
    )
}

export default RootElement;
import { useLocation } from "react-router";

function Employee() {
    const { state } = useLocation()

  return (
    <div className="p-10 text-center text-3xl">
        <p className="text-green-500">{state.name}</p>
        <p>{state.email}</p>
        <p>{state.mobile}</p>
        <p>{state.designation}</p>
        <p>{state.companyName}</p>
    </div>
  )
}

export default Employee
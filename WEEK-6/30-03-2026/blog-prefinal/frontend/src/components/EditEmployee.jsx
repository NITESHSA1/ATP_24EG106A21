import { useEffect } from "react"
import { useForm, } from "react-hook-form"
import { useLocation, useNavigate } from "react-router"
import axios from 'axios'
function EditEmployee() {
    const { register, handleSubmit, setValue } = useForm()
    const { state } = useLocation()
    const navigate = useNavigate()
    const onsSave = async (modifiedEmp) => {
        modifiedEmp._id = state._id
        const res = await axios.put(`http://localhost:6767/emp/employee`, modifiedEmp)
        if (res.status === 201) {

            navigate("/ListOfEmployee");
        }

    }
    useEffect(() => {
        setValue("name", state.name)
        setValue("email", state.email)
        setValue("mobile", state.mobile)
        setValue("designation", state.designation)
        setValue("companyName", state.companyName)
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center text-gray-600">Edit Employee!</h1>
            {/* form */}
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onsSave)}>
                <input type="text" placeholder="enter name" {...register("name")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
                <input type="email" placeholder="enter email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" disabled />
                <input type="number" placeholder="enter mobile" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
                <input type="text" placeholder="enter designation" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
                <input type="text" placeholder="enter company name" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
                <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">Save</button>
            </form>
        </div>
    )
}

export default EditEmployee
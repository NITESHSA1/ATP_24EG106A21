import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CreateEmployee() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (newEmployee) => {
        try {
            setLoading(true);
            let res = await fetch("http://localhost:6767/emp/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployee)
            });

            if (res.status === 201) {
                navigate("/ListOfEmployee");
            } else {
                let errorRes = await res.json();
                console.log("error response is ", errorRes);
                throw new Error(errorRes.message || errorRes.error || "Submission Failed");
            }
        } catch (err) {
            console.log("err in catch", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
        <h1 className="text-5xl text-center text-gray-600">Create New Employee!</h1>
        {/* form */}
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="enter name" {...register("name")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
            <input type="email" placeholder="enter email" {...register("email")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
            <input type="number" placeholder="enter mobile" {...register("mobile")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
            <input type="text" placeholder="enter designation" {...register("designation")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
            <input type="text" placeholder="enter company name" {...register("companyName")} className="mb-3 border border-2 p-3 w-full rounded-2xl" />
            <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">Submit</button>
        </form>
    </div>
  )
}

export default CreateEmployee
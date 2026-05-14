import { useForm } from "react-hook-form"

function UserForm({ registerfunc }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handlesubmitbutton = (obj) => {
    registerfunc(obj)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handlesubmitbutton)} className="mb-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Add User</h2>
      {/* First Name */}
      <div className="mb-2">
        <label className="block font-bold">First Name</label>
        <input
          type="text"
          {...register("name", { required: "First name is required" })}
          className="border p-1 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      {/* Last Name */}
      <div className="mb-2">
        <label className="block font-bold">Last Name</label>
        <input
          type="text"
          {...register("lastname", { required: "Last name is required" })}
          className="border p-1 w-full"
        />
        {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
      </div>
      {/* Email */}
      <div className="mb-2">
        <label className="block font-bold">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border p-1 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      {/* Phone */}
      <div className="mb-2">
        <label className="block font-bold">Phone</label>
        <input
          type="text"
          {...register("phone", { required: "Phone is required" })}
          className="border p-1 w-full"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      {/* Address */}
      <div className="mb-2">
        <label className="block font-bold">Address</label>
        <input
          type="text"
          {...register("address", { required: "Address is required" })}
          className="border p-1 w-full"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>
      {/* Gender */}
      <div className="mb-2">
        <label className="block font-bold">Gender</label>
        <select {...register("gender")} className="border p-1 w-full">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        Add User
      </button>
    </form>
  )
}

export default UserForm

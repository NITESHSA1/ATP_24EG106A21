function UserTable({ users }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">First Name</th>
            <th className="border p-2 text-left">Last Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Phone</th>
            <th className="border p-2 text-left">Address</th>
            <th className="border p-2 text-left">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.lastname}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable

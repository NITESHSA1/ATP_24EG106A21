import { useState, useEffect } from 'react'

function Users({ onAdd }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-600">{user.phone}</p>
          <p className="text-sm text-gray-600">{user.company.name}</p>
          <button
            onClick={onAdd}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  )
}

export default Users

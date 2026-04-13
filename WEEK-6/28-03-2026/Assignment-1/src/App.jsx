import { useState } from 'react'
import Users from './components/Users'
import Usercount from './components/Usercount'

function App() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User Management</h1>
      <Usercount count={count} />
      <Users onAdd={handleAdd} />
    </div>
  )
}

export default App

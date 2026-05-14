import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmployee from './components/CreateEmployee'
import ListOfEmployee from './components/ListOfEmployee'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "CreateEmployee",
          element: <CreateEmployee />
        },
        {
          path: "ListOfEmployee",
          element: <ListOfEmployee />
        },
        {
          path: "*",
          element: <Navigate to="/" replace />
        },
        {
        path:"employee",
        element:<Employee/>
        },
        {
          path:"edit-emp",
          element:<EditEmployee />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
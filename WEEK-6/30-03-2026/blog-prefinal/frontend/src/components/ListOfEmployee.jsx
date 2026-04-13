import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router'
function ListOfEmployee() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate()

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj })
  }
  const deleteById = async (id) => {
    let res = await axios.delete(`http://localhost:6767/emp/employee/${id}`)
    if (res.status == 200) { getEmps(); }
  }
  async function getEmps() {
    let res = await fetch("http://localhost:6767/emp/employee");
    if (res.status === 200) {
      let resObj = await res.json();
      setEmps(resObj.payload);
    }
  }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List Of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex justify-around">
              <button onClick={() => gotoEmployee(empObj)} className="bg-green-500 rounded text-white p-2">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-amber-500 rounded text-white p-2">Edit</button>
              <button onClick={() => deleteById(empObj._id)} className="bg-red-500 rounded text-white p-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmployee;
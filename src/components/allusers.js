import React, { useEffect, useState } from 'react'
import { getUsers,deleteUser } from './Service/api'
import { Link } from 'react-router-dom'

const Allusers = () => {
 const styles={
    width:'40%',
    height:'50%',
    margin:'5px',
  }
const [users,setUsers]=useState([]);
useEffect(()=>
  {
  getAllUsers();
  },[])

const getAllUsers=async()=>{
  const response=await getUsers();
 
  setUsers(response.data);
}

const deleteUserData=async(id)=>{
  await deleteUser(id);
  getAllUsers();

}

  return (
    <div className="container " style={styles}>
      <h3 className="text-center">All users</h3>
   <table className=" table table-bordered my-4 table-success" >
  <thead className='table-dark'>
    <tr>
      <th scope="col">Key</th>
      <th scope="col" >Value</th>
      <th>Actions</th> 
    </tr>
  </thead>
  <tbody>
    {
      users.map((user)=>{
        return(<tr key={user.id}>
          <th scope="row">{user.key}</th>
          <td>{user.value}</td>
          <td><Link to={`editusers/${user.id}`}><button className='btn btn-sm btn-primary' >View</button></Link>
          <button className='btn btn-sm btn-danger mx-3' onClick={()=>{deleteUserData(user.id)}}>Delete</button></td>
          </tr>)
      })
    }
  </tbody>
</table>
  </div>
  )
}

export default Allusers
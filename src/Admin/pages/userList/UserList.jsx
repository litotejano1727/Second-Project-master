import React from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material';
import { UserRows } from './DummyUser';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function UserList() {
  const [data, setData] = useState(UserRows)
  const handleDelete = (id) =>{
    setData(data.filter(item=>item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User', width: 200, renderCell: (params)=>{
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt=""/>
            {params.row.username}
          </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 145,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/Admin/User/"+params.row.id}>
            <button className='userListEdit'>Edit</button>
          </Link>
            <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },

  ];
  
  
  return (
    <div className='userList'>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
import { DataGrid } from "@mui/x-data-grid"
import "./productList.css"
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProductRows } from "./DummyProduct";


function ProductList() {
    const [data, setData] = useState(ProductRows)

    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !== id))
      };

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'product', width: 200, renderCell: (params)=>{
            return (
              <div className='productListItem'>
                <img className='productListImg' src={params.row.img} alt=""/>
                {params.row.name}
              </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'price',
          headerName: 'Price',
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
              <Link to={"/Admin/Product/"+params.row.id}>
                <button className='productListEdit'>Edit</button>
              </Link>
                <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
              </>
            )
          }
        },
    
      ];
  return (
    <div className="productList">
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

export default ProductList

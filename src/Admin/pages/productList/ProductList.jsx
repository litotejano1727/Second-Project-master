import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function ProductList() {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/")
      .then(response => {
        setProductItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [productItems]);
  const handleEditFromServer = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`http://localhost:9000/products/${id}`, updatedProduct);
    if (response.status === 200) {
      setProductItems(productItems.map(item => item.id === id ? updatedProduct : item));
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};


  const handleDeleteFromServer = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/products/delete/${id}`);
      if (response.status === 200) {
        setProductItems(productItems.filter(item => item.id !== id));
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product', width: 300, renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.image} alt=""/>
            {params.row.name}
          </div>
        );
      }
    },
    { field: 'stocks', headerName: 'Stock', width: 100 },
    {
      field: 'price',
      headerName: 'Price',
      width: 145,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/Admin/Product/${params.row.id}`}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='productListDelete' onClick={() => handleDeleteFromServer(params.row.id)} />
          </>
        );
      }
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        disableSelectionOnClick
        rows={productItems}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;

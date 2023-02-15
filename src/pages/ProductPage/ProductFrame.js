import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './productframe.css'

function ProductFrame() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.shopify.com/s/files/1/0101/4864/2879/products/160-a_540x.jpg?v=1635836886"
          alt="green iguana"
          className='cardImg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seagate Barracuda
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Brand: Seagate
          Specifications: 1 TB
          Standard Model Number: ST1000DM010
          Bytes per Sector: 4,096
          Performance
          </Typography>
        </CardContent>
      </CardActionArea>
        <Typography >
          <div className='text'>
            <p className='title'>productItemsName</p>
            <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
            </div>
            <p className='price btn-price'>
              <h4>
                <span className='price-original'>
                ₱500000.00
                </span>
              </h4>
              <button >
                <i className='fa fa-plus'></i>
              </button>
            </p>
          </div>
        </Typography>
    </Card>
  )
}

export default ProductFrame
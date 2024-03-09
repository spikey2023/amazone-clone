import { COLORS } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}: {product:any}) => {
  return (
    <Box 
        sx={{
            backgroundColor: COLORS.white, 
            width: 225, 
            height: 450, 
            margin: "0.5rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between"
            }}
    >
        <Image 
            alt={product.title} 
            src={product.image}
            width={200}
            height={250}  
        />
        <Typography 
            variant='h2' 
            sx={{
                fontWeight:500,}}>
            {product.title.substring(0,15)}... 
        </Typography>
        <Typography >
            {product.price}
        </Typography>
    </Box>
  )
}

export default ProductCard
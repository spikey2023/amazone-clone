import { Box } from '@mui/material'
import React from 'react'

const ProductCard = ({product}: {product:any}) => {
  return (
    <Box>{product.title} {product.price}</Box>
  )
}

export default ProductCard
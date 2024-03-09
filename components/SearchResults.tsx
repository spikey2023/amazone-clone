import { Box } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types/supabase'

const SearchResults = ({products }: {products: Product[] }) => {
    return (
    <Box 
      sx={{
        display:"flex",
        justiyfContent:"space-between", 
        margin:"2rem 0", 
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return <ProductCard product={product} key={product.id}/>
      })}
    </Box>
  )
}

export default SearchResults
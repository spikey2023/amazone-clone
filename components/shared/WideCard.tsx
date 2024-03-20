import { COLORS } from '@/styles/colors'
import { Product } from '@/types/supabase'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WideCard = ({products}:{ products : Product[]}) => {
  return (
    <Box 
        sx={{
            backgroundColor : COLORS.white, 
            width: "1150px", 
            height:"200px" 
        }}
    >
        {products.map((product) => {
            return <Link key={product.id} href={`/product/${product.id}`}>
                        <Image src={product.image} alt={product.title} width={125} height={150}  />
                    </Link>
        })}
        <Typography></Typography>
    </Box>
  )
}

export default WideCard
import { Product } from '@/types/supabase'
import { Box, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductDetails = ({product}:{product:any}) => {

  return (
    <Box>
        {product.map((prod : any)=> {
                return (
                    <Box 
                        key={prod.id} 
                        sx={{display:"flex", 
                        justifyContent:"space-between",
                        padding: "3rem 0",
                        }}
                    >
                        <Image 
                            alt={prod.title} 
                            src={prod.image} 
                            key={prod.id}
                            height={500}
                            width={400} 
                        />
                        <Box>
                            <Typography variant='h1'>{prod.title}</Typography>
                            <Rating />
                        </Box>
                        <Box> 
                            <Image alt="prime-logo" src="/prime-logo.png" height={30} width={50}/>
                        </Box>
                     </Box>
                     )
            })}
            
    </Box>
  )
}

export default ProductDetails
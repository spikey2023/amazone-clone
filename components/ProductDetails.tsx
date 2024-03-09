import { Product } from '@/types/supabase'
import { Box, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CustomHr from './shared/CustomHr'
import { COLORS } from '@/styles/colors'
import ProductLinkText from './shared/ProductLinkText'

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
                            height={600}
                            width={500}
                            style={{marginRight:"8rem"}} 
                        />
                        <Box>
                            <Typography variant='h1'>{prod.title}</Typography>
                            <Rating />
                            <CustomHr />
                            <Typography variant='h2' sx={{fontSize:"1.5rem", fontWeight: 400}}> ${prod.price}</Typography>
                            <ProductLinkText style={{margin: "1rem 0"}}> FREE Returns</ProductLinkText>
                            <Typography sx={{fontSize: "0.75rem"}}>
                                Availbale at a lower price from other sellers that may not offer free Prime shipping.
                            </Typography>
                            <CustomHr />
                            <Typography sx={{fontWeight:700}}>
                                Description
                            </Typography>
                            <Typography>{prod.description}</Typography>
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
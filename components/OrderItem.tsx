import { Product } from '@/types/supabase'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const OrderItem = ({items, date, totalPrice }:{items:Product[];  date: any, totalPrice: number}) => {

    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day= date.slice(8,10)
  return (
    
    <Box sx={{display:"flex", justifyContent: "space-between"}}>
        <Box sx={{display:"flex"}}>
        <Box sx={{display: "flex", flexWrap: "wrap", width:115 }}>
            {items.slice(0,4).map((item)=>{
                return <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={50} 
                            height={65} 
                            key={item.title} 
                            style={{margin : "0.20rem"}}
                        />
            })}
        
        </Box>
        <Typography variant='h3'> 
            Order from {month}/{day}/{year}
            </Typography>

        </Box>
        <Typography> ${totalPrice.toFixed(2)} </Typography>
    </Box>
  )
}

export default OrderItem
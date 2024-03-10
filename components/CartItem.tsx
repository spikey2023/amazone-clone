import { COLORS } from '@/styles/colors'
import { Product } from '@/types/supabase'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductLinkText from './shared/ProductLinkText'
import CustomHr from './shared/CustomHr'
import { useAppDispatch } from '@/hooks/redux'
import { removeItem } from '@/store/cartSlice'

const CartItem = ({item}:{item: Product}) => {
    const dispatch = useAppDispatch()

  return (
    <Box>
    <Box sx={{display: "flex", justifyContent: "space-between"}}> 
        <Box sx={{display:"flex"}}>
        <Image alt={item.title} src={item.image}  width={175} height={200}/>
        <Box sx={{marginLeft:"2rem"}}>
            <Typography variant="h3"> 
                {item.title}
            </Typography>
            <Typography sx={{color: COLORS.red}}>
                Only {item.quantity} left in stock - order soon. 
            </Typography>
            <Typography>
                Eligible for FREE Shipping & FREE Returns
            </Typography>
            <Button
                onClick={()=>{dispatch(removeItem(item))}}>
                DELETE
                </Button>        
        </Box>
        </Box>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: 700}}>
                ${item.price}
        </Typography>
    </Box>
        <CustomHr />
    </Box>
  )
}

export default CartItem
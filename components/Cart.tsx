'use client'
import { Product, Products } from '@/types/supabase'
import { Box, Button, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { clearCart, getCart } from '@/store/cartSlice'

import React, { useState } from 'react'
import { COLORS } from '@/styles/colors'
import CustomHr from './shared/CustomHr'
import CartItem from './CartItem'
import ProductLinkText from './shared/ProductLinkText'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomButton from './shared/CustomButton'
import { useRouter } from 'next/navigation'
import Subtotal from './shared/Subtotal'

const Cart = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(getCart)
    const router  = useRouter()

    let total = 0

    cart.forEach((item: Product ) => (total = total + Math.round(item.price)))
 

  return (
    <Box sx={{display:"flex", justifyContent: "space-between", margin:"2rem",}}>
        <Box 
            sx={{
                backgroundColor: COLORS.white, 
                padding:"2rem", 
                width : "60vw",
            }}
            
            >
            <Box 
                sx={{
                    display:"flex", 
                    alignItems:"flex-end", 
                    justifyContent: "space-between",
                }}
            >
                <Typography variant='h1'>Shopping Cart</Typography>
                <Typography>Price</Typography>
            </Box>
            <CustomHr />
            {cart.map((item : Product)=> { 
            return <CartItem key={item.id} item={item} />
            })}
            <Subtotal items={cart.length} price={total} sx={{textAlign:"right"}} />
            <Button onClick={()=> {dispatch(clearCart())}}> Clear Cart</Button>
        </Box>
        <Box 
            sx={{
                backgroundColor: COLORS.white, 
                padding:"1rem", 
                display: "flex", 
                flexDirection: "column", 
                alignItems:"flex-start",
                width:"20vw",
                height:"25vh",
                }}>
                <Typography sx={{color: COLORS.green, display: "flex", alignItems: "center"}}>
                    <CheckCircleIcon/>
                     Your order qualifies for FREE Shipping</Typography>
                <Typography> Choose this option at checkout.
                    <ProductLinkText>See Details</ProductLinkText>
                    <Subtotal items={cart.length} price={total} />
                    <CustomButton 
                        onClick={()=>router.push("/checkout")
                    }>Proceed to Checkout
                    </CustomButton>
                </Typography>
            </Box>
    </Box>
  )
}


export default Cart
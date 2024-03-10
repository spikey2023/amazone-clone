'use client'
import { useAppSelector } from '@/hooks/redux'
import { getCart } from '@/store/cartSlice'
import { Product } from '@/types/supabase'
import { Box, Typography } from '@mui/material'
import React from 'react'

const CartPage = () => {
    const cart = useAppSelector(getCart)

  return (
    <Box>{cart.map((item : Product)=> { 
        return <Typography key={item.id}> {item.title} </Typography>
    })}</Box>
  )
}

export default CartPage
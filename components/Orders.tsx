'use client'

import { useAppSelector } from '@/hooks/redux'
import { getOrders } from '@/store/ordersSlice'
import { Box, Typography } from '@mui/material'
import React from 'react'
import OrderItem from './OrderItem'
import { COLORS } from '@/styles/colors'
import CustomHr from './shared/CustomHr'

const Orders = () => {
    const orders = useAppSelector(getOrders)
  return (
    <Box sx={{backgroundColor: COLORS.white , margin:"3rem 0", padding:"2rem"}}>
        <Box sx={{
            display:"flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
        }}>

        <Typography variant="h1" sx={{marginBottom: "1rem"}}>
            My Orders 
        </Typography>
        <Typography> Price </Typography>
        </Box>
        <CustomHr/>
        {orders.map((order: any)=>{
            return <OrderItem key={order.date} items={order.items} date={order.date} totalPrice={order.totalPrice}/>
        })}

    </Box>
  )
}

export default Orders
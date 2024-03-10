import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react'

const Subtotal = ({items, price, sx}:{items:number; price: number ; sx?:SxProps<Theme>}) => {
  return (
    <Typography variant='h3' sx={{margin:"1rem 0", ...sx}}> Subtotal ({items} items): ${price}</Typography>
  )
}

export default Subtotal
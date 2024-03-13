import { Box, SxProps, Typography } from '@mui/material'
import React from 'react'
import CustomHr from './CustomHr';

const CheckoutSection = ({number, title, children, sx}:{number: number; title: string; children:React.ReactNode; sx?:SxProps;}) => {
  return (
    <Box sx={{marginTop:"1rem"}}>
        <Box sx={{display:"flex", ...sx}}>
            <Box sx={{display:"flex"}}>
                <Typography variant ="h2" sx={{marginRight:"3rem"}}>{number}</Typography>
                <Typography variant ="h2" sx={{marginRight:"3rem"}}>{title}</Typography>   
            </Box>
            {children}   
        </Box>
            <CustomHr/> 
    </Box>
  )
}

export default CheckoutSection
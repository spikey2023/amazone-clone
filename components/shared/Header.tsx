import { COLORS } from '@/styles/colors'
import { Box } from '@mui/material'
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <Box sx={{
        backgroundColor: COLORS.darkBlue, 
        color: COLORS.white ,
        display: "flex",
        flexDirection: "column",
        }}
    >
        <Box sx={{ display: "flex"}}>
            <Logo />
        </Box>
    </Box>
  )
}

export default Header

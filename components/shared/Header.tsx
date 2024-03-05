import { COLORS } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <Box sx={{
        backgroundColor: COLORS.darkBlue, 
        color: COLORS.white ,
        display: "flex",
        flexDirection: "column",
        }}
    >
        <Box sx={{ 
            display: "flex",
            padding:"1rem",
            justifyContent:"space-between",
            alignItems : "center",
            }}
        >
            <Logo />
            <SearchBar />
            <Box sx={{display:"flex"}}>

                <HeaderLink href="/cart">
                    <Typography sx={{fontSize: "0.75rem"}} >Returns</Typography>
                    <Typography sx={{fontWeight: 700, fontSize:"1.1rem"}}>& Orders</Typography>
                </HeaderLink>
            </Box>
        </Box>
    </Box>
  )
}

export default Header

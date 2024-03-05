import { COLORS } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import HeaderLink from './HeaderLink'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            padding:"0.5rem",
            justifyContent:"space-between",
            alignItems : "center",
            }}
        >
            <Logo />
            <SearchBar />
            <Box sx={{display:"flex"}}>
                <HeaderLink href="/orders">
                    <Typography sx={{fontSize: "0.75rem"}} >Returns</Typography>
                    <Typography sx={{fontWeight: 700, fontSize:"1rem"}}>
                        & Orders
                        </Typography>
                </HeaderLink>
                <HeaderLink 
                    href="/cart" 
                    style={{display: "flex", alignItems : "flex-end"}}
                >
                    <ShoppingCartIcon fontSize='large'/>
                    <Typography sx={{fontWeight: 700, fontSize:"1rem"}}>
                    Cart
                    </Typography>
                </HeaderLink>
            </Box>
        </Box>
    </Box>
  )
}

export default Header

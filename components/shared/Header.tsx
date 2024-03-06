import { COLORS } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import HeaderLink from './HeaderLink'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const linkList = [
        "Medical Care",
        "Grocery",
        "Best Sellers", "Amazon Basics",
        "Prime", "Music", "New Releases",
        "Customer Service", "Today's Deals",
        "Registry", "Books","Amazon Home", "Pharmacy",
        "Gift Cards", "Fashion", "Luxury Stores",
    ]



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
        <Box 
            sx={{
                backgroundColor: COLORS.mediumBlue, 
                display: "flex", 
                alignItems: "center",
                justifyContent: "space-between",
                }}>
            <HeaderLink href="/all" style={{display:"flex", alignItems:"center", fontSize:"0.80rem"}}>
                {" "}
                <MenuIcon sx={{marginRight:"0.2rem", "&:hover": {color:COLORS.orange }}}/>
                <Typography sx={{fontSize:"0.70rem", fontWeight:900, "&:hover": {color:COLORS.orange }}}> All  </Typography>
            </HeaderLink>
            {linkList.map((link) => {
                return (
                <HeaderLink 
                    href={`/${link}`} 
                    key={link}>
                    <Typography 
                        sx={{
                            fontSize:"0.7rem",
                            "&:hover": {color:COLORS.orange }    
                        }}
                            > 
                            {link}  
                    </Typography>   
                </HeaderLink>
            )
        })}
        <HeaderLink href="shop-small-business">
            <Typography 
                sx={{
                     fontSize:"0.70rem", 
                     marginRight:"0.05rem", 
                     fontWeight:800, 
                     "&:hover": {color:COLORS.orange } ,
                     }}>
                Shop Small Business
            </Typography>
        </HeaderLink>
        </Box>
    </Box>
  )
}


export default Header

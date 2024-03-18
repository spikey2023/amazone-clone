import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'
import { COLORS } from '@/styles/colors'
import LockIcon from '@mui/icons-material/Lock';

const CheckoutHeader = ({items}: {items:number}) => {
    return (
        <Box>
            <Box sx={{ backgroundColor: COLORS.lightGray }}>
                <Container sx={{ display: "flex", justifyContent: "space-between", padding: "2rem 0 0.5rem 0" }}>
                    <Logo dark />
                    <Typography variant='h1' sx={{ fontSize: "1.5rem" }}>
                        Checkout (<span style={{color : COLORS.teal}}> {items}  items</span>)
                        </Typography>
                    <LockIcon />
                </Container>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default CheckoutHeader
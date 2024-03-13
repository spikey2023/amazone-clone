import { COLORS } from '@/styles/colors'
import { Box, Container, Typography, colors } from '@mui/material'
import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutSection from './shared/CheckoutSection'

const Checkout = () => {
    return (
        <Box>
            <CheckoutHeader />
            <Container>
                <CheckoutSection number={1} title="Shipping Address">
                    <Typography>Sherlock Holmes <br/>221 Baker St <br/>London <br/>United Kingodom</Typography>
                </CheckoutSection>
                <CheckoutSection number={2} title="Payment Method">
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography sx={{fontWeight: 700}}>Paying wtih Galleons</Typography>
                    <Typography>
                        <span style={{color: COLORS.teal}}>Billing Address </span>
                        Sherlock Holmes 221 Baker St London United Kingodom
                    </Typography>
                    </Box>
                </CheckoutSection>
            </Container>
        </Box>
    )
}

export default Checkout
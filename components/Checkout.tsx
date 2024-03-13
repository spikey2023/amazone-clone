/* eslint-disable react/no-unescaped-entities */
'use client'
import { COLORS } from '@/styles/colors'
import { Box, Container, Typography, colors } from '@mui/material'
import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutSection from './shared/CheckoutSection'
import CustomBox from './shared/CustomBox'
import CustomButton from './shared/CustomButton'
import ProductLinkText from './shared/ProductLinkText'

const Checkout = () => {
    return (
        <Box>
            <CheckoutHeader />
            <Container>
                <Box sx={{width:"50vw"}}>
                <CheckoutSection number={1} title="Shipping Address">
                    <Typography>Sherlock Holmes <br/>221 Baker St <br/>London <br/>United Kingodom</Typography>
                </CheckoutSection>
                <CheckoutSection number={2} title="Payment Method">
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography sx={{fontWeight: 700}}>Paying wtih Galleons</Typography>
                    <Typography>
                        <span style={{color: COLORS.teal}}>Billing Address: </span>
                        Sherlock Holmes 221 Baker st...
                    </Typography>
                    </Box>
                </CheckoutSection>
                <CheckoutSection number={3} title="Review items and shipping" sx={{flexDirection:"column"}}>
                    <CustomBox sx={{display:"flex"}}>
                        <CustomButton onClick={()=> console.log("clicked")} sx={{width:"12rem", marginRight:"1rem"}}>
                            Place Order</CustomButton>
                        <Box>
                        <Typography variant='h3' sx={{color:COLORS.red}}>Order total: $117.65</Typography>
                        <Typography>By plaing your order, you agree to Amazon's
                            <ProductLinkText> privacy notice</ProductLinkText>  and 
                            <ProductLinkText> conditions of use</ProductLinkText></Typography>
                        </Box>
                   </CustomBox>
                </CheckoutSection>
                </Box>
                
            </Container>
        </Box>
    )
}

export default Checkout
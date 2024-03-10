import { Product } from '@/types/supabase'
import { Box, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomHr from './shared/CustomHr'
import { COLORS } from '@/styles/colors'
import ProductLinkText from './shared/ProductLinkText'
import CustomBox from './shared/CustomBox'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomButton from './shared/CustomButton'

const ProductDetails = ({product}:{product:any[]}) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(1)
    //generating a random number and multiplying it by max
    const getRandomNumber = (max : number) => Math.floor(Math.random() * max)

    useEffect(()=>{
        setHours(getRandomNumber(9))
        setMinutes(getRandomNumber(59))
    },[])

  return (
    <Box>
        {product.map((prod : any)=> {
                return (
                    <Box 
                        key={prod.id} 
                        sx={{display:"flex", 
                        justifyContent:"space-between",
                        padding: "3rem 0",
                        }}
                    >
                        <Image 
                            alt={prod.title} 
                            src={prod.image} 
                            key={prod.id}
                            height={600}
                            width={500}
                            style={{marginRight:"5rem"}} 
                        />
                        <Box>
                            <Typography variant='h1'>{prod.title}</Typography>
                            <Rating />
                            <CustomHr />
                            <Typography variant='h2' sx={{fontSize:"1.5rem", fontWeight: 400, marginBottom: "1rem"}}> ${prod.price}</Typography>
                            <ProductLinkText> FREE Returns</ProductLinkText>
                            <Typography sx={{fontSize: "0.75rem", marginTop: "1rem"}}>
                                Availbale at a lower price from other sellers that may not offer free Prime shipping.
                            </Typography>
                            <CustomHr />
                            <Typography sx={{fontWeight:700}}>
                                Description
                            </Typography>
                            <Typography>{prod.description}</Typography>
                        </Box>
                        <Box sx={{marginLeft:"2rem"}}> 
                            <CustomBox sx={{width:"12.5rem"}}>
                                <Image alt="prime-logo" src="/prime-logo.png" height={30} width={50}/>
                                <Typography sx={{fontWeight:700}}>
                                    Enjoy fast, free delivery, exclusive deals, and award winning movies &
                                    TB shows with Prime.
                                </Typography>
                                <Typography>
                                    <span style={{color: COLORS.teal}}>Try Prime </span> 
                                    and start saving today with <span style={{fontWeight:700}}>fast, free delivery </span>
                                </Typography>
                            </CustomBox>
                            <CustomBox>
                                <Typography variant="h2"sx={{marginBottom:"0.5rem"}}>${prod.price}</Typography>
                                
                                <ProductLinkText>FREE Returns</ProductLinkText>
                                <Typography sx={{margin:"0.5rem 0"}}>
                                    <ProductLinkText>FREE Delivery</ProductLinkText> in 2 days
                                </Typography>
                                <Typography>Or fastest delivery <span style={{ fontWeight: 700 }}>tomorrow.</span>
                                </Typography>
                                <Typography>
                                    Order within <span style={{color:COLORS.green}}>{hours} hrs and {minutes} mins</span> 
                                </Typography>
                                <Typography sx={{display:'flex', alignItems:'center', margin:"0.25rem" }}> 
                                    <LocationOnIcon />
                                    <ProductLinkText> Deliver to New York 1011</ProductLinkText> 
                                </Typography>
                                <Typography sx={{color: COLORS.red}}>
                                    Only {prod.quantity} left in stock - order soon. 
                                </Typography>
                                <CustomButton>Add to Cart </CustomButton>
                                <CustomButton 
                                    sx={{
                                        backgroundColor: COLORS.orange,
                                        "&:hover": {
                                            backgroundColor:COLORS.darkOrange
                                        }
                                    }}
                                    >Buy Now </CustomButton>
                                
                            </CustomBox>
                        </Box>
                     </Box>
                     )
            })}
            
    </Box>
  )
}

export default ProductDetails
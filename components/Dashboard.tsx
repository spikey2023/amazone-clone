'use client'

import { Box } from '@mui/material'
import Image from 'next/image'
import React, { useEffect } from 'react'
import SmallCard from './shared/SmallCard'
import { heroData } from '@/utils/dashboardData'
import WideCard from './shared/WideCard'
import { useSupabase } from '@/hooks/useSupabase'

const Dashboard = () => {
    const { jewelry, getJewelry } = useSupabase()
    
    const categoryHeaders = [
        { heading: "Best Sellers in Clothing", products: jewelry },
        { heading: "Best Sellers in Electronics", products: jewelry },
        { heading: "Best Sellers in Jewelry", products: jewelry },
        { heading: "Best Sellers in Women's Clothing", products: jewelry },
    ]

    useEffect(()=> {
        getJewelry()
    }, [getJewelry])

  return (
    <Box sx={{display:'flex', flexDirection: "column"}}>
        <Image 
            src="/dashboard-1.jpg" 
            alt="gaming-controller-ad" 
            width={1150} 
            height={450} 
        />
        <Box sx={{display: "flex", justifyContent: "space-between", transform: "translateY(-15rem)"}}>
        {heroData.map((product)=>{
            return <SmallCard 
                     image={product.image} 
                     heading={product.heading} 
                     key={product.heading} 
                />
        })}
        </Box>
        <Box>
        {categoryHeaders.map((category)=> {
            return  <WideCard 
                        key={category.heading}
                        products={category.products}
                        
                        />
        })}
        </Box>
    </Box>
  )
}

export default Dashboard
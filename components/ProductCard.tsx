import { COLORS } from '@/styles/colors'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Ratings from './shared/Ratings'
import { useRouter } from 'next/navigation'
import { Product } from '@/types/supabase'

const ProductCard = ({ product }: { product: Product }) => {
    //initialize next router
    const router = useRouter()

    //onClick function to handle what happens when productCard is clicked
    const selectProduct = (e: any) => {
        e.preventDefault()
        //routes to product page
        router.push(`/product/${product.id}`)

    }
    return (
        <Box
            sx={{
                backgroundColor: COLORS.white,
                width: 225,
                height: 450,
                margin: "0.5rem",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}

            onClick={selectProduct}
        >
            <Image
                alt={product.title}
                src={product.image}
                width={225}
                height={250}
            />
            <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                <Typography
                    sx={{
                        fontWeight: 100,
                        fontSize: "1.15rem",
                        color: COLORS.black,
                    }}
                >
                    {product.title.substring(0, 18)}...
                </Typography>
                <Ratings rating={product.rating} />
                <Typography variant='h2' sx={{ fontWeight: 700, color: COLORS.black }} >
                    ${product.price}
                </Typography>
            </Link>
        </Box>
    )
}

export default ProductCard
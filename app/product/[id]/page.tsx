'use client'
import { useSupabase } from '@/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ProductPage = () => {
    const { singleProduct, getSingleProduct } = useSupabase()

    //useParams to get id of the product fromthe url
    const { id } = useParams()

    
    useEffect(()=> {
        getSingleProduct(Number(id))
    }, [getSingleProduct, id])

  return (
    <div>ProductPage </div>
  )
}

export default ProductPage
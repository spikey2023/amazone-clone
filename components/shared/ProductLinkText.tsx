import { COLORS } from '@/styles/colors'

import React from 'react'

const ProductLinkText = ({children, style}: {
    children:React.ReactNode
    style?:React.CSSProperties
    }) => {
  return (
    <span style={{color:COLORS.teal, ...style}}>{children}</span>
  )
}

export default ProductLinkText
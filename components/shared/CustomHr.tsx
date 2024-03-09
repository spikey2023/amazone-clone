import { COLORS } from '@/styles/colors'
import { Divider } from '@mui/material'
import React from 'react'

const CustomHr = () => {
  return (
    <Divider sx={{color: COLORS.lightGray, margin:"0.5rem 0"}}/>
  )
}

export default CustomHr
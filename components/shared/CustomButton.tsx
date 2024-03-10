import { COLORS } from '@/styles/colors'
import { Button, SxProps, Theme } from '@mui/material'
import React from 'react'

const CustomButton = ({children, sx}: {children: React.ReactNode; sx?: SxProps<Theme>
}) => {
  return (
    <Button 
      sx={{
        borderRadius: "1rem", 
        backgroundColor: COLORS.yellow, 
        width:"100%",
        color:COLORS.black,
        margin:"0.25rem 0",
        "&:hover": {
          backgroundColor: COLORS.darkYellow,
        },
        ...sx,
        
      }}
     > {children} 
    </Button>
  )
}

export default CustomButton
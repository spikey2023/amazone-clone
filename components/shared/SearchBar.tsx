import { IconButton, InputBase, Paper } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { COLORS } from '@/styles/colors';
import { useRouter } from 'next/router';


const SearchBar = () => {
  //dynamic product query function
  const [query, setQuery] = useState<string>("")
  const router = useRouter()

  const searchProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search/${query}/`)
  }

  return (
<Paper
      component="form"
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        width: "78vw" 
      }}
      onSubmit={searchProducts}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Amazon"
        inputProps={{ 'aria-label': 'search amazon' }}
      />
      <IconButton 
        type="button" 
        sx={{ 
            padding: '0.35rem', 
            backgroundColor:COLORS.paleOrange , 
            borderRadius:"0 0.25rem 0.25rem 0", 
          
            "&:hover":{
              backgroundColor:COLORS.orange,
            }
          }} 
        aria-label="search">
        <SearchIcon />
      </IconButton>


    </Paper>
  )
}

export default SearchBar
'use client';

import { useSupabase } from "@/hooks/useSupabase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";


const Home = () => {
  const { products, getProducts } = useSupabase()

  useEffect(() => {
    getProducts();
    // console.log(products);
  }, [getProducts]);


  return (
    <Box>
      <Typography variant="h1">Home</Typography>
    </Box>
  );
};

export default Home;


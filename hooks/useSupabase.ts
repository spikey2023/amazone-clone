import { supabase } from "@/lib/supabase/products"
import { useState } from "react"

export const useSupabase = () => {
    const [products, setProducts] = useState<any[]>([]); 
    
//get all products from supabase
    const getProducts = async () => {
        try {
            const { data , error } = await supabase.from('products').select('*');

        if (data){
            setProducts(data)    
        }

        } catch (error) {
            console.error('Error fetching products data', error)
        }

    }

    return { products, getProducts }
}
import { supabase } from "@/lib/supabase/products"
import { useState } from "react"

export const useSupabase = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([])
    const [singleProduct, setSingleProduct] = useState<any>(0)
    
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
    const getFilteredProducts = async (filter:string) => {
        const {data, error } = await supabase
        .from('products')
        .select("*")
        //filtering using supabase 
        .or(`title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`)
        // .ilike("title", `%${filter}%`)
        if (data) {
            setFilteredProducts(data);
        }
        if(error) console.log(error)
    }


//Single Product GET requeust from supabase
    const getSingleProduct = async (id:number) => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", id)
            if (data) {
                setSingleProduct(data);
            }
            if(error) console.log(error)
        }
    


    return { products, getProducts, filteredProducts, getFilteredProducts, singleProduct, getSingleProduct }
}
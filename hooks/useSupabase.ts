import { supabase } from "@/lib/supabase/products"
import { Product } from "@/types/supabase";
import { useState } from "react"

export const useSupabase = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [singleProduct, setSingleProduct] = useState<Product[]>([])
    const [jewelry, setJewelry] = useState <Product[]>([])
    
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
    
//get Product categories from supabase
const getJewelry = async () => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("category", "jewelry")
        
        if (data) {
            setSingleProduct(data);
        }
        if(error) console.log(error)
    }


    return { 
        products, 
        getProducts, 
        filteredProducts, 
        getFilteredProducts, 
        singleProduct, 
        getSingleProduct,
        jewelry,
        getJewelry,
    }   
}
import { supabase } from "@/lib/supabase/products"
import { Product } from "@/types/supabase";
import { useState } from "react"

export const useSupabase = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [singleProduct, setSingleProduct] = useState<Product[]>([])
    const [jewelry, setJewelry] = useState <Product[]>([])
    const [electronics, setElectronics] = useState<Product[]>([])
    const [womensClothing, setWomensClothing] = useState<Product[]>([])
    const [clothing, setClothing] = useState<Product[]>([])
    
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
    
//get Product jewelry categories from supabase
const getJewelry = async () => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("category", "jewelry")
        
        if (data) {
            setJewelry(data);
        }
        if(error) console.log(error)
    }

//get product electronics categories from supabase
const getElectronics = async () => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("category", "electronics")
        
        if (data) {
            setElectronics(data);
        }
        if(error) console.log(error)
    }

//get product women's clothing category from supabase
const getWomensClothing = async () => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("category", "women's clothing")
        
        if (data) {
            setWomensClothing(data);
        }
        if(error) console.log(error)
    }

//get fitered clothing product from supabase
const getClothing = async () => {
    const filter = "clothing"
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .or(`title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`)
        
        if (data) {
            setClothing(data);
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
        electronics,
        getElectronics,
        womensClothing,
        getWomensClothing,
        clothing,
        getClothing,
    }   
}
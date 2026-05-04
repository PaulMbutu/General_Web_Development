import axios from "axios";
import { redirect } from "next/navigation";


export const BASE_URL ="https://invigorating-communication-production.up.railway.app"
//export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
export const api = axios.create({
    baseURL:BASE_URL
})

export async function getExistingUser(email:string | null | undefined){
    try {
        const response = await api.get(`existing_user/${email}`)
        return response.data
    }

    catch(err:unknown){
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("an unknown error occured");
    }
}


export async function createNewUser(
                                        data:   {
                                                    email:string | null | undefined;
                                                    username:string | null | undefined;
                                                    first_name:string | null | undefined;
                                                    last_name:string | null | undefined;
                                                    profile_picture_url: string | null | undefined;
                                                }
                                    )
                                    {
                                        try{
                                            const response = await api.post('create_user/',data)
                                            return response.data
                                        }

                                        catch(err:unknown){
                                            if(err instanceof Error){
                                                throw new Error(err.message);
                                            }
                                            throw new Error("an unknown error occured");
                                        }
                                    }
                                
export async function getCategories() {
    try{
        const response = await api.get("category_list")
        return response.data
    }

    catch(err:unknown)
    {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function getCategory(slug: string){
    try{
        const response = await api.get(`categories/${slug}`)
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function getProducts(){
    try{
        const response = await api.get("product_list")
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function getProduct(slug: string){
    try{
        const response = await api.get(`/products/${slug}`)
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function getCart(cart_code:string) {
    try{
        const response = await api.get(`get_cart/${cart_code}`)
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            if(err.message == "Request failed with status code 404"){
                redirect("/cart")
            }
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function cartExistence(cart_code:string | null | undefined) {
    try{
        const response = await api.get(`check_cart_existence/${cart_code}`)
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            if(err.message == "Request failed with status code 404"){
                redirect("/cart")
            }
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function productSearch(searchInput: string | null | undefined){
    if(searchInput){
        try{
            const response = await api.get(`search?query=${searchInput}`)
            return response.data
        }
        catch(err:unknown)
        {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
        }

    }
}

export async function initiatePayment(paymentInfo: {email:string|null|undefined,cart_code:string|null})
{
    try{
        const response = await api.post("create_checkout_session/",paymentInfo)
        console.log("ssssss ",response.data)
        return response.data
    }
    catch(err:unknown)
    {
    if(err instanceof Error){
        throw new Error(err.message)
    }
    throw new Error("an unknown error occured");
    }
}

export async function getOrders( email: string|null|undefined){

    if(email){
        try{
            const response = await api.get(`get_orders?email=${email}`)
            return response.data
        }
        catch(err:unknown)
        {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
        }
    }


}

export async function getWishlist( email: string|null|undefined){

    if(email){
        try{
            const response = await api.get(`my_wishlists?email=${email}`)
            return response.data
        }
        catch(err:unknown)
        {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
        }
    }


}

export async function addAddress(addressData:{
    email:string|null|undefined,
    street:string,
    city:string,
    state:string,
    phone:string
}){
    try{
        const response = await api.post("add_address/",addressData)
        return response.data
    }
    catch(err:unknown)
    {
        if(err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error("an unknown error occured");
    }
}

export async function getAddress(email:string|null|undefined){
    if(email){
        try{
            const response = await api.get(`get_address?email=${email}`)
            return response.data
        }
        catch(err:unknown)
        {
            if(err instanceof Error){
                throw new Error(err.message)
            }
            throw new Error("an unknown error occured");
        }
    }
    return undefined
}
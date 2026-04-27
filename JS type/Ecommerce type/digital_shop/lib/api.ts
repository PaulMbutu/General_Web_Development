import axios from "axios";
import { redirect } from "next/navigation";


export const BASE_URL ="http://127.0.0.1:8008"

export const api = axios.create({
    baseURL:"http://127.0.0.1:8008"
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
"use server"

import { signOut } from "@/auth"
import { api } from "./api"
import { revalidatePath } from "next/cache"

export async function signOutUser() {
    await signOut({redirectTo: "/"})
}

export async function updateReviewAction(formData: FormData){
    const rating = Number(formData.get("rating"))
    const review = formData.get("review")
    const review_id = formData.get("review_id")
    const slug = formData.get("slug")
    const reviewObj = {rating, review}

    try{
        await api.put(`update_review/${review_id}/`, reviewObj)
        revalidatePath(`/products/${slug}`)
        return { success: true } // Return minimal data
    }
    catch (err:unknown) {
        console.error("Update review error:", err)
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function createReviewAction(formData: FormData){
    const product_id = Number(formData.get("product_id"))
    const email = formData.get("email")
    const rating = Number(formData.get("rating"))
    const review = formData.get("review")
    const slug = formData.get("slug")

    if(!product_id || !email || !rating || !review || !slug) {
        throw new Error("All fields are required")
    }
    
    const reviewObj = {product_id, email, rating, review}
    
    try {
        await api.post("add_review/", reviewObj)
        revalidatePath(`/products/${slug}`)
        return { success: true } // Return minimal data
    }
    catch(err:unknown){
        console.error("Create review error:", err)
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function deleteReviewAction(formData:FormData){
    const review_id = Number(formData.get("review_id"))
    const slug = formData.get("slug")
    
    try{
        await api.delete(`delete_review/${review_id}/`)
        revalidatePath(`/products/${slug}`)
        return { success: true } // Return minimal data instead of full response
    }
    catch(err:unknown){
        console.error("Delete review error:", err)
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function addToCartAction(formData:FormData){
    const cart_code = formData.get("cart_code")
    const product_id = formData.get("product_id")

    const cartitemObj = {cart_code, product_id}

    try{
        const response = await api.post("add_to_cart/",cartitemObj)
        return { success: true }
    }
    catch(err:unknown){
        console.error("Add to cart error:", err)
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function addToWishlistAction(formData:FormData) {

    const email = formData.get("email")
    const product_id = formData.get("product_id")
    const wishlistObj = {email, product_id}

    try{
        const response = await api.post("add_to_wishlist/",wishlistObj)
        return response.data
    }
    catch(err:unknown){
        console.error("Add to wishlist error:", err)
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}

export async function updateCartitemAction(formData: FormData){
    const item_id = Number(formData.get("cartitem_id"))
    const quantity = Number(formData.get("quantity"))
    const cart_code = formData.get("cart_code")

    const cartitemObj = {item_id, quantity}

    try{
        const response = await api.put("update_cartitem_quantity/",cartitemObj)
        revalidatePath(`/cart/${cart_code}`)
        return response.data
    }
    catch(err:unknown){
        console.error("Apdate cartitem error:", err)
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("An unknown error occurred");
    }
}
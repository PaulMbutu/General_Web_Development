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
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
        console.log("obj: ",reviewObj," id: ",review_id)
        const response = await api.put(`update_review/${review_id}/`,reviewObj)
        console.log("response: ",response.data)
        revalidatePath(`products/${slug}`)
        return response.data
    }

    catch (err:unknown) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw new Error("an unknown error occured");
    }
}

export async function createReviewAction(formData: FormData){
    const product_id = Number(formData.get("product_id"))
    const email = formData.get("email")
    const rating = Number(formData.get("rating"))
    const review = formData.get("review")

    const slug = formData.get("slug")

    if(!product_id || !email || !rating || !review || !slug)
    {
        throw new Error("All fields are required")
    }
    const reviewObj = {product_id, email, rating, review}
    try {
        const response = await api.post("add_review/",reviewObj) //Sends reviewObj to the back end database
        revalidatePath(`products/${slug}`)
        return response.data
    }

    catch(err:unknown){
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("an unknown error occured");
    }
}
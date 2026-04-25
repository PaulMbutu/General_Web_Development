"use server"

import { signOut } from "@/auth"
import { api } from "./api"

export async function signOutUser() {
    await signOut({redirectTo: "/"})
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
        const response = await api.post("add_review/",reviewObj)
    }

    catch(err:unknown){
        if(err instanceof Error){
            throw new Error(err.message);
        }
        throw new Error("an unknown error occured");
    }
}
import { ProductDetail, Review } from "@/lib/type";
import { cn, timeAgo } from "@/lib/utils";
import { PenIcon, Star, TrashIcon } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../uiComponents/Modal";
import ReviewForm from "./ReviewForm";
import DeleteModal from "../uiComponents/DeleteModal";
import { deleteReviewAction } from "@/lib/actions";
import { toast } from "react-toastify";

const ReviewCard = ({review,loggedInUser, product}: {review:Review, loggedInUser: User | undefined | null, product: ProductDetail}) => {
  const starArray = [1, 2, 3, 4, 5];
  const loggedInUserEmail = loggedInUser?.email

  async function handleDeleteReview(){

    const formData = new FormData()
    formData.set("review_id", String(review.id))
    formData.set("slug", product.slug)

    try{
      await deleteReviewAction(formData)
      toast.success("Review deleted successfully!")
    }
    catch(err:unknown){
        console.error("Delete error:", err)
        if(err instanceof Error){
            toast.error(err.message)
        } else {
            toast.error("An unknown error occurred")
        }
    }
  }

  return (
    <div className="w-full bg-white shadow-lg px-6 py-6 rounded-lg flex flex-col gap-4 mb-6">
      {/* Action buttons for editing and deleting the review */}
      <div className="flex justify-between items-center">
        {loggedInUser?.email == review.user.email && 
          <span className="flex gap-4">
            <>
              {/* Trash button to delete review */}
              <DeleteModal handleDeleteReview={handleDeleteReview}/>

              {/* Pen button to edit review */}
              <Modal updateReviewModal>
                <ReviewForm review = {review} product={product} loggedInUserEmail={loggedInUserEmail} updateReviewForm={true}/>
              </Modal>
            </>
          </span>
        }
        {/* Information showing when the review was edited */}
        <span className="text-sm text-gray-500">
          {review.created.slice(0,20) == review.updated.slice(0,20) || (
            <small className="block">edited...</small>
            )}
          <small>Created {timeAgo(review.created)}</small>
        </span>
      </div>

      {/* Reviewer's profile and review content */}
      <div className="flex gap-4 items-center">
        {/* Profile picture */}
        <div className="w-12.5 h-12.5 rounded-full relative overflow-hidden border-2 border-gray-200">
          <Image
            src={review.user.profile_picture_url ? `${review.user.profile_picture_url}` : "/profile_pic.jpg"}
            alt="profile_pic"
            className="object-cover rounded-full"
            fill
            priority={true}
            unoptimized={true}
            sizes="50px"
          />
        </div>

        {/* Review content including name, rating, and review text */}
        <div className="flex flex-col flex-1">
          <p className="font-semibold text-lg text-gray-800">{review.user.first_name} {review.user.last_name}</p>
          <div className="flex gap-1 mt-2">
            {starArray.map((star) => (
              <Star key={star} className={cn("size-5 cursor-pointer", star<=review.rating ? "fill-black" : "")} />
            ))}
          </div>

          {/* Review text */}
          <small className="text-gray-600 text-justify leading-6 mt-4 font-medium">
            {review.review}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
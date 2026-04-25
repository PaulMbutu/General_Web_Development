import { auth } from "@/auth";
import ProductSection from "@/components/home/ProductSection";
import ProductInfo from "@/components/productDetail/ProductInfo";
import RatingProgressBar from "@/components/productDetail/RatingProgressBar";
import ReviewCardContainer from "@/components/productDetail/ReviewCardContainer";
import ReviewForm from "@/components/productDetail/ReviewForm";
import Modal from "@/components/uiComponents/Modal";
import { getProduct } from "@/lib/api";
import { ProductDetail } from "@/lib/type";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductPage = async ({params}:{params: Promise<{slug: string}>}) => {
  
  const {slug} = await params
  const product: ProductDetail = await getProduct(slug)
  const avgRating = product?.rating?.average_rating ?? 0
  const reviewsCount = product?.rating?.total_reviews ?? 0
  const stars = [1,2,3,4,5]
  const starRating = Math.floor(avgRating)

  const poor_rating = product.poor_review
  const fair_rating = product.fair_review
  const goood_rating = product.good_review
  const very_good_rating = product.very_good_review
  const exellent_rating = product.excellent_review

  const reviews = product.reviews
  const similar_products = product.similar_products
  const session = await auth()
  const loggedInUser = session?.user
  console.log("Current product",product)

  return (
    <>
      <ProductInfo product={product}/>

      <div className="main-max-width padding-x mx-auto">
        <h3 className="font-semibold text-xl text-center my-6 text-gray-800">
          Customer Reviews
        </h3>

        <div className="w-full flex py-6 gap-6 flex-wrap items-center justify-between max-md:justify-center">
          {/* Rating display box */}
          <div className="w-62.5 h-62.5 bg-gray-100 rounded-lg px-4 py-6 flex flex-col gap-3 items-center justify-center shadow-lg">
            <h1 className="text-5xl font-bold text-gray-800">{avgRating.toFixed(1)}</h1>
            <small className="text-gray-600 text-sm">{reviewsCount} {reviewsCount==1 ? "review" : "reviews"}</small>

            <div className="flex gap-2">
              {stars.map((star)=> <Star key={star} className={cn("w-5 h-5 cursor-pointer",star <= starRating ? "fill-black ":"fill-gray-100" )}/>)}
            </div>
          </div>

          {/* Rating Display Box ends */}

          {/* Rating progress bar */}

          <div className="flex flex-col gap-6 w-175 max-md:w-full">
            <RatingProgressBar rating="Excellent" numRating={exellent_rating} />
            <RatingProgressBar rating="Very Good" numRating={very_good_rating} />
            <RatingProgressBar rating="Good" numRating={goood_rating} />
            <RatingProgressBar rating="Fair" numRating={fair_rating} />
            <RatingProgressBar rating="Poor" numRating={poor_rating} />
          </div>

          {/* Rating progress bar ends */}
        </div>

        {/* Review modal form */}

        <div className="flex justify-center items-center w-full mb-5">

        { loggedInUser ?
          <Modal>
            <ReviewForm />
          </Modal>
          : <Link href="/signin" className="default-btn max-sm:text-[12px] max-sm:px-4 my-6">
              Sign In to add a review
          </Link>
        }

        </div>

        {/* Review modal form ends */}
      </div>

      {reviews.length > 0 && <ReviewCardContainer reviews={reviews} />}
      <ProductSection title="Products from the same category" similar_products={similar_products} detailPage/>
    </>
  );
};

export default ProductPage;
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TrashIcon, X } from 'lucide-react'

const DeleteModal = (
  { 
    handleDeleteReview,
    handleDeleteCartitem,
    deleteCartitem
  }:
  {
    handleDeleteReview? : () =>void, 
    handleDeleteCartitem?: ()=>void ,
    deleteCartitem?:boolean
  }
  ) => {
  return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
              {
                  deleteCartitem ? 
                  <button 
                    className="p-2 rounded-md bg-red-50 cursor-pointer hover:bg-red-100 transition text-red-500 border border-red-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  :
                    <button 
                        className="bg-gray-200 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                      <TrashIcon className="size-5 text-gray-600" />
                    </button>
                }

        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

            {deleteCartitem ?
            <AlertDialogDescription>
                You are about to delete this cart item.
            </AlertDialogDescription>
            :            
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the review you have on this product 
                from our servers.
            </AlertDialogDescription>
            }
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className='cursor-pointer' 
              onClick={deleteCartitem ? handleDeleteCartitem : handleDeleteReview}
            >
              Continue
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
  )
}

export default DeleteModal
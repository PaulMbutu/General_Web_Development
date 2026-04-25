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
import { TrashIcon } from 'lucide-react'

const DeleteModal = ({handleDeleteReview, isDeleting}:{handleDeleteReview:()=> Promise<void>, isDeleting?: boolean}) => {
  return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
              <button 
                className="bg-gray-200 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isDeleting}
              >
                <TrashIcon className="size-5 text-gray-600" />
              </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the review you have on this product 
                from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className='cursor-pointer' 
              onClick={(e) => {
                e.preventDefault()
                handleDeleteReview()
              }}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Continue"}
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
  )
}

export default DeleteModal
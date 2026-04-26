import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Button from './Button'
const WishlistTooltip = ({loggedInUserEmail}:{loggedInUserEmail:string | null | undefined}) => {
  return (
        <Tooltip>
            <TooltipTrigger disabled={!Boolean(loggedInUserEmail)} className="wish-btn disabled:opacity-50 disabled:cursor-not-allowed">            
                    Add to Wishlist
            </TooltipTrigger>
            <TooltipContent>
                <p>log in to add product to wishlist</p>
            </TooltipContent>
        </Tooltip>
  )
}

export default WishlistTooltip

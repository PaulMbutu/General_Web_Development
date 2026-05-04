import { auth } from '@/auth'
import React from 'react'
import NavBar from './NavBar'
import { LoggedInUser } from '@/lib/type'

const NavBarContainer = async () => {
  
    const session = await auth()
    const user = session?.user
    if(user){
        const loggedInUserObj = {
            name: user.name || "",
            email: user.email || "",
            image: user.image || ""
        }
        
        return (
        <NavBar loggedInUser={loggedInUserObj}/>
        )
    }

    return (
        <NavBar/>
    )
}

export default NavBarContainer

import { auth } from '@/auth'
import React from 'react'
import NavBar from './NavBar'

const NavBarContainer = async () => {
  
    const session = await auth()
    const user = session?.user
    console.log(session)

    return (
        <NavBar loggedInUser={user}/>
  )
}

export default NavBarContainer

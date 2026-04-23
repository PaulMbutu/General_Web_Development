import { Split } from "lucide-react"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createNewUser, getExistingUser } from "./lib/api"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks:{

    async signIn({profile}){
      try {
          const email = profile?.email
          const first_name = profile?.name?.split(" ")[0]
          const last_name = profile?.name?.split(" ")[1]
          const username = profile?.email?.split("@")[0]
          const profile_picture_url = profile?.picture

          const userObj = {email, first_name, last_name, username, profile_picture_url}
          console.log(profile)

          try {
            await getExistingUser(email)
          }
          catch(err){
            console.log(err)
            await createNewUser(userObj)
          }
          return true
         
      }
      catch(err:unknown){
        return false
      }
    }

  },
})
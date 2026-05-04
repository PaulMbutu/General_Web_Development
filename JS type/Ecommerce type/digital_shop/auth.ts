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

          try {
            const response=await getExistingUser(email)
            if(response.exists)
              {
                return true
              }
            else{
              try{
                  await createNewUser(userObj)
                  return true
              }
              catch(err:unknown){
                  console.log("creating user error: ",err)
                  if(err instanceof Error){
                      throw new Error(err.message);
                  }
                  throw new Error("an unknown error occured");
              }
            } 
          }
          catch(err:unknown){
              console.log("checking existing user error: ",err)
              if(err instanceof Error){
                  throw new Error(err.message);
              }
              throw new Error("an unknown error occured");
          }
      }
      catch(err:unknown){
        return false
      }
    }

  },
})
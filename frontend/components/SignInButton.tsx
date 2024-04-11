'use client'

import { Google } from "@mui/icons-material"
import { Button } from "@mui/material"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"

const SignInButton = () => {
    const router = useRouter()

    async function signIn() {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(db)
        
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user

                //navigate to home page after sign in
                router.push('/')
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message

                return console.log(errorCode, errorMessage)
            })
    }

  return (
    <Button onClick={signIn} className="mx-auto p-4 bg-slate-100 shadow hover:scale-105 transition">Sign In With Google <Google className="px-1"/></Button>
  )
}

export default SignInButton

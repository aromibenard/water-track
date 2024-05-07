'use client'
import { EmailInput } from "@/components/EmailInput"
import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ContactPage() {
    const router = useRouter()

    return (
        <div className="max-w-5xl mx-auto h-dvh">
            <NavBar/>
            <div className="grid items-center h-2/3">
                <div className="border w-5/6 h-5/6 mx-auto rounded-md shadow">
                    <h1 className="font-bold text-xl p-4 drop-shadow">Reach us by sending us your Email</h1>
                    <EmailInput/>
                    <h1 className="font-bold text-xl p-4 drop-shadow">Alternatively, call us on</h1>
                    <h2 className="px-6 py-1 font-semibold">+254 792 775 784</h2>
                    <Button className=" px-4 mx-4 my-2 hover:bg-purple-500 hover:text-white transition"
                     variant={'outline'}
                     onClick={() => (
                        router.push('/')
                     )}
                     >Go Back</Button>
                </div>
            </div>
        </div>
    )
}
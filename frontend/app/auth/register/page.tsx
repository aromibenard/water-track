'use client'
import SignInButton from "@/components/SignInButton";

export default function RegisterPage() {
    return <div className="grid max-w-4xl md:grid-cols-2 mx-auto drop-shadow-md h-[30rem] mt-14 items-center">
                <div className="bg-gradient-to-b from-purple-600 to-gray-900 h-full flex flex-col">
                    <h1 className="font-bold text-white p-6">Water Trak</h1>
                    <h2 className="font-extrabold drop-shadow-sm text-4xl text-white px-7 mt-16">Jambo 👋</h2>
                    <h4 className="text-white font-semibold text-xl px-7 my-6">Sign in to Get Started</h4>
                </div>

                <div className="h-full bg-slate-50 grid items-center">
                    <SignInButton/>
                </div>
           </div>
}
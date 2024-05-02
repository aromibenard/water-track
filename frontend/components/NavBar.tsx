'use client'
import { Avatar } from "@mui/material"
import { NavMenu } from "./NavMenu"
import Link from "next/link"
import { getAuth, signOut } from "firebase/auth";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { 
  DropdownMenuContent,
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,  
  DropdownMenuShortcut, 
  DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NavBar = () => {

const auth = getAuth(db);
const user = auth.currentUser;
const [photoURL, setPhotoURL] = useState('');
const router = useRouter()


useEffect(() => {
  if (user !== null) {
     // The user object has basic properties such as display name, email, etc.
    const photoURL = user.photoURL;
    setPhotoURL(photoURL || ''); 
  }
}, [user]);

const logOut = () => {
  
  signOut(auth)
    .then(() => {
      router.push('/auth/register')
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
  
}

  return (
    <div className="flex p-2 justify-around shadow">
      <div>
        <Link href={'/'}>
            <h1 className="font-extrabold p-2 drop-shadow-md">Water Trak</h1>
        </Link>
      </div>
      <NavMenu />
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar 
              className="hover:opacity-80 transition hover:cursor-pointer" 
              src={photoURL} 
              onClick={logOut}
            />
          </DropdownMenuTrigger>
            < DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button 
                  variant='outline'
                  onClick={logOut}
                  className="hover:text-white hover:bg-purple-600 transition"
                >
                  Log Out
                </Button>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default NavBar

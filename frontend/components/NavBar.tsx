import { Avatar } from "@mui/material"
import { NavMenu } from "./NavMenu"
import Link from "next/link"

const NavBar = () => {
  return (
    <div className="flex p-2 justify-around shadow">
      <div>
        <Link href={'/'}>
            <h1 className="font-extrabold p-2 drop-shadow-md">Water Trak</h1>
        </Link>
      </div>
      <NavMenu />
      <div className="">
        <Avatar className="hover:opacity-80 transition"/>
      </div>
    </div>
  )
}

export default NavBar

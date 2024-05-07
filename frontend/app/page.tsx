'use client'

import Footer from "@/components/Footer";
import LandingText from "@/components/LandingText";
import { Map } from "@/components/Map";
import NavBar from "@/components/NavBar";
import Loader from "@/components/Loader"
import { Button } from "@/components/ui/button";
import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default  function Home() {

  const [selectedAddress, setSelectedAddress] = useState('')
  const [userName, setUserName] = useState('')

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address)
  }

  const router = useRouter()

  // check whether page is loading
  const [loading, setLoading] = useState(true);

  //checking if user is logged in
  useEffect(() => {
    const auth = getAuth(db);
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        router.push('/')

        const user = auth.currentUser
        setUserName(user!.displayName!)
        

      } else {
        router.push('/auth/register');
      }
      setLoading(false)
    });

    // Clean up function
    return () => unsubscribe();
  }, [router]);

  // Render loading component if loading state is true
  if (loading) {
    return (
      <Loader/>
    )
  }

  return (
   <div className="max-w-6xl mx-auto shadow-lg  z-100">
    <NavBar />
    <LandingText />
    <Map onAddressSelect={handleAddressSelect}/>
    <div className="h-[5rem] flex bg-purple-100">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant={'outline'} 
            className="p-6 mx-auto w-32 shadow-md my-3 hover:text-white hover:bg-purple-600 transition"
          >
            Continue
          </Button>
        </SheetTrigger>

        <SheetContent className="bg-purple-100">
          <SheetHeader>
            <SheetTitle>Confirm Order Details</SheetTitle>
            <SheetDescription>
              Check to see that the details are correct. Click continue to proceed.
            </SheetDescription>
          </SheetHeader>
          <div className="grid py-4 h-[10rem]">
            <div className=" grid items-center">
              <h3 className="flex-row p-2">Name: <span className="px-2">{userName}</span></h3>
            </div>
            <div className="grid items-center">
              <h3 className="flex px-2">
                Delivery Address:<span 
                  className="italic px-2"
                  >
                    {selectedAddress ? `${selectedAddress}` : 'Please select location from the map to continue'}
                  </span>
              </h3>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                    type="submit" 
                    variant='outline' 
                    className="mx-auto my-2 w-40 p-6 hover:bg-purple-600 transition shadow-md hover:text-white"
                >
                    Place Order
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Order Placed Successfully!</DialogTitle>
                  <DialogDescription>
                    Delivery Details:
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <p>Name: {userName}</p>
                    <p>Address: {selectedAddress}</p>
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" 
                        variant="secondary"
                        className="hover:bg-purple-500 hover:text-white transition "
                        onClick={() => (
                          router.push('/orders/track')
                        )}>
                      Track Order
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            </SheetClose>
          </SheetFooter>
       </SheetContent>
      </Sheet>
    </div>
    <Footer />
    </div>
  );
}

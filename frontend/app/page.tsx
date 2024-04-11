import Footer from "@/components/Footer";
import LandingText from "@/components/LandingText";
import { Map } from "@/components/Map";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <div className="max-w-6xl mx-auto shadow-lg  z-100">
    <NavBar />
    <LandingText />
    <Map />
    <div className="h-[5rem] flex bg-purple-100">
      <Button variant={'outline'} className="p-6 mx-auto w-32 shadow-md my-3">Continue</Button>
    </div>
    <Footer />
   </div>
  );
}

"use client"

import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material"; 
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [orderStatus, setOrderStatus] = useState("Order Placed");
  const [completedSteps, setCompletedSteps] = useState([]);

  const router = useRouter()

  useEffect(() => {
    simulateOrderTracking();
  }, []);

  const simulateOrderTracking = () => {
    
    const timeout1 = setTimeout(() => {
      setOrderStatus("Order Confirmed");
      setCompletedSteps((prevSteps) => [...prevSteps, "Order Confirmed"]);
    }, 3000); 

    const timeout2 = setTimeout(() => {
      setOrderStatus("Order Shipped");
      setCompletedSteps((prevSteps) => [...prevSteps, "Order Shipped"]);
    }, 8000); 

    const timeout3 = setTimeout(() => {
      setOrderStatus("Order Out for Delivery");
      setCompletedSteps((prevSteps) => [...prevSteps, "Order Out for Delivery"]);
    }, 10000); 

    // Clear timeouts when component unmounts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  };

  //steps for the order process
  const steps = ["Order Placed", "Order Confirmed", "Order Shipped", "Order Out for Delivery"];

  // Calculate the progress based on the number of completed steps
  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto grid items-center shadow-md p-10 my-auto h-[30rem]">
      <NavBar/>
      <div className="py-4 h-1"></div>

      <LinearProgress variant="determinate" value={progress} />

      {/* Display each step with progress indicator */}

      {steps.map((step, index) => (
        <div key={index} style={{ display: completedSteps.includes(step) ? "flex" : "none", alignItems: "center" }}>
          <p>{step}</p>
          {/* Highlight the current step */}
          {step === orderStatus && <span style={{ color: "purple", marginLeft: "5px" }}>✔</span>}
        </div>
      ))}

      <div>
        <p className="p-2">We will contact you shortly!</p>
        <Button variant={'outline'}
         className="hover:bg-purple-500 transition shadow hover:text-white"
         onClick={()=>(
          router.push('/')
         )}
        >Go Back</Button>
      </div>

    </div>
  );
}


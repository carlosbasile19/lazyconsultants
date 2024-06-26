"use client"

import { CheckCircle2 } from "lucide-react";
import { pricingOptions, SPECIAL_OFFER_OPTION_STATUS } from "../constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

const Pricing = () => {
  const { isSignedIn } = useAuth();
  return (
    <div id='pricing' className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title.includes("Partner") && (
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                {
                   option.title.includes("Partner") && SPECIAL_OFFER_OPTION_STATUS === "ACTIVE" ? <span className="text-neutral-400 tracking-tight">/ One time payment</span> : <span className="text-neutral-400 tracking-tight">/ Yearly Subscription</span>
                }
              
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    
                    
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-pink-700 border border-pink-500 rounded-lg transition duration-200"
            >
                    Get Started
                </Button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

'use client'

import Image from "next/image";
import { useState } from "react";
import Result from "./result";

export default function Home() {

  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <>
      {
        hasAccepted ? (
          <Result />
        ): (
          <main className = "text-sm">
            <div className = "flex items-center justify-center">
              <Image
                src = "/tandoor.png"
                alt = "Descriptive text for screen readers"
                width = { 500 }
                height = { 1000 }
              />
            </div >
            <div className="mt-5 text-center">
              <p className="font-bold">Tango Tandoor</p>
              <p className="text-xs">30th Street corner 11th Avenue, Bonifacio Global City</p>
            </div>
            <div className="mx-10 mt-10 mb-10">
              <p>
                Hi baby love, I would like to invite you on Sunday, August 11, 2024 for a dinner date that I wanted for us to celebrate our 13th monthsary
              </p>
              <p className="mt-4">
                I can still vividly remember when you brought me to Little India. I was so clueless what to eat and 
                what would be the taste of the food. Little did I know it will embark me to a new taste and preference. 
              </p>
              <p className="mt-4">
                To celebrate our monthsary, I want us to dine in this new Indian Restaurant that I found. Food looks yummy 
                and the interior design is giving.  
              </p>
              <div className="mt-3">
                <p>
                  <b>Time: </b>07:30PM
                </p>
                <p>
                  <b>Theme: </b>Dark-colored clothes (Please wear your indian accessories baby hihihi)
                </p>
              </div>
              <button className="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                onClick={() => setHasAccepted(true)}>
                Accept the invite
              </button>
            </div>
          </main >
        )
        }
    </>
      
  );
}

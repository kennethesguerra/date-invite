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
                src = "/escalera.jpeg"
                alt = "Descriptive text for screen readers"
                width = { 500 }
                height = { 1000 }
              />
            </div >
                    <div className="mt-10 text-center">
                      <p className="font-bold">Escalera Cafe</p>
                      <p className="text-xs">Binangonan, Rizal</p>
                    </div>
                    <div className="mx-10 mt-10">
                      <p>
                        Hi baby, I would like to invite you on Sunday, May 26, 2024 for a before-dawn date in Escalera Cafe. 
                      </p>
                      <p className="mt-4">
                        I know for the past few days we were so stress at each other's work and personal life and as your man
                        I haven't had enough time (and also budget) to take you on a proper date. 
                        Now, I'm inviting you properly using my acquired tech skills and looking forward to spend the night with you on Sunday.
                      </p>
                      <div className="mt-5">
                        <p>
                          Time: 04:30PM
                        </p>
                        <p>
                          Attire: Semi Casual
                        </p>
                      </div>
                      <button className="mt-10 g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
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

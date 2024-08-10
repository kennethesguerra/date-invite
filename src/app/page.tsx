'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image 
        src="/kash.png" 
        alt="Kash Aku"
        width={400}
        height={400} 
        className="mb-10 rounded-full shadow-lg"
      />
      <h1 className="text-2xl mb-20">Hello, Kash!</h1>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {
        router.push('/questions')
      }}>
        Get Started
      </button>
    </main>
  );
}

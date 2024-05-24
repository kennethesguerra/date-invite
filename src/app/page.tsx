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
        className="mb-5 rounded-full"
      />
      <h1 className="text-2xl mb-20">Hello, Kash!</h1>
      <button className="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
        router.push('/questions')
      }}>
        Get Started
      </button>
    </main>
  );
}

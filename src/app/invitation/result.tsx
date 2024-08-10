import Image from "next/image";

export default function Result() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-between">
        <p className="text-2xl mb-5">Wait, there more...</p>
      </div>
      <div>
        <p className="text-sm text-justify mx-5 mb-10">
          Let's visit a new branch harlan + holden in Robinsons Magnolia afterwards. 
          Same but different.
        </p>
      </div>
      <div className="flex items-center justify-center mt-3 mx-3">
        <Image
          src="/KashKen.jpg"
          alt="Descriptive text for screen readers"
          width={300}
          height={5000} 
        />
      </div>
      <p className="text-center">
        We're all set, baby!! I love you!
      </p>
    </>
  )
}
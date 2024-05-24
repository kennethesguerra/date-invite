import Image from "next/image";

export default function Result() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src="/kashkenn.jpeg"
          alt="Descriptive text for screen readers"
          width={400}
          height={7000} 
          className="mb-10"
        />
      </div>
      <p className="text-center">
        We're all set, baby!! I love you!
      </p>
    </>
  )
}
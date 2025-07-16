import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div
      className="flex flex-col md:flex-row  mx-auto p-3 lg:p-0 mt-20 max-w-screen-2xl"
      // style={{ border: "2px solid red" }}
    >
      <div
        className="w-full xl:w-6/12 flex flex-col justify-center"
        // style={{ border: "2px solid black" }}
      >
        <h2 className="font-poppins font-bold text-4xl lg:text-5xl  leading-[43px] lg:leading-[56px] text-[#212121] w-full max-w-[720px]">
          Unlock Your True Potential For Free!
        </h2>
        <p className="mt-3 font-poppins font-semibold text-base lg:text-xl leading-6 lg:leading-xl text-[#000000] w-full max-w-[500px]">
          Discover scientifically-backed tools to boost your personal growth,
          completely free of charge.
        </p>
        <div className="mt-5 flex flex-col md:flex-row gap-4">
          <div>
            <button className="bg-[#4CAF50] font-roboto font-medium text-lg text-[#FFFFFF] px-4 py-1 rounded-lg">
              Join For Free
            </button>
          </div>
          <div>
            <button className="bg-[#FFA726] font-roboto font-medium text-lg text-[#FFFFFF] px-4 py-1 rounded-lg">
              Already Have an Account
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full xl:w-6/12 flex justify-center"
        // style={{ border: "2px solid green" }}
      >
        <Image
          src="/hero-image.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default HeroSection;

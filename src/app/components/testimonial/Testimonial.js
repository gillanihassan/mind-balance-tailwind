import React from "react";
import Image from "next/image";

// ✅ Testimonials data
const testimonialsData = [
  {
    id: 1,
    heading: '"Real Stories. Real Transformations."',
    text: "Mind Balance helped me understand my true strengths, and the self-improvement resources were just what I needed to take my career to the next level!",
    name: "Sarah",
    ageLocation: "28 (New York)",
    image: "/images/testimonial/user-one.svg",
  },
  {
    id: 2,
    heading: "“An Amazing website ”",
    text: "I’ve been using the personality tests for months, and I can honestly say that it’s been life-changing. I feel more confident and at peace with my decisions.",
    name: "John Smith",
    ageLocation: "35 (Los Angeles)",
    image: "/images/testimonial/user-two.svg",
  },
  {
    id: 3,
    heading: '"How Mind Balance Changed Lives"',
    text: "I’ve been using Mind Balance for over a year, and it’s helped me grow both personally and professionally. The free resources are incredible, and I’ve seen real progress in my journey.",
    name: "Mike Warren",
    ageLocation: "Developer at BRIX Templates",
    image: "/images/testimonial/user-three.svg",
  },
];

function Testimonial() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-16 p-3 md:p-0">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-poppins font-bold text-xl text-[#170F49] ">
          Hear From Our Community
        </h2>
        <p className="mt-2 font-roboto font-normal text-base leading-6 text-[#000000]">
          Join thousands of people who’ve transformed their lives with Mind
          Balance. Here’s what they have to say
        </p>
      </div>

      <div className="flex flex-col justify-center gap-5 md:flex-row items-center mt-10">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] w-full max sm:w-[300px] md:w-[350px] border-[0.64px] border-[#EFF0F6] rounded-2xl px-10 py-8"
          >
            <div>
              <h5 className="font-montserrat font-bold text-sm text=[#170F49]">
                {item.heading}
              </h5>
              <p className="font-Roboto font-normal text-xs leading-5 text-[#6F6C90] mt-2">
                {item.text}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div>
                <Image
                  src={item.image}
                  width={38}
                  height={38}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <h4 className="font-dm-sans font-bold text-xs text[#170F49]">
                  {item.name}
                </h4>
                <h6 className="font-dm-sans font-normal text-xs text-[#6F6C90]">
                  {item.ageLocation}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

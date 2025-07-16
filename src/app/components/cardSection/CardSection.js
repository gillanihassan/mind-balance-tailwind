import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    img: "/images/cardSection/logoOne.svg",
    title: "Personality Tests",
    desc: `Uncover your strengths and unlock personal insights with our
scientifically backed personality tests. Know yourself better and
take the first step toward growth.`,
    btnText: "Start Your Test",
    btnColor: "#FFA726",
  },
  {
    id: 2,
    img: "/images/cardSection/logoTwo.svg",
    title: "Self-Improvement Videos",
    desc: `Access a library of free self-improvement videos that cover everything from mindset to productivity. Learn from experts and boost your personal growth.`,
    btnText: "Start Your Test",
    btnColor: "#4CAF50",
  },
  {
    id: 3,
    img: "/images/cardSection/logoThree.svg",
    title: "Progress Tracking",
    desc: `Track your personal growth with intuitive, easy-to-use tools. Monitor your progress and celebrate every milestone on your journey.`,
    btnText: "Start Your Test",
    btnColor: "#FFA726",
  },
];

function CardSection() {
  return (
    <div className="mt-12 max-w-screen-2xl mx-auto p-3 lg:p-0">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-poppins font-semibold text-xl text-[#132433]">
          Unlock Your Potential with Mind Balance
        </h2>
        <p className="font-roboto font-normal text-base leading-7 text-[#557087] w-full max-w-[800px] text-center mt-4">
          Explore our powerful tools designed to help you grow and thrive. From
          personality insights to expert guidance and progress tracking,
          discover resources that empower your personal journey—completely free.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-7">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center w-[345px] h-[415px]  p-6 rounded-lg bg-[#E0E8F0]"
          >
            <Image src={card.img} width={80} height={80} alt="card image" />
            <a href="#">
              <h5 className="font-roboto font-normal text-xl text-[#132433] mt-6">
                {card.title}
              </h5>
            </a>
            <p className="text-center font-roboto font-normal text-base text-[#557087] mt-3">
              {card.desc}
            </p>
            <button
              className="cursor-pointer mt-7 p-2 rounded-lg font-roboto font-medium text-lg text-[#FFFFFF]"
              style={{ backgroundColor: card.btnColor }}
            >
              {card.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;

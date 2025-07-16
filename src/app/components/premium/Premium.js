import React from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    bgColor: "#4CAF50",
    icon: "/images/premium/icon-one.svg",
    features: [
      "Unlimited Access",
      "Premium Content",
      "No Credit Card Required",
      "Personalized Recommendations",
      "Ad-Free Experience",
    ],
  },
  {
    id: 2,
    bgColor: "#FFA726",
    icon: "/images/premium/icon-two.svg",
    features: [
      "Limited by Subscription",
      "Requires Paid Upgrade",
      "Mandatory for Sign-Up",
      "Only in Premium Plans)",
      "Ad-Supported",
    ],
  },
];

function Premium() {
  return (
    <div className="mt-18">
      <div className="flex flex-col justify-center items-center p-2 md:p-0">
        <h2 className="font-poppins font-bold text-xl text-[#170F49] mb-2">
          Why Pay When You Can Grow for Free?
        </h2>
        <p className="font-roboto font-normal text-base text-[#000000]">
          Get unlimited access to premium self-growth resources without spending
          a penny.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 p-2 md:p-0 mt-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="px-4 md:px-12 flex items-center w-full max-w-[480px] h-[470px] sm:h-[576px] rounded-[41px] shadow-sm"
            style={{ backgroundColor: card.bgColor }}
          >
            <ul>
              {card.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start ${index !== 0 ? "mt-5" : ""}`}
                >
                  <Image
                    src={card.icon}
                    width={23}
                    height={23}
                    alt="feature icon"
                  />
                  <li className="ml-3 font-poppins font-bold text-2xl text-[#FFFFFF]">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Premium;

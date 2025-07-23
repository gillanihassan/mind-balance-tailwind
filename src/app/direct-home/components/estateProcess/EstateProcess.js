'use client';
import Image from "next/image";

const estateContent = {
  heading: "買賣流程清晰透明，一站式平台搞掂哂!",
  checklist: [
    "傾好 deal 唔知點？我哋教你簽約，唔使怕。",
    "律師、按揭、裝修資訊一應俱全，全部搵到。",
    "唔洗再打俾 agent 問來問去，自己搞得掂。",
    "慳返佣金同時間，買樓更快更方便。",
  ],
  buttons: [
    { label: "顯示更多", bg: "bg-[#e0af54]", text: "text-white", border: "" },
    { label: "註冊", bg: "bg-[#e3f3f3]", text: "text-[#e0af54]", border: "border border-[#e0af54]" },
  ],
};

export default function EstateProcess() {
  return (
    <div className="max-w-[1400px] mx-auto bg-[#e3f3f3] px-6 md:px-16 py-18 mt-14">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-7/12 order-2 md:order-1 flex justify-center">
          <Image
            src="/assests/direct-home/estateProcess/img.png"
            width={525}
            height={100}
            alt="Picture of the author"
            className="mt-15 md:mt-0"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-5/12 order-1 md:order-2 mt-10 md:mt-10">
          <h2 className="text-[#004f59] font-bold text-[35px] font-inter max-w-[365px] leading-[44px]">
            {estateContent.heading}
          </h2>

          {/* Checklist Items */}
          <div className="space-y-5 mt-10">
            {estateContent.checklist.map((item, index) => (
              <div
                className="flex flex-row items-start" // 👈 important line
                key={index}
              >
                <Image
                  src="/assests/direct-home/estateProcess/check.png"
                  width={24}
                  height={24}
                  alt="check icon"
                  className="shrink-0" // 👈 prevent stretching
                />
                <p
                  className="text-[#808080] font-inter font-normal text-[28px] leading-[37px] ml-3"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {estateContent.buttons.map((btn, index) => (
              <button
                key={index}
                className={`${btn.bg} ${btn.text} ${btn.border} font-inter font-bold text-[16px] px-9 py-3 rounded cursor-pointer`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

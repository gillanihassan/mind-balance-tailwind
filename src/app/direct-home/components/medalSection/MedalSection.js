'use client';

import Image from 'next/image';

export default function MedalSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10 p-4 flex flex-col md:flex-row justify-center items-center">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14">
        {/* Block 1 */}
        <div>
          <div className="flex flex-row w-full max-w-[25rem] bg-[linear-gradient(90deg,_#E3F3F3_25.48%,_rgba(0,130,130,0.2)_100%)] rounded-tl-[12rem] rounded-bl-[12rem] border-none shadow-md overflow-hidden">
            <Image
              src="/assests/direct-home/medalSection/img.png"
              alt="Medal"
              width={162}
              height={162}
              className="object-contain"
            />  
            <div className="flex flex-col justify-center items-start mx-4 text-center">
              <h3 className="text-black font-Inter font-semibold text-[25px]">
                段隨機的文本
              </h3>
              <p className="text-[#004f59] font-Inter font-normal text-[16px] flex items-center">
                這是一段隨
                <Image
                  src="/assests/direct-home/medalSection/arrowRight.png"
                  alt="Arrow Right"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row w-full max-w-[25rem] bg-[linear-gradient(90deg,_#E3F3F3_25.48%,_rgba(0,130,130,0.2)_100%)] rounded-tl-[12rem] rounded-bl-[12rem] border-none shadow-md overflow-hidden">
            <Image
              src="/assests/direct-home/medalSection/img.png"
              alt="Medal"
              width={162}
              height={162}
              className="object-contain"
            />  
            <div className="flex flex-col justify-center items-start mx-4 text-center">
              <h3 className="text-black font-Inter font-semibold text-[25px]">
                段隨機的文本
              </h3>
              <p className="text-[#004f59] font-Inter font-normal text-[16px] flex items-center">
                這是一段隨
                <Image
                  src="/assests/direct-home/medalSection/arrowRight.png"
                  alt="Arrow Right"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row w-full max-w-[25rem] bg-[linear-gradient(90deg,_#E3F3F3_25.48%,_rgba(0,130,130,0.2)_100%)] rounded-tl-[12rem] rounded-bl-[12rem] border-none shadow-md overflow-hidden">
            <Image
              src="/assests/direct-home/medalSection/img.png"
              alt="Medal"
              width={162}
              height={162}
              className="object-contain"
            />  
            <div className="flex flex-col justify-center items-start mx-4 text-center">
              <h3 className="text-black font-['Inter'] font-semibold text-[25px]">
                段隨機的文本
              </h3>
              <p className="text-[#004f59] font-['Inter'] font-normal text-[16px] flex items-center">
                這是一段隨
                <Image
                  src="/assests/direct-home/medalSection/arrowRight.png"
                  alt="Arrow Right"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

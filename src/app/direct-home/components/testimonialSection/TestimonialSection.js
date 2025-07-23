'use client';

import Image from 'next/image';

export default function TestimonialSection() {
  return ( 
    <div className="bg-[#E6F6F8] py-16 px-8 mt-14 h-[1185px] md:h-[585px] w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-7/12">
          <h4 className="mb-5 text-[35px] font-semibold font-Inter text-black text-center">真實用家點講？</h4>
          <Image
            src="/assests/direct-home/testimonial/manPhoto.png"
            alt="User Photo"
            width={380}
            height={463}
            className="mx-auto"
          />
        </div>

        {/* Right Column */}
        <div className="md:w-5/12 mt-10 md:mt-0 md:pl-6">
          {/* First Box */}
          <div className="mb-8" >
            <Image
            src="/assests/direct-home/testimonial/stars.png"
            alt="User Photo"
            width={150}
            height={39}
            className=" mb-4"
          />
            <p className="text-[#808080] text-[18px] font-['Inter'] font-normal mt-2">
              這是一段隨機的文本，用於填充頁面或顯示設計的樣式。設計師通常會使用這種文本來模擬實際的內容，
              幫助客戶更直觀地理解在真實情況的結構，而不受文本內容本身的影響。
              這些文本本身不會承載任何實際的意圖或意圖，而只是為了呈現視覺效果。
            </p>
          </div>

          {/* Second Box */}
          <div className="mt-30">
             <Image
            src="/assests/direct-home/testimonial/stars.png"
            alt="User Photo"
            width={150}
            height={39}
            className=" mb-4"
          />
            <p className="text-[#808080] text-[18px] font-['Inter'] font-normal mt-2">
              這是一段隨機的文本，用於填充頁面或顯示設計的樣式。設計師通常會使用這種文本來模擬實際的內容，
              幫助客戶更直觀地理解在真實情況的結構，而不受文本內容本身的影響。
              這些文本本身不會承載任何實際的意圖或意圖，而只是為了呈現視覺效果。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

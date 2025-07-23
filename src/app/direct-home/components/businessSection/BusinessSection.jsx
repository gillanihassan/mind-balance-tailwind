'use client';

import Image from 'next/image';

const contentData = [
  {
    img: '/assests/direct-home/businessSection/icon-one.png',
    title: '放盤即送物業報告',
    desc: '專業分析單位質素，睇樓前先知底細',
    action: '查看放盤流程',
  },
  {
    img: '/assests/direct-home/businessSection/icon-two.png',
    title: '成交即享獨家禮遇',
    desc: '筍盤即時推薦，買樓前早著先機',
    action: '了解成交流程',
  },
  {
    img: '/assests/direct-home/businessSection/icon-three.png',
    title: '智能配對準買家',
    desc: '專人教你簽、陪你傾，置業唔再怕',
    action: '立即了解服務',
  },
  {
    img: '/assests/direct-home/businessSection/icon-four.png',
    title: '免費影樓級拍攝',
    desc: '專人拍攝單位，突顯賣點更吸睛',
    action: '預約拍攝服務',
  },
  {
    img: '/assests/direct-home/businessSection/icon-five.png',
    title: '資料安全有保障',
    desc: '實名認證，保障買賣雙方利益',
    action: '查看上載流程',
  },
];

export default function BusinessSection() {
  return (
    <div className="max-w-[1400px] mx-auto mt-5 md:mt-10 mb-10 p-4 md:p-6 rounded-md shadow-[0_10px_18px_0_rgba(0,0,0,0.1)] bg-white">
      <div className="flex flex-wrap justify-center gap-6 md:gap-30">
        {contentData.map((item, index) => (
          <div key={index} className="w-[165px] text-start">
            <Image
              src={item.img}
              alt="business image"
              width={68}
              height={68}
            />
            <h5 className="font-inter font-semibold text-xl text-[#000000] mt-4">
              {item.title}
            </h5>
            <p className="font-inter font-normal text-sm leading-[19.74px] text-[#808080] mt-2 w-full max-w-[146px]">
              {item.desc.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="font-inter font-semibold text-sm text-[#E0AF54] mt-5">
              {item.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}






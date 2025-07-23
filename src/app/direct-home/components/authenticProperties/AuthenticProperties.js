'use client';
import Image from "next/image";

const AuthenticProperties = () => {
  const cardData = [
    {
      title: "DirectHome 平台",
      bgColor: "#E3F3F3",
      borderColor: "#D8A53F",
      items: [
        "$0 佣金 / 無隱藏收費",
        "自助放盤，簡單快捷",
        "與買家/租客直接溝通",
        "透明交易、實名認證",
        "隨時 make offer，流程簡單清晰",
        "有人幫手， 有系統教你行晒置業流程",
      ],
    },
    {
      title: "傳統地產代理",
      bgColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      items: [
        "高佣金 + 額外服務費",
        "需依賴經紀處理",
        "需透過經紀聯絡，過程繁複",
        "資訊不對稱，風險較高",
        "多重轉介，流程拖延",
        "缺乏清晰支援，靠經驗摸索",
      ],
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto bg-[#004F59] rounded-[28px] p-4 md:p-10 mt-17">
      <button className="font-inter bg-white text-[#004F59] rounded-md text-sm font-medium px-4 py-2 mb-3">
        幫你查冊，唔怕假盤！
      </button>

      <h2 className="font-inter text-white text-[28px] leading-[36px] md:text-[35px] font-semibold max-w-[600px] md:leading-[44px]">
        買樓遇假盤？怕遇人不熟？DirectHome 已經查冊認證所有放盤，
        幫你過濾風險，睇樓安心無煩惱。
      </h2>

      <div className="grid xl:grid-cols-2 gap-6 items-center">
        <div className="relative top-12 lg:top-10 md:top-16 sm:top-0 flex justify-center xl:justify-start">
          <Image
            src="/assests/direct-home/authentic/imgOne.png"
            width={500}
            height={500}
            alt="authentic property"
          />
        </div>

        <div className="flex justify-center ">
          <div className="grid md:grid-cols-2 gap-6 mt-15 xl:mt-0">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-[15px] w-72 p-8"
              style={{
                backgroundColor: card.bgColor,
                border: `2px solid ${card.borderColor}`,
              }}
            >
              <h3 className="text-[#0B1B32] font-semibold text-[22px] border-b border-[#0B1B32]/30 pb-2 mb-20">
                {card.title}
              </h3>
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-2 mb-4 ">
                  <Image
                    src="/assests/direct-home/authentic/checkCircle.png"
                    width={18}
                    height={18}
                    alt="check icon"
                  />
                  <p className="text-[#0B1B32] text-[16px] font-normal">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticProperties;

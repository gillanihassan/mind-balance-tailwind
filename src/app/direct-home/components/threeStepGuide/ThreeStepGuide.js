'use client';

import Image from 'next/image';

const cardData = [
  {
    type: 'single',
    icon: '/assests/direct-home/threeStepGuide/circle.png',
    title: 'Upload new listing',
    heading: '放盤登記',
    description: '只需少過5分鐘填寫資料，即可免費放盤',
  },
  {
    type: 'users',
    heading: 'Verified Buyers & Sellers!',
    users: [
      {
        name: 'Kishor Webb',
        role: 'Buyer',
        avatar: '/assests/direct-home/threeStepGuide/imgOne.png',
        check: '/assests/direct-home/threeStepGuide/checkCircle.png',
      },
      {
        name: 'Kishor Webb',
        role: 'Buyer',
        avatar: '/assests/direct-home/threeStepGuide/man.png',
        check: '/assests/direct-home/threeStepGuide/checkCircle.png',
      },
      {
        name: 'Kishor Webb',
        role: 'Buyer',
        avatar: '/assests/direct-home/threeStepGuide/imgOne.png',
        check: '/assests/direct-home/threeStepGuide/checkCircle.png',
      },
    ],
    bottomTitle: '放盤登記',
    bottomDesc: '只需少過5分鐘填寫資料，即可免費放盤',
  },
  {
    type: 'chat',
    messages: [
      { from: 'left', text: 'I would be glad to help' },
      { from: 'right', text: 'I would be glad to help' },
      { from: 'right', text: 'I would be glad to help' },
    ],
    user: {
      name: 'Kishor',
      avatar: '/assests/direct-home/threeStepGuide/imgOne.png',
    },
    crossIcon: '/assests/direct-home/threeStepGuide/cross.png',
    plusIcon: '/assests/direct-home/threeStepGuide/plusCircle.png',
    sendIcon: '/assests/direct-home/threeStepGuide/send.png',
    bottomTitle: '放盤登記',
    bottomDesc: '只需少過5分鐘填寫資料，即可免費放盤',
  },
];

export default function ThreeStepFlow() {
  return (
    <div className="text-center py-10 w-full max-w-[1400px] mx-auto mt-10">
      <h2 className="text-black font-semibold text-[35px] font-['Inter']">
        簡單三步，搞掂放盤買賣
      </h2>
      <p className="mt-4 mb-10 text-gray-500 font-['Inter'] text-[18px] font-normal">
        從登記到成交，全都一步步清晰完成， 唔使煩惱記
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-cover bg-center bg-no-repeat px-4">
        {cardData.map((card, index) => (
          <div key={index} className="bg-transparent h-full w-full max-w-[404px]">
            <div className="bg-[#ead2a5] shadow-sm rounded-2xl p-10 flex justify-center items-center">
              {card.type === 'single' && (
                <div className="flex flex-col justify-center items-center w-full max-w-[270px] bg-white rounded-md min-h-[320px] shadow-md">
                  <div className="border rounded-full flex justify-center items-center w-[60px] h-[60px]">
                    <Image src={card.icon} width={75} height={75} alt="circle" />
                  </div>
                  <h6 className="mt-5 text-[#0c2340] font-semibold text-[16px] font-['Inter']">
                    {card.title}
                  </h6>
                </div>
              )}

              {card.type === 'users' && (
                <div className="flex flex-col justify-start items-start p-4 bg-white max-w-[270px] rounded-md shadow-md w-full min-h-[320px]">
                  <h5 className="text-start mb-3 text-[#111235] font-semibold text-[24px] font-['Inter']">
                    {card.heading}
                  </h5>
                  {card.users.map((user, i) => (
                    <div key={i} className="flex mt-3 items-center">
                      <Image src={user.avatar} width={40} height={40} alt={user.name} />
                      <div className="ml-3">
                        <p className="mb-0 text-[#111235] text-[16px] font-medium font-['Inter']">
                          {user.name}
                        </p>
                        <p className="text-start text-[#6c6c6c] text-[12px] font-semibold font-['Inter'] flex items-center">
                          <Image src={user.check} width={11} height={11} alt="Check" />
                          {user.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {card.type === 'chat' && (
                <div className="flex flex-col justify-start items-start p-4 bg-white max-w-[270px] rounded-md shadow-md w-full min-h-[320px]">
                  <div className="bg-white w-full rounded-lg px-3 py-2">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center">
                        <Image src={card.user.avatar} width={40} height={40} alt="User" />
                        <p className="mb-0 ml-2">{card.user.name}</p>
                      </div>
                      <Image src={card.crossIcon} width={20} height={20} alt="Close" />
                    </div>

                    <p className="mt-4 text-gray-400">Wed 6:55 AM</p>

                    {card.messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`text-${msg.from} mt-4`}
                      >
                        <p
                          className={`inline-block ${
                            msg.from === 'left'
                              ? 'bg-[#004f59] rounded-br-xl'
                              : 'bg-[#d8a53f] rounded-bl-xl'
                          } text-white rounded-t-xl py-2 px-4 text-sm font-['Inter']`}
                        >
                          {msg.text}
                        </p>
                      </div>
                    ))}

                    <div className="flex justify-between items-center w-full mt-4">
                      <div className="flex items-center mt-1">
                        <Image src={card.plusIcon} width={20} height={20} alt="Plus" />
                        <input
                          type="text"
                          placeholder="Aa"
                          className="mx-3 px-3 py-1 rounded-md border border-gray-300 focus:outline-none w-full max-w-[150px]"
                        />
                      </div>
                      <Image src={card.sendIcon} width={24} height={24} alt="Send" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Text (same for all) */}
            <div className="mt-3">
              <h5 className="text-black text-[25px] font-semibold font-['Inter']">
                {card.bottomTitle || card.heading}
              </h5>
              <p className="mt-3 text-gray-500 text-[18px] max-w-[216px] mx-auto font-['Inter']">
                {card.bottomDesc || card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

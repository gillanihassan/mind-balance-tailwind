'use client';

import Image from 'next/image';

export default function OverviewSection() {
    return (
        <div className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-10 mt-0">
            {/* Top Heading */}
            <div className="text-center mb-10">
                <h2 className="text-[32px] font-bold text-black font-Inter">
                    這是一段隨機的文本
                </h2>
                <p className="mt-4 text-[#808080] text-[18px] font-Inter font-normal">
                    這是一段隨機的文本，用於填充頁面或展示設計
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-10">
                {/* First Card */}
                <div className="relative rounded-[23px] overflow-hidden w-full max-w-[627px] h-[331px] md:w-1/2">
                    <Image
                        src="/assests/direct-home/overviewSection/imgOne.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#025858A1] via-[#025858A1] to-[#001C1C7D] z-10 rounded-[22px]" />
                    <div className="absolute bottom-0 p-6 z-20">
                        <h5 className="text-white text-[25px] font-semibold font-Inter max-w-[390px]">
                            這是一段隨機的文本，用於填充頁面或展示設計的格式。設計師通常
                        </h5>
                        <p className="mt-2 text-white text-[16px] font-normal font-Inter">
                            這是一段隨機的文本 →
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative rounded-[23px] overflow-hidden w-full max-w-[627px] h-[331px] md:w-1/2">
                    <Image
                        src="/assests/direct-home/overviewSection/imgOne.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#025858A1] via-[#025858A1] to-[#001C1C7D] z-10 rounded-[22px]" />
                    <div className="absolute bottom-0 p-6 z-20">
                        <h5 className="text-white text-[25px] font-semibold font-Inter max-w-[390px]">
                            這是一段隨機的文本，用於填充頁面或展示設計的格式。設計師通常
                        </h5>
                        <p className="mt-2 text-white text-[16px] font-normal font-Inter">
                            這是一段隨機的文本 →
                        </p>
                    </div>
                </div>
            </div>

            {/* Subscription Box */}
            <div className="bg-[#E0AF54] rounded-[28px] p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Text Column */}
                    <div className="md:w-1/2">
                        <h4 className="text-white text-[40px] font-bold font-['Inter']">
                            訂閱更新
                        </h4>
                        <p className="text-white text-[18px] font-normal font-['Inter'] mt-2">
                            輸入電郵，即可接收最新發布、報告及平台資訊
                        </p>
                    </div>

                    {/* Input Column */}
                    <div className="md:w-1/2 w-full">
                        <div className="flex w-full overflow-hidden rounded-md ">
                            <input
                                type="text"
                                placeholder="請輸入您的電子郵件"
                                className="flex-1 py-4 px-6 text-base font-['Inter'] outline-none border-none bg-[#FFFFFF]"
                            />
                            <button className="bg-[#004F59] text-white px-6 py-4 text-base font-['Inter']">
                                訂閱
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';
import Image from 'next/image';

export default function SellingSection() {
    return (
        <div className="mx-auto w-full max-w-[1400px] bg-gradient-to-b from-[#d8a53f] to-[#d8a53f00] py-12 px-4 md:px-16 flex flex-col justify-between items-center h-[716px]">
            {/* Top Text Section */}
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-[#0b1b32] font-semibold font-[Inter] text-[45px] leading-[58px] sm:text-[52px] sm:leading-[68px] md:text-[60px] md:leading-[80px] max-w-[735px] w-full">
                    為何要俾多啲？ 買賣物業，按你方式進行。
                </h2>
                <p className="mt-4 text-[#0b1b32] font-[Inter] text-[18px] leading-[24px] max-w-[400px] w-full">
                    唔使搵經紀，唔使俾佣金 — DirectHome 由頭帶你去到尾，買賣自主又清晰。
                </p>
            </div>

            {/* Bottom Image Section */}
            <div className="mt-16">
                <Image
                    src="/assests/direct-home/sellingSection/groupPhoto.png"
                    alt="Group"
                    width={900}
                    height={100}
                    className="relative top-[4.2rem] md:top-[1.3rem] sm:top-[10.3rem]"   
                />
            </div>
        </div>
    );
}

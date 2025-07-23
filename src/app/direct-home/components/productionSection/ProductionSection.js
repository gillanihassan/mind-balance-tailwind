'use client';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const cardsData = [
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
  {
    image: "/assests/direct-home/product/productPhoto.png",
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    heartIcon: "/assests/direct-home/product/hurtLogo.png",
    icons: [
      { icon: "/assests/direct-home/product/logoOne.png", label: "X 房" },
      { icon: "/assests/direct-home/product/logoTwo.png", label: "X 浴室" },
      { icon: "/assests/direct-home/product/logoThree.png", label: "建築" },
      { icon: "/assests/direct-home/product/logoFour.png", label: "實用" }
    ]
  },
];

export default function ProductionSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-20 px-4" >
      {/* Header */}
      <div className="flex justify-center mb-8">
        <h2 className="flex items-center text-2xl md:text-[28px] font-medium font-['Inter']">
          <span className="text-[#004f59]">最新售盤及即走盤</span>
          <span className="text-[#004f59] mx-4">|</span>
          <span className="text-[#0b1b32]/20">最新租盤及即走盤</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <Card key={index} className="w-[25rem] overflow-hidden shadow-md py-0">
            <Image
              src={card.image}
              width={400}
              height={264}
              alt="property photo"
            />
            <CardContent className="p-3 py4">
              <div className="flex justify-between items-center">
                <h3 className="text-[#0b1b32] font-inter font-normal text-lg">
                  {card.title}
                </h3>
                <Image
                  src={card.heartIcon}
                  width={20}
                  height={20}
                  alt="heart icon"
                />
              </div>
              <p className="text-[#e0af54] font-inter font-normal text-2xl mt-2">{card.price}</p>
              <p className="flex items-center gap-2 mt-1 text-[#0b1b32] text-sm font-inter font-normal">
                <Image
                  src="/assests/direct-home/product/mapPin.png"
                  width={20}
                  height={20}
                  alt="map pin"
                />
                {card.location}
              </p>
              <div className="flex gap-3 flex-wrap mt-4">
                {card.icons.map((iconItem, idx) => (
                  <div key={idx} className="flex items-center text-xs text-[#0b1b32] font-inter">
                    <Image
                      src={iconItem.icon}
                      width={15}
                      height={13}
                      alt="icon"
                    />
                    <span className="ml-2">{iconItem.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#e0af54] text-white font-inter font-bold text-base py-3 px-10 rounded hover:brightness-110 transition">
          顯示更多
        </button>
      </div>
    </div>
  );
}

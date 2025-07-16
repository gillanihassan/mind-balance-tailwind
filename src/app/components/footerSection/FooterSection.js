import Link from "next/link";
import Image from "next/image";

const footerData = [
  {
    heading: "Our Recent Articles",
    items: [
      "Mind Matters – The Chiropractic Approach to Personal Growth",
      "Mind Balance – 100 Innovative Ways it Can Unleash Your Full Potential",
      "MindBalance not only helps individuals but couples stay together longer",
      "See MORE On SmartGuy",
    ],
  },
  {
    heading: "Support",
    items: [
      "About Us",
      "Contact Us",
      "FAQs",
      "Testimonials",
      "Advertise",
      "Affiliates",
    ],
  },
  {
    heading: "About Us",
    items: [
      "About Us",
      "How MindBalance Works",
      "The First Step",
      "Partnerships",
      "Press and Media",
    ],
  },
];

const socialIcons = [
  { src: "/images/footer/facebook.png", alt: "Facebook" },
  { src: "/images/footer/instagram.png", alt: "Instagram" },
  { src: "/images/footer/linkedin.png", alt: "LinkedIn" },
  { src: "/images/footer/twitter.png", alt: "Twitter" },
  { src: "/images/footer/youtube.png", alt: "YouTube" },
];

function FooterSection() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-25 flex flex-col md:flex-row justify-center gap-6 md:gap-14">
      {/* Dynamic Lists */}
      {footerData.map((section, index) => (
        <div key={index}>
          <h2 className="font-roboto font-bold text-xl text-[#000000]">
            {section.heading}
          </h2>
          <ul className="space-y-1 mt-2">
            {section.items.map((item, i) => (
              <li key={i} className="font-poppins font-normal text-[#28282B]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Social Icons Section */}
      <div>
        <h2 className="font-roboto font-bold text-xl text-[#000000]">
          Follow us
        </h2>
        <div className="flex mt-0 gap-2">
          {socialIcons.map((icon, i) => (
            <div key={i}>
              <Image src={icon.src} width={40} height={40} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterSection;

'use client';

import Image from 'next/image';

const footerLinks = [
  ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
];

const contactInfo = [
  {
    icon: '/assests/direct-home/footerSection/iconOne.svg',
    lines: [
      '地址: 中國某城市',
      '4樓 03室-1958',
      '某社 Incomoda 1140室',
      '某材料 - 某商住証',
    ],
  },
  {
    icon: '/assests/direct-home/footerSection/iconTwo.png',
    lines: ['(xx) (x) xxx xx xx'],
  },
  {
    icon: '/assests/direct-home/footerSection/iconFour.png',
    lines: ['contacto@directhome.com'],
  },
];

const socialIcons = [
  '/assests/direct-home/footerSection/iconFive.png',
  '/assests/direct-home/footerSection/iconSix.png',
  '/assests/direct-home/footerSection/iconSeven.png',
  '/assests/direct-home/footerSection/iconEight.png',
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#004F59]">
        <div className="w-full max-w-[1400px] mx-auto px-4 py-6 sm:p-10">
          {/* Logo */}
          <div className="my-8">
            <Image
              src="/assests/direct-home/footerSection/footerLogo.png"
              width={226}
              height={28}
              alt="Footer Logo"
            />
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col md:flex-row mb-10">
            {/* Left Links */}
            <div className="md:w-6/12">
              <div className="flex flex-col sm:flex-row">
                {footerLinks.map((group, index) => (
                  <div className="flex-1" key={index}>
                    <h6 className="mb-4 text-[#f2f2f2] font-bold text-[27px] font-Inter">
                      相關連結
                    </h6>
                    <ul className="space-y-1">
                      {group.map((item, i) => (
                        <li
                          key={i}
                          className="text-[#ededed] font-['Source Sans 3'] text-[20px] font-normal py-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Info */}
            <div className="md:w-6/12 flex justify-start md:justify-center mt-12 md:mt-0">
              <div>
                <h6 className="mb-5 text-[#f2f2f2] font-bold text-[27px] font-['Inter']">
                  聯絡
                </h6>

                {contactInfo.map((contact, idx) => (
                  <div
                    className="flex flex-row justify-start items-start mb-4"
                    key={idx}
                  >
                    <Image
                      src={contact.icon}
                      width={24}
                      height={24}
                      alt="Contact Icon"
                    />
                    <p className="ml-3 text-white text-[16px] font-['Inter'] font-normal">
                      {contact.lines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i !== contact.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="my-8">
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  width={31}
                  height={31}
                  alt={`social-icon-${i}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#ead2a5] pt-4 flex flex-col md:flex-row justify-between text-white text-sm">
            <div className="mb-2 md:mb-0">© 2025 DirectHome 版權所有</div>
            <div>使用條款 | 隱私政策</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

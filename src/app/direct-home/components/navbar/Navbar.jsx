import React from 'react'

function Navbar() {
    return (
         <nav className="bg-white mt-2 max-w-[1400px] mx-auto">
            <div className="max-w-screen-1xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-6">
             
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="/assests/direct-home/navbar/logo.png"
                        className="w-36 h-5 md:w-56 md:h-7"
                        alt="Flowbite Logo"
                    />
                </a>
               
                <div className="flex md:order-2 space-x-3 rtl:space-x-reverse items-center">
                 
                    <div className="hidden md:flex space-x-3">
                        <button
                            type="button"
                            className="bg-[#FFFFFF] border border-[#E0AF54] rounded-[5px] px-7 py-[6px] text-[#E0AF54] font-normal text-base cursor-pointer"
                        >
                            註冊
                        </button>
                        <button
                            type="button"
                            className="bg-[#E0AF54] border border-[#E0AF54] rounded-[5px] px-7 py-[6px] text-[#FFFFFF] font-normal text-base cursor-pointer"
                        >
                            登入
                        </button>
                    </div>
                   
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
               
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                買樓
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                租屋
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                新盤
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                置業按揭
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                自助放盤
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#000000] font-normal tracking-[0.8px] text-base leading-9">
                                更多服務
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
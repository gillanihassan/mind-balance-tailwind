'use client';

export default function FormCalculator() {
    return (
        <div className="w-full max-w-[1400px] mx-auto mt-14 bg-[#e3f3f3] rounded-[28px] px-4 py-7 md:py-10">
            <div className="flex flex-col md:flex-row p-1 md:p-3">
                {/* Heading */}
                <div className="md:w-6/12">
                    <h2 className="text-[#004f59] font-semibold text-[38px] font-Inter text-center md:text-left mb-8 md:mb-0">
                        按揭計算
                    </h2>
                </div>

                {/* Static Form */}
                <div className="md:w-6/12 flex justify-center items-center">
                    <div className="bg-white rounded-[17px] w-full p-4 md:p-10">
                        <form>
                            {/* Row 1 */}
                            <div className="flex flex-col lg:flex-row gap-9 mb-6">
                                {/* Field 1 */}
                                <div className="w-full lg:w-1/2">
                                    <label className="block text-black text-[24px] font-Inter mb-2">物業價值</label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="X,XXX,XXX"
                                            className="w-full border border-[#ead2a5] px-4 py-3 rounded-[10px]"
                                        />
                                    </div>
                                </div>

                                {/* Field 2 */}
                                <div className="w-full lg:w-1/2">
                                    <label className="block text-black text-[24px] font-Inter mb-2">
                                        按揭年息
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="X,XXX,XXX"
                                            className="w-full border border-[#ead2a5] px-4 py-3 rounded-l-[10px]"
                                        />
                                        <div className="bg-[#ead2a5] w-[50px] shrink-0 flex items-center justify-center text-[24px] text-black font-Inter border border-l-0 border-[#ead2a5] rounded-r-[10px]">
                                            %
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col lg:flex-row gap-9 mb-6">
                                {/* Field 3 */}
                                <div className="w-full lg:w-1/2">
                                    <label className="block text-black text-[24px] font-Inter mb-2">貸款比率</label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="X,XXX,XXX"
                                            className="w-full border border-[#ead2a5] px-4 py-3 rounded-l-[10px]"
                                        />
                                        <div className="bg-[#ead2a5] w-[50px] shrink-0 flex items-center justify-center text-[24px] text-black font-Inter rounded-r-[10px]">
                                            年
                                        </div>
                                    </div>
                                </div>

                                {/* Field 4 */}
                                <div className="w-full lg:w-1/2">
                                    <label className="block text-black text-[24px] font-Inter mb-2">按揭還款期</label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="X,XXX,XXX"
                                            className="w-full border border-[#ead2a5] px-4 py-3 rounded-l-[10px]"
                                        />
                                        <div className="bg-[#ead2a5] w-[50px] shrink-0 flex items-center justify-center text-[24px] text-black font-Inter rounded-r-[10px]">
                                            %
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#004f59] hover:bg-[#004f59] text-white font-Inter text-[18px] font-normal px-5 py-4 mt-16 rounded-[5px]"
                            >
                                按揭計算
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';

export default function FormCalculator() {
    const formFields = [
        {
            label: '物業價值',
            placeholder: 'X,XXX,XXX',
            unit: null,
        },
        {
            label: '按揭年息',
            placeholder: 'X,XXX,XXX',
            unit: '%',
        },
        {
            label: '貸款比率',
            placeholder: 'X,XXX,XXX',
            unit: '年',
        },
        {
            label: '按揭還款期',
            placeholder: 'X,XXX,XXX',
            unit: '%',
        },
    ];

    const [formData, setFormData] = useState({});

    const handleChange = (index, value) => {
        setFormData((prev) => ({
            ...prev,
            [index]: value,
        }));
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto mt-14 bg-[#e3f3f3] rounded-[28px] px-4 py-7 md:py-10">
            <div className="flex flex-col md:flex-row p-1 md:p-3">
                {/* Heading */}
                <div className="md:w-6/12">
                    <h2 className="text-[#004f59] font-semibold text-[38px] font-Inter text-center md:text-left mb-8 md:mb-0">
                        按揭計算
                    </h2>
                </div>

                {/* Form */}
                <div className="md:w-6/12 flex justify-center items-center">
                    <div className="bg-white rounded-[17px] w-full p-4 md:p-10">
                        <form>
                            {/* Dynamically rendered rows, 2 per row */}
                            <div className="flex flex-col gap-6">
                                {formFields.reduce((rows, field, index) => {
                                    if (index % 2 === 0) {
                                        rows.push(formFields.slice(index, index + 2));
                                    }
                                    return rows;
                                }, []).map((row, rowIndex) => (
                                    <div key={rowIndex} className="flex flex-col lg:flex-row gap-9">
                                        {row.map((field, i) => {
                                            const fieldIndex = rowIndex * 2 + i;
                                            return (
                                                <div key={fieldIndex} className="w-full lg:w-1/2">
                                                    <label className="block text-black text-[24px] font-Inter mb-2">{field.label}</label>
                                                    <div className="flex">
                                                        <input
                                                            type="text"
                                                            placeholder={field.placeholder}
                                                            value={formData[fieldIndex] || ''}
                                                            onChange={(e) => handleChange(fieldIndex, e.target.value)}
                                                            className="w-full border border-[#ead2a5] px-4 py-3"
                                                        />
                                                        {field.unit && (
                                                            <div className="bg-[#ead2a5] w-[50px] shrink-0 flex items-center justify-center text-[24px] text-black font-Inter">
                                                                {field.unit}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#004f59] hover:bg-[#004f59] text-white font-Inter text-[18px] font-normal px-5 py-4 mt-16"
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

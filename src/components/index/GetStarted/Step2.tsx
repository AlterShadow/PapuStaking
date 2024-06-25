'use client'
import React, { useState, MouseEvent } from 'react';
import { IoIosCheckmark } from "react-icons/io";
import Image from 'next/image';
interface Step1Props {
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

const Step2: React.FC<Step1Props> = ({ handleNextPage, handlePreviousPage }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const data = [
        {
            month: "1 month",
            amount: "≈ 10.48%",
            status: "Annual Percentage Yield"
        },
        {
            month: "1 month",
            amount: "≈ 16.76%",
            status: "Annual Percentage Yield"
        },
        {
            month: "1 month",
            amount: "≈ 25.14%",
            status: "Annual Percentage Yield"
        },
        {
            month: "1 month",
            amount: "≈ 33.52%",
            status: "Annual Percentage Yield"
        },
    ];

    const handleNextstep = (e: MouseEvent) => {
        e.preventDefault();
        if (selectedIndex === null) {
            return;
        } else {
            handleNextPage();
        }
    }

    const handleSelection = (index: number) => {
        setSelectedIndex(index);
    }

    return (
        <div className='p-3 flex flex-col gap-2'>
            <div className='grid lg:grid-cols-3  grid-cols-3 gap-4 w-full justify-between lg:px-[3%] px-3'>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px] lg:px-5 px-1 py-2'> <Image src={"/img/wal.svg"} height={15} width={15} alt='' /> Amount</button>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px]  px-1 py-2'> <Image src={"/img/duration.svg"} height={15} width={15} alt='' /> Duration</button>
                <button className='bg-transparent bg-opacity-50 border-[#ffffff] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px] lg:px-5 px-1 py-2'> <Image src={"/img/lock.svg"} height={15} width={15} alt='' /> Review</button>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='lg:text-[30px] md:text-[20px] text-[16px] font-semibold'>How much would you like to stake?</p>
                <p className='lg:text-[18px] text-[16px]'>Choose terms that fit your financial goals. You can claim rewards at any time.</p>
            </div>
            <div className='p-6 grid md:grid-cols-2  grid-cols-1 w-full gap-3'>
                {
                    data.map((d, i) => {
                        const isSelected = selectedIndex === i;
                        return (
                            <div
                                key={i}
                                className={`border-2 cursor-pointer p-3 rounded-xl flex flex-col gap-2 ${isSelected ? 'border-[#FFB11D] bg-[#FFB11D] bg-opacity-55' : 'border-white'}`}
                                onClick={() => handleSelection(i)}
                            >
                                <div className='w-full flex justify-between items-center'>
                                    <div>
                                        <button className='p-2 rounded-xl bg-[#FFB11D] bg-opacity-55 border-[#FFB11D]'>{d.month}</button>
                                    </div>
                                    <div className={`w-[20px] h-[20px] rounded-full items-center justify-center border-2 ${isSelected ? 'bg-[#FFB11D]' : ''}`}>
                                        {
                                            isSelected ? <IoIosCheckmark className='text-white' /> : ""
                                        }
                                    </div>
                                </div>
                                <p className='lg:text-[22px] md:text-[17px] text-[13px] font-bold'>{d.amount}</p>
                                <p className='lg:text-[16px] md:text-[12px] text-[10px]'>{d.status}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <button
                    className={`text-3xl font-bold text-white border-2 rounded-[10px] flex justify-center py-1 border-dashed ${selectedIndex === null ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#FFB11D] bg-opacity-55 border-[#FFB11D]'}`}
                    onClick={handleNextstep}
                    disabled={selectedIndex === null}
                >
                    Next
                </button>
                <button className='text-3xl font-bold text-white border-2 rounded-[10px] flex justify-center py-1 border-dashed' onClick={handlePreviousPage}>Back</button>
            </div>
        </div>
    );
}

export default Step2;

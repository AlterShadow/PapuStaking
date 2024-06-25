'use client'
import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
interface Step1Props {
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

const Step2: React.FC<Step1Props> = ({ handleNextPage, handlePreviousPage }) => {
    const [range, setRange] = useState<number>(0)

    const data = [
        {
            month:"1 month",
            amount: "≈ 10.48%",
            status:"Annual Percentage Yield"
        },
        {
            month:"1 month",
            amount: "≈ 16.76%",
            status:"Annual Percentage Yield"
        },
        {
            month:"1 month",
            amount: "= 10.48%",
            status:"Annual Percentage Yield"
        },
        {
            month:"1 month",
            amount: "= 10.48%",
            status:"Annual Percentage Yield"
        },
    ]
    const handleNextstep = (e: MouseEvent) => {
        e.preventDefault();
        if (range === 0) {
            return;
        } else {
            handleNextPage();
        }
    }
    return (
        <div className='p-3 flex flex-col gap-4'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 gap-4 w-full justify-between lg:px-[3%] px-3'>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/wal.svg"} height={20} width={20} alt='' /> Amount</button>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/duration.svg"} height={20} width={20} alt='' /> Duration</button>
                <button className='bg-transparent bg-opacity-50 border-[#ffffff] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/lock.svg"} height={20} width={20} alt='' /> Review</button>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='lg:text-[30px] md:text-[20px] text-[16px] font-semibold'>How much would you like to stake?</p>
                <p className='lg:text-[18px] text-[16px]'>Choose terms that fit your financial goals. You can claim rewards at any time.</p>
            </div>
            <div className='p-6 grid md:grid-cols-2 grid-cols-1 w-full '>

            </div>
            <div className='flex flex-col gap-3 w-full'>
                <button className='text-3xl font-bold text-white  border-2 rounded-[10px] flex justify-center py-3' onClick={handleNextstep}>Next</button>
                <button className='text-3xl font-bold text-white  border-2 rounded-[10px] flex justify-center py-3' onClick={handlePreviousPage}>Previous</button>
            </div>
        </div>
    );
}

export default Step2;

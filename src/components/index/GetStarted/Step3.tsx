'use client'
import React, { useState, MouseEvent } from 'react';
import { IoIosCheckmark } from "react-icons/io";
import Image from 'next/image';
interface Step1Props {
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

const Step3: React.FC<Step1Props> = ({ handleNextPage, handlePreviousPage }) => {

    const handleNextstep = (e: MouseEvent) => {
        e.preventDefault();

        handleNextPage();
    }

    return (
        <div className='p-3 flex flex-col gap-2'>
            <div className='grid lg:grid-cols-3  grid-cols-3 gap-4 w-full justify-between lg:px-[3%] px-3'>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px] lg:px-5 px-1 py-2'> <Image src={"/img/wal.svg"} height={15} width={15} alt='' /> Amount</button>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px]  px-1 py-2'> <Image src={"/img/duration.svg"} height={15} width={15} alt='' /> Duration</button>
                <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[18px] lg:w-fit flex flex-row items-center gap-3 text-[14px] lg:px-5 px-1 py-2'> <Image src={"/img/lock.svg"} height={15} width={15} alt='' /> Review</button>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='lg:text-[30px] md:text-[20px] text-[16px] font-semibold'>Review and Confirm</p>
                <p className='lg:text-[18px] text-[16px]'>Make sure the amount and the terms of your stake are correct. Click confirm to start earning rewards!</p>
            </div>
            <div className=' bg-opacity-50 border-[#ffffff] border-2 rounded-[10px] p-2 flex flex-col gap-3'>
                <div className='flex w-full flex-row justify-between'>
                    <span>
                        <Image src={"/img/papulogo.svg"} width={80} height={80} alt='' />
                    </span>
                    <div className='lg:text-[32px] md:text-[16px] flex flex-col items-end text-[12px] font-bold leading-none'>
                        <p>5,00</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[18px] text-white text-opacity-55'>Selected Duration Time</p>
                        <p className='text-white font-semibold'>1 months</p>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[18px] text-white text-opacity-55'>Multiplier</p>
                        <p className='text-white font-semibold'>1,35</p>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-[18px] text-white text-opacity-55'>APY</p>
                        <p className='text-white font-semibold'>10.43%</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <button
                    className={`lg:text-2xl font-bold text-white border-2 bg-[#FFB11D] bg-opacity-55 rounded-[10px] flex justify-center py-1 border-dashed `}
                    onClick={handleNextstep}

                >
                    Confirm
                </button>
                <button className='lg:text-2xl font-bold text-white border-2 rounded-[10px] flex justify-center py-1 border-dashed' onClick={handlePreviousPage}>Back</button>
            </div>
        </div>
    );
}

export default Step3;

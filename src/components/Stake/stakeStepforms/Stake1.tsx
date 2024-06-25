'use client'
import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
interface Step1Props {
    handleNextPage: () => void;
}

const Stake1: React.FC<Step1Props> = ({ handleNextPage }) => {
    const [range, setRange] = useState<number>(0)

    const handleNextstep = (e: MouseEvent) => {
        e.preventDefault();
        if (range === 0) {
            return;
        } else {
            handleNextPage()
        }
    }
    const handleclose = () => {
        window.location.reload();
    }
    return (
        <form className='p-3 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <p className='lg:text-[18px] text-[16px]'>You can still claim your TOKEN any time you want, your rewards are safe and you will not lose earned rewards even if you unstake your PAPU.</p>
            </div>
            <div className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] p-2 flex flex-col gap-3'>
                <div className='flex w-full flex-row justify-between'>
                    <span>
                        <Image src={"/img/papulogo.svg"} width={80} height={80} alt='' />
                        <div className='flex flex-row items-center gap-1'>
                            <p className='lg:text-[16px] text-[12px] font-bold text-white'>balance:</p>
                            <p className='lg:text-[16px] text-[12px] text-white'>1</p>
                        </div>
                    </span>
                    <div className='lg:text-[32px] md:text-[16px] flex flex-col items-end text-[12px] font-bold leading-none'>
                        <p>0.00</p>
                        <p className='text-[#FFB11D] lg:text-[24px] md:text-[14px] text-[10px]'>Max</p>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center flex-col'>
                    <input type="range" value={range} onChange={(e) => setRange(Number(e.target.value))} className='w-[70%] accent-[#FFB11D] p-2' min={0} max={1000} name="" id="" />
                    {
                        range && (
                            <p>{range}</p>
                        )
                    }
                </div>
            </div>
            <div>
                <p className='lg:text-[20px] md:text-[16px] text-[12px]'>REVIEW AND CONFIRMATION</p>
                <div className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] p-2 flex flex-col gap-3'>
                    {
                        range > 0 ?
                            <div>
                                <div className='flex flex-row w-full justify-between'>
                                    <p className='text-white text-opacity-55 font-semibold'>Unstake Date</p>
                                    <p className='text-[#FFB11D] font-bold'>21/09/2024</p>
                                </div>
                                <p>Unstaking your PAPU before due time will incur a penalty fee of 5.0%</p>
                                <div className='flex flex-row w-full justify-between'>
                                    <p className='text-white text-opacity-55 font-semibold'>Penalty Fee</p>
                                    <p className='text-[#FFB11D] font-bold'>0.05 PAPU</p>
                                </div>
                            </div>
                            :
                            <div className='flex flex-row w-full justify-between'>
                                <p className='text-white text-opacity-55 font-semibold'>Unstake Date</p>
                                <p className='text-white font-bold'>21/09/2024</p>
                            </div>
                    }
                </div>
            </div>
            <button className={`lg:text-2xl font-bold text-white border-dashed  border-2 rounded-[10px] flex justify-center py-3 ${range > 0 ? "bg-[#FFB11D] bg-opacity-50" : "flex cursor-not-allowed"} `} onClick={handleNextstep}>confirm Unstake</button>
            <button className={`lg:text-2xl font-bold text-white border-dashed  border-2 rounded-[10px] flex justify-center py-3 ${range > 0 ? "bg-[#FFB11D] bg-opacity-50" : "flex cursor-not-allowed"} `} onClick={handleclose}>Cancel</button>
        </form>
    );
}

export default Stake1;

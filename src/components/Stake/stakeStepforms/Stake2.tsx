'use client'
import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
interface Step1Props {
    handleNextPage: () => void;
}

const Stake2: React.FC<Step1Props> = ({ handleNextPage }) => {
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
                <div className='flex w-full flex-row justify-between items-center'>
                    <span>
                        <Image src={"/img/papulogo.svg"} width={80} height={80} alt='' />
                    </span>
                    <div className='lg:text-[32px] md:text-[16px] flex flex-col items-end text-[12px] font-bold leading-none'>
                        <p className='text-[#FFB11D] lg:text-[24px] md:text-[14px] text-[10px]'>0.0000001</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 w-full flex flex-col gap-2'>
                <button className={`lg:text-2xl font-bold text-white border-dashed  border-2 rounded-[10px] flex justify-center py-1 bg-[#FFB11D] bg-opacity-50`} onClick={handleNextstep}>confirm claim Rewards</button>
                <button className={`lg:text-2xl font-bold text-white border-dashed  border-2 rounded-[10px] flex justify-center py-1 bg-[#FFB11D] bg-opacity-50`} onClick={handleclose}>Cancel</button>
            </div>
        </form>
    );
}

export default Stake2;

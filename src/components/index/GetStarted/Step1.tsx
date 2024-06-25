'use client'
import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
interface Step1Props {
  handleNextPage: () => void;
}

const Step1: React.FC<Step1Props> = ({ handleNextPage }) => {
  const [range, setRange] = useState<number>(0)

  const handleNextstep = (e:MouseEvent) => {
    e.preventDefault();
    if(range === 0){
      return;
    }else{
      handleNextPage()
    }
  }
  return (
    <form className='p-3 flex flex-col gap-4'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 gap-4 w-full justify-between lg:px-[3%] px-3'>
        <button className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/wal.svg"} height={20} width={20} alt='' /> Amount</button>
        <button className='bg-transparent bg-opacity-50 border-[#ffffff] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/duration.svg"} height={20} width={20} alt='' /> Duration</button>
        <button className='bg-transparent bg-opacity-50 border-[#ffffff] border-2 rounded-[10px] lg:text-[22px] flex flex-row items-center gap-3 text-[14px] px-5 py-2'> <Image src={"/img/lock.svg"} height={20} width={20} alt='' /> Review</button>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='lg:text-[30px] md:text-[20px] text-[16px] font-semibold'>How much would you like to stake?</p>
        <p className='lg:text-[18px] text-[16px]'>PAPU staking platform is fully audited by CertiK and our staking contracts are monitored 24/7 on Skynet. Know the risks of staking and choose an amount that fits your plan.</p>
        <p>NOTE: Make sure to read the <span className='text-[#FFB11D] lg:text-[16px] text-[12px]'>Staking Agreement</span>to understand the staking terms and risks before proceeding.</p>
      </div>
      <div className='bg-[#FFB11D] bg-opacity-50 border-[#FFB11D] border-2 rounded-[10px] p-2 flex flex-col gap-3'>
        <div className='flex w-full flex-row justify-between'>
          <span>
            <Image src={"/img/papulogo.svg"} width={80} height={80} alt='' />
            <div className='flex flex-row items-center gap-1'>
              <p className='lg:text-[16px] text-[12px] font-bold text-white'>balance:</p>
              <p className='lg:text-[16px] text-[12px] text-white'>27,923.219301283</p>
            </div>
          </span>
          <div className='lg:text-[32px] md:text-[16px] flex flex-col items-end text-[12px] font-bold leading-none'>
            <p>0.00</p>
            <p className='text-[#FFB11D] lg:text-[24px] md:text-[14px] text-[10px]'>Max</p>
          </div>
        </div>
        <div className='flex items-center w-full justify-center flex-col'>
          <input type="range" value={range} onChange={(e)=> setRange(Number(e.target.value))}  className='w-[70%] accent-[#FFB11D] p-2' min={0} max={1000} name="" id="" />
          {
            range && (
              <p>{range}</p>
            )
          }
        </div>
      </div>
      <button className='text-3xl font-bold text-white  border-2 rounded-[10px] flex justify-center py-3' onClick={handleNextstep}>Next</button>
    </form>
  );
}

export default Step1;

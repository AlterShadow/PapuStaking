'use client'
import React, { useState, MouseEvent } from 'react'
import Nav from '../navigation/Nav'
import Image from 'next/image'
import GeneralModal2 from '../reuseable/GeneralModal2'
import StakeContainer from './StakeStep'

const Stake = () => {
  const [unstake, setUnstake] = useState(false)
  const data = [
    {
      title: "Staking Papu",
      img: "/img/papulogo.svg",
      amount: "1.0",
      duration: "3 Months",
      unlock: "21/09/2024",
      earn: "0.000000066 TOKEN",
      apy: "10.52%",
      left: "3 Months",
      timer: "/img/timer.svg",
      remaining: "00 : 00 : 00 : 00"
    },
    {
      title: "Staking Papu",
      img: "/img/papulogo.svg",
      amount: "1.0",
      duration: "3 Months",
      unlock: "21/09/2024",
      earn: "0.000000066 TOKEN",
      apy: "10.52%",
      left: "3 Months",
      timer: "/img/timer.svg",
      remaining: "00 : 00 : 00 : 00"
    },
    {
      title: "Staking Papu",
      img: "/img/papulogo.svg",
      amount: "1.0",
      duration: "3 Months",
      unlock: "21/09/2024",
      earn: "0.000000066 TOKEN",
      apy: "10.52%",
      left: "3 Months",
      timer: "/img/timer.svg",
      remaining: "00 : 00 : 00 : 00"
    }
  ]

  const handleUnstake = () => {
    setUnstake(true);
  }

  const closeModal = () => {
    setUnstake(false)
  } 
  const handleCloseModal2 = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('modal')) {
        closeModal()
    }
}

  return (
    <>
      <Nav />
      <div className='flex flex-col gap-4 lg:px-[10%] px-[2%] mt-8'>
        <p className='lg:text-[28px] md:text-[16] text-[12px] text-white font-semibold'>Overview</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[5%] gap-[2%] lg:mt-9'>
          {
            data.map((d, i) => {
              return (
                <div key={i} className='rounded-[10px] border-[#FBC855] border-2 p-3 flex flex-col gap-4 shadow-md shadow-[#FBC855]'>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white'>{d.title}</p>
                    <Image src={d.img} height={80} width={80} alt='' />
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>Staked Amount</p>
                    <p className='text-white font-bold'>{d.amount}</p>
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>Duration</p>
                    <p className='text-white font-bold'>{d.duration}</p>
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>Unlock Timestamp</p>
                    <p className='text-white font-bold'>{d.unlock}</p>
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>Earned</p>
                    <p className='text-white font-bold'>{d.earn}</p>
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>APY</p>
                    <p className='text-white font-bold'>{d.apy}</p>
                  </div>
                  <div className='flex flex-row w-full justify-between'>
                    <p className='text-white text-opacity-55 font-semibold'>Time Left</p>
                    <p className='text-white font-bold'>{d.left}</p>
                  </div>
                  <div className='flex flex-row items-center gap-6'>
                    <Image src={d.timer} height={40} width={40} alt='' />
                    <p className='lg:text-[30px] font-bold text-[#FBC855] text-[20px]'>{d.remaining}</p>
                  </div>
                  <div className='lg:mt-5'>
                    <div className='flex flex-col gap-3 w-full'>
                      <button
                        onClick={handleUnstake}
                        className={`lg:text-xl font-semibold text-white border-2 bg-[#FFB11D] bg-opacity-55 rounded-[10px] flex justify-center py-1 border-dashed `}
                      >
                        Unstake
                      </button>
                      <button className='lg:text-xl font-semibold text-white border-2 rounded-[10px] flex justify-center py-1 border-dashed' >Claim 0.000000066 TOKEN</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          unstake && (
            <GeneralModal2
              heading='Confirm unstake'
              handleClose={handleCloseModal2}
              content={<StakeContainer />}
              close={closeModal}
            />
          )
        }
      </div>
    </>
  )
}

export default Stake
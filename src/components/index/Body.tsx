'use client'
import Image from 'next/image'
import React, { useState, MouseEvent } from 'react'
import GeneralModal from '../reuseable/GeneralModal'
import FaqContent from './FaqContent'

const Body = () => {
    const [open, setOpen] = useState(false)
    const data =[
        {
            month:"1 month",
            amount:"= 12.00% "
        },
        {
            month:"3 month",
            amount:"= 18.00% "
        },
        {
            month:"6 month",
            amount:"= 24.00% "
        },
        {
            month:"12 month",
            amount:"= 30.00% "
        },
    ]
    const handleFAQ = () =>{
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    const handleCloseModal1 = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('modal')) {
            closeModal()
        }
    }
    return (
        <div className='lg:px-[10%] lg:h-[90vh] w-full flex lg:flex-row flex-col items-center justify-between relative'>
            <div className='flex flex-col gap-4 w-[60%]'>
                <p className='lg:text-[72px] md:text-[30px] text-[20px] font-bold lg:w-[80%] w-full text-white'>Stake and Earn $PAPU Today!</p>
                <div className='flex flex-col gap-4'>
                    <span className='flex flex-row gap-2 items-center'>
                        <Image src={"/img/mark.svg"} alt='' width={40} height={40} />
                        <p className='lg:text-[30px] md:text-[20px] text-[14px] font-semibold text-white'>$PAPU Staking: Simple Gains!</p>
                    </span>
                    <span className='flex flex-row gap-2 items-center'>
                        <Image src={"/img/mark.svg"} alt='' width={40} height={40} />
                        <p className='lg:text-[30px] md:text-[20px] text-[14px] font-semibold text-white'>Stake and Grow with $PAPU!</p>
                    </span>
                    <span className='flex flex-row gap-2 items-center'>
                        <Image src={"/img/mark.svg"} alt='' width={40} height={40} />
                        <p className='lg:text-[30px] md:text-[20px] text-[14px] font-semibold text-white'>Earn Effortlessly with $PAPU!</p>
                    </span>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-[24px] lg:w-[238px] p-[2px] rounded-full bg-gradient-to-tr from-[#EF3F4D] to-[#FBCC55] justify-center flex'>
                        <button className=' w-full bg-[#16181D] font-semibold text-white rounded-full'>Get Started</button>
                    </div>
                    <button onClick={handleFAQ} className='text-[24px] font-semibold border-[3px]  text-white lg:w-[238px] p-[1px] rounded-full justify-center flex'>
                        View FAQ
                    </button>
                </div>
            </div>
            <Image src={"/img/shadowbg.svg"} className='w-[58%] lg:block hidden absolute right-0' alt='' width={200} height={200} />
            <div className='w-[40%] z-[500] flex flex-col gap-4'>
                <div className='bg-[#1A1C24] rounded-lg p-8'>
                    <div className='flex flex-row items-center w-full justify-between'>
                        <Image src={"/img/papulogo.svg"} height={100} width={100} alt='' />
                        <p className='text-[24px] font-semibold text-white'>CURRENT STAKING APY</p>
                    </div>
                    <div className='flex flex-col gap-3 pt-7'>
                        {
                            data.map((d, i)=>{
                                return(
                                    <div className='border-2 border-white flex rounded-xl w-full justify-between py-1 px-2'>
                                        <p className='text-white font-semibold text-[24px]'>{d.month}</p>
                                        <p className='text-[#FFB11D] font-bold text-[22px]'>{d.month}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bg-[#1A1C24] rounded-lg p-4'>
                    <div className='flex flex-col items-center w-full justify-between gap-3'>
                        <p className='lg:text-[24px] md:text-[18px] text-[14px] text-white font-semibold'>Total Staked</p>
                        <span className='flex flex-row items-center gap-2'>
                            <p className='lg:text-[28px] md:text-[20px] text-[15px] text-[#FFB11D] font-semibold'>2,3 Trillion</p>
                            <p className='text-[#FFB11D] lg:text-[24px] md:text-[17px] text-[12px]'>($382.849.067)</p>
                        </span>
                    </div>
                </div>

            </div>
            {
                open && (
                    <GeneralModal
                        heading='FREQUENTLY ASKED QUESTIONS'
                        handleClose={handleCloseModal1}
                        content={<FaqContent/>}
                        close={closeModal}

                    />
                )
            }
        </div>
    )
}

export default Body
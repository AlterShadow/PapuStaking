import React from 'react'
import Image from 'next/image'

const Step4 = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col gap-3'>
        <p className='text-3xl items-center lg:text-[35px] text-[16px] leading-none font-semibold'>Congratulations, <br /> you are all set!</p>
        <Image src={"/img/bblogo.svg"} alt='' width={300} height={300}/>
    </div>
  )
}

export default Step4
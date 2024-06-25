'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Nav = () => {
    const [active, setActive] = useState("home")
    const navs = [
        {
            title: "Home",
            act: "home",
            link: "/"
        },
        {
            title: "My Stakes",
            act: "stake",
            link: "/stake"
        }
    ]
    const handleClick = (link:string) => {
        setActive(link);
    };
    return (
        <div className='lg:px-[10%]'>
            <div className='border border-3 px-2 py-1 rounded-full z-[500] bg-[#16181D] flex flex-row items-center justify-between relative' style={{
                borderImage: 'linear-gradient(45deg, #000000, #EF3F4D, #FBCC55, #F58651, #000000) 2',
            }}>
                <div className='flex flex-row gap-3 items-center '>
                    {
                        navs.map((n, i) => {
                            return (
                                <div key={i}>
                                    <Link onClick={() => handleClick(n.act)} href={n.link} className={`${active === n.act ? "text-[#FEA62E] lg:text-[22px] text-[13px]" : "lg:text-[22px] text-[13px] text-white"} `}>{n.title}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='border-b-2 lg:block hidden border-[#EF3F4D] pb-10 rounded-b-2xl absolute right-[40%] top-2 bg-[#16181D] p-2 '>
                    <Image src={"/img/papus.svg"} alt='' width={200} height={200} />
                </div>

                <div>
                    <button className='flex flex-row items-center gap-2 border pr-2 pl-1 py-1 rounded-full border-[#EF3F4D]'>
                        <Image src={"/img/bblogo.svg"} width={30} height={30} alt='' />
                        <p className='text-[#ffffff] lg:text-[20px] text-[13px]'>Connect wallet</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav
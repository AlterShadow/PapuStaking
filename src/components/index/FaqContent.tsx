import Image from 'next/image'
import React from 'react'

const FaqContent = () => {
  const faqDat = [
    {
      arrow: "/img/arrow.svg",
      title: "HOW DO I START?",
      answer: "You can start questing for $PAPU by connecting Twitter/X account!"
    },
    {
      arrow: "/img/arrow.svg",
      title: "HOW DO I START?",
      answer: "You can start questing for $PAPU by connecting Twitter/X account!"
    },
    {
      arrow: "/img/arrow.svg",
      title: "HOW DO I START?",
      answer: "You can start questing for $PAPU by connecting Twitter/X account!"
    },
    {
      arrow: "/img/arrow.svg",
      title: "HOW DO I START?",
      answer: "You can start questing for $PAPU by connecting Twitter/X account!"
    },
    {
      arrow: "/img/arrow.svg",
      title: "HOW DO I START?",
      answer: "You can start questing for $PAPU by connecting Twitter/X account!"
    },
  ]
  return (
    <div>
      <div className='flex flex-col gap-4'>
        {
          faqDat.map((f, i) => {
            return (
              <>
                <div className='flex flex-col gap-2'>
                  <span className='flex flex-row gap-3 items-center'>
                    <Image src={f.arrow} alt='' width={30} height={30} />
                    <p className='lg:text-[24px] text-[16px] text-white font-semibold'>{f.title}</p>
                  </span>
                  <p className='ml-3 lg:text-[16px] text-[14px] text-white text-opacity-45'>{f.answer}</p>
                </div>
                <hr />
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default FaqContent
import React from 'react'
import Car from "../../../../public/assets/desktop/Toyota Camry Home 1.png"

import Image from 'next/image'

export default function SecondSection() {
  return (
    <div className='flex relative px-[12%] h-[755px] '>
      <div className='mt-[100px]'>
        <h1 className='text-[50px] w-[590px] text-[#595959]'>We Have Prepared a Car For Your Trip </h1>
        <p className='text-[20px] w-[400px] mt-[30px] text-[#737373] '>
        We have many types of cars that are ready for you to travel anywhere and anytime.
        </p>
        <div className='gap-[20px] flex  mt-[30px]'>
          <button className='w-[180px] h-[60px] bg-[#F55757] text-white text-[18px]'>Get In Touch</button>
          <button className='w-[140px] h-[60px] border-[1px] border-[#F55757] text-[#F55757]'>Our Car</button>
        </div>
      </div>

      <Image  src={Car} alt="car " className=' absolute right-0 top-[24%] w-[60%]  z-10'/>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Cars() {
  return (
    <div className='flex-wrap mt-[30px] lg:mt-[60px] justify-center px-[8%]'>
      <Link href="/moreinfo"
       className='flex flex-col px-[8px] lg:px-[16px] py-[8px] lg:py-[16px] border-[1px] border-gray-500  rounded-[5px] w-[50%] lg:w-[30%]'>
        <div className='w-[100%] h-[200px] bg-yellow-400'></div>
        <p >Toyota prius</p>
        <p>automatic, 1.8l</p>
        <div>
          no deposit
        </div>
        <div>
          <p>0$</p>
          <p> 15$ per day</p>
        </div>
      </Link>
    </div>
  )
}

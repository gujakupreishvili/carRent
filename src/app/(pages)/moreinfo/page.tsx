"use client"
import React, { useState } from 'react'

export default function MoreInfo() {
  const [more, setMore] = useState(false)
  return (
    <div className='flex flex-col lg:flex-row lg:w-full justify-between px-[10%] lg:items-start lg:h-screen  lg:py-[5%]'>
       <h1 className='lg:hidden'>Toyota prius</h1>
      <div className='flex flex-col'>
        <div className='w-[236px] h-[200px] bg-yellow-400 mb-[12px]'></div>
        <div className='flex items-center gap-[12px]'>
        <div className='w-[50px] h-[50px] bg-yellow-400'></div>
        <div className='w-[50px] h-[50px] bg-yellow-400'></div>
        <div className='w-[50px] h-[50px] bg-yellow-400'></div>
        <div className='w-[50px] h-[50px] bg-yellow-400'></div>
        </div>
        <div className='flex flex-col justify-between mt-[12px]'>
          <p>Cost</p>
          <hr className='h-[2px] bg-gray-400 my-[14px]' />
          <div className='flex justify-between'>
           <p>Rent for 2 days</p>
           <p>70$</p>
          </div>
          <hr className='h-[2px] bg-gray-400 my-[14px]' />
          <p className='text-[320x] text-gray-600 my-[6px]'>Others</p>
          <div className='flex justify-between my-[6px]'>
            <p>Full Coverage
            </p>
            <p>0$</p>
          </div>
          <div className='flex justify-between'>
            <p>Personal Accident Insurance
            </p>
            <p>0$</p>
          </div>
          <hr className='h-[2px] bg-gray-400 my-[14px]' />
          <div className='flex justify-between'>
            <p>Total</p>
            <p>70$</p>
          </div>
        </div>
      </div>  
      <div className='flex flex-col lg:w-[70%] '>
        <h1 className='text-2xl hidden lg:block'>Toyota Prius</h1>
        <h1 className='text-[25px] text-red-400'>specification</h1>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>gear box</p>
          <p>AT</p>
        </div>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>engin</p>
          <p>1.8l</p>
        </div>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>year of manufacture</p>
          <p>2013</p>
        </div>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>audio</p>
          <p>radio ,USB, AUX,  Bluetooth</p>
        </div>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        {more && (
          <>
          <div className='flex justify-between'>
            <p>Number of seats</p>
            <p>5</p>
          </div>
           <hr className='h-[2px] bg-gray-400 my-[14px]' />
           <div className='flex justify-between'>
            <p>Drive</p>
            <p>	FWD</p>
           </div>
          </>
        )}
        <p className='text-green-400' onClick={() => setMore(!more)}>All specifaction</p>

        <h1 className='text-[25px] text-red-400'>Requirements</h1>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>
          Driver’s age</p>
          <p>21-65years</p>
        </div>
        <hr className='h-[2px] bg-gray-400 my-[14px]' />
        <div className='flex justify-between'>
          <p>Minimum driving experience</p>
          <p>	2 years</p>
        </div>
      </div>
    </div>
  )
}

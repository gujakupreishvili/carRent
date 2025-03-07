"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

export default function Date() {
  const { t } = useTranslation(); 

  return (
    <div className='flex flex-col items-center mt-[40px] lg:flex-row lg:justify-center lg:gap-[20px]' >
      <div className='bg-white w-[90%] lg:w-[40%] flex-col px-[12px] lg:px-[32px] py-[12px] lg:py-[24px] rounded-[8px]'>
        <p className='mb-[20px]'>{t("pickUp.pickup")}</p>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <p>{t("pickUp.location")}</p>
            <p>{t("pickUp.select city")}</p>
          </div>
          
          <div className='w-[1px] h-[64px] bg-gray-400 mr-[15px]'></div>

          <div className='flex flex-col'>
            <p>{t("pickUp.date")}</p>
            <p>{t("pickUp.select date")}</p>
          </div>
          <div className='w-[1px] h-[64px] bg-gray-400 mr-[15px]'></div>

          <div className='flex flex-col'>
            <p>{t("pickUp.time")}</p>
            <p>{t("pickUp.select time")}</p>
          </div>
        </div>
      </div>

      <div className='w-[64px] h-[64px] rounded-[12px] flex items-center justify-center  bg-blue-500 my-[12px]'>
      <FaLongArrowAltUp  className='text-[24px] text-white'/>
      <FaLongArrowAltDown  className='text-[24px] text-white'/>
      </div>

      <div className='bg-white w-[90%] lg:w-[40%] flex-col  rounded-[8px] px-[12px] lg:px-[32px] py-[12px] lg:py-[24px]'>
        <p className='mb-[20px]'>{t("dropOff.dropoff")}</p>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <p>{t("dropOff.location")}</p>
            <p>{t("dropOff.select city")}</p>
          </div>
          
          <div className='w-[1px] h-[64px] bg-gray-400 mr-[15px]'></div>

          <div className='flex flex-col'>
            <p>{t("dropOff.date")}</p>
            <p>{t("dropOff.select date")}</p>
          </div>
          <div className='w-[1px] h-[64px] bg-gray-400 mr-[15px]'></div>

          <div className='flex flex-col'>
            <p>{t("dropOff.time")}</p>
            <p>{t("dropOff.select time")}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
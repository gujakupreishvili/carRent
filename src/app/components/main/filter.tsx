"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Filter() {
  const { t } = useTranslation(); 
  return (
    <div className='flex items-center justify-center gap-[10px] mt-[30px] lg:mt-[60px] rounded-[5px]'>
      <div className='w-[20%] lg:w-[22%] border-[1px] h-[75px] border-gray-400 bg-gray-300 rounded-[5px]'>
        <p>{t("carTypes.economy")}</p>
        <input type="checkbox" />
      </div>
      <div className='w-[20%]  lg:w-[22%] border-[1px] h-[75px] border-gray-400 bg-gray-300 rounded-[5px]'>
        <p>{t("carTypes.standart")}</p>
        <input type="checkbox" />
      </div>
      <div className='w-[20%]  lg:w-[22%] border-[1px] h-[75px] border-gray-400 bg-gray-300 rounded-[5px]'>
        <p>{t("carTypes.suv")}</p>
        <input type="checkbox" />
      </div>
      <div className='w-[20%]  lg:w-[22%] border-[1px] h-[75px] border-gray-400 bg-gray-300 rounded-[5px]'>
        <p>{t("carTypes.van")}</p>
        <input type="checkbox" />
      </div>
    </div>
  )
}

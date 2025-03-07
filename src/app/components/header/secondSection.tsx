import React from 'react';
import Car from "../../../../public/assets/desktop/Toyota Camry Home 1.png";
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function SecondSection() {
  const { t } = useTranslation(); 

  return (
    <div className='flex relative px-[12%] lg:h-[755px] '>
      <div className='mt-[100px] lg:ml-[-70px]'>
        <h1 className='text-[30px] lg:text-[50px] lg:w-[450px]   text-[#595959]'>{t("prepared")}</h1>
        <p className='text-[20px]  lg:w-[500px] mt-[30px] text-[#737373] '>
          {t("types")}
        </p>
        <div className='gap-[20px] flex  mt-[30px]'>
          {/* <button className='w-[180px] h-[60px] bg-[#F55757] text-white text-[18px]'>{t("Get In Touch")}</button> */}
          <button className='w-[140px] h-[60px] border-[1px] border-[#F55757] text-[#F55757]'>{t("ourCars")}</button>
        </div>
      </div>

      <Image src={Car} alt="car" className='absolute right-0 top-[24%] w-[60%] z-10 hidden lg:block'/>
    </div>
  );
}
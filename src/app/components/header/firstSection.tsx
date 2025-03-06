"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoArrowLeft } from "react-icons/go";

export default function FirstSection() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="flex justify-between px-[3%] lg:px-[8%] py-[20px] w-full bg-[#2b2b2b] items-center">
      <div className="flex gap-[50px]">
        <p>logo</p>
        <input type="text" placeholder="wirte somthin" className="w-[300px] px-[12px] border-[1px] border-gray-400 py-[6px] hidden  rounded-[8px] text-black"   />
      </div>
      <div className="flex items-center gap-[25px]">
      <div className="lg:flex gap-[20px] hidden">
        <p className="text-[16px] text-white">{t("main")}</p>
        <p className="text-[16px] text-white">{t("cars")}</p>
        <p className="text-[16px] text-white">{t("aboutUs")}</p>
        <p className="text-[16px] text-white">{t("contact")}</p>
      </div>
        <div className=" flex gap-[10px] ">
          <button
            className="border-[1px] border-gray-400 px-[10px] w-[50px] rounded-[12px] text-white text-[16px]"
            onClick={() => changeLanguage("ka")}
            >
            KA
          </button>
          <button
            className="border-[1px] border-gray-400 px-[10px] w-[50px] rounded-[12px] text-white text-[16px]" 
            onClick={() => changeLanguage("en")}
            >
            EN
          </button>
        <GiHamburgerMenu
        onClick={() => setHamburger(true)}
         className="text-white text-[24px] ml-[10px] lg:hidden"  />
        </div>
      </div>

      {hamburger && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col  items-center space-y-6 pt-[100px]  '>
          <div className="flex items-center">
          <GoArrowLeft className='absolute left-[20px] text-[24px]' onClick={() => setHamburger(false)} />
          <p>logo</p>
          </div>
          <div className="flex flex-col gap-[60px] items-center ">
        <p className="text-[16px] mt-[30px]  text-black">{t("main")}</p>
        <p className="text-[16px] text-black">{t("cars")}</p>
        <p className="text-[16px] text-black">{t("aboutUs")}</p>
        <p className="text-[16px] text-black">{t("contact")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

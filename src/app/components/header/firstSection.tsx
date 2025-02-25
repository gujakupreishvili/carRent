"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FirstSection() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex justify-between px-[12%] py-[20px] w-full bg-[#2b2b2b] items-center">
      <div className="flex gap-[50px]">
        <p>logo</p>
        <input type="text" placeholder="wirte somthin" className="w-[300px] px-[12px] border-[1px] border-gray-400 py-[6px]  rounded-[8px] text-black"   />
      </div>
      <div className="flex gap-[20px]">
        <p className="text-[16px] text-white">{t("main")}</p>
        <p className="text-[16px] text-white">{t("cars")}</p>
        <p className="text-[16px] text-white">{t("aboutUs")}</p>
        <p className="text-[16px] text-white">{t("contact")}</p>
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
        </div>
      </div>
    </div>
  );
}

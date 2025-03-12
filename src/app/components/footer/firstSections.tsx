"use client";
import Image from "next/image";
import React from "react";
import carLogo from "../../../../public/assets/desktop/car(3) 1.png";
import Adress from "../../../../public/assets/desktop/map-pin.png";
import Mail from "../../../../public/assets/desktop/mail.png";
import Phone from "../../../../public/assets/desktop/phone.png";
import { useTranslation } from "react-i18next";

export function FirstSectionsFooter() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] w-full flex-col   ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={carLogo} alt="Car Logo " />
          <p className="text-black font-bold">{t("Car Rental")}</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rounded-3xl bg-[#FF9E0C] w-[40px] h-[40px] flex items-center justify-center">
            <Image src={Adress} alt="map" />
          </div>
          <div>
            <p className="text-black font-medium">{t("Address.adress")}</p>
            <p className="text-black font-bold">{t("Address.My adress")}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rounded-3xl bg-[#FF9E0C] w-[40px] h-[40px] flex items-center justify-center">
            <Image src={Mail} alt="Mail" />
          </div>
          <div>
            <p className="text-black font-medium">{t("Email.email")}</p>
            <p className="text-black font-bold">{t("Email.My Email")}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rounded-3xl bg-[#FF9E0C] w-[40px] h-[40px] flex items-center justify-center">
            <Image src={Phone} alt="Phone" />
          </div>
          <div>
            <p className="text-black font-medium">{t("Phone.phone")}</p>
            <p className="text-black font-bold">{t("Phone.My Phone")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="max-w-[330px]">
          <p className="text-black font-semibold text-[20px] leading-7">
            {t("Rent")}
          </p>
          <div className="flex gap-4">
            <Image src={Phone} alt="" />
            <Image src={Phone} alt="" />
          </div>
        </div>

        <div>
          <h1 className="text-black  font-semibold text-[20px] leading-7 mb-4">
            {t("Useful links.useful links")}
          </h1>
          <p className="text-black mb-1 font-normal">
            {t("Useful links.About us")}
          </p>
          <p className="text-black mb-1 font-normal">
            {t("Useful links.Contact us")}
          </p>
          <p className="text-black font-normal">{t("Useful links.Gallery")}</p>
        </div>
        <div>
          <h1 className="text-black  font-semibold text-[20px] leading-7 mb-4">
            {t("carTypes.Vehicles")}
          </h1>
          <p className="text-black mb-1 font-normal">{t("carTypes.economy")}</p>
          <p className="text-black mb-1 font-normal">
            {t("carTypes.standart")}
          </p>
          <p className="text-black mb-1 font-normal">{t("carTypes.suv")}</p>
          <p className="text-black font-normal">{t("carTypes.van")}</p>
        </div>
      </div>
    </div>
  );
}

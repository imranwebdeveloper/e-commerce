import React from "react";
import Section from "../UI/Section";
import AboutBazar from "./section/AboutBazar";
import CustomerCare from "./section/CustomerCare";
import EarnWith from "./section/EarnWith";
import QR from "../../assert/img/footer/QR.png";
import app from "../../assert/img/footer/App.png";
import appGallery from "../../assert/img/footer/AppGallary.png";
import apple from "../../assert/img/footer/apple.jpg";
import play from "../../assert/img/footer/playstore.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#2E2E54] text-white mt-2">
      <Section>
        <div className=" md:flex gap-4">
          <div className="flex justify-between flex-1 mb-4 md:mb-0">
            <div className="flex flex-col gap-6">
              <CustomerCare />
              <EarnWith />
            </div>
            <AboutBazar />
          </div>
          <div className="flex-1 md:pl-14">
            <div className="flex gap-4 mb-4">
              <img src={QR} alt="" className="w-28 rounded-md" />
              <div className="self-end">
                <img src={app} alt="" className="w-16" />
                <p className="text-[#F85606]">Happy Shopping</p>
                <p>Download App</p>
              </div>
            </div>
            <div className=" flex gap-3 ">
              <a href="/">
                <img src={appGallery} alt="" className="w-36 rounded-md h-10" />
              </a>
              <a href="/">
                <img src={apple} alt="" className="w-36 rounded-md h-10" />
              </a>
              <a href="/">
                <img src={play} alt="" className="w-36 rounded-md h-10" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;

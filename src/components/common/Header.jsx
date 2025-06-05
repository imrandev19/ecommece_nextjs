import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div className="header_add bg-[#191C1F] relative">
        <Container>
          <div className="flex items-center justify-between">
            <Image
              src="/images/headerAdd.png"
              width={160}
              height={43}
              alt="offer image"
            />
            <h3 className="flex items-center gap-2 text-sm font-medium text-[#FFFFFF] leading-5">
              Up to{" "}
              <span className="text-[40px] leading-[48px] font-semibold text-[#EBC80C]">
                59%
              </span>
              <span className="font-semibold">OFF</span>
            </h3>
            <Button className="text-[#191C1F] font-bold text-sm leading-[48px] tracking-wide bg-[#EBC80C] hover:bg-[#EBC80C]/90 ">
              SHOP NOW <FaArrowRightLong />
            </Button>
          </div>
        </Container>
        <Button className="p-2 bg-[#303639] hover:bg-[#303639]/90 absolute top-2/4 translate-y-[-50%] right-2">
          <IoIosClose className="text-white w-[16px] h-[16px]" />
        </Button>
      </div>
      {/* Header Ads part End */}

      {/* Header Welcome Part & Search Part Start */}
      <div className="header_blue bg-[#1B6392] ">
        <div className="header_welcome py-4 ">
          <Container>
            <div className="flex items-center justify-between">
              <h3 className="text-[#FFFFFF] text-sm leading-5 font-normal">
                Welcome to Clicon online eCommerce store.{" "}
              </h3>
              <div className="flex items-center gap-3 text-white ">
                <p>Follow us:</p>
                <FaTwitter className="w-4 h-4 text-white" />
                <FaFacebook className="w-4 h-4 text-white" />
                <FaPinterestP className="w-4 h-4 text-white" />
                <FaReddit className="w-4 h-4 text-white" />
                <FaYoutube className="w-4 h-4 text-white" />
                <FaInstagram className="w-4 h-4 text-white" />
                <div className="w-[.5px] h-[28px] ml-3 bg-white"></div>
              </div>
            </div>
          </Container>
        </div>
        <hr />
        <Container>
          <div className="flex items-center justify-between py-5">
            <Image
              src="/images/Logo.png"
              alt="Clicon Logo"
              width={177}
              height={48}
            />
            <div className="w-[646px] flex items-center relative h-[48px] ">
              <Input
                className="bg-white placeholder:text-[#77878F] h-full"
                type="search"
                placeholder="Search for anything..."
              />
              <CiSearch className="text-[#191C1F] w-5 h-5 absolute  right-[14px] flex items-center" />
            </div>
            <div className="gap-6 flex items-center">
              <div className="relative ">
                <CiShoppingCart className="w-8 h-8 text-white" />
                <span className="absolute font-semibold text-[12px] leading-4 text-[#1B6392] bg-white rounded-full py-1 px-2 top-[-4px] left-[16px]">2</span>
              </div>
              <GrFavorite className="w-8 h-8 text-white" />
              <LuUserRound className="w-8 h-8 text-white" />
            </div>
          </div>
        </Container>

        
      </div>
    </header>
  );
};

export default Header;

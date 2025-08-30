"use client";

import Container from "./Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDropright, IoIosClose } from "react-icons/io";
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
import { IoIosArrowDown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowsRotate } from "react-icons/fa6";
import { AiOutlineCustomerService } from "react-icons/ai";
import { PiInfo } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Header = () => {
  const [category, setCategory] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false); //
  const dropdownRef = useRef(null); //
  function getCategory(){
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/category/allcategories`)
  .then(response => {
    // Handle successful response
    setCategory(response.data.data); // The retrieved data is in response.data
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
  }
 useEffect(()=>{
   getCategory()
 },[])


  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [open, setOpen] = useState("true");
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
      },
      []
    );
  });
  return (
    <header className={`${isSticky && "fixed w-full z-100"}`}>
      {open && (
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
          <Button
            onClick={() => setOpen(false)}
            className="p-2 bg-[#303639] hover:bg-[#303639]/90 absolute top-2/4 translate-y-[-50%] right-2 cusrsor-pointer"
          >
            <IoIosClose className="text-white w-[16px] h-[16px] cusrsor-pointer hover:text-red-500" />
          </Button>
        </div>
      )}
      {/* Header Ads part End */}

      {/* Header Welcome Part & Search Part Start */}
      <div className="header_blue bg-[#1B6392] ">
        <div className="header_welcome py-4 relative after:content-[''] after:w-full after:h-[.1px] after:bg-[#E4E7E9] after:absolute after:mt-4 ">
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

        <Container>
          <div className="flex items-center justify-between py-5">
            <Link href={"/"}>
            <Image
              src="/images/Logo.png"
              alt="Clicon Logo"
              width={177}
              height={48}
            />
            </Link>
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
                <span className="absolute font-semibold text-[12px] leading-4 text-[#1B6392] bg-white rounded-full py-1 px-2 top-[-4px] left-[16px]">
                  2
                </span>
              </div>
              <GrFavorite className="w-8 h-8 text-white" />
              <LuUserRound className="w-8 h-8 text-white" />
            </div>
          </div>
        </Container>
      </div>
      <div className="header_menu relative bg-white after:content-['']  after:w-full after:h-[.1px] after:bg-[#E4E7E9] after:absolute">
        <Container>
          <div className="py-4 flex items-center justify-between   ">
            <ul className=" flex text-sm font-normal leading-5">
              <li className="relative" ref={dropdownRef}>
                {" "}
                {/* ✅ wrapper ref */}
                <div
                  onClick={() => setDropdownOpen((prev) => !prev)} // ✅ toggle
                  className="gap-2 py-[14px] px-6 flex items-center text-[#5F6C72] cursor-pointer hover:bg-[#F2F4F5] hover:text-[#191C1F]"
                >
                  All Category <IoIosArrowDown />
                </div>
                {/* ✅ Dropdown list */}
                {dropdownOpen && (
  <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg border border-gray-200 z-10 rounded-md ">
    {category.map((category, idx) => (
      <li key={idx} className="group relative">
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center active:bg-[#EBC80C] active:text-white">
          {category.categoryName}
          {category.subcategory.length>0 && (
            <IoIosArrowDropright className="ml-2 w-3 h-3" />
          )}
        </div>

        {/* Subcategories */}
        {category?.subcategory && (
          <ul className="absolute left-full top-0 mt-0 ml-0 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:flex flex-col z-20">
            {category.subcategory.map((sub, subIdx) => (
              <li
                key={subIdx}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {sub.name}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}
              </li>
              <li className="flex items-center py-[14px] px-6 gap-[6px]  text-[#5F6C72] cursor-pointer  hover:bg-[#F2F4F5] hover:text-[#191C1F]">
                <CiLocationOn className="w-6 h-4" />
                Track Order
              </li>
              <li className="flex items-center py-[14px] px-6 gap-[6px]  text-[#5F6C72] cursor-pointer  hover:bg-[#F2F4F5] hover:text-[#191C1F]">
                <FaArrowsRotate className="w-6 h-4" />
                Compare
              </li>
              <li className="flex items-center py-[14px] px-6 gap-[6px]  text-[#5F6C72] cursor-pointer  hover:bg-[#F2F4F5] hover:text-[#191C1F]">
                <AiOutlineCustomerService className="w-6 h-4" />
                Customer Support
              </li>
              <li className="flex items-center py-[14px] px-6 gap-[6px]  text-[#5F6C72] cursor-pointer  hover:bg-[#F2F4F5] hover:text-[#191C1F]">
                <PiInfo className="w-6 h-4" />
                Need Help
              </li>
            </ul>

            <p className="flex gap-2 items-center text-[#191C1F]">
              <LuPhoneCall />
              <span className="font-public_sans font-normal text-[18px] leading-6">
                +1-202-555-0104
              </span>
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

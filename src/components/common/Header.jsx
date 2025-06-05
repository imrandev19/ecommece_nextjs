
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
const Header = () => {
  return (
    <header>
      <div className="header_add bg-[#191C1F] relative">
      
       <Container>
       <div className="flex items-center justify-between">
         <Image src="/images/headerAdd.png" width={160} height={43} alt="offer image"/>
        <h3 className="flex items-center gap-2 text-sm font-medium text-[#FFFFFF] leading-5">Up to <span className="text-[40px] leading-[48px] font-semibold text-[#EBC80C]">59%</span><span className="font-semibold">OFF</span></h3>
        <Button className="text-[#191C1F] font-bold text-sm leading-[48px] tracking-wide bg-[#EBC80C] hover:bg-[#EBC80C]/90 " >SHOP NOW <FaArrowRightLong /></Button>
       </div>
        </Container> 
          <Button className="p-2 bg-[#303639] hover:bg-[#303639]/90 absolute top-2/4 translate-y-[-50%] right-2"><IoIosClose className="text-white" /></Button>
      </div>
    </header>
  );
};

export default Header;

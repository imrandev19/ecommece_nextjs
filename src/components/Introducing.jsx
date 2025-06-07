import React from "react";
import Container from "./common/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
const Introducing = () => {
  return (
    <div className="mb-[72px]">
      <Container>
        <div className="flex gap-6">
          <div className="w-[648px] h-[336px] bg-[#F2F4F5] flex items-center gap-10 px-[48px] py-[44px]">
            <div className="w-[280px]">
                <div className="uppercase font-semibold text-sm leading-5 text-[#FFFFFF] py-[6px] px-3 bg-[#2DA5F3]  mb-2 inline-block">Introducing</div>
            <h2 className="font-semibold text-[32px] leading-10 text-[#191C1F] mb-3">New Apple Homepod Mini</h2>
            <p className="text-[16px] font-normal leading-6 mb-5">Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
            <Button className="text-[#FFFFFF] font-bold text-[16px] mb-7 cursor-pointer leading-[56px] h-[48px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] rounded-[3px] uppercase ">
              SHOP NOW <FaArrowRightLong className="w-[24px] h-[24px]" />
            </Button>
            </div>
            <Image src="/images/mini.png" alt="mini cast" height={240} width={240}/>
          </div>
          <div className="w-[648px] h-[336px] bg-[#191C1F] flex items-center gap-10 px-[48px] py-[44px]">
            <div className="w-[280px]">
                <div className="uppercase font-semibold text-sm leading-5 text-[#191C1F] py-[6px] px-3 bg-[#EFD33D]  mb-2 inline-block">Introducing new</div>
            <h2 className="font-semibold text-[32px] leading-10 text-[#FFFFFF] mb-3">Xiaomi Mi 11 Ultra
12GB+256GB</h2>
            <p className="text-[16px] font-normal leading-6 mb-5">*Data provided by internal laboratories. Industry measurment.</p>
            <Button className="text-[#FFFFFF] font-bold text-[16px] mb-7 cursor-pointer leading-[56px] h-[48px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] rounded-[3px] uppercase ">
              SHOP NOW <FaArrowRightLong className="w-[24px] h-[24px]" />
            </Button>
            </div>
            <Image src="/images/bw.png" alt="Mobile" height={240} width={240}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introducing;

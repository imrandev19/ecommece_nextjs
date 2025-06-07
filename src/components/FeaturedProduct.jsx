import React from "react";
import Container from "./common/Container";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
const FeaturedProduct = () => {
  return (
    <div className="my-[72px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-[312px] h-[716px] bg-[#F3DE6D] flex flex-col items-center ">
            <h3 className="font-semibold text-sm leading-5 text-[#BE4646] mt-8">
              COMPUTER & ACCESSORIES
            </h3>
            <h2 className="font-semibold text-[32px] leading-10 text-[#191C1F] mt-2 mb-3">
              32% Discount
            </h2>
            <p className="font-normal text-[16px] leading-6 text-[#475156]">
              For all ellectronics products
            </p>
            <p className="font-medium text-sm leading-5 text-[#475156] mt-4 mb-8">
              Offers ends in:{" "}
              <span className="py-[6px] px-3 rounded-[2px] bg-[#FFFFFF] ml-2">
                ENDS OF CHRISTMAS
              </span>
            </p>
            <Button className="text-[#FFFFFF] font-bold text-[16px] mb-7 cursor-pointer leading-[56px] h-[56px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] rounded-[3px] uppercase ">
              SHOP NOW <FaArrowRightLong className="w-[24px] h-[24px]" />
            </Button>
            <Image
              src="/images/Device.jpg"
              alt="devices images"
              width={312}
              height={428}
            />
          </div>
          <div className="w-[984px] h-[716px] ">
            <div className="flex items-center justify-between mb-[26px]">
              <h3 className="font-semibold text-2xl leading-8 text-[#191C1F]">Featured Products</h3>
              <ul className="flex items-center">
                <li className="font-normal text-[#5F6C72] p-2 text-sm leading-5 active:text-[#191C1F] active:font-semibold">All Product</li>
                <li className="font-normal text-[#5F6C72] p-2 text-sm leading-5 active:text-[#191C1F] active:font-semibold">Smart Phone</li>
                <li className="font-normal text-[#5F6C72] p-2 text-sm leading-5 active:text-[#191C1F] active:font-semibold">Laptop</li>
                <li className="font-normal text-[#5F6C72] p-2 text-sm leading-5 active:text-[#191C1F] active:font-semibold">Headphone</li>
                <li className="font-normal text-[#5F6C72] p-2 text-sm leading-5 active:text-[#191C1F] active:font-semibold">TV</li>
                <li className="flex gap-2 font-semibold text-sm leading-5 text-[#FA8232] ml-4">Browse All Product <FaArrowRightLong className="w-[20px] h-[20px] font-normal" /></li>
              </ul>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-4 ">
                    <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9] relative">
                        <span className="text-[#FFFFFF] text-[12px] leding-4 font-semibold w-[46px] h-[26px] bg-[#EE5858] rounded-[2px] absolute top-[12px] left-[12px] flex items-center justify-center">HOT</span>
                        <div className="flex gap-2 absolute top-2/4 translate-[-50%] left-2/4">
                            <div className=" z-100 p-3 bg-white rounded-full">
                            <GrFavorite className="w-[24px] h-[24px] text-[#191C1F]" /> 
                        </div>
                        <div className="z-100 p-3 bg-white rounded-full">
                            <GrFavorite className="w-[24px] h-[24px] text-[#191C1F]" /> 
                        </div>
                        <div className="z-100 p-3 bg-white rounded-full">
                            <GrFavorite className="w-[24px] h-[24px] text-[#191C1F]" /> 
                        </div>
                        </div>
                    <Image src="/images/A71.png" alt="A71 phone" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star5.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(738)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">TOZO T6 True Wireless Earbuds Bluetooth Headphon...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$70</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/S21.png" alt="S21 phone" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star5.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(536)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Samsung Electronics Samsung Galexy S21 5G</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$2,300</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/Ac.png" alt="Ac" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star5.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(423)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Air Conditioner Wireless Low Electricity Consumes</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$360</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/HeadphoneR.png" alt="A71 phone" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star4.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(816)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$80</p>
                </div>
                
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/Dell.png" alt="Drone" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star4.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(816)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$80</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/HeadphoneR.png" alt="tv image" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star4.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(816)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$80</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/Dell.png" alt="dell laptop" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star4.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(816)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$80</p>
                </div>
                <div className="w-[234px] h-[320px] p-4 border-1 border-[#E4E7E9]">
                    <Image src="/images/HeadphoneR.png" alt="sony phone" width={202} height={172} className="mb-6"/>
                    <div className="flex gap-1 items-start">
                        <Image src="/images/Star4.png" alt="Star" width={80} height={16} className="mb-2"/>
                        <p className="text-[12px] font-normal leading-4 text-[#77878F]">(816)</p>
                        
                    </div>
                    <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                    <p className="font-bold text-sm text-[#2DA5F3] leading-5">$80</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;

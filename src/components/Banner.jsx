"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Container from "./common/Container";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import axios from "axios";
import Link from "next/link";
const Banner = () => {
  const [bannerOne, setBannerOne] = useState([])
  function getBannerOne(){
    axios.get("http://localhost:4000/api/banner/getbannerone").then((res)=>{
      setBannerOne(res.data.data)
    }).catch(err=>console.log(err))
  }
  useEffect(()=>{
getBannerOne()
  },[])
  return (
    <div className="pt-6">
      <Container>
        <div className="flex items-center gap-6">
          <div className="w-[872px] h-[520px] bg-[#F2F4F5] py-[56px] relative">
            <div className="absolute bottom-[56px] left-[56px]">
                          <Pagination>
                            <PaginationContent>
                              <PaginationItem className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F] cursor-pointer active:bg-black">
                                <PaginationLink
                                  
                                  href="#1"
                                ></PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F] cursor-pointer active:bg-black">
                                <PaginationLink
                                  
                                  href="#2"
                                ></PaginationLink>
                              </PaginationItem>{" "}
                              <PaginationItem className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F] cursor-pointer active:bg-black">
                                <PaginationLink
                                  
                                  href="#3"
                                ></PaginationLink>
                              </PaginationItem>
                            </PaginationContent>
                          </Pagination>
                        </div>
            <Carousel plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true
        }),
      ]}>
              <CarouselContent>
                <CarouselItem>

                  <div className="relative" id="1" >
                    {bannerOne.map((item)=>(
                      <Link href={item.href}><Image src={item.image} className="object-fit-contain" width={872} height={520} alt="Banner One"/></Link>
                    ))

                    }
                    {/* <div className="flex items-center ">
                      <div className="w-[356px] ml-[56px]">
                        <h4 className="text-[#2484C2] relative font-semibold text-sm leading-5 before:content-[] before:w-6 before:h-[3px] before:bg-[#2484C2] before:absolute flex items-center ml-7 before:left-[-28px]  ">
                          THE BEST PLACE TO PLAY
                        </h4>
                        <h2 className="font-semibold text-[48px] leading-[56px] text-[#191C1F] mt-1 mb-4">
                          Xbox Consoles
                        </h2>
                        <p className="font-normal text-[#475156] text-[18px] leading-6 mb-6 w-full">
                          Save up to 50% on select Xbox games. Get 3 months of
                          PC Game Pass for $2 USD.
                        </p>
                        <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[56px] h-[56px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] ">
                          SHOP NOW <FaArrowRightLong />
                        </Button>
                        
                      </div>
                      <Image
                        src="/images/Xbox.png"
                        alt="banner"
                        width={368}
                        height={408}
                      />
                    </div>
                    <p className="font-semibold text-[22px] leading-[100px] inline-block px-6 text-white bg-[#2DA5F3] rounded-full absolute right-[56px] top-0">
                      $299
                    </p> */}
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative" id="2">
                    <div className="flex items-center ">
                      <div className="w-[356px] ml-[56px]">
                        <h4 className="text-[#2484C2] relative font-semibold text-sm leading-5 before:content-[] before:w-6 before:h-[3px] before:bg-[#2484C2] before:absolute flex items-center ml-7 before:left-[-28px]  ">
                          THE BEST PLACE TO PLAY
                        </h4>
                        <h2 className="font-semibold text-[48px] leading-[56px] text-[#191C1F] mt-1 mb-4">
                          Xbox Consoles
                        </h2>
                        <p className="font-normal text-[#475156] text-[18px] leading-6 mb-6 w-full">
                          Save up to 50% on select Xbox games. Get 3 months of
                          PC Game Pass for $2 USD.
                        </p>
                        <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[56px] h-[56px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] ">
                          SHOP NOW <FaArrowRightLong />
                        </Button>
                        <div className="absolute bottom-0 left-[56px]">
                          {/* <Pagination>
                            <PaginationContent>
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F]"
                                  href="#"
                                ></PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]"
                                  href="#"
                                ></PaginationLink>
                              </PaginationItem>{" "}
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]"
                                  href="#"
                                ></PaginationLink>
                              </PaginationItem>
                            </PaginationContent>
                          </Pagination> */}
                        </div>
                      </div>
                      <Image
                        src="/images/Xbox.png"
                        alt="banner"
                        width={368}
                        height={408}
                      />
                    </div>
                    <p className="font-semibold text-[22px] leading-[100px] inline-block px-6 text-white bg-[#2DA5F3] rounded-full absolute right-[56px] top-0">
                      $299
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative"  >
                    <div className="flex items-center" id="3">
                      <div className="w-[356px] ml-[56px]">
                        <h4 className="text-[#2484C2] relative font-semibold text-sm leading-5 before:content-[] before:w-6 before:h-[3px] before:bg-[#2484C2] before:absolute flex items-center ml-7 before:left-[-28px]  ">
                          THE BEST PLACE TO PLAY
                        </h4>
                        <h2 className="font-semibold text-[48px] leading-[56px] text-[#191C1F] mt-1 mb-4">
                          Xbox Consoles
                        </h2>
                        <p className="font-normal text-[#475156] text-[18px] leading-6 mb-6 w-full">
                          Save up to 50% on select Xbox games. Get 3 months of
                          PC Game Pass for $2 USD.
                        </p>
                        <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[56px] h-[56px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] ">
                          SHOP NOW <FaArrowRightLong />
                        </Button>
                        <div className="absolute bottom-0 left-[56px]">
                          {/* <Pagination>
                            <PaginationContent>
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F]"
                                  href="#1"
                                ></PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]"
                                  href="#2"
                                ></PaginationLink>
                              </PaginationItem>{" "}
                              <PaginationItem>
                                <PaginationLink
                                  className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]"
                                  href="#3"
                                ></PaginationLink>
                              </PaginationItem>
                            </PaginationContent>
                          </Pagination> */}
                        </div>
                      </div>
                      <Image
                        src="/images/Xbox.png"
                        alt="banner"
                        width={368}
                        height={408}
                      />
                    </div>
                    <p className="font-semibold text-[22px] leading-[100px] inline-block px-6 text-white bg-[#2DA5F3] rounded-full absolute right-[56px] top-0">
                      $299
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="h-[520px] w-[424px]  flex flex-col gap-6">
            <div className="h-[248px] w-full pl-10 bg-[#191C1F] flex items-end rounded-[6px] relative">
              <div className="px-4 py-2 font-semibold uppercase leading-6 text-[16px] bg-[#EFD33D] rounded-[2px] absolute top-6 right-6">
                29% OFF
              </div>{" "}
              <div className="pb-[48px]">
                <h3 className="uppercase text-[#EBC80C] leading-5 text-sm font-medium">
                  Summer Sales
                </h3>
                <h2 className="font-semibold leading-8 text-2xl text-[#FFFFFF] w-[160px] mt-[5px] mb-[18px]">
                  New Google Pixel 6 Pro
                </h2>
                <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[48px] h-[48px]   tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[156px] ">
                  SHOP NOW <FaArrowRightLong />
                </Button>
              </div>
              <div>
                <Image
                  src="/images/gphone.png"
                  width={312}
                  height={312}
                  alt="banner right 1st image"
                />
              </div>
            </div>
            <div>
              <div className="h-[248px] w-full pl-8 bg-[#F2F4F5] flex items-center rounded-[6px] gap-5">
                <div>
                  <Image
                    src="/images/buds.png"
                    width={160}
                    height={160}
                    alt="banner right 2nd image"
                  />
                </div>

                <div className="w-[172px]">
                  <h3 className=" text-[#191C1F] leading-8 text-2xl font-semibold">
                    Xiaomi FlipBuds Pro
                  </h3>
                  <h2 className="font-semibold leading-6 text-[18px] text-[#2DA5F3] w-[160px] mt-3 mb-5">
                    $299 USD
                  </h2>
                  <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[48px] h-[48px]  tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[156px] ">
                    SHOP NOW <FaArrowRightLong />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

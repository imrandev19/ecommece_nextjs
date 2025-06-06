import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Container from "./common/Container";
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
const Banner = () => {
  return (
    <div>
      <Container>
       <div className="flex items-center gap-6">
         <div className="w-[872px] h-[520px] bg-[#F2F4F5] py-[56px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="relative">
                  <div className="flex items-center ">
                    <div className="w-[356px] ml-[56px]">
                      <h4 className="text-[#2484C2] relative font-semibold text-sm leading-5 before:content-[] before:w-6 before:h-[3px] before:bg-[#2484C2] before:absolute flex items-center ml-7 before:left-[-28px]  ">
                        THE BEST PLACE TO PLAY
                      </h4>
                      <h2 className="font-semibold text-[48px] leading-[56px] text-[#191C1F] mt-1 mb-4">
                        Xbox Consoles
                      </h2>
                      <p className="font-normal text-[#475156] text-[18px] leading-6 mb-6 w-full">
                        Save up to 50% on select Xbox games. Get 3 months of PC
                        Game Pass for $2 USD.
                      </p>
                      <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[56px] h-full tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] ">
                        SHOP NOW <FaArrowRightLong />
                      </Button>
                      <div className="absolute bottom-0 left-[56px]">
                        <Pagination>
                          <PaginationContent>
                            
                            <PaginationItem >
                              <PaginationLink className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC] hover:bg-[#191C1F]" href="#"></PaginationLink>
                            </PaginationItem>
                             <PaginationItem>
                              <PaginationLink className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]" href="#"></PaginationLink>
                            </PaginationItem> <PaginationItem>
                              <PaginationLink className="w-[10px] h-[10px] rounded-full bg-[#ADB7BC]" href="#"></PaginationLink>
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
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
                <div>
                  <h4>THE BEST PLACE TO PLAY</h4>
                  <h2>Xbox Consoles</h2>
                  <p>
                    Save up to 50% on select Xbox games. Get 3 months of PC Game
                    Pass for $2 USD.
                  </p>
                  <Button className="text-[#191C1F] font-bold text-sm leading-[48px] tracking-wide bg-[#EBC80C] hover:bg-[#EBC80C]/90 ">
                    SHOP NOW <FaArrowRightLong />
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <h4>THE BEST PLACE TO PLAY</h4>
                  <h2>Xbox Consoles</h2>
                  <p>
                    Save up to 50% on select Xbox games. Get 3 months of PC Game
                    Pass for $2 USD.
                  </p>
                  <Button className="text-[#191C1F] font-bold text-sm leading-[48px] tracking-wide bg-[#EBC80C] hover:bg-[#EBC80C]/90 ">
                    SHOP NOW <FaArrowRightLong />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="h-[520px] w-[424px] bg-red-500">
          <div></div>
        <div></div>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default Banner;

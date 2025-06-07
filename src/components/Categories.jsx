import React from "react";
import Container from "./common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const Categories = () => {
  return (
    <div className="relative">
      <Container>
        <h2 className="font-semibold text-[32px] leading-10 text-[#191C1F] text-center mb-10">
          Shop with Categorys
        </h2>
        <div className="">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/apple.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Computer & Laptop</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Smartphone.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">SmartPhone</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Headphone.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Headphones</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Keyboard.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Accessories</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Camera.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Camera & Photo</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Tv.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">TV & Homes</h3>
                </div>
              </CarouselItem>
              {/* Slider Purposes */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/apple.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Computer & Laptop</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Smartphone.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">SmartPhone</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Headphone.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Headphones</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Keyboard.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Accessories</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Camera.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">Camera & Photo</h3>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                <div className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image src="/images/Tv.png" alt="Apple Laptop Image" width={148} height={148} className="mb-4"/>
                    <h3 className="font-medium text-[16px] leading-6">TV & Homes</h3>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-[#FA8232] cursor-pointer text-white absolute top-2/4 translate-y-[-50%] left-[-16px] w-[48px] h-[48px] opacity-100 text-2xl disabled:bg-[#FA8232] disabled:opacity-100" />
      <CarouselNext className="bg-[#FA8232] text-white absolute top-2/4 translate-y-[-50%] right-[-16px] w-[48px] h-[48px] opacity-100 text-2xl disabled:bg-[#FA8232] cursor-pointer disabled:opacity-100" />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Categories;

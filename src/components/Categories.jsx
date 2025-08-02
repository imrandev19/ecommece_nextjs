"use client"
import React, { useEffect, useState } from "react";
import Container from "./common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import axios from "axios";
import Link from 'next/link'
const Categories = () => {

  const [category, setCategory] = useState([])
    
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
 console.log(category)

  return (
    <div className="relative">
      <Container>
        <h2 className="font-semibold text-[32px] leading-10 text-[#191C1F] text-center mb-10">
          Shop with Categorys
        </h2>
        <div className="">
          <Carousel>
            <CarouselContent>
              {category.map((item, index, slug)=>(
                <CarouselItem key={index}  className="md:basis-1/2 lg:basis-1/6">
                <div  className="w-[205px] h-[236px] border-1 rounded-[6px] py-6 px-3 flex flex-col justify-center items-center">
                    <Image className="mb-4 !object-fit-contain"  src={item.image} alt="Apple Laptop Image" width={148} height={148} />
                    <h3 className="font-medium text-[16px] leading-6">
                      <Link href={`/category/${item.slug}`}>{item.categoryName}</Link>
                    </h3>
                </div>
              </CarouselItem>
              ))}
             
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

"use client";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"; // optional for price range

const categories = [
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watches & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
];

const priceRanges = [
  "All Price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
  "$1,000 to $10,000",
];


const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState("Electronics Devices");
  const [selectedPrice, setSelectedPrice] = useState("$300 to $500");
  const [price, setPrice] = useState([100, 500]);
  return (
    <div className="bg-[#F2F4F5] h-[72px] pt-[26px]">
        <Container>
          <div className="flex gap-2 items-center">
            <LiaHomeSolid width={20} height={20} className="text-[#5F6C72]" />
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-[#5F6C72] text-sm leading-5 font-normal">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components" className="text-[#5F6C72] text-sm leading-5 font-normal">
                      Shop
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-[#5F6C72] text-sm leading-5 font-normal">Shop Grid</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#2DA5F3] text-sm leading-5 font-medium" >Electronic Devices</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
          <div >
            <aside className="w-72 p-4 border-r space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-bold mb-4">CATEGORY</h3>
        <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <RadioGroupItem value={cat} id={cat} />
              <Label htmlFor={cat} className="text-sm">{cat}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-bold mb-4">PRICE RANGE</h3>
        <div className="px-2 mb-4">
          <Slider
            defaultValue={price}
            min={0}
            max={1000}
            step={10}
            onValueChange={setPrice}
          />
          <div className="flex justify-between text-xs mt-2">
            <span>${price[0]}</span>
            <span>${price[1]}</span>
          </div>
        </div>
        <RadioGroup value={selectedPrice} onValueChange={setSelectedPrice} className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <RadioGroupItem value={range} id={range} />
              <Label htmlFor={range} className="text-sm">{range}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </aside>
          </div>
        </Container>
      </div>
  )
}

export default Filter
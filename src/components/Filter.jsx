"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { selectedProduct } from "@/lib/productSlice";
const FilterSidebar = () => {
  let dispatch = useDispatch()

  const [priceRange, setPriceRange] = useState([0, 1000]);
const [categories,setCategories] = useState([])
const [activeValue, setActiveValue] = useState("")

function getCategory(){
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/category/allcategories`)
  .then(response => {
    // Handle successful response
    setCategories(response.data.data); // The retrieved data is in response.data
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
  }
 useEffect(()=>{
   getCategory()
 },[])
 console.log(categories)

 useEffect(() => {
  if (activeValue) {
    dispatch(selectedProduct(activeValue)); // send only selected category
  }
}, [activeValue, dispatch]);
  const priceOptions = [
    "Under $20",
    "$20 to $100",
    "$100 to $300",
    "$300 to $500",
    "$500 to $1,000",
    "$1,000 to $10,000",
  ];

  const brands = [
    "Apple",
    "Microsoft",
    "Dell",
    "Sony",
    "LG",
    "One Plus",
    "Google",
    "Samsung",
    "HP",
    "Xiaomi",
    "Panasonic",
    "Intel",
  ];

  const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];
console.log(activeValue)
  return (
    <>
    
    <div className="w-full max-w-[280px] p-4 space-y-6 border-r border-gray-200 font-public_sans text-gray-700">
      {/* Category Filter */}
       {/* Category Filter Section */}
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-2">CATEGORY</h4>
        <RadioGroup
  value={activeValue} // bind selected value
  onValueChange={(value) => setActiveValue(value)} // update selected value
  className="space-y-1"
>
  {categories.map((cat, idx) => (
    <div key={idx} className="flex items-center space-x-2">
      <RadioGroupItem value={cat._id} id={`cat-${idx}`} />
      <Label htmlFor={`cat-${idx}`}>{cat.categoryName}</Label>
    </div>
  ))}
</RadioGroup>
      </div>

      {/* Price Range Slider */}
      <div>
        <h4 className="text-md font-semibold mb-2">PRICE RANGE</h4>
        <Slider
          defaultValue={priceRange}
          max={1000}
          step={10}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2 text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Price Options Radio */}
      <div>
        <RadioGroup defaultValue={priceOptions[0]} className="space-y-1">
          {priceOptions.map((price, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem value={price} id={`price-${idx}`} />
              <Label htmlFor={`price-${idx}`}>{price}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Popular Brands */}
      <div>
        <h4 className="text-md font-semibold mb-2">POPULAR BRANDS</h4>
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Checkbox id={`brand-${idx}`} />
              <Label htmlFor={`brand-${idx}`}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div>
        <h4 className="text-md font-semibold mb-2">POPULAR TAG</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-100 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Promotional Item */}
      <div className="mt-4">
        <Image
          src="/images/A71b.png"
          alt="Promo Watch"
          width={260}
          height={200}
          className="rounded-md"
        />
        <div className="text-center mt-2">
          <p className="text-sm font-semibold">Heavy on Features. Light on Price.</p>
          <p className="text-orange-600 text-md font-bold mt-1">Only for $299 USD</p>
          <button className="mt-2 px-4 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterSidebar;

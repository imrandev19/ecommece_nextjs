
'use client'
import Container from "./common/Container";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Products from "./common/Products";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton"
const FeaturedProduct = () => {
  const [featureProducts, setFeatureProducts]=useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)

const [activeTab, setActiveTab] = useState("All Products")
const handleTab =(name)=>{
setActiveTab(name)
}


function getFeaturedProducts(){
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/get-featured-products`).then((res)=>
{
  setFeatureProducts(res.data.data)
  setLoading(false)
}
).catch(err=>console.log(err))
}
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

useEffect( ()=>{
 getFeaturedProducts()
 getCategory()
},[])

const filterProduct =  activeTab === "All Products"? featureProducts: featureProducts.filter((item)=> item.category.categoryName == activeTab)
if(loading){
return (
    <div className="flex items-center space-x-4 container mx-auto">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

  return (
    <div className="my-[72px]">
      <Container>
        <div className="flex gap-6">
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
          <div className="w-full ">
            <div className="flex items-center justify-between mb-[26px]">
              <h3 className="font-semibold text-2xl leading-8 text-[#191C1F]">Featured Products</h3>
              <ul className="flex items-center">
                {category.map((item,index)=>(

                <li onClick={()=>handleTab(item.categoryName)} key={index}  className={`font-normal text-[#5F6C72] p-2 text-sm leading-5 cursor-pointer ${activeTab == item.categoryName && "border-b-4 border-[#FA8232] font-semibold text-[#191C1F]"} `}>{item.categoryName}</li>
                ))}
                
                <li className=" font-semibold text-sm leading-5 text-[#FA8232] ml-4"><Link href="/shop" className="flex gap-2">Browse All Product <FaArrowRightLong className="w-[20px] h-[20px] font-normal" /></Link> </li>
              </ul>
            </div>
            <div>
               
                <div className="grid grid-cols-4 gap-4 relative ">
                  {filterProduct.length>0?
                  filterProduct?.map((item, index)=>(

                  <Products id={index} product={item} />
                  )):
                  <div className="text-red-500 font-black text-3xl absolute top-[200px] left-1/2 translate-x-[-50%]">
                    NO PRODUCTS FOUND
                  </div>
                }
                
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;

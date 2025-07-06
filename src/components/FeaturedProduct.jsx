
'use client'
import Container from "./common/Container";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Products from "./common/Products";

const FeaturedProduct = () => {
  const tabItems =[{
  id:1,
  name: "All Products"
},
{
  id:2,
  name: "Smart Phone"
},
{
  id:3,
  name: "Laptop"
},
{
  id:4,
  name: "Headphone"
},
{
  id:5,
  name: "TV"
}
]
const [activeTab, setActiveTab] = useState("All Products")
const handleTab =(name)=>{
setActiveTab(name)
}
const productsList= [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "Laptop",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "Laptop",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "TV",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "Smart Phone",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "Laptop",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "Laptop",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "Laptop",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "TV",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "Smart Phone",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "Smart Phone",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "TV",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "TV",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "Smart Phone",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "Smart Phone",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
]
const filterProduct =  activeTab == "All Products"? productsList: productsList.filter((item)=> item.category == activeTab)
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
                {tabItems.map((item,index)=>(

                <li onClick={()=>handleTab(item.name)} key={index}  className={`font-normal text-[#5F6C72] p-2 text-sm leading-5 cursor-pointer ${activeTab == item.name && "border-b-4 border-[#FA8232] font-semibold text-[#191C1F]"} `}>{item.name}</li>
                ))}
                
                <li className=" font-semibold text-sm leading-5 text-[#FA8232] ml-4"><Link href="#" className="flex gap-2">Browse All Product <FaArrowRightLong className="w-[20px] h-[20px] font-normal" /></Link> </li>
              </ul>
            </div>
            <div>
               
                <div className="grid grid-cols-4 gap-4 relative ">
                  {filterProduct.length>0?
                  filterProduct?.map((item, index)=>(

                  <Products id={index} product={item}/>
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

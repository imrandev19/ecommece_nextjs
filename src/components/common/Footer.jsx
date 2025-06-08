import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#191C1F] h-[472px]">
      <Container>
        <div className="footerTop pt-[72px] flex gap-6 h-[404]">
          <div className="w-[312px]">
            <Image
              src="/images/Logofooter.png"
              alt="Footer Logo"
              width={177}
              height={48}
            />
            <div>
              <div className="mb-3 mt-6">
                <p className="font-normal text-sm text-[#77878F] leading-5">Customer Supports:</p>
                <h3 className="font-medium text-sm text-[#FFFFFF] leading-6">(629) 555-0129</h3>
              </div>
              <p className="w-[248px] font-normal text-[18px] leading-6 text-[#ADB7BC] mb-3">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="font-medium text-[16px] text-white leading-6">info@kinbo.com</p>
            </div>
          </div>
          <div className="w-[200px]">
            <h2 className="font-medium text-[16px] leading-6 uppercase text-[#FFFFFF] mb-3">Top Category</h2>
            <ul>
                <li className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Computer & Laptop</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">SmartPhone</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Headphone</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Accessories</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Camera & Photo</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">TV & Homes</li>
                <li  className="text-sm text-[#EBC80C] font-medium leading-5 flex gap-2 items-center  ">Browse All Product <FaArrowRightLong /> </li>
            </ul>
          </div>
          <div className="w-[200px]">
            <h2 className="font-medium text-[16px] leading-6 uppercase text-[#FFFFFF] mb-3">Quick links</h2>
            <ul>
                <li className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Shop Product</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Shoping Cart</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Wishlist</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Compare</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Track Order</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5 mb-[6px] ">Customer Help</li>
                <li  className="text-sm text-[#929FA5] font-medium leading-5" >About Us </li>
            </ul>
          </div>
          <div className="w-[200px] ">
            <h2 className="font-medium text-[16px] leading-6 uppercase text-[#FFFFFF] mb-[18px]">Download APP</h2>
            <div className="w-[176px] h-[69px] bg-[#303639] flex items-center pl-6 gap-4 rounded-[3px] mb-3">
                <Image src="/images/Googleplay.png" alt="Googleplay icon" width={32} height={32}/>
                <div>
                    <p className="font-normal text-[11px] leading-[13px] font-inter text-[#FFFFFF] ">Get it now</p>
                    <h3 className="font-semibold text-sm leading-5 font-inter text-[#FFFFFF]">Google Play</h3>
                </div>
            </div>
            <div className="w-[176px] h-[69px] bg-[#303639] flex items-center pl-6 gap-4 rounded-[3px]">
                <Image src="/images/Applelogo.png" alt="Applelogo icon" width={32} height={32}/>
                <div>
                    <p className="font-normal text-[11px] leading-[13px] font-inter text-[#FFFFFF] ">Get it now</p>
                    <h3 className="font-semibold text-sm leading-5 font-inter text-[#FFFFFF]">App Store</h3>
                </div>
            </div>
          </div>
          <div className="w-[312px] h-[194px]">
            <h2 className="font-medium text-[#FFFFFF] text-[16px] leading-6 mb-[18px] uppercase">Popular Tag</h2>
            <div className=" w-full flex flex-wrap gap-2">
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Game</p>
                <p className="py-[6px] font-medium text-sm leading-5  px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">iPhone</p>
                <p className="py-[6px] font-medium text-sm leading-5  px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">TV</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Asus Laptops</p>
                <p className="py-[6px] font-medium text-sm leading-5  px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Macbook</p>
                <p className="py-[6px] font-medium text-sm leading-5  px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">SSD</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Graphics Card</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Power Bank</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Smart TV</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Speaker</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Tablet</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Microwave</p>
                <p className="py-[6px] font-medium text-sm leading-5 px-3 rounded-[2px] border-[1px] border-[#303639] text-[#FFFFFF]">Samsung </p>
                
            </div>
          </div>
        </div>
        
        

      </Container>
      <div className="bar w-full h-[1px] bg-[#303639] "></div>
      <Container>
            <div className="footerbottom">
            
            <p className="font-normal text-sm text-[#ADB7BC] leading-5 py-6 text-center" >Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by Md. Imran Hossain</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

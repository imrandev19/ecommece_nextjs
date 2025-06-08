import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#191C1F] h-[472px]">
      <Container>
        <div className="footerTop pt-[72px] flex gap-6">
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
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import React from "react";
import Container from "./common/Container";
import { BsBoxSeam } from "react-icons/bs";
import { TfiCup } from "react-icons/tfi";
import { PiCreditCardLight } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";
const Features = () => {
  return (
    <div className="mt-6">
      <Container>
        <div className="w-full border-[1px] rounded-[6px] border-solid border-[#E4E7E9] h-[108px] py-4 pl-4 flex items-center gap-[56px]">
          <div className="flex gap-4 w-[280px] relative after:bg-[#E4E7E9] after:w-[1px] after:h-[56px] after:absolute after:content-[] after:right-[-28px] pl-4">
            <div>
              <BsBoxSeam className="w-10 h-10" />
            </div>
            <div>
              <h3 className="uppercase text-[#191C1F] text-sm leading-5 font-medium mb-1">
                Fasted Delivery
              </h3>
              <p className="text-[#5F6C72] text-sm leading-5 font-normal">
                Delivery in 24/H
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-[280px] relative after:bg-[#E4E7E9] after:w-[1px] after:h-[56px] after:absolute after:content-[] after:right-[-28px] pl-4">
            <div>
              <TfiCup className="w-10 h-10" />
            </div>
            <div>
              <h3 className="uppercase text-[#191C1F] text-sm leading-5 font-medium mb-1">
                24 Hours Return
              </h3>
              <p className="text-[#5F6C72] text-sm leading-5 font-normal">
                100% money-back guarantee
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-[280px] relative after:bg-[#E4E7E9] after:w-[1px] after:h-[56px] after:absolute after:content-[] after:right-[-28px] pl-4">
            <div>
              <PiCreditCardLight className="w-10 h-10" />
            </div>
            <div>
              <h3 className="uppercase text-[#191C1F] text-sm leading-5 font-medium mb-1">
                Secure Payment
              </h3>
              <p className="text-[#5F6C72] text-sm leading-5 font-normal">
                Your money is safe
              </p>
            </div>
          </div>

          <div className="flex gap-4 w-[280px] relative  pl-4">
            <div>
              <PiHeadphonesLight className="w-10 h-10" />
            </div>
            <div>
              <h3 className="uppercase text-[#191C1F] text-sm leading-5 font-medium mb-1">
                Support 24/7
              </h3>
              <p className="text-[#5F6C72] text-sm leading-5 font-normal">
                Live contact/message
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Features;

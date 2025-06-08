import React from 'react'
import Container from './common/Container'
import { Input } from "@/components/ui/input"
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
const Subscribe = () => {
  return (
    <div className='h-[452px] w-full bg-[#1B6392] py-[72px]'>
        <Container>
            <div className='flex flex-col items-center '>
                <h2 className='font-semibold text-[32px] text-[#FFFFFF] leading-10 mb-3'>Subscribe to our newsletter</h2>
            <p className='font-normal text-[16px] text-[#FFFFFF] leading-6 mb-8 w-[536px]'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            <div className='w-[624px] h-[72px] bg-white rounded-[3px] mb-8 flex items-center'>
                <Input className="h-full border-none" type="email" placeholder="Email" />
                <Button className="text-[#FFFFFF] font-bold text-[16px] cursor-pointer leading-[56px] h-[56px] tracking-wide bg-[#FA8232] hover:bg-[#FA8232]/90 w-[191px] mr-3 ">
                                          SUBSCRIBE <FaArrowRightLong />
                                        </Button>
            </div>
            <div className='flex gap-[48px] relative before:content-[] before:w-[424px] before:h-[0.1px] before:rounded-[1px] before:opacity-15 before:absolute before:bg-[#FFFFFF] top-0 before:left-2/4 before:translate-x-[-50%] '>
               
                <Image src="/images/google.png" alt="google" width={72} height={72}/>
                <Image src="/images/Amazon.png" alt="Amazon" width={72} height={72}/>
                <Image src="/images/philips.png" alt="Phillips" width={72} height={72}/>
                <Image src="/images/Toshiba.png" alt="Toshiba" width={72} height={72}/>
                <Image src="/images/Samsunglogo.png" alt="Samsunglogo" width={72} height={72}/>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Subscribe
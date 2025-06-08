import React from 'react'
import Container from './common/Container'
import Image from 'next/image'

const AllProducts = () => {
  return (
    <div>
        <Container>
            <div className='grid grid-cols-4 gap-x-6'>
                <div className='flash'>
                    <h2 className='uppercase text-[#191C1F] text-[16px] font-semibold leading-6 mb-4'>FLASH SALE TODAY</h2>
                    <div className='flex items-center gap-3 p-3 border-1 border-[#E4E7E9]'>
                        <Image src="/images/camera2.png" alt="Pc Camera" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 my-4 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Samsung.png" alt="samsung" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>BSimple Mobile 4G LTE Prepaid Smartphone</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3  border-1 border-[#E4E7E9]'>
                        <Image src="/images/keyb.png" alt="Keyboard" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>4K UHD LED Smart TV with Chromecast Built-in</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                </div>
                <div className='best'>
                    <h2 className='uppercase text-[#191C1F] text-[16px] font-semibold leading-6 mb-4'>BEST SELLERS</h2>
                    <div className='flex items-center gap-3 p-3 border-1 border-[#E4E7E9]'>
                        <Image src="/images/PlayStation.png" alt="Pc Camera" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Samsung Electronics Samsung Galexy S21 5G</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 my-4 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Ip.png" alt="Ip Camera" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3  border-1 border-[#E4E7E9]'>
                        <Image src="/images/A71b.png" alt="A71" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Sony DSCHX8 High Zoom Point & Shoot Camera</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                </div>
                <div className='top'>
                    <h2 className='uppercase text-[#191C1F] text-[16px] font-semibold leading-6 mb-4'>TOP RATED</h2>
                    <div className='flex items-center gap-3 p-3 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Tvb.png" alt="Tv" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Portable Wshing Machine, 11lbs capacity Model 18NMF...</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 my-4 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Drone.png" alt="Drone" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Sony DSCHX8 High Zoom Point & Shoot Camera</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3  border-1 border-[#E4E7E9]'>
                        <Image src="/images/airbuds.png" alt="Pc Camera" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Dell Optiplex 7000x7480 All-in-One Computer Monitor</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                </div>
                <div className='new'>
                    <h2 className='uppercase text-[#191C1F] text-[16px] font-semibold leading-6 mb-4'>NEW ARRIVAL</h2>
                    <div className='flex items-center gap-3 p-3 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Sony.png" alt="Sony" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>TOZO T6 True Wireless Earbuds Bluetooth Headpho...</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3 my-4 border-1 border-[#E4E7E9]'>
                        <Image src="/images/Printer.png" alt="Printer" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-3  border-1 border-[#E4E7E9]'>
                        <Image src="/images/Joystick.png" alt="Joystick" width={80} height={80}/>
                        <div>
                            <h3 className=' font-normal text-sm text-[#191C1F] leading-5'>Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...</h3>
                        <p className='mt-2 font-semibold text-sm text-[#2DA5F3] leading-5'>$1,500</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </Container>
    </div>
  )
}

export default AllProducts
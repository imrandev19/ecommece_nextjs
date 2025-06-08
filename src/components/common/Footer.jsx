import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#191C1F] h-[472px]'>
        <Container>
            <div className='footerTop'>
                <div>
                    <Image src="/images/Logofooter.png" alt="Footer Logo" width={177} height={48}/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer
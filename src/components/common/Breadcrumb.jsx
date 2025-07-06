'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
import Container from './Container';
const Breadcrumb = () => {
    const pathname = usePathname()
  const  pathSigments = pathname.split('/').filter(sigment=> sigment !== "")

 const breadcrumb = pathSigments.map((item, index)=>{
  const href =`/${pathSigments.slice(0, index+1)}`
  return {
    name:item,
    href
  }
  } )
 
  return (
    <div className='w-full'>
      <Container>

      <ul className='flex gap-2 items-center '>
        <li className='list-none flex gap-2'><Link href="/" className='flex gap-2 items-center'><IoHomeOutline />Home</Link></li>
        {breadcrumb.map((item=>
        
        <li className='list-none flex items-center gap-2'><FaGreaterThan /><Link href={item.href}>{item.name}</Link></li>
    ))}
      </ul>
      </Container>
      </div>
  )
}

export default Breadcrumb
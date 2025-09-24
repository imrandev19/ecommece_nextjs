'use client'
import React, { useEffect, useRef, useState } from 'react'
import Container from './common/Container'

const CheckState = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currenRef = useRef(null)
    const handleOption =()=>{
        setIsOpen(!isOpen)
    }

useEffect(()=>{
    const handleOutside =(e)=>{
        if(currenRef.current && !currenRef.current.contains(e.target)){
            setIsOpen(false)
        }
       

            
    };
     document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    }
},[])
    
  return (
    <Container>

    <div ref={currenRef} className='w-[300px] bg-red-500' >
        <p onClick={handleOption}>Option</p>
       {isOpen &&
       <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
       </ul>
       }
    </div>
    </Container>
  )
}

export default CheckState
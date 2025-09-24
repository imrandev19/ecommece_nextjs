import React from 'react'
import AllProducts from '@/components/AllProducts'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import FeaturedProduct from '@/components/FeaturedProduct'
import Features from '@/components/Features'
import Introducing from '@/components/Introducing'
import Subscribe from '@/components/Subscribe'





const page = () => {
  return (
    <>

    <Banner/>
    <Features/>
   
    <Categories/>
    <FeaturedProduct/>
    <Introducing/>
    <AllProducts/>
    <Subscribe/>
    
    </>
  )
}

export default page
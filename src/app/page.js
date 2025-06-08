import AllProducts from '@/components/AllProducts'
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Header from '@/components/common/Header'
import FeaturedProduct from '@/components/FeaturedProduct'
import Features from '@/components/Features'
import Introducing from '@/components/Introducing'
import Subscribe from '@/components/Subscribe'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
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
import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Header from '@/components/common/Header'
import FeaturedProduct from '@/components/FeaturedProduct'
import Features from '@/components/Features'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Features/>
    <Categories/>
    <FeaturedProduct/>
    </>
  )
}

export default page
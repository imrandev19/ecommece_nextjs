"use client"
import Breadcrumb from '@/components/common/Breadcrumb'
import ProductDetails from '@/components/ProductDetails'
import React from 'react'
import { useSelector } from "react-redux";
const page = () => {
  const viewProduct = useSelector((state) => state.product.viewProduct);
    console.log(viewProduct)
  return (
    <div>
        <Breadcrumb/>
        <ProductDetails details ={viewProduct}/>
    </div>
  )
}

export default page
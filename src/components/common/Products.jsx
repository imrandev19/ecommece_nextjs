import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";    
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { selectedSingleProduct , selectProductforAdd } from '@/lib/productSlice';

const Products = ({ product, id }) => {
  const router = useRouter();
  const dispatch = useDispatch();

 const handleEye = (product) => {
  dispatch(selectedSingleProduct(product));  // ✅ send product to viewProduct
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  router.push(`/shop/${product?.slug}`);
};

  const handleAddToCart = (product) => {
    dispatch(selectProductforAdd(product));

    // ✅ store full cart in localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = existingCart.find((p) => p.id === product.id);
    if (!exists) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div
      key={id}
      className="p-4 border-1 border-[#E4E7E9] group relative overflow-hidden"
    >
      <div className="flex gap-2 absolute bottom-[-70px] group-hover:bottom-2/4 translate-[-50%] left-2/4 transition-all duration-300">
        <div className="z-100 p-3 bg-white rounded-full cursor-pointer hover:bg-[#FA8232] hover:text-white">
          <GrFavorite className="w-[24px] h-[24px] text-[#191C1F] hover:text-white" />
        </div>

        {/* ✅ Add to Cart */}
        <div
          onClick={() => handleAddToCart(product)}
          className="z-100 p-3 bg-white rounded-full cursor-pointer hover:bg-[#FA8232]"
        >
          <CiShoppingCart className="w-[24px] h-[24px] text-[#191C1F] hover:text-white" />
        </div>

        {/* ✅ Quick View */}
        <div
          onClick={() => handleEye(product)}
          className="z-100 p-3 bg-white rounded-full cursor-pointer hover:bg-[#FA8232]"
        >
          <FiEye className="w-[24px] h-[24px] text-[#191C1F] hover:text-white" />
        </div>
      </div>

      <Image
        src={product?.thumbnail || product.image}
        alt={product.title}
        width={202}
        height={172}
        className="mb-6 w-[202px] h-[172px] object-contain"
      />

      <div className="flex gap-1 items-start">
        <ul className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="text-[#FA8232]">
              <FaStar />
            </li>
          ))}
          <li className="text-[12px] font-normal leading-4 text-[#77878F]">
            (738)
          </li>
        </ul>
      </div>

      <h3 className="my-2 font-normal text-sm leading-5 text-[#191C1F] w-[202px]">
        {product.title}
      </h3>
      <p className="font-bold text-sm text-[#2DA5F3] leading-5">
        ${product.price}
      </p>
    </div>
  );
};

export default Products;

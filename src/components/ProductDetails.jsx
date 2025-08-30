"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // optional if you use shadcn/ui
import Container from "./common/Container";
import { useDispatch } from "react-redux";
import { selectedProduct, selectProductforAdd } from "@/lib/productSlice";
import { useRouter } from "next/navigation";

const ProductDetails = ({ details }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      dispatch(selectedProduct(JSON.parse(savedProduct)));
    }
  }, [dispatch]);
 const handleAddtoCart = (product) => {
  dispatch(selectProductforAdd(product));

  // ✅ update localStorage with whole cart
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = [...existingCart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  router.push("/cart");
};
  return (
    <Container>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div>
          <Image
            src={details?.thumbnail}
            alt={details?.title}
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-contain w-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{details?.title}</h1>
          <p className="text-gray-500 text-sm mb-2">SKU: {details?.slug}</p>
          <p className="text-green-600 font-medium mb-2">
            Availability: {details?.stock ? "In Stock" : "Out of Stock"}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-orange-600">
              ${details?.price}
            </span>
            {details?.oldPrice && (
              <span className="line-through text-gray-400">
                ${details?.oldPrice}
              </span>
            )}
            {details?.discount && (
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                {details?.discount}% OFF
              </span>
            )}
          </div>
          {/* Variants */}
          <div className="mb-4">
            <label className="block font-medium">Memory</label>
            <select className="border rounded-md px-3 py-2 mt-1 w-full">
              <option>8GB</option>
              <option>16GB</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium">Storage</label>
            <select className="border rounded-md px-3 py-2 mt-1 w-full">
              <option>256GB SSD</option>
              <option>512GB SSD</option>
            </select>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => handleAddtoCart(details)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              Add to Cart
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      {/* Tabs: Description / Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b flex gap-6 mb-6">
          <button className="pb-2 border-b-2 border-orange-500 font-medium">
            Description
          </button>
          <button className="pb-2 text-gray-500">Additional Info</button>
          <button className="pb-2 text-gray-500">Specification</button>
          <button className="pb-2 text-gray-500">Reviews</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Description */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {details?.description ||
                "This is a powerful laptop designed for performance and reliability."}
            </p>
          </div>

          {/* Right: Features / Shipping */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc ml-5 text-gray-600 space-y-1">
                <li>Free 1 Year Warranty</li>
                <li>Free Shipping & Fast Delivery</li>
                <li>100% Money Back Guarantee</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shipping Info</h3>
              <p className="text-gray-600 text-sm">
                Courier: 2–4 days, free shipping <br />
                UPS Global: 7–10 days, $19.00 <br />
                DHL Express: 3–5 days, $25.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;

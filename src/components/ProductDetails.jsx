"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "./common/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, addToCart } from "@/lib/productSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast"; // ✅ for notifications

const ProductDetails = ({ details }) => {
  const currentUser = useSelector((state) => state.auth?.currentUser);
  const router = useRouter();
  const dispatch = useDispatch();

  const variants = details?.variants || details?.variant || [];

  // ✅ unique lists
  const colors = [...new Set(variants.map((v) => v.color).filter(Boolean))];
  const storages = [...new Set(variants.map((v) => v.storage).filter(Boolean))];

  // ✅ user selections
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedStorage, setSelectedStorage] = useState(storages[0] || "");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // ✅ update variant when selection changes
  useEffect(() => {
    if (variants.length > 0) {
      const match = variants.find(
        (v) =>
          (selectedColor ? v.color === selectedColor : true) &&
          (selectedStorage ? v.storage === selectedStorage : true)
      );
      setSelectedVariant(match || null);
    }
  }, [selectedColor, selectedStorage, variants]);

  // ✅ load product from localStorage for safety
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      dispatch(selectedProduct(JSON.parse(savedProduct)));
    }
  }, [dispatch]);

  // ✅ add to cart
  const handleAddtoCart = () => {
    if (!currentUser?.id) {
      alert("Please login first");
      return;
    }

    dispatch(
      addToCart({
        _id: details._id,
        title: details.title,
        price: selectedVariant?.price || details.price,
        thumbnail: details.thumbnail,
        userId: currentUser.id,
        quantity,
      })
    );

    toast.success(`${details.title} added to cart`);
  };

  // ✅ buy now → add + go to checkout
  const handleBuyNow = () => {
    handleAddtoCart();
    router.push("/checkout");
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

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">{details?.title}</h1>
          <p className="text-gray-500 text-sm mb-2">SKU: {details?.slug}</p>

          {/* ✅ Availability */}
          <p className="text-green-600 font-medium mb-2">
            Availability:{" "}
            <span>
              {selectedVariant
                ? selectedVariant.stock > 0
                  ? "In Stock"
                  : "Out of Stock"
                : "Select options"}
            </span>
          </p>

          {/* ✅ Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-orange-600">
              ${selectedVariant?.price || details?.price}
            </span>
            {selectedVariant?.oldPrice && (
              <span className="line-through text-gray-400">
                ${selectedVariant.oldPrice}
              </span>
            )}
            {selectedVariant?.discount && (
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                {selectedVariant.discount}% OFF
              </span>
            )}
          </div>

          {/* ✅ Color dropdown */}
          {colors.length > 0 && (
            <div className="mb-6">
              <label className="block font-medium">Color</label>
              <select
                className="border rounded-md px-3 py-2 mt-1 w-full"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ✅ Storage dropdown */}
          {storages.length > 0 && (
            <div className="mb-6">
              <label className="block font-medium">Storage</label>
              <select
                className="border rounded-md px-3 py-2 mt-1 w-full"
                value={selectedStorage}
                onChange={(e) => setSelectedStorage(e.target.value)}
              >
                {storages.map((storage, index) => (
                  <option key={index} value={storage}>
                    {storage}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ✅ Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 border rounded-lg text-lg"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 border rounded-lg text-lg"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddtoCart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;

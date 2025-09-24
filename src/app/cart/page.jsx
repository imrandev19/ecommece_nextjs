"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import { removeFromCart, setCart } from "@/lib/productSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("cod"); // default payment method

  // ✅ Get cart & current user
  const cartProducts = useSelector((state) => state.product.cart);
  const currentUser = useSelector((state) => state.auth?.currentUser);

  // ✅ Load cart for current user from localStorage on mount
  useEffect(() => {
    if (currentUser?.id) {
      const savedCart = localStorage.getItem("cart_" + currentUser.id);
      if (savedCart) {
        dispatch(setCart(JSON.parse(savedCart)));
      }
    }
  }, [currentUser, dispatch]);

  // ✅ Remove product from cart
  const handleRemoveCart = (product) => {
    if (!currentUser?.id) return alert("Please login first");
    dispatch(removeFromCart({ _id: product._id, userId: currentUser.id }));
  };

  // ✅ Calculate total price
  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
  
const handleCheckout = async () => {
  if (!currentUser?.id) return alert("Please login first");

  try {
    const orderData = {
      userId: currentUser.id,
      products: cartProducts.map((p) => ({
        productId: p._id,
        title: p.title,
        price: p.price,
        quantity: p.quantity || 1,
      })),
      totalPrice,
      paymentMethod,
    };

    const res = await axios.post("http://localhost:4000/api/orders", orderData);

    if (res.data.success) {
      alert("✅ Order confirmed successfully!");
      router.push("/orders");
      // ✅ Clear cart after order
      localStorage.removeItem("cart_" + currentUser.id);
      dispatch(setCart([]));
    } else {
      alert("❌ Order failed. Try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong while placing order.");
  }
};

  return (
    <main className="py-10">
      <Container>
        <Breadcrumb />
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {!currentUser ? (
          <p className="text-gray-500">Please login to see your cart.</p>
        ) : cartProducts.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {/* Cart items */}
            <div className="space-y-4">
              {cartProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-500">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {product.quantity || 1}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveCart(product)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <p className="text-gray-700 mb-2">
                Total Price: <span className="font-bold">${totalPrice}</span>
              </p>

              {/* Payment method selection */}
              <div className="mb-4">
                <label className="block font-medium mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="online">Online Payment</option>
                </select>
              </div>

              {/* Checkout button */}
              <button  onClick={handleCheckout} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Page;

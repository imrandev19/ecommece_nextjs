"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCart } from "@/lib/productSlice";
import { toast, ToastContainer } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cart = useSelector((state) => state.product.cart || []);
  const reduxUser = useSelector((state) => state.auth.currentUser);
  const user =
    reduxUser || (typeof window !== "undefined" && JSON.parse(localStorage.getItem("currentUser")));

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const handleProceedCheckout = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    const orderId = "ORDER-" + Date.now(); // unique tran_id
    const orderData = {
      tran_id: orderId, // pass this to backend
      userId: user.id,
      products: cart.map((p) => ({
        productId: p._id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
      })),
      totalPrice,
      paymentMethod,
      status: paymentMethod === "cod" ? "confirmed" : "pending",
    };

    try {
      setLoading(true);

      // Save order in DB
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, orderData);

      if (paymentMethod === "cod") {
        // ✅ COD: just show success
        toast.success("Order placed successfully!");
        dispatch(setCart([]));
        localStorage.removeItem("cart_" + user._id);
        router.push("/orders");
      } else if (paymentMethod === "online") {
        // ✅ Online payment: initiate SSLCommerz
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/payment/initiate-payment`,
          {
            totalAmount: totalPrice,
            orderId,
            customerEmail: user.email,
            customerPhone: user.phone || "01711111111",
          }
        );

        if (res.data.redirectUrl) {
          window.location.href = res.data.redirectUrl; // redirect to SSL gateway
        } else {
          toast.error("Failed to start payment. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div className="flex-1">
                  <h2 className="font-medium">{item.title}</h2>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Online Payment
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ${totalPrice}</h2>
            <Button
              onClick={handleProceedCheckout}
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2"
            >
              {loading ? "Processing..." : "Proceed to Checkout"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

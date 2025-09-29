"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { clearCart, setCart } from "@/lib/productSlice";
import { toast, ToastContainer } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cart = useSelector((state) => state.product.cart || []);
  const reduxUser = useSelector((state) => state.auth.currentUser);

  // ✅ Controlled user state (safe for SSR)
  const [user, setUser] = useState(reduxUser || null);

  useEffect(() => {
    if (!reduxUser) {
      const stored = localStorage.getItem("currentUser");
      if (stored) setUser(JSON.parse(stored));
    }
  }, [reduxUser]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  // ✅ Customer info state
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "Bangladesh",
  });

  // Pre-fill when user is available
  useEffect(() => {
    if (user) {
      setCustomer({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        postcode: user.postcode || "",
        country: user.country || "Bangladesh",
      });
    }
  }, [user]);

  const handleProceedCheckout = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    const orderData = {
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
      // Customer info
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      customerCity: customer.city,
      customerState: customer.state,
      customerPostcode: customer.postcode,
      customerCountry: customer.country,
    };

    try {
      setLoading(true);

      // ✅ Backend generates tran_id
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
        orderData
      );

      if (paymentMethod === "cod") {
        toast.success("Order placed successfully!");
        dispatch(clearCart({ userId: user._id })); // ✅ Redux + localStorage cleared
        router.push("/orders");
      } else if (paymentMethod === "online") {
        if (res.data.success) {
          if (res.data.paymenturl) {
            window.location.href = res.data.paymenturl;
          }
        }
        // if (res.data.redirectUrl) {
        //   window.location.href = res.data.redirectUrl; // ✅ SSLCommerz redirect
        // } else {
        //   toast.error("Failed to start payment. Please try again.");
        // }
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
              <div
                key={item._id}
                className="flex items-center gap-4 border-b border-gray-200 pb-4"
              >
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

          {/* Customer Info */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(customer).map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={customer[field]}
                  onChange={(e) =>
                    setCustomer({ ...customer, [field]: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                  required
                />
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Select Payment Method
            </h2>
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

          {/* Checkout Button */}
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

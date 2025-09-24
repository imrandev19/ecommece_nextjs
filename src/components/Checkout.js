"use client";
import React, { useState } from "react";
import axios from "axios";

const Checkout = ({ orderData }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/initiate-payment`,
        orderData
      );

      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        alert("Payment initiation failed");
      }
    } catch (error) {
      console.error(error);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;

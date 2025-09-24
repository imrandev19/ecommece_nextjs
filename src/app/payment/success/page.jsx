"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Optional: redirect to orders after 5 seconds
    const timer = setTimeout(() => {
      router.push("/orders");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-gray-700">Thank you for your order. You will be redirected to your orders page shortly.</p>
    </div>
  );
}

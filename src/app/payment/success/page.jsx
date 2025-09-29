"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/lib/productSlice";

export default function PaymentSuccess() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    // ✅ Clear cart immediately (backend already confirmed order)
    if (user) {
      dispatch(clearCart({ userId: user._id }));
    }
  }, [dispatch, user]);

  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold text-green-600">🎉 Payment Successful!</h1>
      <p>Your order has been confirmed.</p>
    </div>
  );
}

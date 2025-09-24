"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const OrdersPage = () => {
  const currentUser = useSelector((state) => state.auth?.currentUser);
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  // ✅ Fetch orders for logged in user
  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser?.id) return;
      try {
        const res = await axios.get(
          `http://localhost:4000/api/orders/user/${currentUser.id}`
        );
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [currentUser]);

  // ✅ Cancel Order
  const handleCancelOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:4000/api/orders/${orderId}`);
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (err) {
      console.error(err);
      alert("Failed to cancel order");
    }
  };

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500">Please login to see your orders.</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-lg font-medium">No orders found.</p>
        <Button onClick={() => router.push("/shop")}>Shop Now</Button>
      </div>
    );
  }

  return (
    <main className="py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Order #{order._id}</h3>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  order.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            <ul className="text-sm text-gray-600 mb-3 space-y-1">
              {order.products.map((p, idx) => (
                <li key={idx}>
                  {p.title} × {p.quantity} — ${p.price}
                </li>
              ))}
            </ul>

            <p className="font-medium text-gray-800 mb-3">
              Total: ${order.totalPrice}
            </p>

{order.status !== "shipped" && (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive" size="sm">
        Cancel Order
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Are you sure you want to cancel this order?
        </AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. Stock will be restored to inventory.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep Order</AlertDialogCancel>
        <AlertDialogAction onClick={() => handleCancelOrder(order._id)}>
          Yes, Cancel
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)}



          </div>
        ))}
      </div>
    </main>
  );
};

export default OrdersPage;

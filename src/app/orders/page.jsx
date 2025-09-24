"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function OrdersPage() {
  const currentUser = useSelector((state) => state.auth?.currentUser);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // ✅ Fetch orders
  useEffect(() => {
    if (!currentUser?.id) return;
    axios
      .get(`http://localhost:4000/api/orders/${currentUser.id}`)
      .then((res) => {
        if (res.data.success) setOrders(res.data.orders);
      })
      .finally(() => setLoading(false));
  }, [currentUser]);

  // ✅ Cancel order
  const handleCancelOrder = async () => {
    if (!selectedOrder) return;
    try {
      await axios.delete(`http://localhost:4000/api/orders/${selectedOrder._id}`);
      setOrders(orders.filter((o) => o._id !== selectedOrder._id));
      setCancelDialogOpen(false);
    } catch (err) {
      alert("Failed to cancel order");
    }
  };

  if (!currentUser)
    return (
      <Container>
        <p className="text-gray-500 mt-10">Please login to see your orders.</p>
      </Container>
    );

  if (loading)
    return (
      <Container>
        <p className="text-gray-500 mt-10">Loading orders...</p>
      </Container>
    );

  return (
    <main className="py-10">
      <Container>
        <Breadcrumb />
        <h2 className="text-2xl font-bold mb-6">My Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <Card key={order._id} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Order #{order._id.slice(-6)}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {order.products.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-sm">
                        <span>
                          {item.title} × {item.quantity}
                        </span>
                        <span>${item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 font-semibold">
                    Total: ${order.totalPrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    Payment: {order.paymentMethod.toUpperCase()}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      order.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setSelectedOrder(order);
                      setCancelDialogOpen(true);
                    }}
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </Container>

      {/* ✅ Cancel confirmation dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Order</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to cancel this order?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              No
            </Button>
            <Button variant="destructive" onClick={handleCancelOrder}>
              Yes, Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

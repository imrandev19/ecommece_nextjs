"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Payment Cancelled!</h1>
      <p className="text-gray-700 mb-6">You have cancelled the payment.</p>
      <Button onClick={() => router.push("/cart")}>Back to Cart</Button>
    </div>
  );
}

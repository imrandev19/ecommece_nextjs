"use client"
import Breadcrumb from '@/components/common/Breadcrumb'
import Container from '@/components/common/Container'
import { removeFromCart, selectProductforAdd } from '@/lib/productSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
  const cartProducts = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCartProduct = localStorage.getItem("selectProductforAdd");
    if (savedCartProduct) {
      const parsed = JSON.parse(savedCartProduct);
      parsed.forEach((item) => dispatch(selectProductforAdd(item)));
    }
  }, [dispatch]);

  return (
    <main className='py-10'>
    <Container>
      <Breadcrumb />
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartProducts.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartProducts.map((product) => (
            <div key={product._id} className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                {console.log(product)}
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(product._id))}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </Container>
    </main>
  )
}

export default Page;

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./common/Products";
import { useSearchParams } from "next/navigation";

const Paginate = ({ itemsPerPage }) => {
  const searchParams = useSearchParams();

  // ✅ Get category and other filters from URL
  const category = searchParams.get("category") || "";
  const subcategory = searchParams.get("subcategory") || "";
  const brand = searchParams.get("brand") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const popular = searchParams.get("popular") || "";

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/product/getallproducts`;
      const query = new URLSearchParams();

      if (category) query.append("category", category);
      if (subcategory) query.append("subcategory", subcategory);
      if (brand) query.append("brand", brand);
      if (minPrice) query.append("minPrice", minPrice);
      if (maxPrice) query.append("maxPrice", maxPrice);
      if (popular) query.append("popular", popular);

      const res = await axios.get(`${url}?${query.toString()}`);
      setProducts(res.data.data || []);
      setCurrentPage(1); // reset to page 1 when filters change
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Re-fetch products whenever any filter changes
  useEffect(() => {
    fetchProducts();
  }, [category, subcategory, brand, minPrice, maxPrice, popular]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            {currentItems.map((product, index) => (
              <Products key={index} id={index} product={product} />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-2 py-1 border ${currentPage === i + 1 ? "bg-gray-200" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Paginate;

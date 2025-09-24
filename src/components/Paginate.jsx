"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./common/Products";

const Paginate = ({ itemsPerPage, filters }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/product/getallproducts`;

      // Append query parameters based on filters
      const query = new URLSearchParams();
      if (filters?.category) query.append("category", filters.category);
      if (filters?.subcategory) query.append("subcategory", filters.subcategory);
      if (filters?.brand) query.append("brand", filters.brand);
      if (filters?.minPrice) query.append("minPrice", filters.minPrice);
      if (filters?.maxPrice) query.append("maxPrice", filters.maxPrice);
      if (filters?.popular) query.append("popular", true);

      const res = await axios.get(`${url}?${query.toString()}`);
      setProducts(res.data.data || []);
      setCurrentPage(1); // reset to page 1 when filters change
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

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

"use client";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./common/Products";
import axios from "axios";

const Paginate = ({ itemsPerPage }) => {
  const [items, setItems] = useState([]);
  const activeCategory = useSelector((state) => state.product.currentCategory);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    getData();
    setItemOffset(0); // reset to first page when category changes
  }, [activeCategory]); // <--- now it will refetch when category changes

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/getallproducts`,
        {
          params: {
            category: activeCategory || "all"
          }
        }
      );
      setItems(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Pagination
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const Items = ({ currentItems }) => (
    <div className="grid grid-cols-3 gap-4">
      {currentItems.length > 0 ? (
        currentItems.map((item, index) => (
          <Products key={item._id || index} product={item} />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products found</p>
      )}
    </div>
  );

  return (
    <>
      <Items currentItems={currentItems} />
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex gap-2 my-5 justify-center"
          pageClassName="w-10 h-10 border border-red-500 flex items-center justify-center rounded-full"
          previousClassName="w-10 h-10 border border-red-500 flex items-center justify-center rounded-full"
          nextClassName="w-10 h-10 border border-red-500 flex items-center justify-center rounded-full"
          activeClassName="bg-red-500 text-white"
        />
      )}
    </>
  );
};

export default Paginate;

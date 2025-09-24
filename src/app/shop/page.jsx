"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import FilterSidebar from "@/components/Filter";
import Paginate from "@/components/Paginate";
import { useState } from "react";

const ShopPage = () => {
  const [filters, setFilters] = useState({});

  return (
    <main>
      <Breadcrumb />
      <Container>
        <div className="flex justify-between">
          <div className="w-[20%]">
            <FilterSidebar setFilters={setFilters} />
          </div>
          <div className="w-[78%]">
            <Paginate itemsPerPage={12} filters={filters} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ShopPage;

"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import axios from "axios";

const FilterSidebar = ({ setFilters }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [popular, setPopular] = useState(false);

  // Fetch categories
  const getCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/category/allcategories`
      );
      setCategories(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch brands (assuming API exists)
  const getBrands = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/brands`
      );
      setBrands(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  // Update filters whenever any field changes
  useEffect(() => {
    setFilters({
      category: selectedCategory,
      brand: selectedBrand,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      popular,
    });
  }, [selectedCategory, selectedBrand, minPrice, maxPrice, popular]);

  return (
    <div className="w-full max-w-[280px] p-4 space-y-6 border-r border-gray-200">
      {/* Category Filter */}
      <div>
        <h4 className="text-md font-semibold mb-2">CATEGORY</h4>
        <RadioGroup
          onValueChange={(value) => setSelectedCategory(value)}
          className="space-y-1"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem value={cat._id} id={`cat-${idx}`} />
              <Label htmlFor={`cat-${idx}`}>{cat.categoryName}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="text-md font-semibold mb-2">BRAND</h4>
        <RadioGroup
          onValueChange={(value) => setSelectedBrand(value)}
          className="space-y-1"
        >
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem value={brand} id={`brand-${idx}`} />
              <Label htmlFor={`brand-${idx}`}>{brand}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="text-md font-semibold mb-2">PRICE</h4>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border p-1 rounded"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border p-1 rounded"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Popular Filter */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="popular"
          checked={popular}
          onChange={(e) => setPopular(e.target.checked)}
        />
        <Label htmlFor="popular">Popular</Label>
      </div>

      {/* Promo Image */}
      <div className="mt-4">
        <Image
          src="/images/A71b.png"
          alt="Promo Watch"
          width={260}
          height={200}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;

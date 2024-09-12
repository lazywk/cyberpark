import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/store/products/productsApi";

export default function ProductList() {
  const { data, isLoading } = useGetProductsQuery("", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="flex flex-wrap">
      {isLoading ? "Loading..." : ""}
      {data &&
        data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

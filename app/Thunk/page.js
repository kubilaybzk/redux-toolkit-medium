"use client";
// "client" modülünü kullan

// "FetchProduct" fonksiyonunu "ProductSlice" dosyasından import et
import { FetchProduct } from "@/Redux/features/Products/ProductSlice";

// "Image" modülünü "next/image" dosyasından import et
import Image from "next/image";

// "React" ve "useEffect" modüllerini "react" dosyasından import et
import React, { useEffect } from "react";

// "useDispatch" ve "useSelector" modüllerini "react-redux" dosyasından import et
import { useDispatch, useSelector } from "react-redux";

// "StarIcon" modülünü "@heroicons/react/24/outline" dosyasından import et
import { StarIcon } from "@heroicons/react/24/outline";

// "Thunk" fonksiyonunu dışarıya aktar
export default function Thunk() {
  // "dispatch" fonksiyonunu redux'tan çağır
  const dispatch = useDispatch();

  // FetchProduct fonksiyonunu başlangıçta çağır
  useEffect(() => {
    dispatch(FetchProduct());
  }, [dispatch]);

  // "productList", "isLoading" ve "isError" değerlerini "Product" state'inden al
  const products = useSelector((state) => state.Product.productList);
  const isLoading = useSelector((state) => state.Product.isLoading);
  const isError = useSelector((state) => state.Product.isError);

  // Eğer veri yükleniyorsa, "loading..." yazısı döndür
  if (isLoading) {
    return "loading...";
  }

  // Eğer hata varsa, hatayı döndür
  if (isError) {
    return <div> {isError} </div>;
  }

  // Eğer yukarıdaki durumlar gerçekleşmezse, ürün listesi döndür
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          ProductList
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" relative overflow-hidden rounded-md bg-white p-2  border-2 border-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-contain aspect-w-7 aspect-h-4 mt-4   object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="Text-Elipsis-1" />
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 flex flex-row gap-3">
                    <StarIcon className="text-sm w-4 h-4 text-yellow-300" />
                    {product.rating.rate}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}₺
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

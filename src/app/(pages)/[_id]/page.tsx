"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FormattedPrice from "@/components/FormattedPrice";
import { useSearchParams } from "next/navigation";
import ButtonsIcons from "@/components/Buttons/ButtonsIcons";
import NotImage from "@/assets/images/no-image_400.webp";
import NotFound from "@/app/(pages)/not-found";
import ButtonAddCart from "@/components/Buttons/ButtonAdd";
import useHasMounted from "@/hooks/useHasMounted";
import SingleProductSkeleton from "@/components/SingleProductSkeleton";

const buildProduct = (keys: string[], fn: (value: string) => string | null) => {
  return keys.reduce(
    (acc, current) => {
      acc[current] = fn(current);
      return acc;
    },
    {
      brand: "",
      category: "",
      description: "",
      image: "",
      isNew: false,
      oldPrice: 0,
      price: 0,
      quantity: 1,
      title: "",
      _id: 0,
    }
  );
};

const arrKeysProduct: string[] = [
  "_id",
  "brand",
  "category",
  "description",
  "image",
  "isNew",
  "oldPrice",
  "price",
  "title",
  "quantity",
];

const ProductSingle = () => {
  const searchParams = useSearchParams();
  const hasMounted = useHasMounted();
  const [product, setProduct] = useState<IProductProps | null>(null);

  useEffect(() => {
    let prod: IProductProps | null = null;
    if (searchParams && searchParams.get("_id")) {
      prod = buildProduct(arrKeysProduct, searchParams.get);
    }
    setProduct(prod);
  }, [searchParams]);

  if (!hasMounted) {
    return <SingleProductSkeleton />;
  }

  if (!product && hasMounted) {
    return <NotFound />;
  }

  return (
    <>
      {product && (
        <div className="grow max-w-screen-xl mx-auto px-4 py-4 md:py-10">
          <div className="w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg justify-evenly shadow-card">
            <div className="flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden">
              <Image
                src={product.image || NotImage}
                alt={product.title || "Image product"}
                width={500}
                height={500}
              />
              <ButtonsIcons product={product} />
            </div>
            <div className="text-black md:col-span-2 flex flex-col gap-3 justify-center p-4">
              <p className="text-sm text-custom_blue font-semibold -mb-3">
                {product.category} {product.brand}
              </p>
              <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
                {product.title}
              </h1>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="space-y-2">
                <p className="text-base text-gray-600 flex items-center gap-1">
                  Price:
                  <span className="text-lg text-custom_blue font-semibold">
                    <FormattedPrice amount={product.price} />
                  </span>
                  <span className="ml-1 line-through">
                    <FormattedPrice amount={product.oldPrice} />
                  </span>
                </p>
                <p className="text-sm text-orange-500 flex items-center gap-1 uppercase">
                  Your saved:{" "}
                  <span>
                    <FormattedPrice amount={product.oldPrice - product.price} />
                  </span>
                </p>
                <ButtonAddCart product={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSingle;

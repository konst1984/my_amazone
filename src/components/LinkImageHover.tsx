import React from "react";
import ButtonsIcons from "@/components/Buttons/ButtonsIcons";
import Link from "next/link";
import Image from "next/image";
import NotImage from "@/assets/images/no-image_400.webp";

const LinkImageHover = ({
  product,
}: {
  product: IStoreProduct | IProductProps;
}) => {
  const href: { query: IStoreProduct | IProductProps; pathname: string } = {
    pathname: `/${product._id}`,
    query: { ...product },
  };

  return (
    <Link href={href} className="group relative overflow-hidden">
      <Image
        className="w-full h-full max-h-80 object-cover scale-90 hover:scale-100 focus-visible:scale-100 transition-transform duration-300"
        width={300}
        height={300}
        src={product.image || NotImage}
        alt={product.title}
      />
      <ButtonsIcons product={product} />
    </Link>
  );
};

export default LinkImageHover;

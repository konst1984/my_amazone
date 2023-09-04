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
    <div className="relative group w-full h-full overflow-hidden p-2">
      <Link href={href} className="block">
        <Image
          className="group w-full h-full max-h-80 object-cover
          scale-90 group-hover:scale-100 group-focus-visible:scale-100 group-focus-within:scale-100 transition-transform duration-300"
          width={250}
          height={250}
          src={product.image || NotImage}
          alt={product.title}
        />
      </Link>
      <ButtonsIcons product={product} />
      <button aria-hidden={true} />
    </div>
  );
};

export default LinkImageHover;

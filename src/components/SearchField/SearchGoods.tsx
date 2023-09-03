import FormattedPrice from "@/components/FormattedPrice";
import Image from "next/image";

type ISearchGoods = {
  product: IProductProps;
};

const SearchGoods = ({ product }: ISearchGoods) => {
  return (
    <div className="flex items-center gap-4">
      <Image className="w-24" src={product.image} alt="productImage" />
      <div>
        <p className="text-xs -mb-1">
          {product.brand}_{product.category}
        </p>
        <p className="text-lg font-medium">{product.title}</p>
        <p className="text-sm flex items-center gap-1">
          price:{" "}
          <span className="font-semibold">
            <FormattedPrice amount={product.price} />
          </span>
          <span className="text-gray-600 line-through">
            <FormattedPrice amount={product.oldPrice} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default SearchGoods;

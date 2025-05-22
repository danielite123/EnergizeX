import { Heart } from "lucide-react";

interface Product {
  tag?: string;
  discount: string;
  image: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col sm:mx-auto gap-2 max-w-[170px] md:max-w-[180px] cursor-pointer">
      <div className="relative w-[170px] md:w-[180px] h-[200px] bg-frame rounded-xl flex items-center justify-center">
        <img src={product.image} className="rounded-lg mt-2" />

        {product.tag && (
          <div className="absolute top-1.5 left-2 bg-white text-green-600 px-2.5 py-1.5 text-xs font-semibold rounded-md">
            {product.tag}
          </div>
        )}

        <div className="absolute top-1.5 right-2 bg-white w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
          <Heart size={14} />
        </div>

        <div
          className="absolute left-4 bg-red-700 text-white text-[11px] font-bold w-8 h-8 flex items-center justify-center rounded-full transition-all"
          style={{ top: product.tag ? "2.75rem" : "0.5rem" }}
        >
          -{product.discount}
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-auto">
        <p className="text-sm font-semibold">{product.name}</p>

        <div className="flex items-center gap-1 text-green-600 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-green-600 font-semibold">
            ₹{product.currentPrice}
          </p>
          <p className="text-red-400 line-through text-sm">
            ₹{product.originalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

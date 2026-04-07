import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
 let navigate = useNavigate()
  return (
    <div className="w-80 rounded-3xl overflow-hidden bg-black text-white shadow-lg border border-lime-500">
      
      {/* Top Section (Image + Category) */}
      <div className="bg-gray-200 p-4">
        <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full">
          Electronics
        </span>

        <img
        onClick={()=> navigate(`/dashboard/shop/product/${product.id}`)}
          src={product.images}
          alt="watch"
          className="w-full h-48 object-contain mt-4"
        />
      </div>

      {/* Bottom Section */}
      <div className="p-5 space-y-3">
        <p className="text-gray-400 text-sm">{product.category.name}</p>

        <h2 className="text-lg font-semibold">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          <Star size={16} className="text-gray-500" />
          <span className="text-gray-400 text-sm ml-2">(85)</span>
        </div>

        <hr className="border-gray-700" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-lime-400 text-xl font-bold">
            ${product.price}
          </h3>

          <button className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-full font-medium hover:bg-lime-300 transition">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
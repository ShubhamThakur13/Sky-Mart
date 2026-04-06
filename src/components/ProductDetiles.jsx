import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MycontextApplication";
import { useParams } from "react-router-dom";
import { Star, Heart, Truck, ShieldCheck, RotateCcw } from "lucide-react";

const ProductDetiles = () => {
  let { id } = useParams();
  let { Productdetiles, setProductdetiles } = useContext(MyContext);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProductdetiles(response.data);
    })();
  }, [id]);

  // ✅ Prevent crash
  if (!Productdetiles) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT IMAGE */}
        <div className="bg-gray-200 rounded-3xl p-6 flex justify-center items-center">
          <img
            src={Productdetiles?.images?.[0]}
            alt={Productdetiles?.title}
            className="h-80 object-contain"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="space-y-5">
          
          {/* Category */}
          <span className="bg-lime-400 text-black text-xs px-3 py-1 rounded-full">
            {Productdetiles?.category?.name}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold">
            {Productdetiles?.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <Star size={18} className="text-gray-500" />
            <span className="text-gray-400 text-sm">
              4.0 (200 reviews)
            </span>
          </div>

          <hr className="border-gray-700" />

          {/* Price */}
          <h2 className="text-lime-400 text-3xl font-bold">
            ${Productdetiles?.price}
          </h2>

          <hr className="border-gray-700" />

          {/* Description */}
          <p className="text-gray-400">
            {Productdetiles?.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
              Add to Cart
            </button>

            <button className="border border-gray-600 p-3 rounded-full">
              <Heart size={18} />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-5">
            
            <div className="border border-gray-700 rounded-xl p-4 text-center">
              <Truck className="mx-auto mb-2 text-lime-400" />
              <p className="text-sm">Free Delivery</p>
            </div>

            <div className="border border-gray-700 rounded-xl p-4 text-center">
              <ShieldCheck className="mx-auto mb-2 text-lime-400" />
              <p className="text-sm">Secure Pay</p>
            </div>

            <div className="border border-gray-700 rounded-xl p-4 text-center">
              <RotateCcw className="mx-auto mb-2 text-lime-400" />
              <p className="text-sm">Easy Returns</p>
            </div>

          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="bg-gray-800 px-6 py-3 rounded-full">
              Previous
            </button>

            <button className="bg-lime-400 text-black px-6 py-3 rounded-full">
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetiles;
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ShoppingCart, Star, Tag, Box } from "lucide-react";
import { MyContext } from "../context/MycontextApplication";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
     let {LoggedUser, Products} = useContext(MyContext);
  let navigate =    useNavigate();
  return (
    <div className="bg-black text-white min-h-screen">

      <div className="p-6 space-y-6">

        {/* HERO SECTION */}
        <div className="border border-gray-700 rounded-2xl p-6 bg-[#0d0d0d] relative overflow-hidden">
          <p className="text-sm text-green-400">GOOD EVENING 👋</p>
          <h1 className="text-3xl font-bold mt-2">
            Welcome back, <span className="text-lime-400">{LoggedUser.name}!</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Discover today’s picks — hand-curated products across electronics, fashion, and more.
          </p>

          <div className="mt-4 flex gap-3">
            <button onClick={() => navigate('/dashboard/shop') } className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold cursor-pointer active:scale-95">
              Shop Now →
            </button>
            <button onClick={() => navigate('/dashboard/shop') } className="border border-gray-600 px-4 py-2 rounded-lg cursor-pointer active:scale-95">
              View All Products
            </button>
          </div>

          {/* RIGHT SIDE BOX */}
          <div className="absolute right-6 top-6 flex flex-col gap-3">
            <div className="bg-lime-400 text-black px-4 py-3 rounded-xl text-center">
              <p className="font-bold text-lg">{Products.length}+</p>
              <p className="text-xs">Products Available</p>
            </div>

            <div className="border border-gray-600 px-4 py-3 rounded-xl text-center">
              <p className="font-bold">Free</p>
              <p className="text-xs text-gray-400">Delivery on ₹999+</p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <ShoppingCart />, title: "Cart Items", value: "0" },
            { icon: <Tag />, title: "Cart Value", value: "$0.00" },
            { icon: <Star />, title: "Top Products", value: "5" },
            { icon: <Box />, title: "Categories", value: "6" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl p-4 flex items-center gap-3 bg-[#0d0d0d]"
            >
              <div className="text-lime-400">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{item.title}</p>
                <h2 className="font-bold">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* CATEGORIES */}
        <div>
          <div className="flex justify-between mb-3">
            <h2 className="font-semibold">Shop by Category</h2>
            <p className="text-lime-400 text-sm cursor-pointer">View All →</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
            {["Electronics", "Clothing", "Furniture", "Home", "Sports", "Accessories"].map(
              (cat, i) => (
                <div
                onClick={(elem)=> console.log(elem.target.innerText)
                }
                  key={i}
                  className="bg-gray-200 text-black rounded-xl p-6 text-center font-medium"
                >
                  {cat } 
                </div>
              )
            )}
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* TOP RATED */}
          <div className="bg-gray-100 text-black rounded-xl p-4">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">⭐ Top Rated</h2>
              <span className="text-sm text-lime-600">See all →</span>
            </div>

            {[499, 199, 349, 49, 149].map((price, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white p-3 rounded-lg mb-2"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded"></div>
                  <p>${price}.99</p>
                </div>
                <button className="bg-lime-400 px-2 py-1 rounded text-sm">
                  +
                </button>
              </div>
            ))}
          </div>

          {/* NEW ARRIVALS */}
          <div className="bg-gray-100 text-black rounded-xl p-4">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">⚡ New Arrivals</h2>
              <span className="text-sm text-lime-600">See all →</span>
            </div>

            {[49, 299, 24, 199, 34].map((price, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white p-3 rounded-lg mb-2"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded"></div>
                  <p>${price}.99</p>
                </div>
                <button className="bg-lime-400 px-2 py-1 rounded text-sm">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER FEATURES */}
        <div className="grid md:grid-cols-3 gap-4">
          {["Fast Delivery", "Secure Payments", "Best Prices"].map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl p-4 text-center"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
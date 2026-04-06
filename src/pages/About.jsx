import React from "react";
import { Zap, ShieldCheck, Truck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="w-12 h-12 bg-lime-400 text-black rounded-xl flex items-center justify-center mx-auto mb-4">
          <Zap />
        </div>

        <h1 className="text-3xl font-bold">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="text-gray-400 mt-3">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
        {[
          { value: "20K+", label: "Products" },
          { value: "50K+", label: "Happy Customers" },
          { value: "4.9", label: "Avg Rating" },
          { value: "99%", label: "On-time Delivery" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-4 text-center bg-[#0d0d0d]"
          >
            <h2 className="text-xl font-bold text-lime-400">{item.value}</h2>
            <p className="text-sm text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* STORY */}
      <div className="max-w-4xl mx-auto mt-10 border border-gray-700 rounded-2xl p-6 bg-[#0d0d0d]">
        <h2 className="text-lg font-semibold mb-3">Our Story</h2>
        <p className="text-gray-400 text-sm leading-6">
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves: what if
          shopping online was actually enjoyable?
          <br /><br />
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don’t require a second mortgage.
          <br /><br />
          We’re still the same team at heart: obsessed with speed, transparency,
          and making you feel good about every purchase you make here.
        </p>
      </div>

      {/* VALUES */}
      <div className="text-center mt-12">
        <h2 className="text-lg font-semibold">What We Stand For</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
        {[
          {
            icon: <ShieldCheck />,
            title: "Trust",
            desc: "Every product is verified for quality and authenticity before listing.",
          },
          {
            icon: <Truck />,
            title: "Speed",
            desc: "We obsess over delivery times so your orders arrive when promised.",
          },
          {
            icon: <Users />,
            title: "Community",
            desc: "Built around real customer feedback, not just business metrics.",
          },
          {
            icon: <Zap />,
            title: "Quality",
            desc: "We curate the best — no filler, no junk, just great products.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-4 flex gap-4 bg-[#0d0d0d]"
          >
            <div className="text-lime-400">{item.icon}</div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TEAM */}
      <div className="text-center mt-12">
        <h2 className="text-lg font-semibold">Meet the Team</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-6">
        {[
          { name: "Aryan Shah", role: "Founder & CEO", color: "bg-lime-400 text-black", letter: "A" },
          { name: "Priya Mehta", role: "Head of Product", color: "bg-blue-500", letter: "P" },
          { name: "Rohan Verma", role: "Lead Engineer", color: "bg-purple-500", letter: "R" },
          { name: "Sneha Kapoor", role: "Design Director", color: "bg-red-500", letter: "S" },
        ].map((member, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-4 text-center bg-[#0d0d0d]"
          >
            <div
              className={`w-10 h-10 rounded-lg mx-auto flex items-center justify-center font-bold ${member.color}`}
            >
              {member.letter}
            </div>
            <h3 className="mt-3 font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-12 border border-lime-400/30 rounded-2xl p-6 text-center bg-[#0d0d0d]">
        <h2 className="text-xl font-semibold">Ready to shop?</h2>
        <p className="text-gray-400 mt-2">
          Explore thousands of products at unbeatable prices.
        </p>
        <button className="mt-4 bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold">
          Start Shopping →
        </button>
      </div>

    </div>
  );
};

export default About;
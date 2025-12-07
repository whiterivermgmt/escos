'use client';
import React from "react";
import { FaLeaf, FaUserTie, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const features = [
  { icon: <FaLeaf size={28} className="text-orange-500" />, title: "Premium Products", text: "High-quality CBD & wellness items carefully curated for everyday lifestyle and relaxation." },
  { icon: <FaUserTie size={28} className="text-blue-500" />, title: "Expert Guidance", text: "Knowledgeable staff ready to help you select the right product for your needs." },
  { icon: <FaMapMarkerAlt size={28} className="text-purple-500" />, title: "Convenient Location", text: "Visit our Bedford store – easy access, welcoming environment, 21+." },
  { icon: <FaHeart size={28} className="text-pink-500" />, title: "Commitment to Care", text: "We prioritize quality, safety, and customer satisfaction in every product we offer." },
];

const WhyEscos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Choose Escos Green+
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our customers love us. Premium products, expert guidance, convenient location, and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEscos;

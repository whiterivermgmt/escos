"use client";

import React, { useState } from "react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";
import { motion } from "framer-motion";

const locations = [
  {
    address: "2700 John Williams Blvd, Bedford, IN 47421",
    query: "2700 John Williams Blvd, Bedford, IN 47421",
  },
];

const messages = [
  "Open Daily 9AM - 9PM",
  "Fresh Green Products Available",
  "Weekly Specials Every Friday",
  "Visit Us in Bedford, IN",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const openMap = (query: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#f6f6f6] flex flex-col items-center justify-start pt-24 px-4">

      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#2f855a]">Get In Touch!</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Escos – Your local green products store. Reach out for questions, special orders, or just to say hello!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-[#2f855a]">Contact Form</h2>
        <p className="text-gray-600 mb-4">
          Send us a message for questions, orders, or general inquiries. We'll get back to you promptly!
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#f9ac04] transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#f9ac04] transition"
        />
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#f9ac04] transition"
        />
        <textarea
          placeholder="Your Message..."
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#f9ac04] transition resize-none"
        />

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 justify-center">
          <a
            href="https://www.facebook.com/escosgreen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white shadow-md hover:scale-110 transition-transform"
          >
            <SiFacebook size={18} />
          </a>
          <a
            href="https://www.google.com/search?q=escos+green"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DB4437] text-white shadow-md hover:scale-110 transition-transform"
          >
            <SiGoogle size={18} />
          </a>
          <a
            href="https://www.yelp.com/biz/escos-green-bedford"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D32323] text-white shadow-md hover:scale-110 transition-transform"
          >
            <SiYelp size={18} />
          </a>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-3 rounded-xl bg-[#f9ac04] text-white font-bold hover:bg-orange-500 hover:scale-105 transition transform shadow-md"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Methods */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Location */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-location-dot text-3xl text-[#2f855a] mb-2"></i>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <div className="text-gray-600 text-center space-y-1">
            {locations.map((loc, idx) => (
              <p
                key={idx}
                onClick={() => openMap(loc.query)}
                className="cursor-pointer hover:text-[#2f855a] transition"
              >
                {loc.address}
              </p>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-envelope text-3xl text-[#2f855a] mb-2"></i>
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <a
            href="mailto:info@escosgreen.com"
            className="text-gray-600 hover:text-[#2f855a] transition"
          >
            mgmt@escosgreen.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-phone text-3xl text-[#2f855a] mb-2"></i>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">
            <a href="tel:+18120000000" className="hover:text-[#2f855a] transition">
              +1 812-000-0000
            </a>
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactPage;

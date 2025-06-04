import React from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <div className="w-full mt-10 py-10 px-5 md:px-20 bg-gray-100 text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blogs
      </motion.h2>

      <motion.h3
        className="text-lg md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-semibold text-orange-600">News And Updates</span>
      </motion.h3>

      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Stay ahead with the latest news and updates from our team, delivering
        crucial insights that can shape your financial future. We provide timely
        information on market trends, investment opportunities, and strategic
        advice, empowering you to make informed decisions. Trust us to keep you
        informed and prepared for every financial opportunity and challenge.
      </p>

      <motion.a
        href="https://www.forbesindia.com/blog/category/finance/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-orange-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Finance Blogs
      </motion.a>
    </div>
  );
}


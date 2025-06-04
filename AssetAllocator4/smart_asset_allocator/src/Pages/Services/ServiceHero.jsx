import React from "react";
import { motion } from "framer-motion";

const ServiceHero = ({ title, subtitle, tagline, imageUrl }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      <img src={imageUrl} alt={title} className="w-full h-96 object-cover" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
          {subtitle && (
            <span className="block text-2xl md:text-3xl font-normal mt-2">
              {subtitle}
            </span>
          )}
        </motion.h1>
        {tagline && (
          <motion.p
            className="text-lg text-white/90 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {tagline}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceHero;

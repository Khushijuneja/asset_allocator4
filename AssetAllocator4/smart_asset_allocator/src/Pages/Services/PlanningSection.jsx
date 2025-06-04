import React from "react";
import { motion } from "framer-motion";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const PlanningSection = ({ title, subtitle, tagline, data }) => {
  return (
    <ContentWrapper>
      <section className="py-16 px-4 md:px-10 bg-gray-100 mt-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="font-palanquin text-2xl md:text-4xl font-bold leading-snug">
            {title}
            <span className="ml-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              {subtitle}
            </span>
          </h3>
          {tagline && (
            <p className="mt-3 text-lg italic text-gray-600 max-w-3xl mx-auto">
              {tagline}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:opacity-75 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ContentWrapper>
  );
};

export default PlanningSection;

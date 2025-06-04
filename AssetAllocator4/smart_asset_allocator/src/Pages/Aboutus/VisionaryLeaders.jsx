import React from "react";
import { motion } from "framer-motion";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const dummyLeaders = [
  {
    id: 1,
    name: "Sanjay Jadhav",
    title: "Founder & CEO",
    description:
      "With a vision to revolutionize financial services, Sanjay leads the firm with integrity and expertise.",
    image_url:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Anjali Mehta",
    title: "Chief Financial Planner",
    description:
      "Anjali crafts tailored plans that help clients meet life goals with clarity and confidence.",
    image_url:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Rakesh Nair",
    title: "Investment Strategist",
    description:
      "With deep market insights, Rakesh optimizes portfolios for consistent and long-term growth.",
    image_url:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const VisionaryLeaders = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-container bg-blue-50 py-24 text-gray-700"
    >
      <ContentWrapper>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-palanquin text-center my-10 text-3xl md:text-4xl font-bold"
        >
          Our
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Visionary
          </span>
          Leaders
        </motion.h3>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {dummyLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-center items-center"
            >
              <motion.img
                alt={leader.name}
                src={leader.image_url}
                className="w-[120px] h-[120px] rounded-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
              <h3 className="mt-4 font-palanquin text-xl md:text-2xl text-center font-bold">
                {leader.name}
              </h3>
              <h4 className="mt-1 font-palanquin text-md md:text-lg text-center font-bold">
                {leader.title}
              </h4>
              <p className="info-text text-center md:text-md mt-2 max-w-sm">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ContentWrapper>
    </motion.section>
  );
};

export default VisionaryLeaders;

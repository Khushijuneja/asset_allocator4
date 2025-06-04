import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChartPie, FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdInsights } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VisionaryLeaders from "./VisionaryLeaders";
import Location from "./Location";
import { aboutData } from "../../constants/aboutUs";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { useLocation } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";

const Aboutus = () => {
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const location = useLocation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (location.hash === "#vision" && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const iconComponents = {
    FaChartPie: <FaChartPie className="text-2xl" />,
    GiReceiveMoney: <GiReceiveMoney className="text-2xl" />,
    FaRegMoneyBillAlt: <FaRegMoneyBillAlt className="text-2xl" />,
    MdInsights: <MdInsights className="text-2xl" />,
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <ContentWrapper>
      {/* About Us Section */}
      <div ref={visionRef} className="mt-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16"
        >
          <div className="max-w-[1440px] w-full">
            {/* Enhanced Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  Our Company
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Pioneering financial solutions with integrity and innovation
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              {/* Enhanced Carousel */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-2xl shadow-xl">
                  {galleryImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={`${img}?auto=format&fit=crop&w=800&q=80`}
                      alt={`Gallery ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === current ? 1 : 0 }}
                    />
                  ))}

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === current ? "bg-white w-6" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                {aboutData.description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-700 text-base sm:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        <WhoWeAre />
        {/* Enhanced Key Strengths */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-700">Key Strengths</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the financial services industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
            {aboutData.icons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mr-4">
                    {iconComponents[item.icon]}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Our Expertise */}
        <motion.div
          className="mt-28 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-700">Areas of Expertise</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge to help you achieve your financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8">
            {aboutData.expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-blue-100"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Location />

      {/* Our Team */}
      <div ref={teamRef} className="mt-24">
        <VisionaryLeaders />
      </div>
    </ContentWrapper>
  );
};

export default Aboutus;















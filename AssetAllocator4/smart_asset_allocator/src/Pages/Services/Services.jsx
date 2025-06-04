import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import ServiceDataGrid from "./ServiceDataGrid";
import Sidebar from "./Sidebar";
import AboutSection from "./AboutSection";
import servicesData from "../../constants/servicesData.json";
import FinancialSidebar from "../../Components/Sidebar/FinancialSidebar";

export default function Services() {
  const { slug } = useParams();
  const service = servicesData.services.find((s) => s.slug === slug);
  console.log(service);
  if (!service) {
    return (
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-red-500">Service Not Found</h2>
        <p className="mt-4 text-gray-600">
          The requested service does not exist or may have been moved.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-6 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-10">
          <ServiceHero
            title={service.title}
            subtitle={service.subtitle}
            tagline={service.tagline}
            imageUrl={service.imageUrl}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* <ServiceDataGrid data={} /> */}
          </motion.div>

          <AboutSection content={service.aboutContent} />

          {service.features && service.features.length > 0 && (
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {service.whyUsPoints && service.whyUsPoints.length > 0 && (
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Why Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whyUsPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <motion.div
          className="w-full lg:w-80 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FinancialSidebar />
        </motion.div>
      </div>
    </motion.div>
  );
}

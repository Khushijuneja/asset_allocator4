// src/pages/Products/GeneralInsurance.jsx
import { motion } from "framer-motion";
import { Home, Car, BriefcaseMedical, Globe } from "lucide-react";
import GeneralSection from "./GeneralInsurance/GeneralSection";

const GeneralInsurance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 mt-28"
    >
      <div className="flex items-center gap-4 mb-8">
        <Globe size={32} className="text-green-600" />
        <h1 className="text-3xl font-bold text-gray-800">General Insurance</h1>
      </div>

      <GeneralSection />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Home className="text-blue-500" />
            <h2 className="text-xl font-semibold">Home Insurance</h2>
          </div>
          <p className="text-gray-600">
            Protect your home and belongings against natural and man-made
            disasters.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Car className="text-orange-500" />
            <h2 className="text-xl font-semibold">Auto Insurance</h2>
          </div>
          <p className="text-gray-600">
            Comprehensive coverage for your vehicles including third-party
            liability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <BriefcaseMedical className="text-purple-500" />
            <h2 className="text-xl font-semibold">Health Insurance</h2>
          </div>
          <p className="text-gray-600">
            Cover medical expenses for you and your family with cashless
            hospitalization.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-green-50 p-6 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          General Insurance Features
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Quick claim settlement with minimal documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>24/7 customer support for emergencies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>Customizable coverage options to suit your needs</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default GeneralInsurance;

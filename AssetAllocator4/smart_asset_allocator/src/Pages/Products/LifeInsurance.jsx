// src/pages/Products/LifeInsurance.jsx
import { motion } from "framer-motion";
import { HeartPulse, Shield, CalendarCheck, BadgePercent } from "lucide-react";

const LifeInsurance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <HeartPulse size={32} className="text-red-600" />
        <h1 className="text-3xl font-bold text-gray-800">Life Insurance</h1>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-blue-500" />
            <h2 className="text-xl font-semibold">Term Insurance</h2>
          </div>
          <p className="text-gray-600">
            Affordable pure protection plans with high coverage amounts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <CalendarCheck className="text-green-500" />
            <h2 className="text-xl font-semibold">Endowment Plans</h2>
          </div>
          <p className="text-gray-600">
            Protection with savings that mature after a specific period.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <BadgePercent className="text-purple-500" />
            <h2 className="text-xl font-semibold">ULIPs</h2>
          </div>
          <p className="text-gray-600">
            Combine insurance protection with equity investments.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-red-50 p-6 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-red-800 mb-4">
          Life Insurance Benefits
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-red-500">✓</span>
            <span>Financial security for your loved ones</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">✓</span>
            <span>Tax benefits under Section 80C and 10(10D)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">✓</span>
            <span>Optional riders for critical illness and disability</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default LifeInsurance;

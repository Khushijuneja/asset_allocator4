import { motion } from "framer-motion";

export default function AboutSection({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        About This Service
      </h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
}

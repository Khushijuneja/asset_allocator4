import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Sanjay Jadhav
            </span>{" "}
            & Associates?
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              With over{" "}
              <span className="font-semibold text-gray-900">
                16 years of rich experience
              </span>
              , Sanjay Jadhav and Associates stands as a beacon of excellence
              and trust in financial planning.
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                ✓ Access to all the top brands in Insurance and Investment
                domain
              </li>
              <li>✓ Legacy of countless delighted clients</li>
              <li>✓ Deep technical know-how & unbiased consulting</li>
              <li>✓ 100% support in claim handling</li>
              <li>✓ Services throughout the country</li>
              <li>
                ✓ Free support for stuck-up genuine claims (even for
                non-clients)
              </li>
            </ul>

            <div className="bg-white p-6 rounded-xl shadow-md text-gray-700">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Investment cum Insurance Solutions
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Wealth generation planning for your hard-earned money</li>
                <li>Goal-based planning for major life events</li>
                <li>Retirement planning for a secure future</li>
              </ul>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a
                href="/consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-center shadow-lg hover:bg-blue-700 transition duration-300"
              >
                📅 Book Your Consultation
              </motion.a>

              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-center shadow-lg hover:bg-orange-700 transition duration-300"
              >
                ℹ️ Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-gray-900/70"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Financial consultation"
              className="w-full h-full object-cover"
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">16+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-xs text-gray-600">Claim Support</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">Pan-India</p>
                  <p className="text-xs text-gray-600">Services</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

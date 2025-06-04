import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  LineChart,
  Shield,
  PieChart,
  Landmark,
  HandCoins,
  TrendingUp,
  Briefcase,
  Gem,
  Wallet,
} from "lucide-react";
function BriefSection() {
  const products = [
    {
      icon: <LineChart size={24} className="text-blue-500" />,
      title: "Mutual Funds",
      path: "/product/mutual-funds",
      description:
        "Diversified portfolio of stocks and bonds managed by professionals.",
    },
    {
      icon: <HandCoins size={24} className="text-green-500" />,
      title: "Loan Against MF",
      path: "/product/loan-against-mutual-fund",
      description:
        "Get loans using your mutual fund units as collateral without selling them.",
    },
    {
      icon: <TrendingUp size={24} className="text-purple-500" />,
      title: "Equity & ETFs*",
      path: "/product/equity-etfs",
      description:
        "Direct equity investments and Exchange Traded Funds for seasoned investors.",
    },
    {
      icon: <Briefcase size={24} className="text-orange-500" />,
      title: "PMS",
      path: "/product/portfolio-management-service",
      description:
        "Portfolio Management Services for high net-worth individuals.",
    },
    {
      icon: <Gem size={24} className="text-yellow-500" />,
      title: "Sov. Gold Bond*",
      path: "/product/sovereigngold-bond",
      description:
        "Sovereign Gold Bonds offering interest income plus gold price appreciation.",
    },
    {
      icon: <Wallet size={24} className="text-red-500" />,
      title: "NPS",
      path: "/product/national-pension-scheme",
      description:
        "National Pension System for retirement planning with tax benefits.",
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <LineChart size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Mutual Funds & Investment Products
          </h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.icon}
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </div>
              <p className="text-gray-600">{product.description}</p>
              <motion.a
                href={product.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-blue-600 font-medium flex items-center gap-1"
              >
                Learn more <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Investment Solutions Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Landmark className="text-blue-500" /> Wealth Creation
              </h3>
              <p className="text-gray-600">
                Our diverse range of investment products helps you build wealth
                through different market conditions. From mutual funds to direct
                equities, we offer solutions for all risk appetites.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <PieChart className="text-blue-500" /> Portfolio Diversification
              </h3>
              <p className="text-gray-600">
                Spread your investments across asset classes including equities,
                debt, gold, and more. Our experts can help you create a balanced
                portfolio matching your financial goals.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              *ETFs and Sovereign Gold Bonds are subject to market risks. Please
              read all scheme related documents carefully.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BriefSection;

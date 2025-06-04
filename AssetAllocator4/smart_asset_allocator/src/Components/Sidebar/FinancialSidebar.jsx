import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // Make sure you have this utility
import {
  School,
  HeartHandshake,
  Home,
  Car,
  Plane,
  PiggyBank,
  TrendingUp,
  Search,
  BookOpen,
  FileText,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const FinancialSidebar = () => {
  // Sample data - replace with your actual data
  const recentPlans = [
    { id: 1, title: "Education Savings Plan", date: "2023-05-15" },
    { id: 2, title: "Retirement Strategy", date: "2023-06-22" },
    { id: 3, title: "Home Buying Guide", date: "2023-07-10" },
  ];

  const categories = [
    "Education Planning",
    "Retirement",
    "Wealth Management",
    "Investment",
    "Tax Planning",
  ];

  const planningOptions = [
    {
      label: "Child's Education",
      path: "/goals/child-education",
      icon: <School className="w-4 h-4" />,
    },
    {
      label: "Wedding Planning",
      path: "/goals/child-wedding",
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      label: "Dream Home",
      path: "/goals/dream-home",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Dream Car",
      path: "/goals/dream-car",
      icon: <Car className="w-4 h-4" />,
    },
    {
      label: "Vacation",
      path: "/goals/dream-vacation",
      icon: <Plane className="w-4 h-4" />,
    },
    {
      label: "Retirement",
      path: "/goals/retirement-plan",
      icon: <PiggyBank className="w-4 h-4" />,
    },
    {
      label: "SIP Plans",
      path: "/goals/sip-plan",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  return (
    <motion.aside variants={fadeIn("left", "spring", 0.3, 1)} className="mt-28">
      <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
        {/* Search */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" /> Search
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search financial plans..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Quick Access
          </h3>
          <ul className="space-y-3">
            {planningOptions.map((option) => (
              <li key={option.path}>
                <Link
                  to={option.path}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {option.icon}
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Plans */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Recent Plans
          </h3>
          <ul className="space-y-3">
            {recentPlans.map((plan) => (
              <li key={plan.id}>
                <Link
                  to={`/plans/${plan.id}`}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {plan.title}
                </Link>
                <p className="text-xs text-gray-500">{plan.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Financial Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span>{category}</span>
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {Math.floor(Math.random() * 5) + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" /> Financial Insights
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Get the latest financial tips and updates
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </motion.aside>
  );
};

export default FinancialSidebar;

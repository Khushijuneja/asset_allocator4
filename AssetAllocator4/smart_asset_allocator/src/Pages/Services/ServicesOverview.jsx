import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  FileText,
  HeartPulse,
  PieChart,
  Landmark,
  ArrowRight,
  School,
  HeartHandshake,
  Home,
  Car,
  Plane,
  PiggyBank,
} from "lucide-react";
import servicesData from "../../constants/servicesData.json";
import CTA from "../Home/CTA";
import Testimonials from "../Home/Testimonials";
import ServicesSection from "../Home/AboutService";

// Create a mapping of icon names to components
const iconComponents = {
  TrendingUp,
  Shield,
  FileText,
  HeartPulse,
  PieChart,
  Landmark,
  ArrowRight,
  School,
  HeartHandshake,
  Home,
  Car,
  Plane,
  PiggyBank,
};

const ServicesOverview = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-8 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
              Explore Our
              <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                Financial Services
              </span>
            </h3>
            <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
              Discover tailored solutions designed to help you achieve your
              financial goals at every stage of life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service) => {
              const IconComponent = iconComponents[service.icon];
              if (!IconComponent) {
                console.error(`Icon component not found for: ${service.icon}`);
                return null;
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="ml-4 text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex-grow">
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                    </div>

                    <motion.a
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium group mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <PersonalizedPlanningSection />
      <ServicesSection />
      <CTA />
      <Testimonials />
    </>
  );
};

export default ServicesOverview;

function PersonalizedPlanningSection() {
  const planningOptions = [
    {
      label: "Child's Education Planning",
      path: "/goals/child-education",
      icon: <School className="w-8 h-8" />,
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      label: "Child's Wedding Planning",
      path: "/goals/child-wedding",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "bg-pink-100 hover:bg-pink-200",
    },
    {
      label: "Dream Home",
      path: "/goals/dream-home",
      icon: <Home className="w-8 h-8" />,
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      label: "Dream Car",
      path: "/goals/dream-car",
      icon: <Car className="w-8 h-8" />,
      color: "bg-red-100 hover:bg-red-200",
    },
    {
      label: "Dream Vacation",
      path: "/goals/dream-vacation",
      icon: <Plane className="w-8 h-8" />,
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      label: "Retirement Plan",
      path: "/goals/retirement-plan",
      icon: <PiggyBank className="w-8 h-8" />,
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      label: "SIP Plan",
      path: "/goals/sip-plan",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-teal-100 hover:bg-teal-200",
    },
  ];

  return (
    <div className="relative min-h-[500px] bg-gray-100">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/financial-bg.jpg')] bg-cover bg-center opacity-90"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            FINANCIAL CALCULATORS
          </h1>
          <h2 className="text-2xl font-semibold text-white">
            Secure your future through systematic investment
          </h2>
        </div>

        {/* Circular navigation grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {planningOptions.map((option, index) => (
            <motion.a
              key={option.path}
              href={option.path}
              className={`flex flex-col items-center justify-center p-6 rounded-full ${option.color} transition-colors duration-300 cursor-pointer shadow-md aspect-square`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-3">{option.icon}</div>
              <span className="text-sm font-medium text-center">
                {option.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

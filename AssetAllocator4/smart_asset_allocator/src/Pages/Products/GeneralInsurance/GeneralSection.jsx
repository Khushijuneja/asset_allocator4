import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { message } from 'antd';
import axios from "axios";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Heart,
  Car,
  Bike,
  Plane,
  Home,
  Battery,
  Dog,
  Laptop,
  Briefcase,
  Truck,
  Building,
  Scale,
  Construction,
  Flame,
  Ship,
  ShoppingBag,
  Cog,
  FileText,
  RefreshCw,
  Shield,
  DollarSign,
  Clock,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Skeleton } from "antd";

// Helper function to capitalize first letter
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Unsplash image URLs
const unsplashImages = {
  personal:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  commercial:
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  msme: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  hero: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
};

const insuranceData = {
  generalInsurance: {
    personal: {
      health: {
        plans: [
          "My Health Care Plan",
          "Health Guard",
          "Extra Care Plus",
          "Criti Care",
          "Global Personal Guard",
          "Personal Guard",
        ],
        icon: "🩺",
      },
      car: {
        plans: ["Comprehensive", "Third Party", "Pay As You Drive"],
        icon: "🚗",
      },
      bike: {
        plans: ["Comprehensive", "Third Party"],
        icon: "🏍️",
      },
      travel: {
        plans: ["Individual Travel", "Family Travel", "Senior Citizen Travel"],
        icon: "✈️",
      },
      home: {
        plans: ["Home Shield", "Home Content Protect"],
        icon: "🏠",
      },
      ev: {
        plans: ["EV Comprehensive", "EV Third Party"],
        icon: "🔋",
      },
      pet: {
        plans: ["Dog Health Insurance", "Cat Health Insurance"],
        icon: "🐕",
      },
      cyber: {
        plans: ["Cyber Safe", "Cyber Insurance for Families"],
        icon: "💻",
      },
    },
    commercial: {
      employee: {
        plans: ["Group Health Insurance", "Workmen Compensation"],
        icon: "👨‍💼",
      },
      transit: {
        plans: ["Goods in Transit", "Marine Cargo"],
        icon: "🚛",
      },
      property: {
        plans: ["Fire Insurance", "Burglary Insurance"],
        icon: "🏢",
      },
      liability: {
        plans: ["Public Liability", "Professional Indemnity"],
        icon: "⚖️",
      },
      engineering: {
        plans: ["Contractor All Risk", "Erection All Risk"],
        icon: "🏗️",
      },
    },
    msme: {
      fire: {
        plans: ["Standard Fire Policy", "Industrial All Risk"],
        icon: "🔥",
      },
      marine: {
        plans: ["Inland Marine", "Marine Hull"],
        icon: "🚢",
      },
      shop: {
        plans: ["Shopkeeper Policy", "MSME Package Policy"],
        icon: "🛍️",
      },
      engineering: {
        plans: ["Boiler Insurance", "Machinery Breakdown"],
        icon: "⚙️",
      },
      liability: {
        plans: ["Product Liability", "Directors Liability"],
        icon: "📜",
      },
      miscellaneous: {
        plans: ["Business Interruption", "Money Insurance"],
        icon: "📦",
      },
      claimReg: {
        plans: ["Online Claim Registration"],
        icon: "📝",
      },
      renew: {
        plans: ["Policy Renewal"],
        icon: "🔄",
      },
    },
  },
};

const iconComponents = {
  health: Heart,
  car: Car,
  bike: Bike,
  travel: Plane,
  home: Home,
  ev: Battery,
  pet: Dog,
  cyber: Laptop,
  employee: Briefcase,
  transit: Truck,
  property: Building,
  liability: Scale,
  engineering: Construction,
  fire: Flame,
  marine: Ship,
  shop: ShoppingBag,
  engineeringEquipment: Cog,
  claimReg: FileText,
  renew: RefreshCw,
};

const Carousel = ({ items, loading, onItemClick, isPlanCarousel = false}) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth / 2
        : container.scrollLeft + container.offsetWidth / 2;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mb-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => navigation("left")}
      >
        <ChevronLeft className="w-5 h-5 text-blue-600" />
      </motion.button>

      <div
        ref={carouselContainer}
        className="flex overflow-x-auto gap-6 py-4 scrollbar-hide px-2"
      >
        {!loading
          ? items.map((item) => {
              const IconComponent = iconComponents[item.id] || null;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onItemClick(item.id)}
                  className={`flex-shrink-0 ${
                    isPlanCarousel ? "w-64 h-44" : "w-52 h-36"
                  } rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border-2 ${
                    item.isActive
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-lg"
                      : "border-gray-100 bg-white hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {!isPlanCarousel && IconComponent && (
                    <div className="p-3 mb-3 rounded-full bg-blue-50">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  )}
                  <p className="text-center font-medium px-2 text-gray-800">
                    {item.name}
                  </p>
                  {isPlanCarousel && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>
                  )}
                </motion.div>
              );
            })
          : [1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                className={`flex-shrink-0 ${
                  isPlanCarousel ? "w-64 h-44" : "w-52 h-36"
                } rounded-xl`}
                active
              />
            ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => navigation("right")}
      >
        <ChevronRight className="w-5 h-5 text-blue-600" />
      </motion.button>
    </div>
  );
};

function GeneralSection() {
  const [activeTab, setActiveTab] = useState("personal");
  const [openCategories, setOpenCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    product_type: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab.toLowerCase());
    setOpenCategories([]);
    setSelectedPlan(null);
    setShowQuoteForm(false);
  };

  const handleCategorySelect = (category) => {
    setOpenCategories((prev) => {
      if (!prev.includes(category)) {
        return [category];
      }
      return [];
    });
    setSelectedPlan(null);
    setShowQuoteForm(false);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan({ name: plan });
    setShowQuoteForm(true);
    setFormData((prev) => ({
      ...prev,
      plan: product_type,
    }));
    setTimeout(() => {
      const formSection = document.getElementById('quote-form-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };
  

  const handleSubmitQuote = async(e) => {
    
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert(
      `Thank you for your interest in ${formData.plan}! We'll contact you shortly.`
    );
     try {
      const response = await axios.post(`http://127.0.0.1:8000/api/product-inquiry`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        message.success('Quote request submitted successfully! We will contact you shortly.');
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          plan: "",
          additionalInfo: "",
        });
        setShowQuoteForm(false);
        setSelectedPlan(null);
      } else {
        message.error(response.data.message || 'Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'An error occurred while submitting your request';
      
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 400) {
          errorMessage = 'Validation error. Please check your inputs.';
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'Network error. Please check your connection.';
      }
      
      message.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };


  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const currentTabData = insuranceData.generalInsurance[activeTab];

  return (
    <section className="w-full bg-white mb-10">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"
        >
          <img
            src={unsplashImages.hero}
            alt="Insurance Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Comprehensive Insurance Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Protect what matters most with our tailored insurance products for
            individuals and businesses
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Section with Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={unsplashImages[activeTab]}
            alt={`${activeTab} insurance`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center">
              <div className="flex bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                {["Personal", "Commercial", "MSME"].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-6 py-2 rounded-md transition-all ${
                      activeTab === tab.toLowerCase()
                        ? "bg-white shadow-md text-blue-600"
                        : "text-white hover:bg-white/20"
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {capitalizeFirstLetter(activeTab)} Insurance Categories
          </h3>
          <Carousel
            items={Object.keys(currentTabData).map((key) => ({
              id: key,
              name: capitalizeFirstLetter(key),
              icon: currentTabData[key].icon,
              isActive: openCategories.includes(key),
            }))}
            loading={loading}
            onItemClick={handleCategorySelect}
          />
        </motion.div>

        {/* Plans Carousels for each open category */}
        
          {openCategories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {capitalizeFirstLetter(category)} Plans
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCategorySelect(category)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Minus className="w-5 h-5" />
                  </motion.button>
                </div>
                <Carousel
                  items={currentTabData[category].plans.map((plan) => ({
                    id: plan,
                    name: plan,
                    category: capitalizeFirstLetter(category),
                  }))}
                  loading={loading}
                  onItemClick={handlePlanSelect}
                  isPlanCarousel
                />
              </div>
            </motion.div>
          ))}
        {/* Get Quote Form */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            id="quote-form-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Get a Quote for {selectedPlan?.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  Fill out the form below and our agent will contact you shortly
                </p>
              </div>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Plus className="w-6 h-6 transform rotate-45" />
              </button>
            </div>
            
            <form onSubmit={handleSubmitQuote}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.full_name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    placeholder="Enter your full name"
                    required
                  />
                  {formErrors.full_name && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.full_name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    placeholder="Enter your email address"
                    required
                  />-
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    placeholder="Enter your 10-digit phone number"
                    required
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selected Plan *
                  </label>
                  <input
                    type="text"
                    name="product_type"
                    value={selectedPlan?.name || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100"
                  />
                  {formErrors.product_type && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.product_type}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell us about your specific requirements..."
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className={`flex items-center px-8 py-3 ${
                    isSubmitting ? 'bg-blue-400' : 'bg-blue-600'
                  } text-white rounded-lg shadow-md hover:bg-blue-700 transition-all`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>


        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Insurance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-blue-600" />,
                title: "Comprehensive Coverage",
                description:
                  "Our policies offer extensive protection against a wide range of risks with customizable options to fit your specific needs.",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-blue-600" />,
                title: "Competitive Pricing",
                description:
                  "Get the best value with our affordable premium options and flexible payment plans tailored to your budget.",
              },
              {
                icon: <Clock className="w-10 h-10 text-blue-600" />,
                title: "Quick Claims",
                description:
                  "Our efficient digital claims processing system ensures fast and fair settlement of your claims.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I file a claim?",
                answer:
                  "You can file a claim through our online portal, mobile app, or by contacting our 24/7 customer service team. Our digital claims process makes it easy to submit documents and track your claim status in real-time.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit/debit cards, bank transfers, UPI payments, and online payment platforms. You can also set up automatic premium payments for convenience.",
              },
              {
                question: "Can I customize my insurance policy?",
                answer:
                  "Yes, most of our policies offer customizable options. You can adjust coverage limits, add riders, and choose deductibles to create a policy that perfectly fits your needs and budget.",
              },
              {
                question: "How are premiums calculated?",
                answer:
                  "Premiums are based on several factors including the type of coverage, your risk profile, location, and chosen deductibles. We use advanced algorithms to ensure you get the fairest price possible.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Protect What Matters Most?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with a free quote today and discover the perfect
            coverage for your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg font-medium text-lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveTab("personal");
              setOpenCategories([]);
            }}
          >
            Get Your Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default GeneralSection;

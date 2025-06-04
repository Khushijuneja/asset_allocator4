import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  DollarSign,
  Clock,
  HelpCircle,
} from "lucide-react";
import { Skeleton } from "antd";
import BriefSection from "./MutualFunds/BriefSection";
import { useRef, useState } from "react";

// Unsplash image URLs
const unsplashImages = {
  equity:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  debt: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  hybrid:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
  hero: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
};

const fundCategories = {
  equity: {
    largeCap: {
      funds: [
        "Blue Chip Growth Fund",
        "Large Cap Value Fund",
        "Index 50 Fund",
        "Nifty 50 Tracker",
        "Mega Cap Equity Fund",
      ],
      icon: "📈",
    },
    midCap: {
      funds: [
        "Mid Cap Opportunities Fund",
        "Emerging Leaders Fund",
        "Growth & Value Fund",
        "Mid Cap Index Fund",
      ],
      icon: "📊",
    },
    smallCap: {
      funds: [
        "Small Cap Growth Fund",
        "Micro Cap Fund",
        "Emerging Businesses Fund",
        "Small Cap Value Fund",
      ],
      icon: "🚀",
    },
    sectoral: {
      funds: [
        "Technology Fund",
        "Banking & Financial Services Fund",
        "Healthcare Fund",
        "Infrastructure Fund",
        "Consumption Fund",
      ],
      icon: "🏭",
    },
  },
  debt: {
    liquid: {
      funds: [
        "Liquid Fund",
        "Ultra Short Term Fund",
        "Money Market Fund",
        "Treasury Fund",
      ],
      icon: "💧",
    },
    shortTerm: {
      funds: [
        "Short Term Bond Fund",
        "Corporate Bond Fund",
        "Banking & PSU Fund",
        "Floater Fund",
      ],
      icon: "⏳",
    },
    longTerm: {
      funds: [
        "Dynamic Bond Fund",
        "Gilt Fund",
        "Credit Risk Fund",
        "Income Fund",
      ],
      icon: "⌛",
    },
  },
  hybrid: {
    aggressive: {
      funds: [
        "Aggressive Hybrid Fund",
        "Equity Savings Fund",
        "Multi Cap Fund",
        "Balanced Advantage Fund",
      ],
      icon: "⚔️",
    },
    conservative: {
      funds: [
        "Conservative Hybrid Fund",
        "Arbitrage Fund",
        "Multi Asset Fund",
        "Retirement Fund",
      ],
      icon: "🛡️",
    },
  },
  elss: {
    taxSaving: {
      funds: [
        "ELSS Growth Fund",
        "ELSS Tax Saver Fund",
        "Tax Advantage Fund",
        "80C Equity Fund",
      ],
      icon: "💰",
    },
  },
};

const iconComponents = {
  largeCap: TrendingUp,
  midCap: LineChart,
  smallCap: ArrowUpRight,
  sectoral: Briefcase,
  liquid: Wallet,
  shortTerm: Clock,
  longTerm: Landmark,
  aggressive: Gem,
  conservative: Shield,
  taxSaving: HandCoins,
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Carousel = ({ items, loading, onItemClick, isFundCarousel = false }) => {
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
    <div className="relative mb-6 ">
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
                    isFundCarousel ? "w-64 h-44" : "w-52 h-36"
                  } rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border-2 ${
                    item.isActive
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-lg"
                      : "border-gray-100 bg-white hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {!isFundCarousel && IconComponent && (
                    <div className="p-3 mb-3 rounded-full bg-blue-50">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  )}
                  <p className="text-center font-medium px-2 text-gray-800">
                    {item.name}
                  </p>
                  {isFundCarousel && (
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
                  isFundCarousel ? "w-64 h-44" : "w-52 h-36"
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

const MutualFunds = () => {
  const [activeTab, setActiveTab] = useState("equity");
  const [openCategories, setOpenCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFund, setSelectedFund] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
    investmentHorizon: "",
    riskAppetite: "",
    fund: "",
  });
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab.toLowerCase());
    setOpenCategories([]);
    setSelectedFund(null);
    setShowForm(false);
  };

  const handleCategorySelect = (category) => {
    setOpenCategories((prev) => {
      if (!prev.includes(category)) {
        return [category];
      }
      return [];
    });
    setSelectedFund(null);
    setShowForm(false);
  };

  const handleFundSelect = (fund) => {
    setSelectedFund({ name: fund });
    setShowForm(true);
    setFormData((prev) => ({
      ...prev,
      fund: fund,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Investment request submitted:", formData);
    alert(
      `Thank you for your interest in ${formData.fund}! Our advisor will contact you shortly.`
    );
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentAmount: "",
      investmentHorizon: "",
      riskAppetite: "",
      fund: "",
    });
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const currentTabData = fundCategories[activeTab];

  return (
    <section className="w-full bg-white mb-10 mt-25">
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
            alt="Mutual Funds Hero"
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
            Smart Mutual Fund Investments
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Grow your wealth with professionally managed funds tailored to your
            financial goals
          </motion.p>
        </div>
      </div>
      <BriefSection />
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
            alt={`${activeTab} funds`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center">
              <div className="flex bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                {["Equity", "Debt", "Hybrid", "ELSS"].map((tab) => (
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
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {capitalizeFirstLetter(activeTab)} Fund Categories
          </h3>
          <Carousel
            items={Object.keys(currentTabData).map((key) => ({
              id: key,
              name: capitalizeFirstLetter(
                key.replace(/([A-Z])/g, " $1").trim()
              ),
              icon: currentTabData[key].icon,
              isActive: openCategories.includes(key),
            }))}
            loading={loading}
            onItemClick={handleCategorySelect}
          />
        </motion.div>

        {/* Funds Carousels for each open category */}
        <AnimatePresence>
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
                    {capitalizeFirstLetter(
                      category.replace(/([A-Z])/g, " $1").trim()
                    )}{" "}
                    Funds
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
                  items={currentTabData[category].funds.map((fund) => ({
                    id: fund,
                    name: fund,
                    category: capitalizeFirstLetter(
                      category.replace(/([A-Z])/g, " $1").trim()
                    ),
                  }))}
                  loading={loading}
                  onItemClick={handleFundSelect}
                  isFundCarousel
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Investment Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Invest in {selectedFund?.name}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Fill out the form below and our advisor will contact you
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-6 h-6 transform rotate-45" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (₹)
                    </label>
                    <input
                      type="number"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Horizon
                    </label>
                    <select
                      name="investmentHorizon"
                      value={formData.investmentHorizon}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="">Select</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-7 years">5-7 years</option>
                      <option value="7+ years">7+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Risk Appetite
                    </label>
                    <select
                      name="riskAppetite"
                      value={formData.riskAppetite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selected Fund
                    </label>
                    <input
                      type="text"
                      name="fund"
                      value={formData.fund}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Submit Investment Request
                    <ArrowRight className="ml-2 w-5 h-5" />
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
            Why Invest in Mutual Funds?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-10 h-10 text-blue-600" />,
                title: "Professional Management",
                description:
                  "Your money is managed by expert fund managers who make informed investment decisions based on extensive research.",
              },
              {
                icon: <PieChart className="w-10 h-10 text-blue-600" />,
                title: "Diversification",
                description:
                  "Spread your investment across multiple stocks and sectors to reduce risk and maximize returns.",
              },
              {
                icon: <Wallet className="w-10 h-10 text-blue-600" />,
                title: "Affordability",
                description:
                  "Start with as little as ₹500 through SIPs and benefit from the power of compounding over time.",
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
                question: "What is the minimum investment amount?",
                answer:
                  "You can start investing in mutual funds with as little as ₹500 through a Systematic Investment Plan (SIP) or ₹5,000 for a lump sum investment. Some funds may have different minimum requirements.",
              },
              {
                question: "How do I choose the right mutual fund?",
                answer:
                  "Consider your financial goals, investment horizon, and risk tolerance. Our advisors can help you select funds that align with your objectives and create a diversified portfolio.",
              },
              {
                question: "What are the tax implications?",
                answer:
                  "Tax treatment depends on the type of fund and holding period. Equity funds held for more than 1 year qualify for long-term capital gains tax of 10% on gains above ₹1 lakh. Debt funds held for more than 3 years are taxed at 20% with indexation benefits.",
              },
              {
                question: "Can I withdraw my money anytime?",
                answer:
                  "Most mutual funds are open-ended, allowing you to redeem your units anytime (except ELSS funds which have a 3-year lock-in). However, it's recommended to stay invested for the recommended time horizon to achieve your financial goals.",
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
            Start Your Investment Journey Today
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you build a portfolio tailored to your
            financial goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg font-medium text-lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveTab("equity");
              setOpenCategories([]);
            }}
          >
            Explore Investment Options
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MutualFunds;

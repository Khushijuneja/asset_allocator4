// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ParallaxProvider } from "react-scroll-parallax";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

// const faqData = [
//   {
//     question:
//       "Is there any eligibility criterion for having a health insurance policy?",
//     answer:
//       "Anyone above the age of 3 months (for the health floater plan) can take a health insurance policy. However, the insurer may ask you to go through a medical check-up to ascertain your health condition before issuing the policy. Based on underwriting guidelines that consider age, health condition, family history, etc., the insurer will determine whether to provide you with a health plan.",
//   },
//   {
//     question: "What are TPAs?",
//     answer:
//       "TPAs or third-party administrators act as intermediaries between insurance companies, policyholders, and hospitals. A TPA helps policyholders settle claims hassle-free by establishing communication between the policyholder, the treating hospital, and the insurer. However, it's advisable to choose a company that has in-house claim settlement rather than relying on TPAs.",
//   },
//   {
//     question: "What is NCB (No Claim Bonus)?",
//     answer:
//       "‘No Claim Bonus’ is an additional sum insured offered by the insurer on policy renewal for customers who had no claims in the preceding year. It is calculated as a percentage of the sum insured and typically ranges from 5% to 100%. It is advisable to ensure that the plan you choose offers the maximum NCB.",
//   },
//   {
//     question: "What does health insurance cover?",
//     answer:
//       "A health insurance policy covers all expenses related to hospitalization. You need to be hospitalized for a continuous 24 hours to avail of the benefit. Additionally, it covers expenses for daycare procedures, pre and post-hospitalization, ambulance charges, donor expenses, and more. We advise you to read the coverage terms carefully before purchasing a plan.",
//   },
// ];

// export default function FAQSection() {
//   const [expandedSections, setExpandedSections] = useState([]);

//   const toggleSection = (index) => {
//     setExpandedSections((prev) =>
//       prev.includes(index)
//         ? prev.filter((item) => item !== index)
//         : [...prev, index]
//     );
//   };

//   return (
//     <ParallaxProvider>
//       <ContentWrapper>
//         <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6  md:p-10 text-center">
//           {/* Heading */}
//           <motion.h1
//             className="text-4xl font-extrabold mb-2 text-gray-800"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Some Important FAQ's
//           </motion.h1>

//           <motion.h3
//             className="font-palanquin text-center text-xl md:text-3xl font-bold mb-5"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Common
//             <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
//               Frequently Asked
//             </span>
//             Questions
//           </motion.h3>
//           <div className="flex flex-col mt-10 md:flex-row gap-5 justify-around items-center">
//             {/* FAQ List */}
//             <div className="space-y-4">
//               {faqData.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {/* Question */}
//                   <div
//                     className="p-4 shadow-md rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
//                     onClick={() => toggleSection(index)}
//                   >
//                     <span className="font-semibold text-gray-900">
//                       {item.question}
//                     </span>
//                     {expandedSections.includes(index) ? (
//                       <ChevronUp className="w-5 h-5 text-gray-700" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-gray-700" />
//                     )}
//                   </div>

//                   {/* Answer with Framer Motion */}
//                   {expandedSections.includes(index) && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-2 p-4 rounded-lg bg-gray-50 border-l-4 border-orange-500 shadow-md text-left"
//                     >
//                       <p className="text-gray-600">{item.answer}</p>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Image Section */}
//             {/* Image Section */}
//             <motion.div
//               className="mt-10 flex-shrink-0 w-[350px] h-auto" // Ensures fixed width
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="FAQ Illustration"
//                 className="w-[350px] max-w-lg mx-auto rounded-lg shadow-lg object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </ContentWrapper>
//     </ParallaxProvider>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown, ChevronUp } from "lucide-react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import axios from "axios";

export default function FAQSection() {
  const [expandedSections, setExpandedSections] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // Replace with your Laravel API endpoint
        const response = await axios.get("http://localhost:8000/api/faqs");
        setFaqData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching FAQs:", err);
      }
    };

    fetchFaqs();
  }, []);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  if (loading) {
    return (
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <p>Loading FAQs...</p>
        </div>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <ParallaxProvider>
      <ContentWrapper>
        <div className="w-full relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
          <motion.h1
            className="text-4xl font-extrabold mb-2 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Some Important FAQ's
          </motion.h1>

          <motion.h3
            className="font-palanquin text-center text-xl md:text-3xl font-bold mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Common
            <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Frequently Asked
            </span>
            Questions
          </motion.h3>

          <div className="flex flex-col mt-10 md:flex-row gap-5 justify-around items-center">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="p-4 shadow-md rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                    onClick={() => toggleSection(index)}
                  >
                    <span className="font-semibold text-gray-900">
                      {item.question}
                    </span>
                    {expandedSections.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    )}
                  </div>

                  {expandedSections.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 p-4 rounded-lg bg-gray-50 border-l-4 border-orange-500 shadow-md text-left"
                    >
                      <p className="text-gray-600">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 flex-shrink-0 w-[350px] h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="FAQ Illustration"
                className="w-[350px] max-w-lg mx-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </ContentWrapper>
    </ParallaxProvider>
  );
}

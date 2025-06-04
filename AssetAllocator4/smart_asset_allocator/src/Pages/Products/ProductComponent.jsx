import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const HeroSection = ({ title, subtitle, tagline, image }) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-2 items-center gap-6"
  >
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-yellow-600">{title}</h1>
      <h2 className="text-xl text-gray-600">{subtitle}</h2>
      <p className="text-gray-700">{tagline}</p>
    </div>

    {image && (
      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl shadow-lg w-full h-auto object-contain"
      />
    )}
  </motion.div>
);

export const AboutSection = ({ content }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-semibold mb-2">About</h3>
    <p className="text-gray-700">{content}</p>
  </motion.div>
);

export const Features = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      {features.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

export const Benefits = ({ benefits }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold mb-2">Benefits</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      {benefits.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h3>
      {faqs.map(({ question, answer }, idx) => {
        const isOpen = openIndex === idx;
        return (
          <motion.div
            key={idx}
            initial={{ borderRadius: "0.5rem" }}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center text-left p-4 bg-white hover:bg-yellow-50 transition"
            >
              <span className="font-medium text-gray-900">{question}</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-yellow-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 pb-4 text-gray-700"
                >
                  <div>{answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
export const CTA = ({ heading, text }) => (
  <motion.div
    className="p-6 bg-yellow-100 rounded-xl shadow"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-yellow-800 mb-2">{heading}</h3>
    <p className="text-gray-800">{text}</p>
  </motion.div>
);

export const AdvisorTips = ({ title, points }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold text-yellow-600">{title}</h2>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export const Regulations = ({ title, description, keyPoints }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold text-yellow-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        {keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.section>
  );
};

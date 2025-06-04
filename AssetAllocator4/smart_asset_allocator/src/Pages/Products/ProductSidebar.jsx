import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SidebarSection = ({ title, links }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
    <ul className="space-y-1 pl-2 border-l-2 border-yellow-400">
      {links.map((item, idx) => (
        <li key={idx}>
          <Link
            to={item.link}
            className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 block"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ProductSidebar = ({ sidebarLinks }) => {
  const { products = [], downloads = [], services = [] } = sidebarLinks;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md sticky top-20"
    >
      <SidebarSection title="Explore Products" links={products} />
      <SidebarSection title="Related Services" links={services} />
      <SidebarSection title="Downloads" links={downloads} />
    </motion.aside>
  );
};

export default ProductSidebar;

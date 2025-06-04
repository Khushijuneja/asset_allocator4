// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { fadeIn, staggerContainer } from "../../utils/motion";

// // const BlogPage = () => {
// //   // Updated blog data for financial services
// //   const blogs = [
// //     {
// //       id: 1,
// //       title: "5 Essential Financial Planning Tips for 2023",
// //       excerpt:
// //         "Discover key strategies to optimize your financial planning and wealth management in the current economic climate.",
// //       category: "Wealth Management",
// //       date: "May 15, 2023",
// //       slug: "financial-planning-tips-2023",
// //       image:
// //         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
// //     },
// //     {
// //       id: 2,
// //       title: "Understanding Tax-Saving Investment Options",
// //       excerpt:
// //         "A comprehensive guide to tax-saving instruments and how to choose the right ones for your portfolio.",
// //       category: "Tax Planning",
// //       date: "April 28, 2023",
// //       slug: "tax-saving-investment-options",
// //       image:
// //         "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     },
// //     {
// //       id: 3,
// //       title: "Retirement Planning: Start Early, Retire Wealthy",
// //       excerpt:
// //         "Learn why starting your retirement planning early can make a significant difference in your golden years.",
// //       category: "Retirement Planning",
// //       date: "March 10, 2023",
// //       slug: "retirement-planning-guide",
// //       image:
// //         "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
// //     },
// //     {
// //       id: 4,
// //       title: "The Power of Systematic Investment Plans (SIPs)",
// //       excerpt:
// //         "How SIPs can help you build wealth consistently and mitigate market volatility risks.",
// //       category: "Investment",
// //       date: "February 22, 2023",
// //       slug: "power-of-sips",
// //       image:
// //         "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// //     },
// //   ];

// //   const recentPosts = [...blogs].slice(0, 3);

// //   const categories = [
// //     "Wealth Management",
// //     "Tax Planning",
// //     "Retirement Planning",
// //     "Investment",
// //     "Insurance",
// //   ];

// //   return (
// //     <motion.div
// //       initial="hidden"
// //       whileInView="show"
// //       viewport={{ once: true }}
// //       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
// //     >
// //       {/* SEO Meta */}
// //       <title>
// //         Sanjay Jadhav & Associates Blog | Financial Planning & Wealth Management
// //       </title>
// //       <meta
// //         name="description"
// //         content="Expert financial advice, investment strategies, and wealth management insights from Sanjay Jadhav & Associates."
// //       />

// //       {/* Page Header */}
// //       <motion.div
// //         variants={fadeIn("up", "spring", 0.1, 1)}
// //         className="text-center mb-16"
// //       >
// //         <h1 className="text-4xl font-bold text-gray-900 mb-4">
// //           Financial Insights
// //         </h1>
// //         <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
// //         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
// //           Expert advice, market trends, and wealth management strategies from
// //           our financial advisors
// //         </p>
// //       </motion.div>

// //       <div className="flex flex-col lg:flex-row gap-8">
// //         {/* Main Content */}
// //         <motion.div
// //           variants={fadeIn("right", "spring", 0.2, 1)}
// //           className="lg:w-2/3"
// //         >
// //           {/* Blog Grid */}
// //           <motion.div
// //             variants={staggerContainer(0.1, 0.2)}
// //             className="grid md:grid-cols-2 gap-8"
// //           >
// //             {blogs.map((blog, index) => (
// //               <motion.article
// //                 key={blog.id}
// //                 variants={fadeIn("up", "spring", index * 0.1, 1)}
// //                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
// //               >
// //                 <Link to={`/blog/${blog.slug}`}>
// //                   <img
// //                     src={blog.image}
// //                     alt={blog.title}
// //                     className="w-full h-48 object-cover"
// //                   />
// //                   <div className="p-6">
// //                     <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
// //                       {blog.category}
// //                     </span>
// //                     <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
// //                       {blog.title}
// //                     </h2>
// //                     <p className="text-gray-600 mb-4">{blog.excerpt}</p>
// //                     <div className="flex justify-between items-center">
// //                       <span className="text-sm text-gray-500">{blog.date}</span>
// //                       <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
// //                         Read More →
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </motion.article>
// //             ))}
// //           </motion.div>

// //           {/* Pagination */}
// //           <motion.div
// //             variants={fadeIn("up", "spring", 0.4, 1)}
// //             className="mt-12 flex justify-center"
// //           >
// //             <nav className="flex items-center space-x-2">
// //               <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
// //                 Previous
// //               </button>
// //               <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
// //                 1
// //               </button>
// //               <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
// //                 2
// //               </button>
// //               <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
// //                 3
// //               </button>
// //               <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
// //                 Next
// //               </button>
// //             </nav>
// //           </motion.div>
// //         </motion.div>

// //         {/* Sidebar */}
// //         <motion.aside
// //           variants={fadeIn("left", "spring", 0.3, 1)}
// //           className="lg:w-1/3"
// //         >
// //           <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
// //             {/* Search */}
// //             <div className="mb-8">
// //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                 Search Articles
// //               </h3>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search financial topics..."
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
// //                 />
// //                 <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="h-5 w-5"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Recent Posts */}
// //             <div className="mb-8">
// //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                 Latest Insights
// //               </h3>
// //               <ul className="space-y-3">
// //                 {recentPosts.map((post) => (
// //                   <li key={post.id}>
// //                     <Link
// //                       to={`/blog/${post.slug}`}
// //                       className="flex items-start gap-3 group"
// //                     >
// //                       <img
// //                         src={post.image}
// //                         alt={post.title}
// //                         className="w-16 h-16 object-cover rounded"
// //                       />
// //                       <div>
// //                         <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
// //                           {post.title}
// //                         </h4>
// //                         <p className="text-xs text-gray-500">{post.date}</p>
// //                       </div>
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Categories */}
// //             <div className="mb-8">
// //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                 Financial Topics
// //               </h3>
// //               <ul className="space-y-2">
// //                 {categories.map((category, index) => (
// //                   <li key={index}>
// //                     <Link
// //                       to={`/blog/category/${category
// //                         .toLowerCase()
// //                         .replace(" ", "-")}`}
// //                       className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
// //                     >
// //                       <span>{category}</span>
// //                       <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
// //                         {blogs.filter((b) => b.category === category).length}
// //                       </span>
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Newsletter */}
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                 Financial Newsletter
// //               </h3>
// //               <p className="text-sm text-gray-600 mb-3">
// //                 Get monthly insights on wealth management and financial planning
// //               </p>
// //               <form className="space-y-3">
// //                 <input
// //                   type="email"
// //                   placeholder="Your email address"
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
// //                   required
// //                 />
// //                 <button
// //                   type="submit"
// //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
// //                 >
// //                   Subscribe
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </motion.aside>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default BlogPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/blog?page=${currentPage}`);
        setBlogs(response.data.data);
        setTotalPages(response.data.last_page);
        
        // Extract unique categories from the blogs
        const uniqueCategories = [...new Set(response.data.data.map(blog => {
          if (blog.category === "0") return "Wealth Management";
          if (blog.category === "1") return "Tax Planning";
          if (blog.category === "2") return "Retirement Planning";
          if (blog.category === "3") return "Investment";
          return "Other";
        }))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
  
  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center text-red-600">
      Error: {error}
    </div>
  );

  const recentPosts = [...blogs].slice(0, 3);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Meta */}
      <title>Sanjay Jadhav & Associates Blog | Financial Planning & Wealth Management</title>
      <meta
        name="description"
        content="Expert financial advice, investment strategies, and wealth management insights from Sanjay Jadhav & Associates."
      />

      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Insights
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Expert advice, market trends, and wealth management strategies from
          our financial advisors
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={blog.image_url ? `http://127.0.0.1:8000/uploads/${blog.image_url}` : 
                        'https://via.placeholder.com/600x400?text=No+Image'}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                      {blog.category === "0" && "Wealth Management"}
                      {blog.category === "1" && "Tax Planning"}
                      {blog.category === "2" && "Retirement Planning"}
                      {blog.category === "3" && "Investment"}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(blog.published_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 flex justify-center"
          >
            <nav className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${currentPage === page ? 
                    'bg-blue-600 text-white' : 
                    'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search financial topics..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Latest Insights
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-16 h-16 overflow-hidden rounded">
                        <img
                          src={post.image_url ? `http://127.0.0.1:8000/uploads/${post.image_url}` : 
                            'https://via.placeholder.com/100?text=No+Image'}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/100?text=Image+Not+Available';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Financial Topics
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {blogs.filter(b => {
                          if (category === "Wealth Management") return b.category === "0";
                          if (category === "Tax Planning") return b.category === "1";
                          if (category === "Retirement Planning") return b.category === "2";
                          if (category === "Investment") return b.category === "3";
                          return false;
                        }).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Financial Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get monthly insights on wealth management and financial planning
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600"
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
      </div>
    </motion.div>
  );
};

export default BlogPage;


// import React from "react";
// import { motion } from "framer-motion";
// import { corporateData } from "../../constants/constants";
// import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

// const OurCorporateServices = () => {
//   return (
//     <ContentWrapper>
//       <section className="py-16 px-4 md:px-10 bg-gray-100">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold leading-snug">
//             Comprehensive Coverage,
//             <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
//               Trusted Protection
//             </span>
//             for Every Corporate Risk
//           </h3>
//           <p className="mt-3 text-xl md:text-3xl text-gray-700 font-semibold">
//             Corporate Risk Management
//           </p>
//           <p className="italic text-gray-500 mt-2 text-lg">
//             “Our business is our most valuable asset, a vital pillar to ensure
//             our overall well-being.”
//           </p>
//           <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-base md:text-lg">
//             And to safeguard your business, we provide you all the tools under
//             one roof. So may it be workmen compensation, group health, fire,
//             transit, indemnity, or any other business risk; we have it all. Our
//             aim is to provide full-proof business solutions at reasonable costs.
//             <br />
//             <strong className="text-blue-700">
//               Consult us and get benefited.
//             </strong>
//           </p>
//         </div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {corporateData.map((item) => (
//             <motion.div
//               key={item.id}
//               className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <div className="relative group">
//                 <img
//                   src={item.image}
//                   alt={item.service}
//                   className="w-full h-56 object-cover transition duration-300 group-hover:opacity-75"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                   <h3 className="text-white text-xl font-semibold">
//                     {item.service}
//                   </h3>
//                 </div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {item.service}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </ContentWrapper>
//   );
// };

// export default OurCorporateServices;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CorporateServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('http://localhost:8000/api/corporate-services');
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Corporate Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image_url} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.short_description}</p>
              <a 
                href={`/services/${service.slug}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateServices;
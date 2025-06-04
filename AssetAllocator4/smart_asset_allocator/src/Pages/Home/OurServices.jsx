// import React from "react";
// import { motion } from "framer-motion";
// import { serviceData } from "../../constants/constants";
// import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

// const OurServices = () => {
//   return (
//     <ContentWrapper>
//       <section className="py-16 px-4 md:px-10 bg-gray-100">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h3 className="font-palanquin text-center text-xl md:text-3xl font-bold">
//             Insurance
//             <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
//               Provides You a Better
//             </span>
//             Future
//           </h3>

//           <p className="mt-4 text-2xl md:text-4xl text-gray-600">
//             Pure Insurance Solutions
//           </p>
//           <p className="italic text-gray-500 mt-2">
//             “The best time to buy Insurance was yesterday. The next best time is
//             today.”
//           </p>
//           <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//             When it comes to our family, we never compromise. That’s why we
//             offer a bouquet of pure insurance plans in every important category
//             – term insurance, health insurance, critical illness insurance,
//             personal accident insurance, home insurance, vehicle insurance, and
//             much more. Our strength lies in in-depth knowledge, genuine
//             guidance, and effortless claim support! Consult us and get
//             benefited!
//           </p>
//         </div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {serviceData.map((item) => (
//             <motion.div
//               key={item.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.service}
//                 className="w-full h-48 object-cover"
//               />
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

//  export default OurServices;/
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper';

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/services');
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <ContentWrapper>
        <section className="py-16 px-4 md:px-10 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </section>
      </ContentWrapper>
    );
  }

  if (error) {
    return (
      <ContentWrapper>
        <section className="py-16 px-4 md:px-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-2xl mx-auto" role="alert">
            <strong className="font-bold">Error loading services!</strong>
            <span className="block sm:inline"> {error}</span>
            <button 
              onClick={() => window.location.reload()}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <svg className="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
              </svg>
            </button>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Try Again
          </button>
        </section>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        {/* Section Heading */}
        <div className="max-w-6xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h3 className="font-palanquin text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Insurance
            <span className="mx-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Provides You a Better
            </span>
            Future
          </h3>

          <p className="mt-6 text-2xl md:text-3xl text-gray-600">
            Pure Insurance Solutions
          </p>
          <p className="mt-4 italic text-gray-600 text-lg md:text-xl">
            "The best time to buy Insurance was yesterday. The next best time is today."
          </p>
          <p className="mt-6 text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            When it comes to our family, we never compromise. That's why we
            offer a bouquet of pure insurance plans in every important category
            – term insurance, health insurance, critical illness insurance,
            personal accident insurance, home insurance, vehicle insurance, and
            much more. Our strength lies in in-depth knowledge, genuine
            guidance, and effortless claim support! Consult us and get
            benefited!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-38xl; mx-auto px-5 sm:px-6 lg:px-9">
          {services.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={`http://127.0.0.1:8000/storage/${service.image}`}
                      alt={service.service}
                      className="w-full h-full transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '`http://127.0.0.1:8000/storage/${service.image}`';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                      {service.service}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-620 text-xl">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </ContentWrapper>
  );
};

export default OurServices;
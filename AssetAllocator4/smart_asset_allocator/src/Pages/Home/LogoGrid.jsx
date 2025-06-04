import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdImage } from 'react-icons/md';


const LogoGrid = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/partners');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setPartners(data.length > 0 ? data : defaultLogos);
            } catch (err) {
                console.error('Error fetching partners:', err);
                setError(err.message);
                setPartners(defaultLogos);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    return (
        <div className="bg-gray-50 py-20 mt-10">
            <h3 className="font-palanquin text-center text-xl md:text-3xl font-bold mb-10">
                Trusted by
                <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                    Our Partners
                </span>
                Worldwide
            </h3>

            {loading && (
                <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="h-16 md:h-20 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                </div>
            )}

            {error && !loading && (
                <div className="container mx-auto text-center text-yellow-600 py-4">
                    Note: Showing default partner logos (API unavailable)
                </div>
            )}

            <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, filter: "grayscale(100%)" }}
                        transition={{ duration: 0.3 }}
                        className="relative flex justify-center items-center"
                    >
                        <img
                            src={partner.logo_url}
                            alt={partner.name || `Partner ${index + 1}`}
                            className="h-16 md:h-20 object-contain"
                            onError={(e) => {
                                if (defaultLogos[index]) {
                                    e.target.src = defaultLogos[index].logo_url;
                                    e.target.alt = defaultLogos[index].name;
                                }
                            }}
                        />
                        <MdImage className="absolute text-gray-300 text-4xl hidden" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default LogoGrid;
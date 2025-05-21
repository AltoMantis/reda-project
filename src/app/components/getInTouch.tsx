'use client';

import { motion } from 'framer-motion';

export default function GetInTOuch() {
    return (
        <div className="get-in-touch flex flex-col items-center justify-center min-h-[600px] bg-[#323F48] text-white text-center px-4 py-12 md:py-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-[120px] mt-8 md:mt-16"
            >
                Get in Touch
            </motion.h2>
            
            <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 md:px-8 py-2 md:py-3 rounded-md mb-8 md:mb-12 text-base md:text-lg transition-all duration-300"
            >
                Contact Us
            </motion.button>
            
            <div className="w-32 md:w-48 h-[2px] bg-white/30 my-8 md:my-12"></div>
            
            <div className="adress flex flex-col items-center max-w-2xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 w-full"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm md:text-base text-center">
                            <strong>bennani.a@caylamaroc.com</strong>
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p className="text-sm md:text-base text-center">
                            <strong>+212 661 993 93 93</strong>
                        </p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-sm md:text-base text-center">
                            <strong>Casablanca, Morocco</strong>
                        </p>
                    </motion.div>
                </motion.div>
                
                <div className="w-full h-[1px] bg-white/20 mb-6 md:mb-8"></div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-white/70 mb-4 text-sm md:text-base">2025 Cayla. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                            Terms of Service
                        </a>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                            Cookie Policy
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
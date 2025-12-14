import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = ({ title, description, children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-black rounded-2xl p-1 overflow-hidden"
        >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Content */}
            <div className="relative h-full bg-neutral-950 rounded-xl p-6 flex flex-col z-10">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-auto">
                    {children}
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:duration-200" />
        </motion.div>
    );
};

export default ProfileCard;

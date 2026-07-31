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
            className="group relative bg-black rounded-2xl p-[1px] overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-colors"
        >
            {/* Animated Monochrome Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-300 to-zinc-600 opacity-10 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Inner Content */}
            <div className="relative h-full bg-zinc-950 rounded-xl p-6 flex flex-col z-10 backdrop-blur-xl">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed font-light">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-auto">
                    {children}
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-zinc-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </motion.div>
    );
};

export default ProfileCard;

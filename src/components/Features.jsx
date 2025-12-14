import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Globe, Shield, Zap, Cpu } from 'lucide-react';

const features = [
    {
        icon: <Zap className="h-6 w-6 text-yellow-400" />,
        title: "Lightning Fast",
        description: "Built on top of Vite for instant server start and lightning fast HMR."
    },
    {
        icon: <Layout className="h-6 w-6 text-indigo-400" />,
        title: "Modern Layouts",
        description: "Responsive and accessible grid systems that work on any device."
    },
    {
        icon: <Shield className="h-6 w-6 text-emerald-400" />,
        title: "Enterprise Secure",
        description: "Bank-grade security standards built directly into the core."
    },
    {
        icon: <Globe className="h-6 w-6 text-cyan-400" />,
        title: "Global Scale",
        description: "Deploy to the edge in seconds with our distributed infrastructure."
    },
    {
        icon: <Cpu className="h-6 w-6 text-purple-400" />,
        title: "AI Powered",
        description: "Integrated AI assistants to help you code faster and smarter."
    },
    {
        icon: <Smartphone className="h-6 w-6 text-pink-400" />,
        title: "Mobile First",
        description: "Designing for small screens is not an afterthought, it's a priority."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Unmatched Capabilities</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to build world-class applications in record time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 hover:border-indigo-500/30 transition-all cursor-pointer group"
                        >
                            <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

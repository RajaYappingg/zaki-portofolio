import React from 'react';
import Stack from './Stack';

const About = () => {
    const images = [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format", // Coding
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format", // Code screen
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format", // Developer
        "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=500&auto=format", // Code typing
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format"  // Tech setup
    ];

    const stackCards = images.map((img, i) => (
        <div key={i} className="w-full h-full relative group overflow-hidden bg-gray-900 border border-white/10">
            <img src={img} alt={`About ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>
    ));

    return (
        <section id="about" className="py-20 w-full min-h-screen pt-32 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">About Me</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Stack Component (Images) - Left Column */}
                    <div className="flex justify-center lg:justify-end pr-0 lg:pr-12">
                        <div className="relative w-full max-w-[350px] aspect-[4/5]">
                            <Stack
                                cards={stackCards}
                                sensitivity={150}
                                sendToBackOnClick={true}
                                animationConfig={{ stiffness: 200, damping: 20 }}
                                randomRotation={true}
                            />
                        </div>
                    </div>

                    {/* Text Content Column (Right) */}
                    <div className="space-y-6">
                        <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Hello! I'm Zaki, a dedicated web developer based in Indonesia. I enjoy building things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                When I'm not at the computer, I'm usually hanging out with my friends, reading, or running around searching for new coffee shops.
                            </p>
                        </div>

                        {/* Experience List */}
                        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                    <span>Senior Frontend Developer @ Tech Corp (2023-Present)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    <span>Web Developer @ Agency (2021-2023)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                    <span>Junior Developer @ StartUp (2020-2021)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

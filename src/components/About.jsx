import React from 'react';
import Stack from './Stack';
import profileImg from '../assets/profile.png';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.jpg';

const About = () => {
    const images = [
        profileImg, // User Profile
        photo1,     // Graduation
        photo2,     // Helmet Kid
        photo3,     // Sunglasses Kid
        photo4      // Swimming
    ];

    const stackCards = images.map((img, i) => (
        <div key={i} className="w-full h-full relative group overflow-hidden bg-zinc-950 border border-zinc-800 rounded-2xl">
            <img src={img} alt={`About ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
        </div>
    ));

    return (
        <section id="about" className="py-20 w-full min-h-screen pt-32 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">About Me</h2>
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
                        <div className="bg-zinc-950/80 p-8 rounded-3xl border border-zinc-800 backdrop-blur-xl">
                            <p className="text-zinc-300 leading-relaxed text-lg mb-6 font-light">
                                Hello! I'm Zaki, a dedicated web developer based in Indonesia. I enjoy building things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-lg mb-6 font-light">
                                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-lg font-light">
                                When I'm not at the computer, I'm usually hanging out with my friends, reading, or running around searching for new coffee shops.
                            </p>
                        </div>

                        {/* Experience List */}
                        <div className="bg-zinc-950/80 p-6 rounded-2xl border border-zinc-800 backdrop-blur-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
                            <ul className="space-y-3 text-zinc-400 font-light">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    <span>Fullstack Developer</span>
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

import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative font-sans">
        <Navbar />

        {/* Modern Clean AMOLED Background with Subtle Grid & Ambient White Radial Glow */}
        <div className="fixed inset-0 z-0 bg-black amoled-grid pointer-events-none">
          <div className="absolute inset-0 amoled-glow pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

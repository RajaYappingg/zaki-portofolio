import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import FloatingLines from './components/FloatingLines';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 relative">
        <div className="fixed inset-0 z-0 opacity-60">
          <FloatingLines
            linesGradient={['#6366f1', '#a855f7', '#06b6d4']}
            animationSpeed={0.5}
            lineCount={[10]}
            lineDistance={[2]}
          />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
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
    </BrowserRouter>
  );
}

export default App;

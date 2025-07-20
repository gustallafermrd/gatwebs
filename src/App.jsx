import React from 'react';
import { Code2, ChevronRight, Globe, Zap, Shield, Code, UserCheck, Palette, Cpu, Smartphone, BrainCircuit, Paintbrush, ShoppingBag, Mail, UtensilsCrossed } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[rgb(238,106,26)] via-[rgb(255,140,50)] to-[rgb(255,170,80)]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-lg">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <span className="ml-2 text-2xl font-bold text-white">Gatwebs</span>
            </div>
            <div className="hidden md:flex space-x-2">
              <a href="#services" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Services</a>
              <a href="#work" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Our Work</a>
              <a href="#about" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">About</a>
              <a href="#contact" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="p-8 rounded-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Gatwebs, tu socio en el mundo digital
                </h1>
                <p className="mt-6 text-lg text-orange-100">
                  Nos dedicamos a transformar ideas en realidades digitales. Somos expertos en el desarrollo web y ofrecemos una amplia gama de servicios para ayudarte a crecer en línea.
                </p>
                <button className="mt-8 px-8 py-3 bg-gradient-to-r from-white to-orange-50 text-[rgb(238,106,26)] font-semibold rounded-lg hover:opacity-90 transition duration-300 flex items-center">
                  Empezar Ahora
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="p-2 rounded-2xl bg-gradient-to-br from-white/20 to-white/5">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Web Development"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ...rest of the file unchanged... */}
    </div>
  );
}

export default App;

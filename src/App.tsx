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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-3 rounded-xl">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia Integral</h3>
                <p className="text-gray-600">Ofrecemos una amplia gama de servicios que van desde el desarrollo web hasta la creación de códigos QR para menús digitales.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-3 rounded-xl">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Profesionalismo y calidad</h3>
                <p className="text-gray-600">Somos un equipo altamente capacitado en el desarrollo web y tecnologías digitales, garantizando la calidad y eficacia en cada proyecto.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-3 rounded-xl">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia de Usuario</h3>
                <p className="text-gray-600">Usamos tecnologías web avanzadas para mejorar la experiencia del usuario, lo que se traduce en sitios web atractivos y funcionales.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-3 rounded-xl">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovación Tecnológica</h3>
                <p className="text-gray-600">Trabajando con nosotros te beneficiarás de la constante innovación tecnológica y las últimas tendencias en desarrollo web.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design and Development Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Diseño y Desarrollo de Paginas Web</h2>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
                {/* Diseño Responsivo */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                      alt="Diseño Responsivo"
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Desarrollo en React */}
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                      alt="Desarrollo React"
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* UI/UX Design */}
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
                      alt="UI/UX Design"
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* E-commerce */}
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                      alt="E-commerce Development"
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Menus Digitales */}
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                      alt="Digital Menus"
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-8">
                Nuestro equipo de diseñadores y desarrolladores web altamente capacitados crea sitios web atractivos y funcionales que se adaptan a tus necesidades y objetivos. Desde sitios web corporativos hasta tiendas en línea, nos aseguramos de que tu presencia en línea sea única y memorable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Diseño Responsivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <BrainCircuit className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Desarrollo en React</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <Paintbrush className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Diseño UI / UX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Desarrollo de E-commerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Correos Empresariales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[rgb(238,106,26)] to-[rgb(255,140,50)] p-2 rounded-lg">
                    <UtensilsCrossed className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">Menus Digitales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Globe className="h-10 w-10 text-[rgb(238,106,26)]" />}
              title="Web Development"
              description="Custom websites and web applications built with cutting-edge technologies."
            />
            <ServiceCard
              icon={<Zap className="h-10 w-10 text-[rgb(238,106,26)]" />}
              title="Performance Optimization"
              description="Speed up your website for better user experience and SEO rankings."
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10 text-[rgb(238,106,26)]" />}
              title="Security Solutions"
              description="Protect your digital assets with our advanced security measures."
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              title="E-commerce Platform"
              description="Modern online shopping experience"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              title="Business Dashboard"
              description="Data visualization platform"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80"
              title="Mobile App"
              description="Cross-platform mobile solution"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[rgb(238,106,26)] via-[rgb(255,140,50)] to-[rgb(255,170,80)]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
            <p className="text-orange-100 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-white to-orange-50 text-[rgb(238,106,26)] font-semibold rounded-lg hover:opacity-90 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Gatwebs</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[rgb(238,106,26)]">Twitter</a>
              <a href="#" className="hover:text-[rgb(238,106,26)]">LinkedIn</a>
              <a href="#" className="hover:text-[rgb(238,106,26)]">GitHub</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 Gatwebs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;
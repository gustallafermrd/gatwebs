import React from 'react';
import { Code2, ChevronRight, Globe, Zap, Shield, Code, UserCheck, Palette, Cpu, Smartphone, BrainCircuit, Paintbrush, ShoppingBag, Mail, UtensilsCrossed, Contact } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

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
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
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
                  <a href="#porque-elegirnos" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Por que Elegirnos</a>
                  <a href="#diseño-y-desarrollo" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Paginas Web</a>
                  <a href="#servicios" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Servicios</a>
                  <a href="#contact" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition duration-300">Contactanos</a>
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
                      <a href="#contact">Contactanos</a>
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                  <div className="p-2 rounded-2xl bg-gradient-to-br from-white/20 to-white/5">
                    <div className="relative w-full aspect-video">
                      <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                        alt="Web Development"
                        fill
                        className="rounded-xl shadow-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
    
          {/* Why Choose Us Section */}
          <section className="py-20 bg-gray-100" id='porque-elegirnos'>
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-orange-500 mb-16">Por Qué Elegirnos</h2>
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
          <section className="py-20 bg-white" id='diseño-y-desarrollo'>
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-orange-500 mb-16">Diseño y Desarrollo de Páginas Web</h2>
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/2">
                  <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
                    {/* Diseño Responsivo */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                          alt="Diseño Responsivo"
                          fill
                          className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* Desarrollo en React */}
                    <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg group">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                          alt="Desarrollo React"
                          fill
                          className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* UI/UX Design */}
                    <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
                          alt="UI/UX Design"
                          fill
                          className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* E-commerce */}
                    <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg group">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                          alt="E-commerce Development"
                          fill
                          className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* Menus Digitales */}
                    <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg group">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                          alt="Digital Menus"
                          fill
                          className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
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
          <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-orange-500 mb-16">Nuestros Servicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <ServiceCard
                  icon={<Globe className="h-10 w-10 text-[rgb(238,106,26)]" />}
                  title="Desarrollo Web"
                  description="Páginas web personalizadas y optimizadas para todos los dispositivos. Especializados en el rubro del turismo"
                />
                <ServiceCard
                  icon={<Zap className="h-10 w-10 text-[rgb(238,106,26)]" />}
                  title="Automatización de Procesos"
                  description="Expertos en la automatización de procesos para mejorar la eficiencia y reducir costos."
                />
                <ServiceCard
                  icon={<Shield className="h-10 w-10 text-[rgb(238,106,26)]" />}
                  title="Plataformas E-learning"
                  description="Creamos plataformas de aprendizaje en línea para instituciones educativas y empresas."
                />
              </div>
            </div>
          </section>
    
          {/* Featured Work Section */}
          <section id="trabajos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-orange-500 mb-16">Nuestros Trabajos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  image="/images/portadas/circuito.jpg"
                  title="Circuito de la Excelencia"
                  description="Página web de ámbito turístico, para posadas en Venezuela."
                />
                <ProjectCard
                  image="/images/portadas/liasdesign.jpg"
                  title="Lias Design"
                  description="Página web de una agencia de diseño gráfico en Estados Unidos"
                />
                <ProjectCard
                  image="/images/portadas/lahuerfana.jpg"
                  title="Finca La Huérfana"
                  description="Página web de una poasada turística en ubicada en el Cobre estado Táchira"
                />
              </div>
            </div>
          </section>
    
          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-br from-[rgb(238,106,26)] via-[rgb(255,140,50)] to-[rgb(255,170,80)]">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">¿Quieres empezar tu proyecto?</h2>
                <p className="text-white mb-8">
                  Te ayudamos a llevar tu idea al siguiente nivel. Nuestro equipo está listo para trabajar contigo y crear soluciones digitales que marquen la diferencia.
                </p>
                <ContactForm />
                {/* <button className="px-8 py-3 bg-gradient-to-r from-white to-orange-50 text-[rgb(238,106,26)] font-semibold rounded-lg hover:opacity-90 transition duration-300">
                  Contactanos
                </button> */}
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
                {/* <div className="flex space-x-6">
                  <a href="#" className="hover:text-[rgb(238,106,26)]">Twitter</a>
                  <a href="#" className="hover:text-[rgb(238,106,26)]">LinkedIn</a>
                  <a href="#" className="hover:text-[rgb(238,106,26)]">GitHub</a>
                </div> */}
              </div>
              <div className="mt-8 text-center text-gray-400">
                © 2025 Gatwebs. Todos los derechos reservados.
              </div>
            </div>
          </footer>
        </div>
  );
}

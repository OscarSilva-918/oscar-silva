import { useState} from 'react';
import { Github, Linkedin,  MapPin, Terminal, Box, Truck, BarChart as ChartBar, Menu, X } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-slate-900">Oscar Silva</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition">Sobre mí</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition">Proyectos</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition">Servicios</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-2 bg-white shadow-lg">
            <a 
              href="#about" 
              className="block py-2 text-slate-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a 
              href="#projects" 
              className="block py-2 text-slate-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
            <a 
              href="#services" 
              className="block py-2 text-slate-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-slate-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      <AnimatedBackground />
        
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-8 animate-fade-in leading-tight">
              Desarrollo de Software 
             <br /> <span className="text-blue-400"> A Medida</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
              Especialista en soluciones tecnológicas avanzadas para empresas, 
              con enfoque en sistemas escalables y experiencia en e-commerce y 
              aplicaciones de logística.
            </p>
            <div className="mt-12 space-x-4 animate-fade-in-delay-2">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Contactar
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition"
              >
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>
        
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sobre mí</h2>
          <div className="flex gap-12 items-start">
            <div className="flex-1 transform hover:scale-105 transition duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Desarrollador Full Stack</h3>
              <p className="text-slate-600 mb-6">
              Con experiencia en el desarrollo de soluciones empresariales, me enfoco en crear sistemas eficientes y 
              escalables que optimizan procesos y mejoran la operatividad de las empresas. 
              Siempre estoy aprendiendo y mejorando mis habilidades para ofrecer soluciones tecnológicas de calidad.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/OscarSilva-918" className="text-slate-700 hover:text-blue-600 transition transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/oscar-silva-888bb0228/" className="text-slate-700 hover:text-blue-600 transition transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Truck className="text-blue-600 animate-float" size={32} />
                <h3 className="text-xl font-semibold">Sistema de Motomandados</h3>
              </div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Delivery System"
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <p className="text-slate-600 mb-4">
                Plataforma integral para gestión de envíos que incluye e-commerce, 
                tracking en tiempo real y sistema de presupuestos automáticos.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">React</li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">Node.js</li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">MongoDB</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <ChartBar className="text-blue-600 animate-float" size={32} />
                <h3 className="text-xl font-semibold">Dashboard Administrativo</h3>
              </div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Admin Dashboard"
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <p className="text-slate-600 mb-4">
                Panel de control para seguimiento de métricas, gestión de rutas
                y análisis de datos con integración de mapas en tiempo real.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">TypeScript</li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">React.js</li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <Terminal className="text-blue-600 mb-4 animate-float" size={32} />
              <h3 className="text-xl font-semibold mb-3">Desarrollo a Medida</h3>
              <p className="text-slate-600">
                Soluciones personalizadas para necesidades específicas de su empresa,
                con énfasis en la escalabilidad y mantenibilidad.
              </p>
            </div>
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <Box className="text-blue-600 mb-4 animate-float" size={32} />
              <h3 className="text-xl font-semibold mb-3">Arquitectura de Sistemas</h3>
              <p className="text-slate-600">
                Diseño de arquitecturas robustas y escalables para aplicaciones
                empresariales de alta complejidad.
              </p>
            </div>
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <MapPin className="text-blue-600 mb-4 animate-float" size={32} />
              <h3 className="text-xl font-semibold mb-3">Sistemas de Geolocalización</h3>
              <p className="text-slate-600">
                Implementación de soluciones basadas en ubicación para
                seguimiento y optimización de rutas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
      <ContactForm></ContactForm>
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
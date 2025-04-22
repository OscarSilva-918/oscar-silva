import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav: React.FC = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-slate-900">
              Oscar Silva
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Sobre mí
              </a>
              <a
                href="#projects"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Proyectos
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Servicios
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Contacto
              </a>
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
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
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
    )
}

export default Nav;
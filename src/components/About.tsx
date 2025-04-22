import { Github, Linkedin } from "lucide-react"
import foto from "../images/mi-foto.png";

const About: React.FC = ()=>{
    return(
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 transform hover:scale-105 transition duration-500">
              <img
                src={foto}
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">
                Desarrollador Full Stack
              </h3>
              <p className="text-slate-600 mb-6">
                <b>
                  Desarrollador Full Stack especializado en soluciones para
                  PyMEs.
                </b>
                <br />
                Me dedico a crear landing pages efectivas, automatizaciones
                útiles y aplicaciones simples pero potentes que ayudan a
                negocios locales a mejorar su presencia digital y optimizar
                tareas del día a día. Trabajo con tecnologías modernas
                (JavaScript, React, Node.js, MySQL) y siempre estoy aprendiendo
                para ofrecer soluciones que generen valor real.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/OscarSilva-918"
                  className="text-slate-700 hover:text-blue-600 transition transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oscar-silva-888bb0228/"
                  className="text-slate-700 hover:text-blue-600 transition transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default About
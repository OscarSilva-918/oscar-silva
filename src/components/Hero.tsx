import AnimatedBackground from "./AnimatedBackground"

const Hero: React.FC = ()=>{
    return(
        <header className="pt-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <AnimatedBackground />

        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in leading-tight">
              Páginas web, apps y automatizaciones para
              <br /> <span className="text-blue-400"> PyMEs locales.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl animate-fade-in-delay-1 leading-relaxed">
              <b>Diseño soluciones digitales simples, efectivas y a medida.</b>
              <br></br>
              Ayudo a emprendedores y pymes a mejorar su presencia online y
              ahorrar tiempo automatizando tareas repetitivas con tecnología
              moderna.
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
    )
}
export default Hero
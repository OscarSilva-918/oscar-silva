import { Box, MapPin, Terminal } from "lucide-react";

const Services: React.FC = ()=>{
    return(
        <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <Terminal
                className="text-blue-600 mb-4 animate-float"
                size={32}
              />
              <h3 className="text-xl font-semibold mb-3">
                Desarrollo a Medida
              </h3>
              <p className="text-slate-600">
                Soluciones personalizadas para necesidades específicas de su
                empresa, con énfasis en la escalabilidad y mantenibilidad.
              </p>
            </div>
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <Box className="text-blue-600 mb-4 animate-float" size={32} />
              <h3 className="text-xl font-semibold mb-3">
                Arquitectura de Sistemas
              </h3>
              <p className="text-slate-600">
                Diseño de arquitecturas robustas y escalables para aplicaciones
                empresariales de alta complejidad.
              </p>
            </div>
            <div className="p-6 hover:bg-slate-50 rounded-xl transition duration-300">
              <MapPin className="text-blue-600 mb-4 animate-float" size={32} />
              <h3 className="text-xl font-semibold mb-3">
                Sistemas de Geolocalización
              </h3>
              <p className="text-slate-600">
                Implementación de soluciones basadas en ubicación para
                seguimiento y optimización de rutas.
              </p>
            </div>
          </div>
        </div>
      </section>

    )
}
export default Services;
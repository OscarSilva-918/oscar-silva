import { ShoppingCart, Truck } from "lucide-react";

const Project:React.FC = ()=>{
    return(
        <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <ShoppingCart
                  className="text-blue-600 animate-float"
                  size={32}
                />
                <h3 className="text-xl font-semibold">Proyecto Ecommerce</h3>
              </div>
              <a href="https://misiomarket-app.vercel.app/">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://media.istockphoto.com/id/1428709516/es/foto/compras-en-l%C3%ADnea-mujer-mano-compras-en-l%C3%ADnea-en-computadora-port%C3%A1til-con-diagrama-de-icono.jpg?s=1024x1024&w=is&k=20&c=0tc26isn1iwBi9Iy3G1RulocAmCZ8dFFru8tisqE-yg="
                    alt="Ecommerce Store"
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
              </a>
              <p className="text-slate-600 mb-4">
                Plataforma ecommerce para la venta en línea con integración de
                pagos, gestión de inventarios y seguimiento de órdenes en tiempo
                real.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  React.js
                </li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  Node.js
                </li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  MongoDB
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Truck className="text-blue-600 animate-float" size={32} />
                <h3 className="text-xl font-semibold">
                  Sistema de Motomandados
                </h3>
              </div>
              <a href="https://dashboard-demo-1-0.vercel.app">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Delivery System"
                    className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
              </a>
              <p className="text-slate-600 mb-4">
                Plataforma integral para gestión de envíos que incluye
                e-commerce, tracking en tiempo real y sistema de presupuestos
                automáticos.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  React
                </li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  Node.js
                </li>
                <li className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                  MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Project;
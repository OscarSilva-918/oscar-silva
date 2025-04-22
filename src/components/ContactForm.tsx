import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { Mail } from 'lucide-react';
import Notify from './Notify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
    const notify = () => toast.success("¡El email fue enviado correctamente!", {
        position: 'bottom-right',
        autoClose: 1500
    });
    const notifyError = ()=> toast.error('¡Algo salió mal! ❌');
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
      .then(
        () => {
          console.log('SUCCESS!');
          notify()
        },
        (error) => {
          console.log('FAILED...', error.text);
          notifyError()
        },
      );
    }
    return (
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden text-white">
        <AnimatedBackground />
          <div className="container mx-auto px-6 relative z-10" >
            <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="text-blue-400" size={24} />
                <a href="mailto:contacto@ejemplo.com" className="hover:text-blue-400 transition">
                  devoscarsilva@gmail.com
                </a>
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500 transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          <Notify/>
        </section>
    )
}

export default ContactForm;
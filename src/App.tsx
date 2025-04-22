
import ContactForm from "./components/ContactForm";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

import Project from "./components/Project";
import Footer from "./components/Footer";

const App:React.FC = ()=> {

  return (
    <div className="min-h-screen bg-slate-50">
      <Nav/>
      <Hero/>
      <About/>
      <Project/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;

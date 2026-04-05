import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { ContactFooter } from "./components/ContactFooter";

function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white">
      <Navbar />
      <Hero />
      <Partners />
      <Process />
      <Services />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <ContactFooter />
    </main>
  );
}

export default App;

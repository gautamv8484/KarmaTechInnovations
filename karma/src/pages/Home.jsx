import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Stats from '../sections/Stats';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <TechStack />
      <Process />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;

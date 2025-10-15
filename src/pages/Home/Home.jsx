import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
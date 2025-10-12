function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4 animate-slideInLeft">
      <h3 className="text-3xl font-bold text-center mb-8 text-amber-800">About Us</h3>
      <div className="md:flex items-center gap-8">
        <img
          src="src/assets/interior.jpg"
          alt="Cafe Interior"
          className="rounded-xl shadow-lg md:w-1/2 mb-6 md:mb-0 animate-zoomIn"
        />
        <p className="text-lg md:w-1/2 leading-relaxed animate-slideInRight">
          Welcome to Cafe MeTime, a modern cafe serving freshly brewed coffee and artisan pastries. 
          Located in West Jakarta, we provide a cozy atmosphere for coffee lovers, remote workers, and casual meetups.
        </p>
      </div>
    </section>
  );
}
export default About;

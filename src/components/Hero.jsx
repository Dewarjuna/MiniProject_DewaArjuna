function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-[url('assets/kopi-bg.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
          Your Daily Dose of Coffee
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Modern cafe with cozy vibes in West Jakarta.
        </p>
        <a
          href="#menu"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition animate-bounceIn"
        >
          See Our Menu
        </a>
      </div>
    </section>
  );
}
export default Hero;

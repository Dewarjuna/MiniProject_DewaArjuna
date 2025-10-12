function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur shadow fixed w-full z-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-800">Cafe MeTime</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-amber-600">Home</a>
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#menu" className="hover:text-amber-600">Menu</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur shadow fixed w-full z-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-800">Cafe MeTime</h1>
        
        <div className="flex items-center gap-6">
          <nav className="space-x-6">
            <a href="#home" className="hover:text-amber-600">Home</a>
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#menu" className="hover:text-amber-600">Menu</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </nav>
          <button
            onClick={() => navigate("/register")}
            className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
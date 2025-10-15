import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur shadow fixed w-full z-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-800">Cafe MeTime</h1>
          <div className="hidden lg:flex items-center gap-6">
            <nav className="space-x-6">
              <a href="#home" className="hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#menu" className="hover:text-amber-600 transition-colors">
                Menu
              </a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">
                Contact
              </a>
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

          <button //responsive button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              //close
              <svg
                className="w-6 h-6 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // icon tiga garis
              <svg
                className="w-6 h-6 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div //responsive
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 pb-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-amber-50"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-amber-50"
            >
              About
            </a>
            <a
              href="#menu"
              onClick={closeMenu}
              className="hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-amber-50"
            >
              Menu
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-amber-50"
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  navigate("/register");
                  closeMenu();
                }}
                className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors w-full"
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
                className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors w-full"
              >
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
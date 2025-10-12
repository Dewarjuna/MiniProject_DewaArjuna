import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login.jsx'
import Home from './pages/Home.jsx'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;

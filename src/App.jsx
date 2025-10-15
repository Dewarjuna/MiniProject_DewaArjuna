import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Login"
import Home from "@/pages/Home/Home"
import Dashboard from "@/pages/Dashboard/Dashboard"

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

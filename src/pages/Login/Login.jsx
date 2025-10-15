import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // cek local
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const localUser = users.find(u => u.email === email && u.password === password);

    if (localUser) {
      // kalo ada local, login pake data lokal
      const userData = {
        id: localUser.id,
        name: localUser.name,
        email: localUser.email,
        token: localUser.token
      };
      
      login(localUser.token, userData);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);
      setLoading(false);
      return;
    }

    // local/reqres
    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        { email, password },
        { headers: { "x-api-key": "reqres-free-v1" } }
      );

      // Create/update user in localStorage
      let user = users.find(u => u.email === email);

      if (!user) {
        user = {
          id: Date.now().toString(),
          token: res.data.token,
          name: email.split('@')[0],
          email: email,
          password: password,
          createdAt: new Date().toISOString(),
          orders: [],
          reservations: []
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      }

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: res.data.token
      };

      login(res.data.token, userData);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);

    } catch (error) {
      console.error(error);
      setMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-amber-800 hover:text-amber-600 flex items-center gap-2"
      >
        ← Back to Home
      </button>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors disabled:bg-amber-300 font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p className={`text-sm mt-4 text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-amber-800 font-semibold hover:text-amber-600"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
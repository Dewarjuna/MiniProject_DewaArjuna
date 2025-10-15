/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        const res = await axios.post(
        "https://reqres.in/api/login",
        { email, password },
        { headers: { "x-api-key": "reqres-free-v1" } }
        );

        setMessage("Login successful! Redirecting...");
        // Navigate to dashboard after successful login
        setTimeout(() => navigate("/dashboard"), 1000);
    } catch {
      setMessage("Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Back to Home button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
      >
        ← Back to Home
      </button>

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p className={`text-sm mt-4 text-center ${message.includes("failed") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
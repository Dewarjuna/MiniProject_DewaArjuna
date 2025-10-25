import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/useLogin";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, message, handleLogin, setMessage } = useLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
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

        <form onSubmit={onSubmit}>
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
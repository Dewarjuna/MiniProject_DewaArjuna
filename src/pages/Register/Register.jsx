import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        setMessage("Email already registered! Please login.");
        setLoading(false);
        return;
      }

      const newUser = {// create user pake fake token
        id: Date.now().toString(),
        token: `local-token-${Date.now()}`, // generate token lokal
        name: name,
        email: email,
        password: password, // store pass di lokal
        createdAt: new Date().toISOString(),
        orders: [],
        reservations: []
      };

      // Save to users array
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Set current user session with token
      localStorage.setItem("token", newUser.token);
      localStorage.setItem("currentUser", JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        token: newUser.token
      }));

      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);
      
    } catch (error) {
      console.error(error);
      setMessage("Registration failed. Please try again.");
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
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">Sign Up</h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter any email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Min 6 characters"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors disabled:bg-amber-300 font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {message && (
            <p className={`text-sm mt-4 text-center ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-amber-800 font-semibold hover:text-amber-600"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
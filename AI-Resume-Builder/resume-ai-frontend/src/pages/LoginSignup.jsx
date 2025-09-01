import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const endpoint = activeTab === "login" ? "/auth/login" : "/auth/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      setMessage(
        activeTab === "login"
          ? "Login successful! Redirecting..."
          : "Signup successful! You can now login."
      );

      if (activeTab === "login") {
        // Save token or handle session
        localStorage.setItem("token", data.token || "dummy-token");
        setTimeout(() => navigate("/dashboard"), 1000);
      }
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-base-100 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-primary">
          {activeTab === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Tabs */}
        <div className="tabs tabs-boxed flex justify-center mb-4">
          <a
            className={`tab ${activeTab === "login" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </a>
          <a
            className={`tab ${activeTab === "signup" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </a>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {message && (
            <div
              className={`text-center text-sm ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

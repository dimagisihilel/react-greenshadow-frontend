import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        console.log("Logging in with:", email, password);
        alert("Login successful!");
        navigate("/dashboard");
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back!</h2>
            <h6 className="text-1xl text-center text-gray-800">Login to Access your Account</h6>
            <form onSubmit={handleLogin} className="mt-6">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    Login
                </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="/signup" className="text-green-600 hover:underline">
                    Sign Up
                </a>
            </p>
        </div>
    );
}

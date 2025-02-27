/*
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    function handleSignUp(e: React.FormEvent) {
        e.preventDefault();
        console.log("Signing up with:", email, password, role);
        alert("Sign Up successful!");
        navigate("/"); // Redirect to Login page
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
            <form onSubmit={handleSignUp} className="mt-6">
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
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-lg"
                >
                    <option value="" disabled>
                        Select Role
                    </option>
                    <option value="ADMINISTRATOR">Administrator</option>
                    <option value="SCIENTIST">Scientist</option>
                    <option value="MANAGER">Manager</option>
                    <option value="OTHER">Other</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="/" className="text-green-600 hover:underline">
                    Login
                </a>
            </p>
        </div>
    );
}
*/

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../reducers/AuthSlice"; // Adjust the path to your slice

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignUp(e: React.FormEvent) {
        e.preventDefault();
        console.log("Signing up with:", email, password, role);

        if (email && password && role) {
            // Dispatch register action with user details
            dispatch(registerUser({ email, password, role }));
            navigate("/"); // Redirect to Login page
        } else {
            alert("Please fill in all the fields!");
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
            <form onSubmit={handleSignUp} className="mt-6">
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
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-lg"
                >
                    <option value="" disabled>
                        Select Role
                    </option>
                    <option value="ADMINISTRATOR">Administrator</option>
                    <option value="SCIENTIST">Scientist</option>
                    <option value="MANAGER">Manager</option>
                    <option value="OTHER">Other</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="/" className="text-green-600 hover:underline">
                    Login
                </a>
            </p>
        </div>
    );
}

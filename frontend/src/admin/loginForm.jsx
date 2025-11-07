import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../store/adminLogin";

export default function Login() {
    const dispatch = useDispatch();

    const { loginLoading, error } = useSelector((state) => state.adminLogin);
    // Local component state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email,
            password,
        };
        dispatch(adminLogin(credentials));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">

            <div className="bg-gray-900/70 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
                <h1 className="text-3xl font-bold text-center text-white mb-6">
                    Admin Login
                </h1>

                {error && (
                    <p className="bg-red-500/20 text-red-400 text-center py-2 rounded-md mb-4">
                        {error || "error"}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loginLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-2 rounded-lg font-semibold disabled:opacity-50"
                    >
                        {loginLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

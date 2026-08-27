import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const userData = { username, email, password };

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();

        if (!response.ok) {
            setError(data.message);
            return;
        }

        console.log(data);
        ;
    };

    return (
        <>
            <div className="bg-gray-950 min-h-screen flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8">

                    <h1 className="text-3xl font-bold text-white text-center mb-2">
                        Create Account
                    </h1>
                    <p className="text-gray-400 text-center mb-8">
                        Join CineFiles and start building your collection.
                    </p>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Username
                            </label>
                            <input
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button
                            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-2"
                            type="submit">
                            Create Account
                        </button>
                        {error && (
                            <p className="text-amber-400 text-center mt-4">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register

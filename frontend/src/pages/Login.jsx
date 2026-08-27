import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
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

        localStorage.setItem('token', data.token);

        navigate('/favorites');

        console.log(data);
        ;
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-amber-500">
                        CineFiles
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Welcome back. Your movie collection awaits.
                    </p>
                </div>
                <form
                    className="bg-gray-900 border rounded-xl p-8 shadow-xl"
                    onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Login
                    </h2>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            className="w-full bg-gray-950 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 transition"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            className="w-full bg-gray-950 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 transition"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition duration-200"
                        type="submit">
                        Login
                    </button>
                    {error && (
                        <p className="text-amber-400 text-center mt-4">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Login;

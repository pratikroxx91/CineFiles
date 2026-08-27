import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
    }

    return (

        <nav className="bg-gray-950 border-b border-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    {/* Logo */}
                    <Link
                        to="/movies"
                        className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition">
                        CineFiles
                    </Link>


                    {/* Main Navigation */}
                    <div className="flex flex-wrap items-center gap-10 text-md font-medium">

                        <Link
                            to="/movies"
                            className="hover:text-amber-300 transition">
                            Movies
                        </Link>

                        <Link
                            to="/favorites"
                            className="hover:text-amber-300 transition">
                            Favorites
                        </Link>

                        <Link
                            to="/about"
                            className="hover:text-amber-300 transition">
                            About
                        </Link>

                    </div>


                    {/* Authentication */}
                    <div className="flex items-center gap-3">

                        {token ? (
                            <button className="px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500 hover:text-white transition" onClick={handleLogout}>Log Out</button>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className="px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500 hover:text-white transition">
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition">
                                    Register
                                </Link>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

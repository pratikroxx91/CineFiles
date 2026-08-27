import { useEffect, useState } from 'react';

const Movies = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [savedInFav, setSavedInFav] = useState([]);
    const [justSaved, setJustSaved] = useState(null);
    const [error, setError] = useState("");

    const token = localStorage.getItem("token");

    const handleSearch = async (e) => {
        e.preventDefault();

        setError("");

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}&s=${search}`
        );

        const data = await response.json();

        if (data.Response === "False") {
            setError(data.Error);
            setMovies([]);
        } else {
            setMovies(data.Search);
        }

    };

    const addToFavorites = async (movie) => {
        const favMovie = {
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            imdbID: movie.imdbID
        };

        const token = localStorage.getItem("token");

        await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(favMovie),
        });
        setSavedInFav(prev => [...prev, favMovie]);
        setJustSaved(movie.imdbID);
    };

    setTimeout(() => {
        setJustSaved(null);
    }, 700);

    const checkSavedMovies = async () => {
        if (!token) {
            return;
        }
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies`, {
            headers: {
                Authorization: token,
            }
        });
        const data = await response.json();
        setSavedInFav(data);
    };

    useEffect(() => {
        checkSavedMovies();
    }, []);


    return (
        <div className="min-h-screen bg-gray-950 text-white">

            {/* Search Section */}
            <section className="px-6 py-16 text-center">
                <p className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-3">
                    Discover your next movie
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Search Movies
                </h1>

                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                    Find movies, explore new favorites, and build your personal collection.
                </p>

                <form
                    onSubmit={handleSearch}
                    className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-3"
                >
                    <input
                        className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                        type="text"
                        placeholder="Enter movie title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        className="bg-amber-600 hover:bg-amber-700 px-7 py-3 rounded-lg font-semibold transition duration-200"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </section>


            {/* Movie Results */}
            <section className="px-6 pb-16 max-w-7xl mx-auto">

                {movies.length > 0 && (
                    <h2 className="text-2xl font-semibold mb-8">
                        Search Results
                    </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {movies.map((movie) => (

                        <div
                            key={movie.imdbID}
                            className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-2xl transition duration-300"
                        >

                            {/* Poster */}
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
                                    src={movie.Poster}
                                    alt={movie.Title}
                                />

                                {/* Year Badge */}
                                <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-gray-200">
                                    {movie.Year}
                                </span>
                            </div>


                            {/* Movie Information */}
                            <div className="p-5">

                                <h2 className="text-lg font-semibold truncate mb-4">
                                    {movie.Title}
                                </h2>
                                {token ? (
                                    savedInFav.some(fav => fav.imdbID === movie.imdbID) ? (
                                        <button
                                            disabled
                                            className={`w-full border border-gray-700 text-gray-500 py-2.5 rounded-lg font-medium cursor-not-allowed ${justSaved === movie.imdbID ? "animate-bounce" : ""
                                                }`}
                                        >
                                            {justSaved === movie.imdbID ? "✓ Saved!" : "✓ Already Saved"}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addToFavorites(movie)}
                                            className="w-full border border-amber-500 text-red-400 hover:bg-amber-600 hover:text-white py-2.5 rounded-lg font-medium transition duration-200"
                                        >
                                            + Add to Favorites
                                        </button>
                                    )

                                ) : (
                                    <button
                                        disabled
                                        className="w-full border border-gray-700 text-gray-500 py-2.5 rounded-lg font-medium cursor-not-allowed"
                                    >
                                        Login to Save
                                    </button>
                                )}

                            </div>

                        </div>
                    ))}

                </div>
                {error && (
                    <p className="text-amber-400 text-center mt-6">
                        {error}
                    </p>
                )}
            </section >

        </div >
    )
}

export default Movies;

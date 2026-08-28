import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies`, {
            headers: {
                Authorization: token,
            }
        });
        const data = await response.json();
        setFavorites(data);

    };

    useEffect(() => {
        fetchFavorites();
        if (!token) {
            navigate("/");
            return;
        }
    }, []);

    const deleteMovie = async (id) => {
        const token = localStorage.getItem('token');
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: token,
            }
        });
        setFavorites(favorites.filter(movie => movie._id !== id));
    };

    return (
        <>

            <div className="min-h-screen bg-gray-950 text-white">

                {/* Header */}
                <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">

                    <p className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-3">
                        Your Collection
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Favorites
                    </h1>

                    <p className="text-gray-400">
                        The movies you've decided are worth keeping.
                    </p>

                </section>


                {/* Favorites */}
                <section className="max-w-7xl mx-auto px-6 pb-16">

                    {favorites.length === 0 ? (

                        /* Empty State */
                        <div className="border border-gray-800 bg-gray-900 rounded-2xl p-12 text-center">

                            <div className="text-5xl mb-5">
                                🎬
                            </div>

                            <h2 className="text-2xl font-semibold mb-3">
                                Your collection is empty
                            </h2>

                            <p className="text-gray-400 max-w-md mx-auto">
                                You haven't added any favorites yet. Head over to the
                                Movies page and start building your collection.
                            </p>

                        </div>

                    ) : (

                        /* Movie Grid */
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                            {favorites.map((favorite) => (

                                <div
                                    key={favorite.imdbID}
                                    className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-lg transition duration-300"
                                >

                                    {/* Poster */}
                                    <div className="relative overflow-hidden">

                                        <img
                                            className="w-full h-84 object-cover group-hover:scale-105 transition duration-500"
                                            src={favorite.poster}
                                            alt={favorite.title}
                                        />

                                        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-gray-200">
                                            {favorite.year}
                                        </span>

                                    </div>


                                    {/* Movie Information */}
                                    <div className="p-5">

                                        <h2 className="text-lg font-semibold truncate mb-4">
                                            {favorite.title}
                                        </h2>

                                        <button
                                            onClick={() => deleteMovie(favorite._id)}
                                            className="w-full border border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400 py-2.5 rounded-lg font-medium transition duration-200"
                                        >
                                            Remove from Favorites
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

        </>
    )
}

export default Favorites;

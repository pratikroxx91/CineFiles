import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white">

            {/* Hero */}
            <section className="px-6 py-20 text-center">
                <p className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4">
                    About CineFiles
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Your Movies. Your Collection.
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    CineFiles is a personal movie library built for people who love
                    discovering movies and keeping track of the ones they want to watch.
                </p>
            </section>


            {/* About Content */}
            <section className="max-w-5xl mx-auto px-6 pb-20">

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            What is CineFiles?
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            CineFiles makes it easy to search for movies, discover
                            something new, and build your own personal collection.
                            Instead of keeping track of movies across different
                            platforms or lists, you can keep everything together
                            in one place.
                        </p>
                    </div>


                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Why CineFiles?
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Sometimes you find a movie you want to watch but forget
                            about it later. CineFiles is designed to make saving and
                            managing those discoveries simple, so your next movie
                            night is never too far away.
                        </p>
                    </div>

                </div>


                {/* Features */}
                <div className="mt-12">

                    <h2 className="text-2xl font-semibold text-center mb-8">
                        What You Can Do
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-2">
                                🎬 Discover Movies
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Search for movies and explore titles that catch your
                                attention.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-2">
                                ❤️ Build Your Collection
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Save movies to your personal collection and keep
                                track of the ones you want to watch.
                            </p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-2">
                                🔐 Your Personal Space
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Create an account and manage your own movie collection
                                in one place.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* Closing Section */}
            <section className="border-t border-gray-800 px-6 py-16 text-center">

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Find something worth watching.
                </h2>

                <p className="text-gray-400 max-w-xl mx-auto">
                    Search, save, and build a collection of movies you'll actually
                    want to watch.
                </p>

            </section>

        </div>
    )
}

export default About

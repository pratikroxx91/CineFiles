import Movie from "../models/Movie.js";

const getMovies = async (req, res) => {
    const movies = await Movie.find({ userID: req.user.id });
    res.json(movies);
};

const addMovie = async (req, res) => {
    const newMovie = new Movie({ ...req.body, userID: req.user.id });

    await newMovie.save();

    res.json({
        message: "Movies received"
    })
};

const deleteMovie = async (req, res) => {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted successfully" });
};

export default { getMovies, addMovie, deleteMovie };
import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    imdbID: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('Movie', moviesSchema);

export default Movie;
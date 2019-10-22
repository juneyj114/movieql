import fetch from 'node-fetch';
import axios from 'axios';
const API_URL = "https://yts.lt/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
    const {data:{data:{movies}}} = await axios.get(API_URL, {
        params: {
            minimum_rating: rating
        }
    });
    return movies;
}
    
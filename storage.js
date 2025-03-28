import AsyncStorage from '@react-native-async-storage/async-storage';

// Key to store favorite movies in AsyncStorage
const FAVORITES_KEY = 'favoriteMovies';

/**
 * Save a movie to the favorites list.
 * @param {Object} movie - The movie object to be saved.
 */
export const saveFavoriteMovie = async(movie) => {
    try {
        let favorites = await getFavoriteMovies();
        // Check if the movie already exists in favorites
        if (!favorites.some(item => item.imdbID === movie.imdbID)) {
            favorites.push(movie);
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        }
    } catch (error) {
        console.error('Error saving favorite movie:', error);
    }
};

/**
 * Get all favorite movies from AsyncStorage.
 * @returns {Promise<Array>} - A promise that resolves to an array of favorite movies.
 */
export const getFavoriteMovies = async() => {
    try {
        const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Error fetching favorite movies:', error);
        return [];
    }
};

/**
 * Remove a movie from the favorites list.
 * @param {string} imdbID - The IMDb ID of the movie to be removed.
 */
export const removeFavoriteMovie = async(imdbID) => {
    try {
        let favorites = await getFavoriteMovies();
        favorites = favorites.filter(movie => movie.imdbID !== imdbID);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
        console.error('Error removing favorite movie:', error);
    }
};

/**
 * Check if a movie is in the favorites list.
 * @param {string} imdbID - The IMDb ID of the movie to check.
 * @returns {Promise<boolean>} - A promise that resolves to true if the movie is a favorite, otherwise false.
 */
export const isMovieFavorite = async(imdbID) => {
    try {
        let favorites = await getFavoriteMovies();
        return favorites.some(movie => movie.imdbID === imdbID);
    } catch (error) {
        console.error('Error checking favorite movie:', error);
        return false;
    }
};
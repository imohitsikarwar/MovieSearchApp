import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavorite = async (movie) => {
  try {
    let favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
    favorites.push(movie);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

export const removeFavorite = async (movieId) => {
  try {
    let favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
    favorites = favorites.filter(movie => movie.imdbID !== movieId);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const isFavorite = async (movieId) => {
  try {
    let favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
    return favorites.some(movie => movie.imdbID === movieId);
  } catch (error) {
    console.error('Error checking favorite:', error);
    return false;
  }
};

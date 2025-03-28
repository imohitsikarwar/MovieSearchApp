import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { saveFavorite, removeFavorite, isFavorite } from './storage';

const API_KEY = '30e80708';

export default function DetailsScreen({ route }) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));

    isFavorite(movieId).then(setFavorite);
  }, [movieId]);

  if (!movie) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title} ({movie.Year})</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>IMDB Rating: {movie.imdbRating}</Text>
      <Button title={favorite ? 'Remove from Favorites' : 'Add to Favorites'} onPress={() => {
        if (favorite) {
          removeFavorite(movieId);
          setFavorite(false);
        } else {
          saveFavorite(movie);
          setFavorite(true);
        }
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#fff' },
  poster: { width: 200, height: 300, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
});import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { saveFavorite, removeFavorite, isFavorite } from './storage';

const API_KEY = '30e80708';

export default function DetailsScreen({ route }) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));

    isFavorite(movieId).then(setFavorite);
  }, [movieId]);

  if (!movie) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title} ({movie.Year})</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>IMDB Rating: {movie.imdbRating}</Text>
      <Button title={favorite ? 'Remove from Favorites' : 'Add to Favorites'} onPress={() => {
        if (favorite) {
          removeFavorite(movieId);
          setFavorite(false);
        } else {
          saveFavorite(movie);
          setFavorite(true);
        }
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#fff' },
  poster: { width: 200, height: 300, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
});

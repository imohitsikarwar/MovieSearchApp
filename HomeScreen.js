import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = '30e80708';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { movieId: item.imdbID })}>
            <View style={styles.movieItem}>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
              <Text style={styles.title}>{item.Title} ({item.Year})</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  input: { height: 40, borderBottomWidth: 1, marginBottom: 10 },
  movieItem: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  poster: { width: 50, height: 75, marginRight: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
});

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title} ({movie.Year})</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  poster: { width: 50, height: 75, marginRight: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
});

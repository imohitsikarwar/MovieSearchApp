import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_KEY = '30e80708';

export default function DetailsScreen({ route }) {
    const { movie } = route.params;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async() => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
                setDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, []);

    const saveToFavorites = async() => {
        try {
            await AsyncStorage.setItem(movie.imdbID, JSON.stringify(movie));
            alert('Added to Favorites!');
        } catch (error) {
            console.error('Error saving favorite', error);
        }
    };

    if (!details) return <Text > Loading... < /Text>;

    return ( <
        View style = { styles.container } >
        <
        Image source = {
            { uri: details.Poster } }
        style = { styles.poster }
        /> <
        Text style = { styles.title } > { details.Title }({ details.Year }) < /Text> <
        Text > Genre: { details.Genre } < /Text> <
        Text > IMDB Rating: { details.imdbRating } < /Text> <
        Button title = "Add to Favorites"
        onPress = { saveToFavorites }
        /> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', padding: 20 },
    poster: { width: 200, height: 300 },
    title: { fontWeight: 'bold', fontSize: 20, marginTop: 10 },
});
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = '30e80708';

export default function HomeScreen({ navigation }) {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchMovies = async(searchQuery, pageNum) => {
        if (!searchQuery) return;
        setLoading(true);

        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}&page=${pageNum}`
            );
            if (response.data.Search) {
                setMovies(pageNum === 1 ? response.data.Search : [...movies, ...response.data.Search]);
                setTotalResults(response.data.totalResults);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const handleSearch = (text) => {
        setQuery(text);
        setPage(1);
        fetchMovies(text, 1);
    };

    const loadMoreMovies = () => {
        if (movies.length < totalResults) {
            setPage(page + 1);
            fetchMovies(query, page + 1);
        }
    };

    useEffect(() => {
        if (query) fetchMovies(query, page);
    }, [page]);

    return ( <
        View style = { styles.container } >
        <
        TextInput style = { styles.searchBar }
        placeholder = "Search for a movie..."
        value = { query }
        onChangeText = { handleSearch }
        /> <
        FlatList data = { movies }
        keyExtractor = {
            (item) => item.imdbID }
        renderItem = {
            ({ item }) => < MovieCard movie = { item }
            navigation = { navigation }
            />}
            onEndReached = { loadMoreMovies }
            onEndReachedThreshold = { 0.5 }
            ListFooterComponent = { loading && < ActivityIndicator size = "large" / > }
            /> <
            /View>
        );
    }

    const styles = StyleSheet.create({
        container: { flex: 1, padding: 10 },
        searchBar: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 8,
        },
    });
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieCard({ movie, navigation }) {
    return ( <
        TouchableOpacity style = { styles.card }
        onPress = {
            () => navigation.navigate('Details', { movie })
        } >
        <
        Image source = {
            { uri: movie.Poster }
        }
        style = { styles.poster }
        /> <
        View style = { styles.info } >
        <
        Text style = { styles.title } > { movie.Title } < /Text> <
        Text > { movie.Year } < /Text> < /
        View > <
        /TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1 },
    poster: { width: 50, height: 75 },
    info: { marginLeft: 10 },
    title: { fontWeight: 'bold', fontSize: 16 },
});
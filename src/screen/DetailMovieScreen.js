import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView} from 'react-native'
import { useEffect } from 'react';
import { MovieExplanation } from '../components/MovieComponent';

const DetailMovieScreen = (props) => {
    const{route} = props;
    // const {title, year} = route.params;
    const movie = route.params.item;
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    // useEffect(() => {
    //     console.log(title);
    //     console.log(year);
    // }, []);
    return(
       <View style = {styles.mainContainer}>
        <ScrollView>
        <View style = {styles.movieContainer}> 
        <View style = {styles.middle}>
            <Image 
            style= {styles.image}
            source={{uri: movie.imageLink}}
            />
            </View>
            <View style = { styles.titleContainer}>
                <Text Style = {styles.title}>{movie.title}</Text>
            </View>

            <MovieExplanation
            name="year"
            value={movie.year}
            />
            <MovieExplanation
            name="cast"
            value={movie.starring}
            />
            <MovieExplanation
            name="description"
            value={movie.description}
            />
            <MovieExplanation
            name="viewers"
            value={numberWithCommas(movie.viewers)}
            />
            <MovieExplanation
            name="rating"
            isRating={true}
            rating={movie.rating}
            />

            </View>
            </ScrollView>
            </View>
    )
};

const styles = StyleSheet.create ({
    mainContainer: {
        flex: 1
    },
    movieContainer: {
        margin: 8,
        padding: 8
    },
    middle: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#ffbe7bff"
    },
    titleContainer: {
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fonstSize: 24,
        fontWeight: 'bold',
        padding: 8,
        backgroundColor: 'salmon',
        borderRadius: 10,
        color: 'white',
    }
});

export default DetailMovieScreen

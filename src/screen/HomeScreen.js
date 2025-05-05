import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {movieData} from '../../data/MovieData';
import { ShowMovie } from '../components/MovieComponent';
import { useEffect, useState } from 'react';
import { ButtonComponent } from '../components/ButtonComponent';



const HomeScreen = () => {
    const [recommended, setRecommended] = useState()
    const [mostViewed, setMostViewers] = useState()

    const compareRating = (a,b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    }

    const compareViewers = (a,b) => {
        const viewersA = a.viewers;
        const viewersB = b.viewers;

        if(viewersA > viewersB) {
            return -1;
        } else if (viewersA < viewersB) {
            return 1;
        } else { 
            return 0;
        }
    }
    useEffect(() => {
        const sortedRecommended = [...movieData].sort(compareRating);
        setRecommended(sortedRecommended);
    }, []);
    useEffect(() => {
        const sortedMostViewed = [...movieData].sort(compareViewers);
        setMostViewers(sortedMostViewed);
    }, []);
    return(
        <View style = {styles.mainContainer}>
            
            <FlatList
            data={recommended}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => {
                return (
                    <View style = {
                        styles.dataContainer
                    }>
                        <Image style={styles.movieImage}
                            source={{uri:item.imageLink}}
                        />
                        <View style = {styles.movieDescriptionContainer}>
                            <Text style = {
                                styles.title
                            }>{item.title}</Text>
                            <View style = {styles.yearContainer}>
                                <Text>{item.year}</Text>
                               {
                               item.rating === 5 ?
                                <Image 
                                style = {styles.star}
                                source={require('../../assets/images/images/five-stars.png')}
                                />
                                :item.rating === 4 ?
                                <Image 
                                style = {styles.star}
                                source={require('../../assets/images/images/four-stars.png')}
                                />
                                :item.rating === 3 ?
                                <Image 
                                style = {styles.star}
                                source={require('../../assets/images/images/three-stars.png')}
                                />
                                :item.rating === 2 ?
                                <Image 
                                style = {styles.star}
                                source={require('../../assets/images/images/two-stars.png')}
                                />
                                :item.rating === 1 ?
                                <Image 
                                style = {styles.star}
                                source={require('../../assets/images/images/star.png')}
                                />
                                :
                                null
                               }
                            </View>
                            <Text>{item.rating}</Text>
                        </View>
                        <View>
                        <ButtonComponent
                            onPress={() => NavigationActivation.navigate('DetailMovie')}
                        />
                    </View>
                    </View>

                )
            }}

        
            ListHeaderComponent={
                <View>
                    <View style = {styles.mainCategoryContainer}>
                        <View style = {styles.categoryContainer}>
                            <Text style = {styles.categoryText}>
                                Most Viewed
                            </Text>
                        </View>
                    </View>
                    <FlatList
                       data={mostViewed}
                       horizontal
                       contentContainerStyle={{padding:8}}
                      
                       keyExtractor={(item) => item.id}
                       renderItem={({item}) => {
                        return (
                            
                            <ShowMovie 
                    
                            image ={{uri:item.imageLink}}
                            title={item.title}
                            viewers={item.viewers}
                            />
                            
                        )
                    }}
                    />
                    <View style = {styles.mainCategoryContainer}>
                        <View style = {styles.categoryContainer}>
                            <Text style = {
                                styles.categoryText
                            }>
                                Recommended
                            </Text>
                        </View>
                        </View>
                
                </View>
            }
            ListFooterComponent={
                <Text>
                    
                </Text>
            }
            />
            


        </View>
            
        

    )

};

const styles =  StyleSheet.create ({
    flatListContainer: {
        padding: 8
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    dataContainer: {
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row'
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold'
    },
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    yearContainer: {

    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    star: {
        width : 100,
        height: 20
    }



});

export default HomeScreen;
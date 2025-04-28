import React, { Component } from 'react'
import { Text, View } from 'react-native'

const DetailMovieScreen = (props) => {
    const{route} = props;
    const movie = route.params.item;
    return(
        <View>
            <Text>Detail Movie</Text>
        </View>
    )
}


export default DetailMovieScreen

import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const ShowMovie = (props) => {
    const {image, title, viewers} = props;
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
   
    return(
        <View style = {
            styles.horizontalDataContainer
        }>
            <Image 
                style =  {styles.movieImage}
                source={image}
            />

            <View style = {
                styles.horizontalTitleContainer
            }>
                <Text style = {
                    styles.horizontalTitle
                }>
                    <Icon
                     name='title' type='material' size={10}
                    />
                    <View style = {
                        styles.viewersText
                    }>
                        <Text>{title}</Text>
                    </View>
                </Text>
            </View>
            <View style = {
                styles.viewersContainer
            }>
                <Icon
                     name='eye' type='entypo' size={10}
                    />
                <View style = {
                    styles.viewersText
                }>
                    <Text>{numberWithCommas(viewers)}</Text>
                </View>
            </View>           
        </View>

    )
};
export const MovieExplanation = (props) => {
    const {name, value, isRating, rating} = props;
    return(
        <View style = {styles.mainContainer}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.generalFontSize}>{name}</Text>
            </View>
            <Text style = {styles.generalFontSize}>: </Text>
            <View style= {styles.valueContainer}>
                {
                    isRating ?
                     rating === 5?
                     <Image
                     style = {styles.ratingImage}
                     source={require('../../assets/images/images/five-stars.png')}
                     />
                     :
                     rating === 4?
                     <Image
                     style = {styles.ratingImage}
                     source={require('../../assets/images/images/four-stars.png')}
                     />
                     : rating === 3?
                     <Image
                     style = {styles.ratingImage}
                     source={require('../../assets/images/images/three-stars.png')}
                     />
                     : rating === 2?
                     <Image
                     style = {styles.ratingImage}
                     source={require('../../assets/images/images/two-stars.png')}
                     />
                     :
                     <Image
                     style = {styles.ratingImage}
                     source={require('../../assets/images/images/star.png')}
                     />
                     :
                     <Text style = {styles.textValue}>{value}</Text>
                     
                }
            </View>
        </View>
    )

};
const styles = StyleSheet.create({
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16
    },
    horizontalTitleContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    horizontalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    viewersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewersText: {
        marginLeft: 8
    },
    mainContainer: {
        flexDirection: 'row',
        margin: 8
    },
    nameContainer: {
    flex: 0
    },
    generalFontSize: {
        fontSize: 16
    },
    valueContainer: {
        flex: 0
    },
    textValue: {
        textAlign: "justify",
        fontSize: 16
    },
    ratingImage: {
        width: 100,
        height: 20
    },
});
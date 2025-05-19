import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DetailMovieScreen from '../screen/DetailMovieScreen';
import MostViewedScreen from '../screen/MostViewedScreen';
const Stack = createStackNavigator();

const MainNavigator = () => {
        return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                />
                <Stack.Screen
                name="DetailMovie"
                component={DetailMovieScreen}/>
                <Stack.Screen
                name="MostViewed"
                component={MostViewedScreen}
                />
            </Stack.Navigator>

        </NavigationContainer>
        )
};

export default MainNavigator;

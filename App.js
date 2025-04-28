import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/HomeScreen';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
             <MainNavigator/>
        </SafeAreaProvider> 
    )
}

export default App;
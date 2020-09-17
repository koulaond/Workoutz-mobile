import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import exercisePresetsReducer from "./store/reducers/exercisePresets";
import exercisesReducer from "./store/reducers/exercises";
import dailyWorkoutsReducer from "./store/reducers/dailyWorkouts";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {AppLoading} from "expo";
import AppNavigator from "./navigation/AppNavigator";
import {enableScreens} from "react-native-screens";

enableScreens();

const rootReducer = combineReducers({
    exercisePresets: exercisePresetsReducer,
    exercises: exercisesReducer,
    dailyWorkouts: dailyWorkoutsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    }
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AppNavigator/>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

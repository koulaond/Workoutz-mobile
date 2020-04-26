import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import ListScreen from "../screens/ListScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import MainScreen from "../screens/MainScreen";

const AppNavigator = createStackNavigator({
    Main: MainScreen,
    List: ListScreen
});

export default createAppContainer(AppNavigator);
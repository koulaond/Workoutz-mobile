import React from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import DashboardScreen from "../screens/DashboardScreen";
import Colors from '../constants/colors'
import {createStackNavigator} from "react-navigation-stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderMenuButton from "../components/HeaderMenuButton";
import ExercisesScreen from "../screens/ExercisesScreen";
import ExerciseDetailScreen from "../screens/ExerciseDetailScreen";
import ExercisePresetsScreen from "../screens/ExercisePresetsScreen";
import ExercisePresetDetailScreen from "../screens/ExercisePresetDetailScreen";

const headerMenuButtonOptions = (title, navData) => {
    return <HeaderButtons HeaderButtonComponent={HeaderMenuButton}>
        <Item title={title}
              iconName='ios-menu'
              onPress={() => {
                  navData.navigation.toggleDrawer();
              }}/>
    </HeaderButtons>
}

let defaultStackNavOptions = {
    headerTitle: 'Default Header Title',
    headerStyle: { // style for header container
        backgroundColor: 'white'
    },
    headerTitleStyle: { // styling for header text
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: { // style for back button text
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: Colors.primaryColor
};

const DashboardNavigator = createStackNavigator({
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: (navData) => { // set navigation data as a function with expected navigation data argument
                return {
                    headerTitle: 'CURRENT PLAN',
                    headerLeft: headerMenuButtonOptions('Menu', navData) // hamburger menu

                };
            }
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const ExercisesNavigator = createStackNavigator({
        Exercises: {
            screen: ExercisesScreen,
            navigationOptions: (navData) => {
                return {
                    headerTitle: 'EXERCISES',
                    headerLeft: headerMenuButtonOptions('Menu', navData)
                };
            }
        },
        ExerciseDetail: {
            screen: ExerciseDetailScreen,
            navigationOptions: (navData) => {
                return {
                    headerLeft: headerMenuButtonOptions('Menu', navData)
                };
            }
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const ExercisePresetsNavigator = createStackNavigator(
    {
        ExercisePresets: {
            screen: ExercisePresetsScreen,
            navigationOptions: (navData) => {
                return {
                    headerTitle: 'EXERCISE PRESETS',
                    headerLeft: headerMenuButtonOptions("Menu", navData)
                };
            }
        },
        ExercisePresetDetail: {
            screen: ExercisePresetDetailScreen,
            navigationOptions: (navData) => {
                return {
                    headerLeft: headerMenuButtonOptions("Menu", navData)
                };
            }
        },
        ExerciseDetail: {
            screen: ExerciseDetailScreen,
            navigationOptions: (navData) => {
                return {
                    headerLeft: headerMenuButtonOptions("Menu", navData)
                };
            }
        }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const AppNavigator = createDrawerNavigator({
        Dashboard: {
            screen: DashboardNavigator,
            navigationOptions: {
                drawerLabel: "Dashboard"
            }
        },
        TrainingPlans: {
            screen: ExercisesScreen,
            navigationOptions: {
                drawerLabel: "Training Plans"
            }
        },
        DailyWorkouts: {
            screen: ExercisesScreen,
            navigationOptions: {
                drawerLabel: "Daily Workouts"
            }
        },
        ExercisePresets: {
            screen: ExercisePresetsNavigator,
            navigationOptions: {
                drawerLabel: "Exercise Presets"
            }
        },
        Exercises: {
            screen: ExercisesNavigator,
            navigationOptions: {
                drawerLabel: "Exercises"
            }
        }
    },
    {
        contentOptions: { // here it can be styled the content of the drawer menu
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }

        }
    });


export default createAppContainer(AppNavigator);
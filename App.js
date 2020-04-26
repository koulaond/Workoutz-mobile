import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import Colors from './constants/colors';
import AccountHeader from "./components/AccountHeader";
import CurrentPlanStatus from "./components/CurrentPlanStatus";
import ButtonField from "./components/field/ButtonField";
import LastWorkoutInfoField from "./components/field/specific/LastWorkoutInfoField";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
    return <AppNavigator/>;
}

const styles = StyleSheet.create({

});

// Dummy Data
const data = {
    userInfo: {
        userName: 'koulas.smoulas',
        firstName: 'Ondrej',
        lastName: 'Koula',
        details: {
            weight: {
                value: 80,
                unit: 'kg'
            },
            height: {
                value: 185,
                unit: 'cm'
            }
        }
    },
    currentPlanInfo: {
        id: '6n368n3k6hnn4kb',
        planName: "Bear Routine, 6 Weeks",
        weeksTotal: 6,
        weeksFinished: 3,
        workoutsTotal: 24,
        workoutsFinished: 14,
        daysPerWeek: 4,
        phasesTotal: 3,
        phasesFinished: 1
    },
    lastWorkoutInfo: {
        workoutId: 65356354534,
        date: 198784740,
        result: 'not_finished'
    }
};
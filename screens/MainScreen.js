import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import ButtonField from "../components/field/ButtonField";
import AccountHeader from "../components/AccountHeader";
import CurrentPlanStatus from "../components/CurrentPlanStatus";
import LastWorkoutInfoField from "../components/field/specific/LastWorkoutInfoField";
import Colors from "../constants/colors";

const MainScreen = props => {
    let lastWorkoutBtn = lastWorkoutInfo.result==='finished'
        ? <ButtonField style={styles.buttonSmall}><Text>RESULTS</Text></ButtonField>
        : <ButtonField style={styles.buttonSmall}><Text>REPEAT</Text></ButtonField>
    return (
        <SafeAreaView style={styles.outerContainer}>
            <ScrollView>
                <View style={styles.componentsContainer}>
                    <AccountHeader {...userInfo}/>
                    <CurrentPlanStatus data={currentPlanStatus} style={styles.currentPlanStatus}/>
                    <View style={styles.buttonsContainer}>
                        <ButtonField style={styles.button}><Text>CONTINUE</Text></ButtonField>
                        <ButtonField style={styles.button}><Text>EXPLORE PLAN</Text></ButtonField>
                        <ButtonField style={styles.button}><Text>PLAN STRUCTURE</Text></ButtonField>
                        <ButtonField style={styles.button}><Text>PROGRESS DETAILS</Text></ButtonField>
                    </View>
                </View>
                <View style={styles.resultsRow}>
                    <LastWorkoutInfoField
                        label='LAST WORKOUT'
                        style={styles.lastTrainingBar}
                        time={198784740}
                        complete={lastWorkoutInfo.result==='finished'}
                    />
                    {lastWorkoutBtn}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    componentsContainer: {
        alignItems: 'center'
    },
    buttonsContainer: {},
    button: {
        marginVertical: 10
    },
    buttonSmall: {
        width: Dimensions.get('window').width / 4
    },
    lastTrainingBar: {
        marginTop: 25

    },
    currentPlanStatus: {
        width: '100%'
    },
    resultsRow: {
        marginVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default MainScreen;
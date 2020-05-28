import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import TextField from "./field/TextField";
import TextFieldLight from "./field/TextFieldLight";
import CustomizedProgressBar from "./field/CustomizedProgressBar";
import ProgressBarField from "./field/ProgressBarField";

const CurrentPlanStatus = props => {
    const {planName, workoutsTotal, workoutsFinished} = props.data;
    const progressPerc = workoutsFinished / workoutsTotal;
    return (
        <View style={{...styles.component, ...props.style}}>
            <View style={styles.labelContainer}>
                <TextField style={{fontSize: 28}}>CURRENT PLAN</TextField>
                <TextField>{planName}</TextField>
            </View>
            <View style={styles.progressBarContainer}>
                <ProgressBarField
                    label='TOTAL PROGRESS'
                    value={workoutsFinished}
                    valueMax={workoutsTotal}
                    heightPercentage={2}
                    showRatio={false}
                />
            </View>
            <View style={styles.percentageContainer}>
                <TextFieldLight style={{fontSize: 80}}>{Math.round(progressPerc * 100)}%</TextFieldLight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    component: {
        marginHorizontal: 8,
        marginVertical: 10,
        alignItems: 'center'
    },
    progressBarContainer: {
        width: '80%',
        marginTop: 25,
    },
    progressLabel: {
        fontSize: 14
    },
    percentageContainer: {
        marginTop: 5
    },
    text: {
        color: Colors.gray100
    }
});

export default CurrentPlanStatus;
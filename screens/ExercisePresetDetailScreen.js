import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {EXERCISE_PRESETS} from "../data/dummy-data";
import Colors from '../constants/colors';
import TextField from "../components/field/TextField";
import LabeledTable from "../components/LabeledTable";

const ExercisePresetDetailScreen = props => {
    const exercisePresetId = props.navigation.getParam('exercisePresetId');
    const exercisePreset = EXERCISE_PRESETS.find(ex => ex.id === exercisePresetId);
    let PresetDetails;

    if (exercisePreset.presetType === 'STANDARD_SET') {
        PresetDetails = <StandardSetDetails data={exercisePreset} navigation={props.navigation}/>;
    } else if (exercisePreset.presetType === 'SUPER_SET') {
        PresetDetails = <SuperSetDetails data={exercisePreset} navigation={props.navigation}/>;
    }
    return (
        <View style={styles.component}>
            <View>
                <TextField style={styles.label}>{exercisePreset.label}</TextField>
            </View>
            <View>
                <TextField>DESCRIPTION</TextField>
                <TextField numberOfLines={-1}>{exercisePreset.description}</TextField>
            </View>
            <View>
                <TextField>DIFFICULTY: {exercisePreset.difficulty}</TextField>
            </View>
            <View>
                {PresetDetails}
            </View>
            <View>
                <View>
                    <TextField>INCLUDED IN</TextField>
                    <View style={{flexDirection: 'row'}}>
                        <TextField>3 trainings</TextField>
                        <TouchableOpacity>
                            <View>
                                <TextField>VIEW</TextField>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextField>8 daily workouts</TextField>
                        <TouchableOpacity>
                            <View>
                                <TextField>VIEW</TextField>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

ExercisePresetDetailScreen.navigationOptions = (navigationData) => {
    const exercisePresetId = navigationData.navigation.getParam('exercisePresetId');
    const exercisePreset = EXERCISE_PRESETS.find(ex => ex.id === exercisePresetId);
    return {
        headerTitle: exercisePreset.label
    };
};

const StandardSetDetails = props => {
    const exercisePreset = props.data;
    const {exercise, series} = exercisePreset;
    const repsText = exercisePreset.repsPerSeries.join(', ');

    return (
        <View>
            <ExerciseClickableDetail exercise={exercise} navigation={props.navigation}/>
            <View>
                <View>
                    <TextField>SERIES AND REPETITIONS</TextField>
                </View>
                <View>
                    <TextField>{series} series about {repsText} repetitions.</TextField>
                </View>
            </View>
        </View>
    );
}

const SuperSetDetails = props => {
    const exercisePreset = props.data;
    const {exercises, series, repsPerSeries} = exercisePreset;

    const seriesTableHeadArray = [];

    for (let i = 1; i <= series; i++) {
        seriesTableHeadArray.push('S' + i);
    }

    const exerciseDetailsRows = exercises.map((ex, index) => {
        return <ExerciseClickableDetail key={index} exercise={ex} index={index + 1} navigation={props.navigation}/>;
    });

    return (
        <View>
            <View>
                <TextField>EXERCISES</TextField>
                {exerciseDetailsRows}
            </View>
            <View>
                <TextField>SERIES AND REPETITIONS</TextField>
               <LabeledTable
                   topLeftCellLabel="Exercises"
                   labelCol={exercises.map(ex => ex.name)}
                   labelRow={seriesTableHeadArray}
                   data={repsPerSeries}/>
            </View>
        </View>
    );
}

const ExerciseClickableDetail = props => {
    const exercise = props.exercise;
    let index = null;
    if (props.index >= 1) {
        index = <TextField>{props.index}</TextField>
    }
    return (
        <View style={{flexDirection: 'row'}}>
            {index}
            <TextField>{exercise.name}</TextField>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(
                    {
                        routeName: 'ExerciseDetail',
                        params: {
                            exerciseId: exercise.id
                        }
                    }
                );
            }}>
                <View>
                    <TextField>VIEW DETAILS</TextField>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        backgroundColor: Colors.primary900,
        flex: 1,
    },
    label: {
        fontSize: 30
    },
    tableContainerStyle: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        marginHorizontal: 15
    },
    tableTextStyle: { color: 'white'},
    singleHead: { width: 80, height: 40, backgroundColor: 'white' },


});

export default ExercisePresetDetailScreen;
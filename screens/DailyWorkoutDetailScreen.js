import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import DetailContainer from "../components/container/DetailContainer";
import TextFieldLight from "../components/field/TextFieldLight";
import DetailContainerSection from "../components/container/DetailContainerSection";
import TextField from "../components/field/TextField";
import IncludeIn from "../components/IncludeIn";
import LabeledTable from "../components/LabeledTable";
import Colors from "../constants/colors";
import {useSelector, useStore} from "react-redux";
import {changeActualPreset} from "../store/actions/exercisePresets";

const navigateToExercisePreset = (navigation, presetId, store) => {
    store.dispatch(changeActualPreset(presetId));
    let label = store.getState().exercisePresets.actualExercisePreset.label;
    navigation.navigate(
        {
            routeName: 'ExercisePresetDetail',
            params: {
                exercisePresetLabel: label
            }
        }
    );
}

const createClickableDetail = (presetId, navigation, store) => {
    return <TouchableOpacity onPress={() => navigateToExercisePreset(navigation, presetId, store)}>
        <View>
            <TextField style={{textAlign: 'center'}}>VIEW</TextField>
        </View>
    </TouchableOpacity>
};

const DailyWorkoutDetailScreen = props => {
    const store = useStore();
    const workout = useSelector(state => state.dailyWorkouts.actualDailyWorkout);
    const exercisePresets = useSelector(state => state.exercisePresets.allExercisePresets);

    const exercisePresetsDetailCols = workout.exerciseUnits
        .map(exUnit => exercisePresets.find(preset => preset.id === exUnit.exercisePresetId))
        .map((preset) => {
            return <TextField style={{color: Colors.primary900, textAlign: 'center'}}
                              key={preset.id}>{preset.label}</TextField>
        });


    const detailsButtons = workout.exerciseUnits.map(unit => {
        return [createClickableDetail(unit.exercisePresetId, props.navigation, store)];
    })

    return (
        <DetailContainer>
            <View>
                <TextFieldLight style={styles.label}>{workout.name}</TextFieldLight>
            </View>
            <DetailContainerSection label="Description">
                <TextField numberOfLines={-1}>{workout.description}</TextField>
            </DetailContainerSection>
            <DetailContainerSection label="Additional Note">
                <TextField numberOfLines={-1}>{workout.note}</TextField>
            </DetailContainerSection>
            <DetailContainerSection label="Schema">
                <LabeledTable
                    topLeftCellLabel="EXERCISE PRESETS"
                    labelCol={exercisePresetsDetailCols}
                    labelRow={['DETAILS']}
                    data={detailsButtons}
                    width={300}
                    labelColWidth={210}
                />
            </DetailContainerSection>
            <DetailContainerSection label="Included In">
                <IncludeIn value={3} label="training" viewMethood={() => {
                }}/>
            </DetailContainerSection>
        </DetailContainer>

    );
};

DailyWorkoutDetailScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.getParam('workoutLabel')
    };
};

const styles = StyleSheet.create({
    label: {
        fontSize: 42
    },
});

export default DailyWorkoutDetailScreen;
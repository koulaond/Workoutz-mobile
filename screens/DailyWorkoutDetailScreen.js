import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DAILY_WORKOUTS, EXERCISE_PRESETS} from "../data/dummy-data";
import DetailContainer from "../components/container/DetailContainer";
import TextFieldLight from "../components/field/TextFieldLight";
import DetailContainerSection from "../components/container/DetailContainerSection";
import TextField from "../components/field/TextField";
import IncludeIn from "../components/IncludeIn";
import LabeledTable from "../components/LabeledTable";
import Colors from "../constants/colors";

const navigateToExercisePreset = (navigation, exercisePresetId) => {
    navigation.navigate(
        {
            routeName: 'ExercisePresetDetail',
            params: {
                exercisePresetId: exercisePresetId
            }
        }
    );
}

const createClickableDetail = (id, navigation) => {
    return <TouchableOpacity onPress={() => navigateToExercisePreset(navigation, id)}>
        <View>
            <TextField style={{textAlign: 'center'}}>VIEW</TextField>
        </View>
    </TouchableOpacity>
};

const DailyWorkoutDetailScreen = props => {
    const workoutId = props.navigation.getParam('workoutId');
    const workout = DAILY_WORKOUTS.find(wo => wo.id === workoutId);

    const exercisePresetsDetailCols = workout.exerciseUnits
        .map(exUnit => EXERCISE_PRESETS.find(preset => preset.id === exUnit.exercisePresetId))
        .map((preset) => {
            return <TextField style={{color: Colors.primary900, textAlign: 'center'}}
                              key={preset.id}>{preset.label}</TextField>
        });


    const detailsButtons = workout.exerciseUnits.map(exUnit => {
        return [createClickableDetail(exUnit.exercisePresetId, props.navigation)];
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
    const workoutId = navigationData.navigation.getParam('workoutId');
    const workout = DAILY_WORKOUTS.find(wo => wo.id === workoutId);
    return {
        headerTitle: workout.name
    };
};

const styles = StyleSheet.create({
    label: {
        fontSize: 42
    },
});

export default DailyWorkoutDetailScreen;
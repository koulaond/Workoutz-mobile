import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {EXERCISE_PRESETS, EXERCISES} from "../data/dummy-data";
import Colors from '../constants/colors';
import TextField from "../components/field/TextField";
import LabeledTable from "../components/LabeledTable";
import TextFieldLight from "../components/field/TextFieldLight";
import DetailContainer from "../components/container/DetailContainer";
import DetailContainerSection from "../components/container/DetailContainerSection";
import UnderlinedLabeledField from "../components/field/UnderlinedLabeledField";
import CircleSchemaSetContainer from "../components/container/CircleSchemaSetContainer";

const navigateToExercise = (navigation, exerciseId) => {
    navigation.navigate(
        {
            routeName: 'ExerciseDetail',
            params: {
                exerciseId: exerciseId
            }
        }
    );
}

const generateOrderedLabelsArray = num => {
    let labelsArray = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) labelsArray.push(i + 'st');
        else if (i === 2) labelsArray.push(i + 'nd');
        else if (i === 3) labelsArray.push(i + 'rd');
        else labelsArray.push(i + 'th');
    }
    return labelsArray;
};

const createClickableDetail = (id, navigation) => {
    return <TouchableOpacity onPress={() => navigateToExercise(navigation, id)}>
        <View>
            <TextField style={{textAlign: 'center'}}>VIEW</TextField>
        </View>
    </TouchableOpacity>
};

const ExercisePresetDetailScreen = props => {
    const exercisePresetId = props.navigation.getParam('exercisePresetId');
    const exercisePreset = EXERCISE_PRESETS.find(ex => ex.id === exercisePresetId);
    let PresetDetails;

    if (exercisePreset.presetType === 'STANDARD_SET') {
        PresetDetails = <StandardSetDetails data={exercisePreset} navigation={props.navigation}/>;
    } else if (exercisePreset.presetType === 'SUPER_SET') {
        PresetDetails = <SuperSetDetails data={exercisePreset} navigation={props.navigation}/>;
    } else if (exercisePreset.presetType === 'CIRCLE') {
        PresetDetails = <CircleDetails data={exercisePreset} navigation={props.navigation}/>
    }
    return (
        <DetailContainer>
            <View>
                <TextFieldLight numberOfLines={-1} style={styles.label}>{exercisePreset.label}</TextFieldLight>
            </View>
            <DetailContainerSection label="Description">
                <TextField numberOfLines={-1} style={{flex: 1}}>{exercisePreset.description}</TextField>
            </DetailContainerSection>
            {PresetDetails}
            <DetailContainerSection label="Included In">
                <View style={styles.includedInComponent}>
                    <TextField>3 trainings</TextField>
                    <TouchableOpacity>
                        <View>
                            <TextField>VIEW</TextField>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.includedInComponent}>
                    <TextField>8 daily workouts</TextField>
                    <TouchableOpacity>
                        <View>
                            <TextField>VIEW</TextField>
                        </View>
                    </TouchableOpacity>
                </View>
            </DetailContainerSection>
        </DetailContainer>
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
    const {exerciseId, series} = exercisePreset;
    const seriesTableLabels = generateOrderedLabelsArray(series);

    const exercise = EXERCISES.find(ex => ex.id === exerciseId);

    return (
        <View style={{alignItems: 'center'}}>
            <DetailContainerSection label="Exercise">
                <LabeledTable
                    topLeftCellLabel="EXERCISE"
                    labelCol={[exercise.name]}
                    labelRow={['DETAILS']}
                    data={[[createClickableDetail(exercise.id, props.navigation)]]}
                    width={200}
                    labelColWidth={100}
                />
            </DetailContainerSection>
            <DetailContainerSection label="Series and Repetitions">
                <LabeledTable
                    topLeftCellLabel="SERIES NO."
                    labelRow={['REPS']}
                    labelCol={seriesTableLabels}
                    data={exercisePreset.repsPerSeries.map(rep => [rep])}
                    width={200}
                    labelColWidth={100}
                />
            </DetailContainerSection>
        </View>
    );
}

const SuperSetDetails = props => {
    const exercisePreset = props.data;
    const {exerciseIds, series, repsPerSeries} = exercisePreset;

    const exercises = exerciseIds.map(id => EXERCISES.find(exercise => exercise.id === id));
    const seriesTableHeadArray = [];

    for (let i = 1; i <= series; i++) {
        seriesTableHeadArray.push('S' + i);
    }

    const exerciseDetailsCols = exercises.map((ex, index) => {
        return <TextField style={{color: Colors.primary900, textAlign: 'center'}} key={ex}>{ex.name}</TextField>
    });

    const detailsButtons = exercises.map(ex => {
        return [createClickableDetail(ex.id, props.navigation)];
    })

    return (
        <View style={{alignItems: 'center'}}>
            <DetailContainerSection label="Exercises">
                <LabeledTable
                    topLeftCellLabel="EXERCISES"
                    labelCol={exerciseDetailsCols}
                    labelRow={['DETAILS']}
                    data={detailsButtons}
                    width={200}
                    labelColWidth={100}
                />
            </DetailContainerSection>
            <DetailContainerSection label="Series and Repetitions">
                <LabeledTable
                    topLeftCellLabel="EXERCISES"
                    labelCol={exercises.map(ex => {
                        return <ColumnClickableLabelCell exercise={ex} navigation={props.navigation}/>;
                    })}
                    labelRow={seriesTableHeadArray}
                    data={repsPerSeries}/>
            </DetailContainerSection>
        </View>
    );
}

const CircleDetails = props => {
    const {data, navigation} = props;
    const {cycles, sets, timePrepare, timeWork, timeRest, timeBetweenSets, timeCoolDown, schema} = data;
    const setContainers = schema.map((set, index) => {
        return <CircleSchemaSetContainer timeWork={timeWork}
                                         key={index}
                                         timeRest={timeRest}
                                         exerciseIds={schema[index]}
                                         setNumber={index + 1}
                                         navigation={navigation}

        />
    });
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <DetailContainerSection label="BASIC INFO">
                <UnderlinedLabeledField label="CYCLES" value={cycles}/>
                <UnderlinedLabeledField label="SETS" value={sets}/>
                <UnderlinedLabeledField label="PREPARE TIME" value={timePrepare + ' sec'}/>
                <UnderlinedLabeledField label="WORK TIME" value={timeWork + ' sec'}/>
                <UnderlinedLabeledField label="REST TIME" value={timeRest + ' sec'}/>
                <UnderlinedLabeledField label="REST BETWEEN SETS" value={timeBetweenSets + ' sec'}/>
                <UnderlinedLabeledField label="COOL DOWN" value={timeCoolDown + ' sec'}/>
            </DetailContainerSection>

            <DetailContainerSection label="SCHEMA">
                <View style={{flexDirection: 'row'}}>
                    {setContainers}
                </View>
            </DetailContainerSection>
        </View>
    );
};

const ColumnClickableLabelCell = props => {
    const {exercise, navigation} = props;
    return (
        <View>
            <TouchableOpacity onPress={() => navigateToExercise(navigation, exercise.id)}>
                <TextField style={{color: Colors.primary900, textAlign: 'center'}}>{exercise.name}</TextField>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    label: {
        fontSize: 42,
        textAlign: 'center'
    },
    exerciseClickableDetailPart: {
        marginHorizontal: 20
    },
    includedInComponent: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    }
});

export default ExercisePresetDetailScreen;
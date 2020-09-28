import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import TextField from "../components/field/TextField";
import LabeledTable from "../components/LabeledTable";
import TextFieldLight from "../components/field/TextFieldLight";
import DetailContainer from "../components/container/DetailContainer";
import DetailContainerSection from "../components/container/DetailContainerSection";
import UnderlinedLabeledField from "../components/field/UnderlinedLabeledField";
import CircleSchemaSetContainer from "../components/container/CircleSchemaSetContainer";
import IncludeIn from "../components/IncludeIn";
import PresetType from "../model/PresetType";
import {useSelector, useStore} from "react-redux";
import {changeActualExercise} from "../store/actions/exercises";

const navigateToExercise = (navigation, exercise, store) => {
    store.dispatch(changeActualExercise(exercise.id));
    navigation.navigate(
        {
            routeName: 'ExerciseDetail',
            params: {
                exerciseLabel: exercise.label
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

const createClickableDetail = (exercise, navigation, store) => {
    return <TouchableOpacity onPress={() => navigateToExercise(navigation, exercise, store)}>
        <View>
            <TextField style={{textAlign: 'center'}}>VIEW</TextField>
        </View>
    </TouchableOpacity>
};

const ExercisePresetDetailScreen = props => {
    const store = useStore();
    const exercisePreset = useSelector(state => state.exercisePresets.actualExercisePreset);
    let PresetDetails;

    if (exercisePreset.presetType === PresetType.STANDARD_SET) {
        PresetDetails = <StandardSetDetails data={exercisePreset} navigation={props.navigation} store={store}/>;
    } else if (exercisePreset.presetType ===PresetType.SUPER_SET) {
        PresetDetails = <SuperSetDetails data={exercisePreset} navigation={props.navigation} store={store}/>;
    } else if (exercisePreset.presetType === PresetType.CIRCLE) {
        PresetDetails = <CircleDetails data={exercisePreset} navigation={props.navigation} store={store}/>
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
               <IncludeIn value={3} label="training" viewMethod={() => {}}/>
               <IncludeIn value={8} label="daily workout" viewMethod={() => {}}/>
            </DetailContainerSection>
        </DetailContainer>
    );
};

ExercisePresetDetailScreen.navigationOptions = (navigationData) => {
    const exercisePresetLabel = navigationData.navigation.getParam('exercisePresetLabel');
    return {
        headerTitle: exercisePresetLabel
    };
};

const StandardSetDetails = props => {
    const exercisePreset = props.data;
    const {exerciseId, series} = exercisePreset;
    const seriesTableLabels = generateOrderedLabelsArray(series);
    const state = props.store.getState();

    const exercise = state.exercises.allExercises.find(ex => ex.id === exerciseId);

    return (
        <View style={{alignItems: 'center'}}>
            <DetailContainerSection label="Exercise">
                <LabeledTable
                    topLeftCellLabel="EXERCISE"
                    labelCol={[exercise.name]}
                    labelRow={['DETAILS']}
                    data={[[createClickableDetail(exercise, props.navigation, props.store)]]}
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
    const state = props.store.getState();

    const exercises = exerciseIds.map(id => state.exercises.allExercises.find(exercise => exercise.id === id));
    const seriesTableHeadArray = [];

    for (let i = 1; i <= series; i++) {
        seriesTableHeadArray.push('S' + i);
    }

    const exerciseDetailsCols = exercises.map((ex, index) => {
        return <TextField style={{color: Colors.primary900, textAlign: 'center'}} key={ex}>{ex.name}</TextField>
    });

    const detailsButtons = exercises.map(ex => {
        return [createClickableDetail(ex, props.navigation, props.store)];
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
                        return <ColumnClickableLabelCell exercise={ex} navigation={props.navigation} store={props.store}/>;
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
            <TouchableOpacity onPress={() => navigateToExercise(navigation, exercise, props.store)}>
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
    }
});

export default ExercisePresetDetailScreen;
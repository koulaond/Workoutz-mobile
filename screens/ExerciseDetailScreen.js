import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {EXERCISES} from "../data/dummy-data";
import Colors from '../constants/colors';
import TextField from "../components/field/TextField";
import TextFieldLight from "../components/field/TextFieldLight";
import TagInput from 'react-native-tags-input';
import DetailContainer from "../components/container/DetailContainer";
import DetailContainerSection from "../components/container/DetailContainerSection";
import IncludeIn from "../components/IncludeIn";
import {useSelector} from "react-redux";


const ExerciseDetailScreen = props => {
    const exercise = useSelector(state => state.exercises.actualExercise);

    const allMuscles = exercise.muscles.map(muscle => muscle.muscleName);

    return (
        <DetailContainer>
            <View>
                <TextFieldLight style={styles.label}>{exercise.name}</TextFieldLight>
                <View style={{marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextField>{exercise.exerciseType.name.toUpperCase()}</TextField>
                    <TextField>{exercise.difficulty.toUpperCase()}</TextField>
                </View>
            </View>
            <DetailContainerSection label="Description">
                <TextField numberOfLines={-1} >{exercise.description}</TextField>
            </DetailContainerSection>
            <DetailContainerSection label="Muscles Included">
                <TagInput
                    disabled={true}
                    tags={{
                        tag: "",
                        tagsArray: allMuscles
                    }}
                    containerStyle={{justifyContent: 'center', flexDirection: 'row'}}
                    deleteIconStyles={{display: 'none'}}
                    inputContainerStyle={{display: 'none'}}
                    tagsViewStyle={{alignItems: 'center'}}
                />
            </DetailContainerSection>
            <DetailContainerSection label="Instructions">
                <TextField>{exercise.instructions}</TextField>
            </DetailContainerSection>
            <DetailContainerSection label="Included In">
                <IncludeIn value={3} label="training" viewMethood={() => {}}/>
                <IncludeIn value={8} label="daily workout" viewMethood={() => {}}/>
                <IncludeIn value={6} label="exercise presets" viewMethood={() => {}}/>
            </DetailContainerSection>
        </DetailContainer>
    );
};

ExerciseDetailScreen.navigationOptions = (navigationData) => {
    const exerciseLabel = navigationData.navigation.getParam('exerciseLabel');
    return {
        headerTitle: exerciseLabel
    };
};

const styles = StyleSheet.create({
    label: {
        fontSize: 42
    },
    subLabel: {
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    muscleText: {
        color: Colors.primary900,
        flex: 1,
        marginHorizontal: 8,
        height: 20,
    },
    muscleTextContainer: {
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 4
    }
});

export default ExerciseDetailScreen;
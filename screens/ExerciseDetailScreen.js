import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {EXERCISES} from "../data/dummy-data";
import Colors from '../constants/colors';
import TextField from "../components/field/TextField";
import TextFieldLight from "../components/field/TextFieldLight";
import TagInput from 'react-native-tags-input';
import DetailContainer from "../components/container/DetailContainer";


const ExerciseDetailScreen = props => {
    const exerciseId = props.navigation.getParam('exerciseId');
    const exercise = EXERCISES.find(ex => ex.id === exerciseId);

    const allMuscles = exercise.muscles.map(muscle => muscle.muscleName);

    return (
        <DetailContainer>
                <View>
                    <TextFieldLight style={styles.label}>{exercise.name.toUpperCase()}</TextFieldLight>
                    <View style={{marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TextField>{exercise.exerciseType.name.toUpperCase()}</TextField>
                        <TextField>{exercise.difficulty.toUpperCase()}</TextField>
                    </View>
                </View>
                <View style={styles.section}>
                    <TextField style={styles.subLabel}>DESCRIPTION</TextField>
                    <TextField style={styles.description} numberOfLines={-1}>{exercise.description}</TextField>
                </View>
                <View style={styles.section}>
                    <TextField style={styles.subLabel}>MUSCLES INCLUDED</TextField>
                    <TagInput
                        disabled={true}
                        tags={{
                            tag: "",
                            tagsArray: allMuscles
                        }}
                        deleteIconStyles={{display: 'none'}}
                        inputContainerStyle={{display: 'none'}}
                        tagsViewStyle={{alignItems: 'center'}}

                    />
                </View>
                <View style={styles.section}>
                    <TextField>INSTRUCTIONS</TextField>
                    <TextField>{exercise.instructions}</TextField>
                </View>
        </DetailContainer>
    );
};

ExerciseDetailScreen.navigationOptions = (navigationData) => {
    const exerciseId = navigationData.navigation.getParam('exerciseId');
    const exercise = EXERCISES.find(ex => ex.id === exerciseId);
    return {
        headerTitle: exercise.name
    };
};

const styles = StyleSheet.create({
    component: {
        backgroundColor: Colors.primary900,
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',

    },
    label: {
        fontSize: 44
    },
    subLabel: {
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    section: {
        marginTop: '15%'
    },
    description: {
        fontSize: 16
    },
    muscleText: {
        color: 'black',
        flex: 1,
        marginHorizontal: 8,
        height: 20,

    },
    muscleTextContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 4,
        borderRadius: 4
    }
});

export default ExerciseDetailScreen;
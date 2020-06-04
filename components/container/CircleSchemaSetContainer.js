import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EXERCISES} from "../../data/dummy-data";
import TextField from "../field/TextField";

const CircleSchemaSetContainer = props => {
    const {timeWork, timeRest, exerciseIds} = props;
    const exercises = exerciseIds.map(id => EXERCISES.find(exercise => exercise.id === id));
    return (
        <View>

        </View>
    );
};

const ExerciseSchemaCell = props => {
    const {exercise, timeWork} = props;
    return (
        <View>
            <TextField>{timeWork + ' sec'}</TextField>
            <TextField>{exercise.name}</TextField>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CircleSchemaSetContainer;
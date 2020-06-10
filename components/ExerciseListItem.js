import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import TextField from "./field/TextField";
import ListItem from "./ListItem";

const ExerciseListItem = props => {
    const {name, muscles, exerciseType} = props.exercise;
    let iconName = 'dumbbell';
    let color = Colors.primary100;
    if (exerciseType.name === 'Endurance') {
        iconName = 'running';
        color = Colors.secondary100
    } else if (exerciseType.name === 'Flexibility') {
        iconName = 'praying-hands';
        color = Colors.red100;
    }
    let musclesAll = muscles.map(muscle => muscle.muscleName).join(', ');
    return (
        <ListItem
            backgroundColor={color}
            icon={iconName}
            onPress={props.onPress}>
            <View style={styles.labelRow}>
                <TextField style={styles.label}>{name}</TextField>
            </View>
            <View style={styles.detailRow}>
                <TextField style={styles.textField}>Muscles: {musclesAll}</TextField>
            </View>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        zIndex: 2,
    },
    textField: {
        color: 'black'
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});

export default ExerciseListItem;
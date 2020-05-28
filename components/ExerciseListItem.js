import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Colors from '../constants/colors';
import TextField from "./field/TextField";

const ExerciseListItem = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    const {muscles, exerciseType} = props.exercise;

    let iconName = 'dumbbell';
    let color = Colors.primary200;
    if (exerciseType.name === 'Endurance') {
        iconName = 'running';
        color = Colors.primary500
    } else if (exerciseType.name === 'Flexibility') {
        iconName = 'praying-hands';
        color = Colors.primary700;
    }
    let musclesAll = muscles.map(muscle => muscle.muscleName).join(', ');

    return (
        <View style={{...styles.component, ...{backgroundColor: color}}}>
            <TouchableComponent onPress={props.onPressExercise}>
                <View style={styles.labelRow}>
                    <TextField style={styles.label}>{props.exercise.name}</TextField>
                </View>
                <View style={styles.detailRow}>
                    <TextField style={styles.textField}>Muscles: {musclesAll}</TextField>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderRadius: 10
    },
    icon: {
        zIndex: 1,
        marginHorizontal: 12,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        color: 'black',
        fontSize: 24,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: 'center',
        zIndex: 2,
    },
    textField: {
        color: 'black'
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 5
    }
});

export default ExerciseListItem;
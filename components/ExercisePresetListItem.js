import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextField from "./field/TextField";
import ListItem from "./ListItem";
import Colors from "../constants/colors";

const ExercisePresetListItem = props => {
    const {label, presetType, difficulty} = props.exercisePreset;
    let iconName = 'dice-one';
    let color = Colors.primary100;
    if (presetType === 'SUPER_SET') {
        iconName = 'dice-two';
        color = Colors.secondary100
    } else if (presetType === 'CIRCLE') {
        iconName = 'circle';
        color = Colors.red100;
    }
    return (
        <ListItem
            backgroundColor={color}
            icon={iconName}
            onPress={props.onPress}>
            <View>
                <TextField style={{...styles.text, ...styles.textLabel}}>{label}</TextField>
                <TextField style={styles.text}>{presetType}</TextField>
            </View>
            <View>
                <TextField style={styles.text}>DIFFICULTY: {difficulty}</TextField>
            </View>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        width: '100%',
        marginVertical: 10,

        paddingHorizontal: 5,
        backgroundColor: '#ccc',
        borderRadius: 10
    },
    textLabel: {
        fontSize: 20
    },
    text: {
        color: 'black'
    }
});

export default ExercisePresetListItem;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListItem from "./ListItem";
import TextField from "./field/TextField";
import Colors from "../constants/colors";

const DailyWorkoutListItem = props => {
    const {name, description, note} = props.dailyWorkout;

    return (
        <ListItem
            backgroundColor={Colors.gray100}
            onPress={props.onPress}>
            <View>
                <TextField style={{...styles.text, ...styles.textLabel}}>{name}</TextField>
                <TextField style={styles.text}>{description}</TextField>
            </View>
            <View>
                <TextField style={styles.text}>NOTE: {note}</TextField>
            </View>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    textLabel: {
        fontSize: 20
    },
    text: {
        color: 'black'
    }
});

export default DailyWorkoutListItem;
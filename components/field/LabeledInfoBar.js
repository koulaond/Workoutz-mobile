import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextField from "./TextField";
import moment from 'moment';
import TextFieldLight from "./TextFieldLight";
import Colors from '../../constants/colors';


const LabeledInfoBar = props => {

    return (
        <View style={{...styles.component, ...props.style}}>
            <TextField style={styles.label}>{props.label}</TextField>
            <TextFieldLight style={styles.date}>{props.value}</TextFieldLight>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
    },
    label: {
        fontSize: 12
    },
    date: {
        fontSize: 28
    }
});

export default LabeledInfoBar;
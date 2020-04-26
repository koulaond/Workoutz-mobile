import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import TextField from "./TextField";
import TextFieldLight from "./TextFieldLight";

const DashbordSimpleField = props => {
    const {label = 'N/A', value = 'N/A'} = props;

    return (
        <View style={styles.component}>
            <TextField style={styles.label}>{label}</TextField>
            <TextFieldLight style={styles.value}>{value}</TextFieldLight>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        alignItems: 'center',
        width: Dimensions.get('window').width / 3
    },
    label: {fontSize: 12},
    value: {
        fontSize: 55,
        lineHeight: 70
    },
    valueAndroid: {
        fontFamily: 'sans-serif-light'
    }
});

export default DashbordSimpleField;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextField from "./TextField";
import Colors from '../../constants/colors';

const UnderlinedLabeledField = props => {
    const {label, value} = props;
    return (
        <View style={styles.component}>
            <TextField style={{flex: 1}}>{label}</TextField>
            <TextField>{value}</TextField>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        width: '80%',
        marginBottom: 22,
        borderColor: Colors.gray100,
        justifyContent: 'space-between'
    }
});

export default UnderlinedLabeledField;
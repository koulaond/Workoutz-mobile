import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextField from "./field/TextField";
import DetailContainerSection from "./container/DetailContainerSection";

const IncludeIn = props => {
    const {value, label, viewMethod} = props;
    return (
        <View style={styles.component}>
            <TextField>{value} {value === 1 ? label : label + 's'}</TextField>
            <TouchableOpacity onPress={viewMethod}>
                <View>
                    <TextField>VIEW</TextField>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    }
});

export default IncludeIn;
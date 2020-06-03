import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextField from "../field/TextField";

const DetailContainerSection = props => {
    return (
        <View style={{...styles.section, ...props.style, ...props.style}}>
            <View>
                <TextField style={styles.sectionLabel}>{props.label.toUpperCase()}</TextField>
            </View>
            <View style={styles.content}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        alignItems: 'center',
        width: '100%',
        paddingTop: 40
    },
    content: {
        marginTop: 12,
        width: '100%',
        alignItems: 'center'
    },
    sectionLabel: {
        fontSize: 16,
        textAlign: 'center'
    }
});

export default DetailContainerSection;
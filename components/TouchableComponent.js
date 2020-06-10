import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

const TouchableComponent = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    return (
        <TouchableComponent style={props.style} onPress={props.onPress}>
            {props.children}
        </TouchableComponent>
    );
};


export default TouchableComponent;
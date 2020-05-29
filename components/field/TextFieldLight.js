import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import TextField from "./TextField";
import Colors from "../../constants/colors";

const TextFieldLight = props => {
    return (
        <TextField
            numberOfLines={props.numberOfLines}
            style={
                {
                    ...Platform.select({
                        ios: styles.customizedTextIOS,
                        android: styles.customizedTextAndroid
                    }),
                    ...props.style
                }
            }>
            {props.children}
        </TextField>
    );
};

const styles = StyleSheet.create({
    customizedTextIOS: {
        fontFamily: 'AvenirNext-UltraLight'
    },
    customizedTextAndroid: {
        fontFamily: 'sans-serif-light'
    }
});

export default TextFieldLight;
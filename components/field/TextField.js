import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/colors';

const TextField = props => {
    return (
        <Text
            numberOfLines={props.numberOfLines || 1}
            style={
                {
                    ...styles.customizedTextCommon,
                    ...Platform.select({
                        ios: styles.customizedTextIOS,
                        android: styles.customizedTextAndroid
                    }),
                    ...props.style
                }
            }>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    customizedTextIOS: {
        fontFamily: 'Avenir-Light'
    },
    customizedTextCommon: {
        color: Colors.gray100
    },
    customizedTextAndroid: {
        fontFamily: 'sans-serif'
    }
});

export default TextField;
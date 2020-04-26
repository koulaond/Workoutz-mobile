import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import Colors from '../constants/colors'

const MainMenuButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <ButtonComponent onPress={props.onPress}>
            <View style={{...styles.button, ...props.buttonStyle}}>
                <Text style={{...styles.text, ...props.buttonTextStyle}}>{props.children}</Text>
            </View>
        </ButtonComponent>
    );
};

const styles = StyleSheet.create({
    button: {
        borderColor: Colors.edge,
        borderWidth: 2,
        paddingVertical: 18,
        paddingHorizontal:25,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        marginVertical: 22
    },
    text: {
        color: Colors.fontPrimary,
        fontSize: 30,
        textAlign: 'center'
    }
});

export default MainMenuButton;
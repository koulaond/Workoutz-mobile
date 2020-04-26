import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Dimensions, Platform} from 'react-native';
import Colors from '../../constants/colors';

const ButtonField = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <ButtonComponent>
            <View style={{...styles.button,  ...props.style}}>
                <Text
                    style={
                        {
                            ...styles.text,
                            ...Platform.select({
                                ios: styles.textIOS,
                                android: styles.textAlign
                            })
                        }
                    }
                >{props.children}</Text>
            </View>
        </ButtonComponent>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.buttonMain,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height / 25,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.background,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontSize: 18
    },
    textAndroid: {
        fontFamily: 'sans-serif'
    },
    textIOS: {
        fontFamily: 'Avenir-Light'
    }
});

export default ButtonField;
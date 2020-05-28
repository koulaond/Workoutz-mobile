import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import TextField from "./field/TextField";

const ExercisePresetListItem = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const data = props.exercisePreset;
    return (
        <View style={styles.component}>
            <TouchableComponent onPress={props.onPressPreset}>
                <View style={styles.component}>
                    <View>
                        <TextField style={{...styles.text, ...styles.textLabel}}>{data.label}</TextField>
                        <TextField style={styles.text}>{data.presetType}</TextField>
                    </View>
                    <View>
                        <TextField style={styles.text}>DIFFICULTY: {data.difficulty}</TextField>
                    </View>
                    <View></View>
                </View>
            </TouchableComponent>
        </View>
    );
};



const styles = StyleSheet.create({
    component: {
        flex: 1,
        width: '100%',
        marginVertical: 10,

        paddingHorizontal: 5,
        backgroundColor: '#ccc',
        borderRadius: 10
    },
    textLabel: {
        fontSize: 20
    },
    text: {
        color: 'black'
    }
});

export default ExercisePresetListItem;
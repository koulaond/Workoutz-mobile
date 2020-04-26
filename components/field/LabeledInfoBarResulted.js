import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextField from "./TextField";
import LabeledInfoBar from "./LabeledInfoBar";
import TextFieldLight from "./TextFieldLight";
import Colors from "../../constants/colors";

const LabeledInfoBarResulted = props => {
    const complete = props.complete;
    const completeField = complete
        ? <TextField style={styles.resultComplete}>Finished</TextField>
        : <TextField style={styles.resultIncomplete}>Not Finished</TextField>;

    return (
        <View style={{...styles.component, ...props.style}}>
            <LabeledInfoBar label={props.label} value={props.value}/>
            {completeField}
        </View>
    );
};

const styles = StyleSheet.create({
    component: {

    },
    resultComplete: {
        color: Colors.fontSuccess,
        fontSize: 12
    },
    resultIncomplete: {
        color: Colors.fontFail,
        fontSize: 12
    }
});

export default LabeledInfoBarResulted;
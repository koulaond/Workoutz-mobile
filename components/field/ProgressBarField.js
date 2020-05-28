import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomizedProgressBar from "./CustomizedProgressBar";
import TextField from "./TextField";
import Colors from '../../constants/colors'

const ProgressBarField = props => {
    const {
        label,
        barHeightPercentage,
        barColor,
        textColor = Colors.gray100,
        value,
        valueMax,
        showRatio = true
    } = props;
    let ratio = null;
    if (showRatio) {
       ratio = <TextField style={styles.text}>{value} / {valueMax}</TextField>
    }
    return (
        <View style={{...styles.component, ...props.style}}>
            <View style={styles.labelRow}>
                <TextField style={styles.text}>{label}</TextField>
                {ratio}
            </View>
            <View style={styles.progressBarContainer}>
                <CustomizedProgressBar
                    heightPercentage={barHeightPercentage}
                    color={barColor}
                    value={value}
                    valueMax={valueMax}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {

    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14
    },
    progressBarContainer:{
        width: '100%'
    }
});

export default ProgressBarField;
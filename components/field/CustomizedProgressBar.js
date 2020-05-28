import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import Colors from "../../constants/colors";

const CustomizedProgressBar = props => {
    const {heightPercentage = 2, color = Colors.gray100, value, valueMax} = props;
    const heightFactor = heightPercentage / 100 ;
    const progressPerc = value / valueMax;
    return (
        <Progress.Bar
            progress={progressPerc}
            width={null}
            height={Dimensions.get('window').height * heightFactor}
            color={color}
            animated={true}
        />
    );
};

const styles = StyleSheet.create({});

export default CustomizedProgressBar;
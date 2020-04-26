import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LabeledInfoBarResulted from "../LabeledInfoBarResulted";
import moment from "moment";

const LastWorkoutInfoField = props => {
    const formatted = moment(props.time).format('dddd, MMM Do');
    return (
       <LabeledInfoBarResulted
           label={props.label}
           value={formatted}
           complete={props.complete}
       />
    );
};

const styles = StyleSheet.create({});

export default LastWorkoutInfoField;
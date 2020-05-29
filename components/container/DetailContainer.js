import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Colors from "../../constants/colors";

const DetailContainer = props => {
    return (
        <ScrollView style={{backgroundColor: Colors.primary900}}>
            <View style={styles.component}>
                {props.children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
    }
});

export default DetailContainer;
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
        justifyContent: 'center',
        paddingTop: '10%',
        paddingHorizontal: '3%'
    }
});

export default DetailContainer;
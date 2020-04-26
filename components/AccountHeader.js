import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Colors from '../constants/colors'
import TextField from "./field/TextField";

const AccountHeader = props => {
    const {userName, firstName, lastName} = props;
    const {weight, height} = props.details;


    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/avatar.jpeg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.accountDetailsContainer}>
                <View>
                    <TextField style={styles.nickName}>{userName}</TextField>
                </View>
                <View>
                    <TextField style={styles.firstName}>{firstName} {lastName}</TextField>
                    <View style={{flexDirection: 'row'}}>
                        <TextField style={styles.text}>Weight: {weight.value} {weight.unit}</TextField>
                        <TextField style={styles.text}>Height: {height.value} {height.unit}</TextField>
                    </View>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        borderColor: Colors.fontPrimary,
        borderBottomWidth: 1

    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.2 / 2,
        borderWidth: 1.5,
        borderColor: 'white',
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        overflow: 'hidden',
        margin: Dimensions.get('window').height / 80
    },
    accountDetailsContainer: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    nickName: {
        color: Colors.fontPrimary,
        fontSize: 24
    },
    firstName: {
        color: Colors.fontPrimary,
        fontSize: 14,
    },
    text: {
        color: Colors.fontPrimary,
        fontSize: 12,
        marginRight: 6
    }
});

export default AccountHeader;
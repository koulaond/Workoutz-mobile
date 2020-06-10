import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import TouchableComponent from "./TouchableComponent";
import {FontAwesome5} from '@expo/vector-icons';

const ListItem = props => {
    const iconColor = props.iconColor || Colors.primary800;
    const backgroundColor = props.backgroundColor || Colors.gray100;

    return (
        <View style={{...styles.component, ...{backgroundColor: backgroundColor}}}>
            <TouchableComponent onPress={props.onPress}>
                <View style={styles.content}>
                    <View style={styles.description}>
                        {props.children}
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name={props.icon} size={20} style={{color: iconColor}}/>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: Colors.primary100,
        borderRadius: 10
    },
    content: {
        flexDirection: 'row',
        marginLeft: 10,
        marginVertical: 5
    },
    description: {
        flex: 1
    },
    iconContainer: {
        width: 40,
        justifyContent: 'center'
    }

});

export default ListItem;
import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

const ItemList = props => {
    return (
        <View style={styles.component}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={props.renderItemFunction}
                style={styles.flatList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        width: '100%',
        paddingVertical: 20
    }
});

export default ItemList;
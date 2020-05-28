import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EXERCISES} from "../data/dummy-data";
import ItemList from "../components/ItemList";
import ExerciseListItem from "../components/ExerciseListItem";
import Colors from '../constants/colors';

const ExercisesScreen = props => {
    const renderExercise = itemData => {
        return <ExerciseListItem
            exercise={itemData.item}
            onPressExercise={() => {
                props.navigation.navigate(
                    {
                        routeName: 'ExerciseDetail',
                        params: {
                            exerciseId: itemData.item.id
                        }
                    }
                );
            }
            }
        />;
    };

    return (
        <View style={styles.component}>
            <ItemList
                listData={EXERCISES}
                renderItemFunction={renderExercise}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        backgroundColor: Colors.primary900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ExercisesScreen;
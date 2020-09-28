import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useStore} from "react-redux";
import ItemList from "../components/ItemList";
import Colors from '../constants/colors';
import ExerciseListItem from "../components/ExerciseListItem";
import {changeActualExercise} from "../store/actions/exercises";

const ExercisesScreen = props => {
    const store = useStore();
    const exercises = useSelector(state => state.exercises.allExercises);

    const renderExercise = itemData => {
        return <ExerciseListItem
            exercise={itemData.item}
            onPress={() => {
                store.dispatch(changeActualExercise(itemData.item.id));
                props.navigation.navigate(
                    {
                        routeName: 'ExerciseDetail',
                        params: {
                            exerciseLabel: itemData.item.label
                        }
                    }
                );
            }}
        />
    };

    return (
        <View style={styles.component}>
            <ItemList
                listData={exercises}
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
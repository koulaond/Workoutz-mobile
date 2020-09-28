import React from 'react';
import {View, StyleSheet} from 'react-native';
import ItemList from "../components/ItemList";
import DailyWorkoutListItem from "../components/DailyWorkoutListItem";
import Colors from "../constants/colors";
import {useSelector, useStore} from "react-redux";
import {changeActualWorkout} from "../store/actions/dailyWorkouts";

const DailyWorkoutsScreen = props => {
    const store = useStore();
    const dailyWorkouts = useSelector(state => state.dailyWorkouts.allDailyWorkouts);

    const renderDailyWorkout = itemData => {
        return <DailyWorkoutListItem
            dailyWorkout={itemData.item}
            onPress={() => {
                store.dispatch(changeActualWorkout(itemData.item.id));
                props.navigation.navigate(
                    {
                        routeName: 'DailyWorkoutDetail',
                        params: {
                            workoutLabel: itemData.item.name
                        }
                    }
                );
            }}
        />;
    };
    return (
        <View style={styles.component}>
            <ItemList
                listData={dailyWorkouts}
                renderItemFunction={renderDailyWorkout}/>
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

export default DailyWorkoutsScreen;
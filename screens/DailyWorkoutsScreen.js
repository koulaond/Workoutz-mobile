import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemList from "../components/ItemList";
import DailyWorkoutListItem from "../components/DailyWorkoutListItem";
import Colors from "../constants/colors";
import {useSelector} from "react-redux";

const DailyWorkoutsScreen = props => {

    const dailyWorkouts = useSelector(state => state.dailyWorkouts.allDailyWorkouts);

    const renderDailyWorkout = itemData => {
        return <DailyWorkoutListItem
            dailyWorkout={itemData.item}
            onPress={() => {
                props.navigation.navigate(
                    {
                        routeName: 'DailyWorkoutDetail',
                        params: {
                            workoutId: itemData.item.id
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
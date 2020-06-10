import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemList from "../components/ItemList";
import {DAILY_WORKOUTS} from "../data/dummy-data";
import DailyWorkoutListItem from "../components/DailyWorkoutListItem";
import Colors from "../constants/colors";

const DailyWorkoutsScreen = props => {
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
                listData={DAILY_WORKOUTS}
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
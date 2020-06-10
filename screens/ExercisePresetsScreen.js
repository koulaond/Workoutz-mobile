import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ItemList from "../components/ItemList";
import {EXERCISE_PRESETS} from "../data/dummy-data";
import ExercisePresetListItem from "../components/ExercisePresetListItem";
import Colors from "../constants/colors";

const ExercisePresetsScreen = props => {

    const renderExercisePreset = itemData => {
        return <ExercisePresetListItem
            exercisePreset={itemData.item}
            onPress={() => {
                props.navigation.navigate(
                    {
                        routeName: 'ExercisePresetDetail',
                        params: {
                            exercisePresetId: itemData.item.id
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
                listData={EXERCISE_PRESETS}
                renderItemFunction={renderExercisePreset}
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

export default ExercisePresetsScreen;
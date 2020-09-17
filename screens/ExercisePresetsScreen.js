import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ItemList from "../components/ItemList";
import {useSelector, useStore} from "react-redux";
import ExercisePresetListItem from "../components/ExercisePresetListItem";
import Colors from "../constants/colors";
import {changeActualPreset} from "../store/actions/exercisePresets";

const ExercisePresetsScreen = props => {
    const store = useStore();
    const exercisePresets = useSelector(state => state.exercisePresets.allExercisePresets)

    const renderExercisePreset = itemData => {
        return <ExercisePresetListItem
            exercisePreset={itemData.item}
            onPress={() => {
                store.dispatch(changeActualPreset(itemData.item.id));
                props.navigation.navigate(
                    {
                        routeName: 'ExercisePresetDetail',
                        params: {
                            exercisePresetLabel: itemData.item.label
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
                listData={exercisePresets}
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
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {EXERCISES} from "../../data/dummy-data";
import TextField from "../field/TextField";
import Colors from '../../constants/colors'

const CircleSchemaSetContainer = props => {
    const {timeWork, timeRest, exerciseIds, setNumber, navigation} = props;
    const exercises = exerciseIds.map(id => EXERCISES.find(exercise => exercise.id === id));
    const exerciseCells = exercises.map((exercise, index) => {
        return <ExerciseSchemaCell key={index}
                                   exerciseName={exercise.name}
                                   time={timeWork}
                                   order={index + 1}
                                   navigationMethod={() => navigation.navigate(
                                       {
                                           routeName: 'ExerciseDetail',
                                           params: {
                                               exerciseId: exercise.id
                                           }
                                       }
                                   )}
        />;
    })
        .reduce((prev, curr) => {
            const rest = <ExerciseSchemaCell key={'REST_' + prev} exerciseName="REST" time={timeRest} isRest={true}/>;
            return [prev, rest, curr];
        });
    return (
        <View style={styles.container} key={setNumber}>
            <TextField style={{textAlign: 'center', fontSize: 16}}>SET {setNumber}</TextField>
            {exerciseCells}
        </View>
    );
};
const ExerciseSchemaCell = props => {
    const {exerciseName, time, isRest, order} = props;
    const style = isRest ? styles.exerciseSchemaCellRest : styles.exerciseSchemaCell;
    const styleText = isRest ? styles.textRest : styles.text;
    let orderLabel = null;
    if (order >= 1) {
        orderLabel = (
            <View style={{width: 20}}>
                <TextField style={{color: Colors.primary900, fontSize: 20}}>{order}</TextField>
            </View>
        );
    }
    return (
        <TouchableOpacity onPress={props.navigationMethod}>
            <View style={style}>
                {orderLabel}
                <View style={isRest ? styles.cellLabelRest : styles.cellLabel}>
                    <TextField style={{...styleText, ...{fontSize: isRest ? 8 : 13}}}>{exerciseName}</TextField>
                    <TextField style={{...styleText, ...{fontSize: isRest ? 8 : 10}}}>{time + ' sec'}</TextField>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        marginHorizontal: 3,
        backgroundColor: Colors.primary700,
        borderRadius: 8
    },
    exerciseSchemaCell: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.gray100,
        borderRadius: 8,
        marginVertical: 7,
        paddingHorizontal: 5,
        paddingVertical: 4
    },
    exerciseSchemaCellRest: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.primary900,
        textAlign: 'center'
    },
    textRest: {
        color: Colors.gray100,
        textAlign: 'center',
        marginHorizontal: 2
    },
    cellLabel: {
        width: 70
    },
    cellLabelRest: {
        flexDirection: 'row'
    }
});

export default CircleSchemaSetContainer;
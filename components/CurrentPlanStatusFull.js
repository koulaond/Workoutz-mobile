import React from 'react';
import {View, StyleSheet} from 'react-native';
import CurrentPlanStatusExtended from "./CurrentPlanStatusExtended";
import TextField from "./field/TextField";
import ProgressBarField from "./field/ProgressBarField";

const CurrentPlanStatusFull = props => {
    const data = props.data;
    let phasesProgress = null;
    if (data.phasesTotal > 1) {
        phasesProgress =
            <ProgressBarField
                label='FINISHED PHASES'
                value={data.phasesFinished}
                valueMax={data.phasesTotal}
                style={styles.progressDetailsItem}
                barHeightPercentage={1}
            />
    }
    return (
        <View style={styles.component}>
            <CurrentPlanStatusExtended data={data}/>
            <View style={styles.progressDetails}>
                <TextField style={styles.labelText}>PROGRESS DETAILS</TextField>
                <ProgressBarField
                    label='FINISHED WEEKS'
                    value={data.weeksFinished}
                    valueMax={data.weeksTotal}
                    style={styles.progressDetailsItem}
                    barHeightPercentage={1}
                />
                <ProgressBarField
                    label='FINISHED WORKOUTS'
                    value={data.workoutsFinished}
                    valueMax={data.workoutsTotal}
                    style={styles.progressDetailsItem}
                    barHeightPercentage={1}
                />
                {phasesProgress}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelText: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 10
    },
    component: {
        alignItems: 'center',
        width: '100%'
    },
    progressDetails: {
        width: '80%',
        marginTop: 15
    },
    progressDetailsItem: {
        marginVertical: 10
    }
});

export default CurrentPlanStatusFull;
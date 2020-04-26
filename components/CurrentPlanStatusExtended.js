import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CurrentPlanStatus from "./CurrentPlanStatus";
import DashbordSimpleField from "./field/DashbordSimpleField";

const CurrentPlanStatusExtended = props => {
    let data = props.data;
    let weeksItem = <DashbordSimpleField label='WEEKS' value={data.weeksTotal}/>;
    let daysPerWeekItem = <DashbordSimpleField label='DAYS PER W.' value={data.daysPerWeek}/>
    let workoutsItem = <DashbordSimpleField label='WORKOUTS' value={data.workoutsTotal}/>
    let content;
    if (data.phasesTotal > 1) {
        content = (
            <View style={styles.componentExtension}>
                <View style={styles.statisticsRow}>
                    {weeksItem}
                    {daysPerWeekItem}
                </View>
                <View style={styles.statisticsRow}>
                    {workoutsItem}
                    <DashbordSimpleField label='PHASES' value={data.phasesTotal}/>
                </View>
            </View>
        );
    } else {
        content = (
            <View style={styles.componentExtension}>
                <View style={styles.statisticsRow}>
                    {weeksItem}
                    {daysPerWeekItem}
                    {workoutsItem}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.component}>
            <CurrentPlanStatus data={data}/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    statisticsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 3
    },
    component: {
        width: '100%',
    },
    componentExtension: {
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 5
    }
});

export default CurrentPlanStatusExtended;
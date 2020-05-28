import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CurrentPlanDashboard {

    constructor(id,
                planName,
                weeksTotal,
                weeksFinished,
                workoutsTotal,
                workoutsFinished,
                daysPerWeek,
                phasesTotal,
                phasesFinished) {
        this.id = id;
        this.planName = planName;
        this.weeksTotal = weeksTotal;
        this.weeksFinished = weeksFinished;
        this.workoutsTotal = workoutsTotal;
        this.workoutsFinished = workoutsFinished;
        this.daysPerWeek = daysPerWeek;
        this.phasesTotal = phasesTotal;
        this.phasesFinished = phasesFinished;
    }
}


export default CurrentPlanDashboard;
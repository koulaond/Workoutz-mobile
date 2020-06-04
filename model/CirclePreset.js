import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CirclePreset  {
    constructor(id, label, description, difficulty, cycles, sets, timePrepare, timeWork, timeRest, timeBetweenSets, timeCoolDown, schema) {
        this.cycles = cycles;
        this.sets = sets;
        this.timePrepare = timePrepare;
        this.timeWork = timeWork;
        this.timeRest = timeRest;
        this.timeBetweenSets = timeBetweenSets;
        this.timeCoolDown = timeCoolDown;
        this.difficulty = difficulty;
        this.id = id;
        this.presetType = 'CIRCLE';
        this.label = label;
        this.description = description;
        this.schema = schema
    }
}

export default CirclePreset;
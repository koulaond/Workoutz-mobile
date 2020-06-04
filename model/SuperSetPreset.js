import React from 'react';

class SuperSetPreset {

    constructor(id, label, description, difficulty, exerciseIds, series, repsPerSeries) {
        this.difficulty = difficulty;
        this.id = id;
        this.presetType = 'SUPER_SET';
        this.label = label;
        this.description = description;
        this.exerciseIds = exerciseIds;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
    }
}

export default SuperSetPreset;
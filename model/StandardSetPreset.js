import React from 'react';

class StandardSetPreset {

    constructor(id, label, description,difficulty, exerciseId, series, repsPerSeries) {
        this.difficulty = difficulty;
        this.id = id;
        this.presetType = 'STANDARD_SET';
        this.label = label;
        this.description = description;
        this.exerciseId = exerciseId;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
    }
}

export default StandardSetPreset;
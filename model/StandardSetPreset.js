import React from 'react';

class StandardSetPreset {

    constructor(id, label, description,difficulty, exercise, series, repsPerSeries) {
        this.difficulty = difficulty;
        this.id = id;
        this.presetType = 'STANDARD_SET';
        this.label = label;
        this.description = description;
        this.exercise = exercise;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
    }
}

export default StandardSetPreset;
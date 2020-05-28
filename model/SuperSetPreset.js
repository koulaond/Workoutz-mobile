import React from 'react';

class SuperSetPreset {

    constructor(id, label, description, difficulty, exercises, series, repsPerSeries) {
        this.difficulty = difficulty;
        this.id = id;
        this.presetType = 'SUPER_SET';
        this.label = label;
        this.description = description;
        this.exercises = exercises;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
    }
}

export default SuperSetPreset;
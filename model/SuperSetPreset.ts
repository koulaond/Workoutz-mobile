import Difficulty from "./Difficulty";
import PresetType from "./PresetType";

class SuperSetPreset {
    id: string;
    label: string;
    description: string;
    difficulty: Difficulty;
    exerciseIds: string[];
    series: number[];
    repsPerSeries: number[][];
    presetType: PresetType;

    constructor(id: string,
                label: string,
                description: string,
                difficulty: Difficulty,
                exerciseIds: string[],
                series: number[],
                repsPerSeries: number[][]) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.difficulty = difficulty;
        this.exerciseIds = exerciseIds;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
        this.presetType = PresetType.SUPER_SET;
    }
}

export default SuperSetPreset;
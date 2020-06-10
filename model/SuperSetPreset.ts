import Difficulty from "./Difficulty";

class SuperSetPreset {
    id: string;
    label: string;
    description: string;
    difficulty: Difficulty;
    exerciseIds: string[];
    series: number[];
    repsPerSeries: number[][];

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
    }
}

export default SuperSetPreset;
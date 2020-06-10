import Difficulty from "./Difficulty";

class StandardSetPreset {
     id: string;
     label: string;
     description: string;
     difficulty: Difficulty;
     exerciseId: number;
     series: number;
     repsPerSeries: number[];

    constructor(id: string, 
                label: string, 
                description: string,
                difficulty: Difficulty, 
                exerciseId: number, 
                series: number,
                repsPerSeries: number[]) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.difficulty = difficulty;
        this.exerciseId = exerciseId;
        this.series = series;
        this.repsPerSeries = repsPerSeries;
    }
}

export default StandardSetPreset;
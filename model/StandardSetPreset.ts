import Difficulty from "./Difficulty";
import PresetType from "./PresetType";

class StandardSetPreset {
     id: string;
     label: string;
     description: string;
     difficulty: Difficulty;
     exerciseId: number;
     series: number;
     repsPerSeries: number[];
     presetType: PresetType;

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
        this.presetType = PresetType.STANDARD_SET;
    }
}

export default StandardSetPreset;
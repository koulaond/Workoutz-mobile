import Difficulty from "./Difficulty";
import PresetType from "./PresetType";

class CirclePreset {
    id: string;
    label: string;
    description: string;
    difficulty: Difficulty;
    cycles: number;
    sets: number;
    presetType: PresetType;
    timePrepare: number;
    timeWork: number;
    timeRest: number;
    timeBetweenSets: number;
    timeCoolDown: number;
    schema: object;

    constructor(id: string,
                label: string,
                description: string,
                difficulty: Difficulty,
                cycles: number,
                sets: number,
                timePrepare: number,
                timeWork: number,
                timeRest: number,
                timeBetweenSets: number,
                timeCoolDown: number,
                schema: object) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.difficulty = difficulty;
        this.cycles = cycles;
        this.sets = sets;
        this.timePrepare = timePrepare;
        this.timeWork = timeWork;
        this.timeRest = timeRest;
        this.timeBetweenSets = timeBetweenSets;
        this.timeCoolDown = timeCoolDown;
        this.schema = schema;
        this.presetType = PresetType.CIRCLE;
    }
}

export default CirclePreset;
import DailyWorkoutExerciseUnit from "./DailyWorkoutExerciseUnit";

class DailyWorkout {
    id: string;
    name: string;
    description: string;
    note: string;
    exerciseUnits: DailyWorkoutExerciseUnit[];

    constructor(id: string,
                name: string,
                description: string,
                note: string,
                exerciseUnits: DailyWorkoutExerciseUnit[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.note = note;
        this.exerciseUnits = exerciseUnits;
    }
}

export default DailyWorkout;
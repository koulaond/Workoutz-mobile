class DailyWorkoutExerciseUnit {
    orderInWorkout: number;
    exercisePresetId: string;

    constructor(orderInWorkout: number, exercisePresetId: string) {
        this.orderInWorkout = orderInWorkout;
        this.exercisePresetId = exercisePresetId;
    }
}

export default DailyWorkoutExerciseUnit;
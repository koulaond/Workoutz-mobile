import ResultValue from "./ResultValue";
import ResultUnit from "./ResultUnit";

class CircleSingleExerciseResult {
     exerciseId: string;
     resultValue: ResultValue;
     additionalResult?: number;
     additionalResultUnit?: ResultUnit;

    constructor(exerciseId: string, resultValue: ResultValue, additionalResult?: number, additionalResultUnit?: ResultUnit) {
        this.exerciseId = exerciseId;
        this.resultValue = resultValue;
        this.additionalResult = additionalResult;
        this.additionalResultUnit = additionalResultUnit;
    }
}

export default CircleSingleExerciseResult;
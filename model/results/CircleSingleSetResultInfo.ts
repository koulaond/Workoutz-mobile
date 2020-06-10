import ResultValue from "./ResultValue";
import CircleSingleExerciseResult from "./CircleSingleExerciseResult";

class CircleSingleSetResultInfo {
     resultValue: ResultValue;
     resultsPerExercise: Map<string, CircleSingleExerciseResult>;

    constructor(resultValue: ResultValue, resultsPerExercise: Map<string, CircleSingleExerciseResult>) {
        this.resultValue = resultValue;
        this.resultsPerExercise = resultsPerExercise;
    }
}
export default CircleSingleSetResultInfo;
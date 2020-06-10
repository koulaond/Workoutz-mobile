import ResultValue from "./ResultValue";
import PresetResultInfo from "./PresetResultInfo";
import TrainingInfo from "./TrainingInfo";

class ExercisePresetResult {
     id: string;
     presetId: string;
     exerciseDate: Date;
     resultValue: ResultValue;
     trainingInfo: TrainingInfo;
     presetResultInfo: PresetResultInfo;

    constructor(id: string,
                presetId: string,
                exerciseDate: Date,
                resultValue: ResultValue,
                trainingInfo: TrainingInfo,
                presetResultInfo: PresetResultInfo) {
        this.id = id;
        this.presetId = presetId;
        this.exerciseDate = exerciseDate;
        this.resultValue = resultValue;
        this.trainingInfo = trainingInfo;
        this.presetResultInfo = presetResultInfo;
    }
}

export default ExercisePresetResult;
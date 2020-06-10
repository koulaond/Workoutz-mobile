import ResultUnit from "./ResultUnit";
import PresetResultInfo from "./PresetResultInfo";

class StandardSetPresetResultInfo implements PresetResultInfo {
    resultUnit: ResultUnit;
    resultValues: number[];

    constructor(resultUnit: ResultUnit, resultValues: number[]) {
        this.resultUnit = resultUnit;
        this.resultValues = resultValues;
    }
}

export default StandardSetPresetResultInfo;
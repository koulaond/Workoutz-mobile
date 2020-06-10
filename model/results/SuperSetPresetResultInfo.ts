import PresetResultInfo from "./PresetResultInfo";
import ResultUnit from "./ResultUnit";

class SuperSetPresetResultInfo implements PresetResultInfo {
    resultUnit: ResultUnit;
    resultValues: number[][];

    constructor(resultUnit: ResultUnit, resultValues: number[][]) {
        this.resultValues = resultValues;
        this.resultUnit = resultUnit;
    }

}

export default SuperSetPresetResultInfo;
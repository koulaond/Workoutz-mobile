import PresetResultInfo from "./PresetResultInfo";
import ResultUnit from "./ResultUnit";
import CircleSingleSetResultInfo from "./CircleSingleSetResultInfo";

class CirclePresetResultInfo implements PresetResultInfo {
    resultUnit: ResultUnit;
    setResults: Map<string, CircleSingleSetResultInfo>;

    constructor(resultUnit: ResultUnit, setResults: Map<string, CircleSingleSetResultInfo>) {
        this.setResults = setResults;
        this.resultUnit = resultUnit;
    }
}

export default CirclePresetResultInfo;
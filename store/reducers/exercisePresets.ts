import {EXERCISE_PRESETS, EXERCISES} from '../../data/dummy-data';
import {CHANGE_ACTUAL_PRESET, CHANGE_CHOSEN_EXERCISE_IN_PRESET} from "../actions/exercisePresets";
const initialState = {
    allExercisePresets: EXERCISE_PRESETS,
    actualExercisePreset: {},
    actualChosenExerciseInPreset: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_ACTUAL_PRESET:
            return Object.assign({}, state,
                {
                    actualExercisePreset: state.allExercisePresets.find(preset => preset.id === action.presetId)
                }
            );
        case CHANGE_CHOSEN_EXERCISE_IN_PRESET:
            return Object.assign({}, state,
                {
                    actualChosenExerciseInPreset: EXERCISES.find(exercise => exercise.id === action.exerciseId)
                }
            );
        default:
            return state;
    }
}
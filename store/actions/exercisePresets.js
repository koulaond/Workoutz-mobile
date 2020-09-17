export const CHANGE_ACTUAL_PRESET = 'CHANGE_ACTUAL_PRESET';

export const CHANGE_CHOSEN_EXERCISE_IN_PRESET = 'CHANGE_CHOSEN_EXERCISE_IN_PRESET';

export function changeActualPreset(presetId) {
    return  {
        type: CHANGE_ACTUAL_PRESET,
        presetId
    }
}

export function changeChosenExerciseInPreset(exerciseId) {
    return  {
        type: CHANGE_CHOSEN_EXERCISE_IN_PRESET,
        exerciseId
    }
}


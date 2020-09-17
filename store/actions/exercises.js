export const CHANGE_ACTUAL_EXERCISE = 'CHANGE_ACTUAL_EXERCISE';


export function changeActualExercise(exerciseId) {
    return  {
        type: CHANGE_ACTUAL_EXERCISE,
        exerciseId
    }
}




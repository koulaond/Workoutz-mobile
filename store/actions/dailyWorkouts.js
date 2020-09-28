export const CHANGE_ACTUAL_WORKOUT = 'CHANGE_ACTUAL_WORKOUT';

export function changeActualWorkout(workoutId) {
    return  {
        type: CHANGE_ACTUAL_WORKOUT,
        workoutId
    }
}


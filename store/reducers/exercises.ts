import { EXERCISES, EXERCISE_PRESETS } from '../../data/dummy-data';
import {CHANGE_ACTUAL_EXERCISE} from "../actions/exercises";

const initialState = {
    allExercises: EXERCISES,
    actualExercise: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_ACTUAL_EXERCISE:
            return Object.assign({}, state,
                {
                    actualExercise: state.allExercises.find(exercise => exercise.id === action.exerciseId)
                }
            );
        default:
            return state;
    }
}
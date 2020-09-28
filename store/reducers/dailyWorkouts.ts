import { DAILY_WORKOUTS } from '../../data/dummy-data';
import { CHANGE_ACTUAL_WORKOUT } from '../actions/dailyWorkouts';

const initialState = {
    allDailyWorkouts: DAILY_WORKOUTS,
    actualDailyWorkout: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_ACTUAL_WORKOUT:
            return Object.assign({}, state,
                {
                    actualDailyWorkout: state.allDailyWorkouts.find(workout => workout.id === action.workoutId)
                }
            );
        default:
            return state;
    }
}
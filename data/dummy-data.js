import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import User from "../model/User";
import UserPersonalInfo from "../model/UserPersonalInfo";
import UserPhysicalInfo from "../model/UserPhysicalInfo";
import ValueWithUnit from "../model/ValueWithUnit";
import CurrentPlanDashboard from "../model/CurrentPlanDashboard";
import {exp} from "react-native-reanimated";
import ExerciseType from "../model/ExerciseType";
import StandardSetPreset from "../model/StandardSetPreset";
import SuperSetPreset from "../model/SuperSetPreset";
import Muscles from "../model/Muscles";
import Exercise from "../model/Exercise";
import CirclePreset from "../model/CirclePreset";
import DailyWorkout from "../model/DailyWorkout";
import DailyWorkoutExerciseUnit from "../model/DailyWorkoutExerciseUnit";

export const USER = new User(
    1,
    "koulas",
    new UserPersonalInfo("Ondrej", "Koula", "01/16/1992", "CZ"),
    new UserPhysicalInfo(new ValueWithUnit(85, "kg"), new ValueWithUnit(183, "cm"),
        "brown",
        "brown",
        "athlete"));

export const CURRENT_PLAN_DASHBOARD =
    new CurrentPlanDashboard('6n368n3k6hnn4kb', "Bear Routine, 6 Weeks", 6, 3, 24, 14, 4, 3, 1);

export const LAST_WORKOUT_INFO = {
    workoutId: 65356354534,
    date: 198784740,
    result: 'not_finished'
};
export const MUSCLES = [
    new Muscles(1, 'Front delt', 'Shoulders'),
    new Muscles(2, 'Rear delt', 'Shoulders'),
    new Muscles(3, 'Bicep', 'Arms'),
    new Muscles(4, 'Triceps', 'Arms'),
    new Muscles(5, 'Breast', 'Torso'),
    new Muscles(6, 'Trapeze', 'Shoulders'),
    new Muscles(7, 'Higher back', 'Back'),
    new Muscles(8, 'Lower back', 'Back'),
    new Muscles(9, 'Buttock', ' Buttock'),
    new Muscles(10, 'Hamstring', 'Legs'),
    new Muscles(11, 'Quadricep', 'Legs'),
    new Muscles(12, 'Abdominal straight', 'Abdomen'),
    new Muscles(13, 'Abdominal diagonal', 'Abdomen'),
    new Muscles(14, 'Calf high', 'Calves'),
    new Muscles(15, 'Calf low', 'Calves')
];
export const EXERCISE_TYPES = [
    new ExerciseType(1, 'Strength', 'Strength type of exercise'),
    new ExerciseType(2, 'Endurance', 'Endurance / Aerobic type of exercise'),
    new ExerciseType(3, 'Flexibility', 'Flexibility type of exercise')

];

export const EXERCISES = [
    new Exercise(1, "Bench Press", "Bench Press involves exercising all breast muscles, plus shoulder front delta muscles, triceps, upper abdominal and back muscles. It is one of the most fundamental strength and muscle exercises.", [MUSCLES[3], MUSCLES[4]], EXERCISE_TYPES[0], "high", "Here are instructions"),
    new Exercise(2, "Front Squats", "Front Squats description", [MUSCLES[10], MUSCLES[13], MUSCLES[14]], EXERCISE_TYPES[0], "medium", "Here are instructions"),
    new Exercise(3, "Pull Ups", "Pull Ups description", [MUSCLES[2], MUSCLES[6]], EXERCISE_TYPES[0], "high", "Here are instructions"),
    new Exercise(4, "Swimming", "Swimming description", [MUSCLES[6], MUSCLES[3]], EXERCISE_TYPES[1], "high", "Here are instructions"),
    new Exercise(5, "Jogging", "Jogging description", [MUSCLES[10], MUSCLES[13], MUSCLES[14]], EXERCISE_TYPES[1], "low", "Here are instructions"),
    new Exercise(6, "Burpees", "Burpees description", [MUSCLES[3], MUSCLES[4], MUSCLES[10], MUSCLES[13], MUSCLES[14], MUSCLES[9]], EXERCISE_TYPES[1], "medium", "Here are instructions"),
    new Exercise(7, "Climbing", "Climbing description", [MUSCLES[2], MUSCLES[6]], EXERCISE_TYPES[1], "high", "Here are instructions"),
    new Exercise(8, "Suzuki Stretching", "Suzuki Stretching", [MUSCLES[2], MUSCLES[6]], EXERCISE_TYPES[2], "low", "Here are instructions")
];

export const EXERCISE_PRESETS = [
    new StandardSetPreset(1, 'Bench Press 3x12', 'Standard set preset for Bench Press exercise with 3 series of 12 reps', 'high', 1, 3, [12, 10, 8]),
    new StandardSetPreset(2, 'Front Squats 4x12', 'Standard set preset for Front Squats exercise with 3 series of 12 reps', 'low', 2, 3, [12, 12, 12]),
    new StandardSetPreset(3, 'Pull Ups 3x12', 'Standard set preset for Pull Ups exercise with 3 series of 12 reps', 'medium', 3, 3, [12, 8, 6]),
    new SuperSetPreset(4, 'Bench, Squats, Wide Pull ups', 'Super set preset for Bench Press, Front Squats and Wide Pull-ups exercises with 3 series of 12 and 10 reps. This super set is of high difficulty because it consists of two advanced and complex exercises.', 'high', [1, 2, 3], 3, [[12, 10, 8], [12, 12, 12], [12, 12, 12]]),
    new SuperSetPreset(5, 'Front Squats + Pull Ups', 'Super set preset for Pull Ups exercises with 3 series of 10 and 8 reps', 'high', [2, 3], 3, [[8, 8, 8], [12, 10, 8]]),

    new CirclePreset(
        6,
        'Long Hard Tabata',
        'This is super hard tabata consisting 3 sets about 4 cycles, 45 seconds per cycle and 15 seconds for rest.',
        'high',
        4, 3, 10, 45, 15, 60, 60,
        [
            [1, 2, 3, 4],  // set 1 size fits
            [3, 1, 2, 4], // set 2 size is too long - all exercises over the length are cut
            [1, 2, 1, 2] // set 3 size is too short - missing cells stay with UNDEFINED message
        ]),

    new CirclePreset(
        7,
        'Short Tabata',
        'Tabata with shorter 20 seconds cycle time but with more intensive load.',
        'high',
        8, 2, 10, 20, 10, 30, 60,
        [
            [1, 2, 3, 4, 2, 2, 3, 4],
            [1, 2, 3, 4, 2, 2, 3, 4]
        ])
];

export const DAILY_WORKOUTS = [
    new DailyWorkout(
        1,
        "Morning Workout",
        "This is morning boost daily workout for everyday's morning.",
        "Currently without a note.",
        [
            new DailyWorkoutExerciseUnit(0, 1),
            new DailyWorkoutExerciseUnit(1, 2),
            new DailyWorkoutExerciseUnit(2, 3),
            new DailyWorkoutExerciseUnit(3, 4),
            new DailyWorkoutExerciseUnit(4, 5)
        ]
    ),
    new DailyWorkout(
        2,
        "Super Tabata Workout",
        "Workout consisted of tabata exercises only.",
        "Only tabatas",
        [
            new DailyWorkoutExerciseUnit(0, 6),
            new DailyWorkoutExerciseUnit(1, 7)
        ]
    ),
];

export const EXERCISE_PRESET_RESULTS = [

];
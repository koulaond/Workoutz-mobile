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
    new StandardSetPreset(1, 'Bench Press 3x12', 'Standard set preset for Bench Press exercise with 3 series of 12 reps', 'high', EXERCISES[0], 3, [12, 10, 8]),
    new StandardSetPreset(2, 'Front Squats 4x12', 'Standard set preset for Front Squats exercise with 4 series of 12 reps', 'low', EXERCISES[1], 4, [12, 12, 12]),
    new StandardSetPreset(3, 'Pull Ups 3x12', 'Standard set preset for Pull Ups exercise with 3 series of 12 reps', 'medium', EXERCISES[2], 3, [12, 8, 6]),
    new SuperSetPreset(4, 'Bench Press + Front Squats', 'Super set preset for Bench Press and Front Squats exercises with 3 series of 12 and 10 reps', 'high', [EXERCISES[0], EXERCISES[1]], 3, [[12, 10, 8], [12, 12, 12]]),
    new SuperSetPreset(5, 'Front Squats + Pull Ups', 'Super set preset for Pull Ups exercises with 3 series of 10 and 8 reps', 'high', [EXERCISES[1], EXERCISES[2]], 3, [[8, 8, 8], [12, 10, 8]]),
];
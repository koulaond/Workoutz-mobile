import React from 'react';
import Muscles from "./Muscles";
import ExerciseType from "./ExerciseType";
import Difficulty from "./Difficulty";

class Exercise  {
    id: string;
    name: string;
    description: string;
    muscles: Muscles[];
    exerciseType: ExerciseType;
    difficulty: Difficulty;
    instructions: string;

    constructor(id: string,
                name: string,
                description: string,
                muscles: Muscles[],
                exerciseType: ExerciseType,
                difficulty: Difficulty,
                instructions: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.muscles = muscles;
        this.exerciseType = exerciseType;
        this.difficulty = difficulty;
        this.instructions = instructions;
    }
}

export default Exercise;
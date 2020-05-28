import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Exercise  {
    constructor(id, name, description, muscles, exerciseType, difficulty, instructions) {
        this.difficulty = difficulty;
        this.instructions = instructions;
        this.id = id;
        this.name = name;
        this.description = description;
        this.muscles = muscles;
        this.exerciseType = exerciseType;
    }
}

export default Exercise;
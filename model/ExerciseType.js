import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ExerciseType {
        constructor(id, name, additionalInfo) {
            this.id = id;
            this.name = name;
            this.additionalInfo = additionalInfo;
        }
}

export default ExerciseType;
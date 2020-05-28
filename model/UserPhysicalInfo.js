import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class UserPhysicalInfo {

    constructor(weight, height, eyesColor, hairColor, bodyType) {
        this.weight = weight;
        this.height = height;
        this.eyesColor = eyesColor;
        this.hairColor = hairColor;
        this.bodyType = bodyType;
    }

}

export default UserPhysicalInfo;
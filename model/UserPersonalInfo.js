import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class UserPersonalInfo {

    constructor(firstName, lastName, birthDate, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.nationality=nationality;
    }
}

export default UserPersonalInfo;
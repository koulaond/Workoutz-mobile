import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class User {

    constructor(id,
                userName,
                personalDetails,
                physicalDetails) {
        this.id = id;
        this.userName = userName;
        this.personalDetails = personalDetails;
        this.physicalDetails = physicalDetails;
    }
}

export default User;
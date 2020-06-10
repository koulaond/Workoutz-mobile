import ValueWithUnit from "./ValueWithUnit";

class UserPhysicalInfo {
     weight: ValueWithUnit;
     height: ValueWithUnit;
     eyesColor: string;
     hairColor: string;
     bodyType: string;

    constructor(weight: ValueWithUnit, 
                height: ValueWithUnit,
                eyesColor: string, 
                hairColor: string,
                bodyType: string) {
        
        this.weight = weight;
        this.height = height;
        this.eyesColor = eyesColor;
        this.hairColor = hairColor;
        this.bodyType = bodyType;
    }
}

export default UserPhysicalInfo;
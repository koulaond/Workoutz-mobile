import UserPersonalInfo from "./UserPersonalInfo";
import UserPhysicalInfo from "./UserPhysicalInfo";

class User {
     id: string;
     userName: string;
     personalDetails: UserPersonalInfo;
     physicalDetails: UserPhysicalInfo;

    constructor(id: string,
                userName: string,
                personalDetails: UserPersonalInfo,
                physicalDetails: UserPhysicalInfo) {
        
        this.id = id;
        this.userName = userName;
        this.personalDetails = personalDetails;
        this.physicalDetails = physicalDetails;
    }
}

export default User;
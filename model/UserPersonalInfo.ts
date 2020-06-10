class UserPersonalInfo {
     firstName: string;
     lastName: string;
     birthDate: Date;
     nationality: string;

    constructor(firstName: string, lastName: string, birthDate: Date, nationality: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.nationality = nationality;
    }
}

export default UserPersonalInfo;
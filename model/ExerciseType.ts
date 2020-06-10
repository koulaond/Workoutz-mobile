class ExerciseType {
    id: string;
    name: string;
    additionalInfo: string;

    constructor(id: string, name: string, additionalInfo: string) {
        this.id = id;
        this.name = name;
        this.additionalInfo = additionalInfo;
    }
}

export default ExerciseType;
class TrainingInfo {
    trainingId: string;
    orderInTraining: number;

    constructor(trainingId: string, orderInTraining: number) {
        this.trainingId = trainingId;
        this.orderInTraining = orderInTraining;
    }
}

export default TrainingInfo;
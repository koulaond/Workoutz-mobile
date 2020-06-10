class CurrentPlanDashboard {
     id: string;
     planName: string;
     weeksTotal: number;
     weeksFinished: number;
     workoutsTotal: number;
     workoutsFinished: number;
     daysPerWeek: number;
     phasesTotal: number;
     phasesFinished: number;

    constructor(id: string,
                planName: string,
                weeksTotal: number,
                weeksFinished: number,
                workoutsTotal: number,
                workoutsFinished: number,
                daysPerWeek: number,
                phasesTotal: number,
                phasesFinished: number) {
        this.id = id;
        this.planName = planName;
        this.weeksTotal = weeksTotal;
        this.weeksFinished = weeksFinished;
        this.workoutsTotal = workoutsTotal;
        this.workoutsFinished = workoutsFinished;
        this.daysPerWeek = daysPerWeek;
        this.phasesTotal = phasesTotal;
        this.phasesFinished = phasesFinished;
    }
}

export default CurrentPlanDashboard;
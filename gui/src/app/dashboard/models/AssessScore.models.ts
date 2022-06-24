export class AssessScore {
    public season: string;
    public year: Number;
    public value: Number;   
}

export class AssessSubject {
    public subject: string;
    public scores: AssessScore[];
}
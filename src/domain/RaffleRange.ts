export class RaffleRange {
    private readonly min: number;
    private readonly max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
        this.ensureValidRange();
    }

    private ensureValidRange(): void {
        if (this.min > this.max) {
            throw new Error("O número inicial não pode ser maior que o final.");
        }
    }

    public getIntervalSize(): number {
        return this.max - this.min + 1;
    }

    public generateRandomWithin(): number {
        return Math.floor(Math.random() * this.getIntervalSize()) + this.min;
    }
}
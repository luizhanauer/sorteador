import { RaffleRange } from './RaffleRange';

export class RaffleDraw {
    private readonly range: RaffleRange;
    private readonly quantity: number;

    constructor(range: RaffleRange, quantity: number) {
        this.range = range;
        this.quantity = quantity;
        this.ensureValidQuantity();
    }

    private ensureValidQuantity(): void {
        if (this.quantity > this.range.getIntervalSize()) {
            throw new Error("A quantidade de números não pode ser maior que o intervalo disponível.");
        }
    }

    public execute(): number[] {
        const drawnNumbers = new Set<number>();

        while (drawnNumbers.size < this.quantity) {
            drawnNumbers.add(this.range.generateRandomWithin());
        }

        return Array.from(drawnNumbers);
    }
}
import { describe, it, expect } from 'vitest';
import { RaffleRange } from './RaffleRange';
import { RaffleDraw } from './RaffleDraw';

describe('RaffleDraw', () => {
    it('deve sortear a quantidade exata de numeros solicitados', () => {
        const range = new RaffleRange(1, 10);
        const draw = new RaffleDraw(range, 3);
        const result = draw.execute();

        expect(result).toHaveLength(3);
    });

    it('deve garantir que os numeros sorteados sejam unicos', () => {
        const range = new RaffleRange(1, 5);
        const draw = new RaffleDraw(range, 5);
        const result = draw.execute();

        const uniqueResults = new Set(result);
        expect(uniqueResults.size).toBe(5);
    });

    it('deve lancar erro quando a quantidade de numeros solicitados for maior que o intervalo', () => {
        const range = new RaffleRange(1, 10);
        
        expect(() => new RaffleDraw(range, 11)).toThrowError('A quantidade de números não pode ser maior que o intervalo disponível.');
    });
});
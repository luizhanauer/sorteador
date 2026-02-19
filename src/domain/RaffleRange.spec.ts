import { describe, it, expect } from 'vitest';
import { RaffleRange } from './RaffleRange';

describe('RaffleRange', () => {
    it('deve calcular o tamanho do intervalo corretamente', () => {
        const range = new RaffleRange(1, 10);
        expect(range.getIntervalSize()).toBe(10);
    });

    it('deve calcular o tamanho do intervalo com numeros negativos', () => {
        const range = new RaffleRange(-5, 5);
        expect(range.getIntervalSize()).toBe(11);
    });

    it('deve lancar erro ao tentar criar intervalo invalido (minimo maior que maximo)', () => {
        expect(() => new RaffleRange(10, 1)).toThrowError('O número inicial não pode ser maior que o final.');
    });

    it('deve gerar um numero aleatorio dentro do intervalo estabelecido', () => {
        const range = new RaffleRange(5, 5);
        const randomValue = range.generateRandomWithin();
        
        expect(randomValue).toBe(5);
    });

    it('deve gerar valores aleatorios que respeitam os limites minimos e maximos', () => {
        const min = 1;
        const max = 3;
        const range = new RaffleRange(min, max);
        
        for (let i = 0; i < 50; i++) {
            const value = range.generateRandomWithin();
            expect(value).toBeGreaterThanOrEqual(min);
            expect(value).toBeLessThanOrEqual(max);
        }
    });
});
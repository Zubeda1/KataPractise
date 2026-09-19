import { uniqueInOrder } from './utils/uniqueInOrder';

describe('uniqueInOrder kata', () => {
    it('should remove consecutive duplicate characters from a string', () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    });

    it('should be case sensitive', () => {
        expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    });

    it('should remove consecutive duplicate numbers from an array', () => {
        expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    it('should return empty array for empty input', () => {
        expect(uniqueInOrder([])).toEqual([]);
        expect(uniqueInOrder('')).toEqual([]);
    });

    it('should return single element as-is', () => {
        expect(uniqueInOrder('A')).toEqual(['A']);
        expect(uniqueInOrder([1])).toEqual([1]);
    });
});
